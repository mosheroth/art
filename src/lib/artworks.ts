import { getCollection, type CollectionEntry } from 'astro:content';
import { SUBJECT_CATEGORIES } from './categories';

export type Artwork = CollectionEntry<'artworks'>;

export function heTitle(artwork: Artwork): string {
  return artwork.data.titleHe ?? artwork.data.title;
}

const MEDIUM_HE: Record<string, string> = {
  'watercolor on paper': 'צבעי מים על נייר',
  'watercolor': 'צבעי מים',
  'gouache on paper': 'גואש על נייר',
  'sepia wash on paper': 'שטיפת ספיה על נייר',
};

/** Artwork files carry either English or Hebrew mediums; the site only shows Hebrew. */
export function mediumHe(artwork: Artwork): string | undefined {
  const medium = artwork.data.medium?.trim();
  if (!medium) return undefined;
  return MEDIUM_HE[medium.toLowerCase()] ?? medium;
}

/** Subject labels of an artwork, in Hebrew, ready to print. */
export function subjectLabels(artwork: Artwork): string[] {
  const subjects = artwork.data.subjects ?? [];
  return subjects
    .map((slug) => SUBJECT_CATEGORIES.find((cat) => cat.slug === slug)?.label)
    .filter((label): label is string => Boolean(label));
}

export async function allArtworks(): Promise<Artwork[]> {
  return getCollection('artworks');
}

export async function artworkBySlug(slug: string): Promise<Artwork | undefined> {
  const artworks = await allArtworks();
  return artworks.find((artwork) => artwork.slug === slug);
}

/**
 * Curated list first, then the remaining artworks, so the home page keeps working
 * when a slug is renamed or new work is added.
 */
export async function curatedArtworks(slugs: string[], count: number, exclude: string[] = []): Promise<Artwork[]> {
  const artworks = await allArtworks();
  const excluded = new Set(exclude);
  const pool = artworks.filter((artwork) => !excluded.has(artwork.slug));
  const picked: Artwork[] = [];

  for (const slug of slugs) {
    const match = pool.find((artwork) => artwork.slug === slug);
    if (match && !picked.includes(match)) picked.push(match);
  }

  for (const artwork of pool) {
    if (picked.length >= count) break;
    if (!picked.includes(artwork)) picked.push(artwork);
  }

  return picked.slice(0, count);
}

export interface Series {
  slug: string;
  label: string;
  count: number;
  cover: Artwork;
}

/** Groups by subject tag, keeping only groups worth showing as a series. */
export async function subjectSeries(minCount = 2): Promise<Series[]> {
  const artworks = await allArtworks();

  return SUBJECT_CATEGORIES.filter((cat) => cat.slug !== '')
    .map((cat) => {
      const members = artworks.filter((artwork) => (artwork.data.subjects ?? []).includes(cat.slug));
      return { slug: cat.slug, label: cat.label, count: members.length, cover: members[0] };
    })
    .filter((series): series is Series => Boolean(series.cover) && series.count >= minCount)
    .sort((a, b) => b.count - a.count);
}
