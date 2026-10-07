export const SITE = {
  name: 'משה רוט',
  nameEn: 'Moshe Rot',
  discipline: 'צבעי מים',
  location: 'הוד השרון',
  instagram: 'https://www.instagram.com/mosheroth85/',
  instagramHandle: '@mosheroth85',
};

/** Artwork standing in for a studio portrait on the about page. */
export const PORTRAIT_SLUG = 'profile-portrait';

/** Header and footer links into the gallery. */
export const HOME_CATEGORIES = [
  { id: 'figure', label: 'גוף', query: 'subject=figure' },
  { id: 'tel-aviv', label: 'תל אביב', query: 'subject=tel-aviv' },
  { id: 'landscape', label: 'נוף', query: 'subject=landscape' },
  { id: 'sale', label: 'למכירה', query: 'status=available' },
] as const;

/** Mixed order on the home page — figure, city and landscape together, not in bands. */
export const HOME_MIX_SLUGS = [
  'barzel-bashekiya',
  'figures-in-water',
  'yarkon-etz-al-hamayim',
  'sepia-seated-figure',
  'rakevet-hashalom',
  'flowers-batya-3',
  'simta-besharona',
  'park-sepia',
  'polina-4',
  'sea-after-storm',
  'ayalon',
  'sepia-reclining-figure',
  'kikar-rabin',
  'sargent-stream-shadow',
  'seated-figure-profile',
  'under-the-canopy',
];

export const COPY = {
  introTitle: 'משה רוט',
  introLead: 'צבעי מים על נייר.',
  introBody: 'גוף, תל אביב, נוף.',

  contactEyebrow: 'יצירת קשר',
  contactTitle: 'נשמח לשמוע',
  contactBody: 'מתעניינים בציור, בגלריה, או סתם להגיד שלום — אני עונה לכל הודעה.',
  contactCta: 'אינסטגרם',

  galleryTitle: 'עבודות',
  galleryLead: 'כל הציורים שבאתר. הסינון לפי נושא, מחיר וזמינות.',

  aboutTitle: 'על האמן',
  aboutLead: 'צבעי מים, בעיקר בשטח, בעיקר מהמקומות שאני עובר בהם כל יום.',
  aboutBody: [
    'התחלתי לצייר בצבעי מים בגלל הנוחות: קופסה קטנה, מחברת נייר וכוס מים מספיקים כדי לעבוד בכל מקום. עם הזמן התברר שזו גם הסיבה הקשה — צבעי מים לא סולחים על היסוס, וכל ניסיון לתקן נשאר על הנייר.',
    'הנושאים מגיעים מהסביבה המיידית: הוד השרון שבה אני גר, גדות הירקון, נסיעות לתל אביב, וחופים בשעות שבהן הים מעניין יותר מהשמש. לצידם יש עבודות דמות מתוך מפגשי ציור מהתבוננות, ומדי פעם העתק אחד מתוך הערכה — כמו סרג׳נט — כדרך ללמוד מהיד של מישהו אחר.',
    'רוב הציורים קטנים, בין 21×29 ל־40×50 ס״מ, כי זה הגודל שאפשר לסיים בישיבה אחת. הם נשארים כפי שיצאו: מהירים, לא מלוטשים, עם הנייר הלבן שמבליח מבין הכתמים.',
  ],
  aboutPracticeTitle: 'איך זה עובד',
  aboutPractice: [
    { label: 'מדיום', value: 'צבעי מים וגואש על נייר' },
    { label: 'שיטה', value: 'ציור בשטח, בדרך כלל בישיבה אחת' },
    { label: 'גדלים', value: '21×29 עד 40×50 ס״מ' },
    { label: 'איפה', value: 'הוד השרון, הירקון, תל אביב, חופי המרכז' },
  ],
};
