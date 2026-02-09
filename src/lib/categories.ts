export const PRICE_CATEGORIES = [
  { slug: '', label: 'הכל' },
  { slug: '800', label: 'עד ₪800' },
  { slug: '500', label: 'עד ₪500' },
  { slug: '250', label: 'עד ₪250' },
  { slug: 'donation', label: 'תשלום דרך תרומה' },
] as const;

export const STATUS_CATEGORIES = [
  { slug: '', label: 'הכל' },
  { slug: 'available', label: 'זמין' },
  { slug: 'sold', label: 'נמכר' },
] as const;

export const SUBJECT_CATEGORIES = [
  { slug: '', label: 'הכל' },
  { slug: 'sea', label: 'ים' },
  { slug: 'figure', label: 'גוף' },
  { slug: 'landscape', label: 'נוף' },
  { slug: 'stilllife', label: 'דומם' },
  { slug: 'urban', label: 'עיר' },
] as const;

export type PriceSlug = (typeof PRICE_CATEGORIES)[number]['slug'];
export type StatusSlug = (typeof STATUS_CATEGORIES)[number]['slug'];
export type SubjectSlug = (typeof SUBJECT_CATEGORIES)[number]['slug'];

export function parsePrice(priceStr?: string): number | null {
  if (!priceStr) return null;
  const num = priceStr.replace(/[^\d]/g, '');
  return num ? parseInt(num, 10) : null;
}

export function getPriceCategory(data: { category?: string; price?: string }): string {
  if (data.category === 'donation') return 'donation';
  const priceNum = parsePrice(data.price);
  if (priceNum !== null && priceNum <= 250) return '250';
  if (priceNum !== null && priceNum > 250 && priceNum <= 500) return '500';
  if (priceNum !== null && priceNum > 500 && priceNum <= 800) return '800';
  return '';
}

export function filterArtworks(
  artworks: Array<{ data: { category?: string; price?: string; sold?: boolean; subjects?: string[] } }>,
  priceSlug: PriceSlug,
  statusSlug: StatusSlug,
  subjectSlug: SubjectSlug = ''
) {
  return artworks.filter((a) => {
    const { category, price, sold, subjects = [] } = a.data;
    const priceNum = parsePrice(price);

    const matchPrice =
      !priceSlug ||
      (priceSlug === '250' && category !== 'donation' && priceNum !== null && priceNum <= 250) ||
      (priceSlug === '500' && category !== 'donation' && priceNum !== null && priceNum > 250 && priceNum <= 500) ||
      (priceSlug === '800' && category !== 'donation' && priceNum !== null && priceNum > 500 && priceNum <= 800) ||
      (priceSlug === 'donation' && category === 'donation');

    const matchStatus =
      !statusSlug ||
      (statusSlug === 'available' && !sold) ||
      (statusSlug === 'sold' && sold);

    const matchSubject =
      !subjectSlug || (Array.isArray(subjects) && subjects.includes(subjectSlug));

    return matchPrice && matchStatus && matchSubject;
  });
}

export function getCategorySlugForArtwork(data: { category?: string; price?: string }): string {
  return getPriceCategory(data);
}

export function getCategoryLabel(slug: string): string {
  const c = [...PRICE_CATEGORIES, ...STATUS_CATEGORIES, ...SUBJECT_CATEGORIES].find((x) => x.slug === slug);
  return c?.label ?? 'הכל';
}
