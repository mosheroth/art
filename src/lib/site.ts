export const SITE = {
  name: 'משה רוט',
  nameEn: 'Moshe Rot',
  discipline: 'צבעי מים',
  location: 'הוד השרון',
  instagram: 'https://www.instagram.com/mosheroth85/',
  instagramHandle: '@mosheroth85',
};

/** Header and footer site links. */
export const NAV_LINKS = [
  { label: 'עבודות', path: 'gallery', match: 'gallery' },
  { label: 'סדנאות', path: 'workshops', match: 'workshops' },
  { label: 'על האמן', path: 'about', match: 'about' },
] as const;

/** Featured painting beside the home intro, in a black frame. */
export const HOME_FEATURED_SLUG = 'sepia-seated-figure';

/** Mixed order on the home page — figure, city and landscape together, not in bands. */
export const HOME_MIX_SLUGS = [
  'anna-kruken-1',
  'torso-sepia',
  'barzel-bashekiya',
  'figures-in-water',
  'yarkon-etz-al-hamayim',
  'anna-kruken-2',
  'rakevet-hashalom',
  'simta-besharona',
  'park-sepia',
  'sea-after-storm',
  'ayalon',
  'siman-70',
  'anna-kruken-3',
  'sepia-reclining-figure',
  'kikar-rabin',
  'sargent-stream-shadow',
  'seated-figure-profile',
];

export const COPY = {
  introTitle: 'משה רוט',
  introLead: 'צבעי מים על נייר.',
  introBody: 'גוף, עיר ונוף.',

  contactEyebrow: 'יצירת קשר',
  contactTitle: 'נשמח לשמוע',
  contactBody: 'מתעניינים בציור, בגלריה, או סתם להגיד שלום — אני עונה לכל הודעה.',
  contactCta: 'אינסטגרם',

  galleryTitle: 'עבודות',
  galleryLead: 'כל הציורים שבאתר. הסינון לפי נושא, מחיר וזמינות.',

  workshopsTitle: 'סדנאות',
  workshopsEmpty: 'כרגע אין סדנאות חדשות.',

  aboutTitle: 'על האמן',
  aboutBody: [
    'היי, אני משה רוט, יליד 1985. גר בהוד השרון, מצייר צבעי מים, בעיקר בשטח, בעיקר מהמקומות שאני עובר בהם כל יום.',
    'מה שמרתק אותי זה לקחת רגע מהמציאות ולהפוך אותו לעצם יפה ומפתיע שלא היה קיים קודם. חשוב לי לרגש ולמצוא את היופי בצורה ספונטנית.',
  ],
};
