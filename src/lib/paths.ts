const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '';

export const BASE_PATH = base ? `${base}/` : '/';

/** Builds a site URL that survives the GitHub Pages `base` prefix. */
export function url(path = ''): string {
  return `${BASE_PATH}${path.replace(/^\//, '')}`;
}

/** Same as `url`, for image paths stored in artwork frontmatter. */
export function img(path: string): string {
  return url(path);
}

export function artworkUrl(slug: string): string {
  return url(`artwork/${slug}`);
}
