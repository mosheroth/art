import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

export interface ImageSize {
  width: number;
  height: number;
}

const cache = new Map<string, ImageSize | null>();

function parsePng(buffer: Buffer): ImageSize | null {
  if (buffer.length < 24) return null;
  if (buffer.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function parseJpeg(buffer: Buffer): ImageSize | null {
  if (buffer.readUInt16BE(0) !== 0xffd8) return null;
  let offset = 2;
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);
    const isStartOfFrame =
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf);
    if (isStartOfFrame) {
      return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
    }
    offset += 2 + length;
  }
  return null;
}

/**
 * Reads the intrinsic size of an image in `public/` at build time, so images can
 * reserve their space and the page stops jumping while paintings load.
 * Some files in `public/images` are JPEGs with a `.png` name, so both are sniffed.
 */
export function imageSize(publicPath: string): ImageSize | null {
  const relative = publicPath.replace(/^\/+/, '');
  const cached = cache.get(relative);
  if (cached !== undefined) return cached;

  let size: ImageSize | null = null;
  try {
    const file = fileURLToPath(new URL(`../../public/${relative}`, import.meta.url));
    const buffer = fs.readFileSync(file);
    size = parsePng(buffer) ?? parseJpeg(buffer);
  } catch {
    size = null;
  }

  cache.set(relative, size);
  return size;
}
