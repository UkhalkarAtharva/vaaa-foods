// =============================================================================
// Vaaa Foods — Single source of truth for all site content
// =============================================================================
// The owner can change a price by editing one line.
// Components read from this file. No hardcoded copy inside components.
// Placeholders are prefixed with TODO_ — see list at the bottom.
// =============================================================================

// ---- Types ----

export interface PackSize {
  size: string;
  price: string;
}

export interface Product {
  id: string;
  name: string;
  serial: string;
  description: string;
  badge: string;
  badgeVariant: "coriander" | "turmeric" | "maroon";
  imagePath: string;
  imageAlt: string;
  packSizes: PackSize[];
  hasPhoto: boolean;
}

export interface BrandPoint {
  emoji: string;
  text: string;
  rotation: number;
  highlight?: boolean;
}

export interface OrderStep {
  number: number;
  title: string;
  description: string;
  variant: "turmeric" | "whatsapp" | "sand";
}

export interface WhyItem {
  emoji?: string;
  icon?: string;
  title: string;
  subtitle?: string;
  chipText?: string;
  description: string;
  detail?: string;
  size: "small" | "large" | "wide";
}

export interface Occasion {
  emoji: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// ---- Site Config ----

export const siteConfig = {
  name: "Vaaa Foods",
  tagline: "Crispy Bites... Happier Times!",
  taglines: [
    "Crispy Bites... Happier Times!",
    "Snack Good, Feel Good",
    "Let's Snack Together!",
  ],
  description: "Homemade Namkeen Puri made with love in Pune",
  url: "https://vaaafoods.com", // TODO_WEBSITE_URL: replace with actual domain
  phone: "TODO_PHONE_NUMBER", // confirm with owner
  location: "Pune, Maharashtra",
  foundedYear: 2025,
  fssaiNumber: "TODO_FSSAI_NUMBER",
} as const;

// ---- Founder ----

export const founder = {
  name: "Varsha Ukhalkar",
  title: "Founder & Mother",
  location: "Pune, Maharashtra",
  imagePath: "/images/varsha-portrait.webp",
  imageAlt: "Varsha Ukhalkar — Founder of Vaaa Foods, Pune",
  // TODO_ABOUT_QUOTE: replace with Varsha's own words
  quote:
    "Namaskar! We have just started Vaaa Foods from our home kitchen in Pune. Every batch is made in small quantities, with care and love. We are excited to share our crisp, golden puris with your family for your 4 PM tea or festive get-togethers.",
  hasPhoto: false, // flip to true when real portrait is added
} as const;

// ---- Products ----

export const products: Product[] = [
  {
    id: "ajwain-methi",
    name: "Classic Ajwain & Methi",
    serial: "01 / AJWAIN",
    description:
      "Crispy, flaky layers kneaded with fresh roasted ajwain seeds & fragrant methi. Perfect with evening chai.",
    badge: "★ House Special",
    badgeVariant: "coriander",
    imagePath: "/images/product-ajwain.webp",
    imageAlt: "Classic Ajwain & Methi puris on a plate",
    packSizes: [
      { size: "250g", price: "TODO_PRICE_250G" },
      { size: "500g", price: "TODO_PRICE_500G" },
      { size: "1 kg", price: "TODO_PRICE_1KG" },
    ],
    hasPhoto: false,
  },
  {
    id: "tikha-masala",
    name: "Spicy Masala Tikha Puri",
    serial: "02 / TIKHA",
    description:
      "Zesty puris tossed in homemade Maharashtrian spice rub, Kashmiri chilli & amchur.",
    badge: "🌶 Spicy Zing",
    badgeVariant: "turmeric",
    imagePath: "/images/product-tikha.webp",
    imageAlt: "Spicy Masala Tikha puris in a bowl",
    packSizes: [
      { size: "250g", price: "TODO_PRICE_250G" },
      { size: "500g", price: "TODO_PRICE_500G" },
      { size: "1 kg", price: "TODO_PRICE_1KG" },
    ],
    hasPhoto: false,
  },
  {
    id: "festive-combo",
    name: "Festive Combo Hamper Box",
    serial: "03 / COMBO",
    description:
      "Mix assortment of Ajwain & Tikha puris packed in an artisanal box for friends & family.",
    badge: "🎁 Gift Box",
    badgeVariant: "maroon",
    imagePath: "/images/product-combo.webp",
    imageAlt: "Festive combo hamper box with assorted puris",
    packSizes: [{ size: "Custom", price: "Ask on WhatsApp" }],
    hasPhoto: false,
  },
];

// ---- Marquee Items ----

export const marqueeItems = [
  "Crispy bites",
  "Happier times",
  "Snack good, feel good",
  "Made with love",
  "Freshly fried daily",
  "Zero reused oil",
] as const;

// ---- Brand Points (Trust Strip) ----

export const brandPoints: BrandPoint[] = [
  { emoji: "👩‍🍳", text: "100% Homemade", rotation: -2 },
  { emoji: "🛑", text: "No Shortcuts", rotation: 2, highlight: true },
  { emoji: "📦", text: "Fried Upon Order", rotation: -1 },
];

// ---- Order Steps (How It Works) ----

export const orderSteps: OrderStep[] = [
  {
    number: 1,
    title: "Choose Pack & Spice Level",
    description:
      "Classic Ajwain, Spicy Tikha, or Mix Combo in 250g, 500g, or 1kg.",
    variant: "turmeric",
  },
  {
    number: 2,
    title: "Tap to Chat on WhatsApp",
    description: "Send your address & custom note directly to Varsha ji.",
    variant: "whatsapp",
  },
  {
    number: 3,
    title: "Freshly Fried & Delivered",
    description:
      "Rolled, fried, vacuum-packed and delivered fresh across Pune.",
    variant: "sand",
  },
];

// ---- Why Vaaa Foods (Bento Grid) ----

export const whyVaaaItems: WhyItem[] = [
  {
    emoji: "🍳",
    title: "Small Batches",
    subtitle: "Fried with Patience",
    description:
      "Prepared in limited home quantities so every puri is evenly crispy.",
    size: "small",
  },
  {
    emoji: "💧",
    title: "Zero Reused Oil",
    subtitle: "Single Batch Only",
    // TODO_OIL_TYPE: verify exact oil type with owner
    description: "Clean single-use oil. Never recycled.",
    size: "small",
  },
  {
    icon: "skillet",
    title: "Fresh When You Order",
    subtitle: "No Supermarket Storage",
    chipText: "No Supermarket Storage",
    description: "Dough rolled & crisp-fried only after your ping.",
    detail:
      "We do not maintain old stock. Dough is rolled, spiced, and fried only after your WhatsApp confirmation so you receive fresh, fragrant namkeen.",
    size: "large",
  },
  {
    icon: "home",
    title: "Made at Home in Pune",
    description:
      "Authentic, spotless home kitchen in Pune using traditional care & clean ingredients.",
    size: "wide",
  },
];

// ---- Occasions ----

export const occasions: Occasion[] = [
  {
    emoji: "🪔",
    title: "Festivals & Pujas",
    description:
      "Diwali, Ganesh Utsav, and Holi traditional snack platters.",
  },
  {
    emoji: "🎁",
    title: "Weddings & Gifts",
    description:
      "Customized savory gift hampers with personalized blessing tags.",
  },
  {
    emoji: "☕",
    title: "Chai & Office Snack",
    description:
      "The quintessential 4 PM tea-time partner for your workstation.",
  },
  {
    emoji: "🎉",
    title: "Bulk & Parties",
    description: "Special pricing for family & society events.",
  },
];

// ---- FAQs ----

export const faqs: FAQ[] = [
  {
    question: "How long do the puris stay crisp?",
    // TODO_SHELF_LIFE: verify with owner
    answer:
      "Please ask us on WhatsApp for shelf-life details. We pack in airtight zip-lock foil pouches to keep them crisp as long as possible.",
  },
  {
    question: "What cooking oil do you use?",
    // TODO_OIL_INFO: verify with owner
    answer:
      "We use only fresh, single-use cooking oil. We never reuse oil or add artificial preservatives. Ask us on WhatsApp for specifics.",
  },
  {
    question: "Where do you deliver across Pune?",
    answer:
      "We deliver across Pune neighbourhoods. Delivery is coordinated directly over WhatsApp so your puris reach you crisp and fresh.",
  },
  {
    question: "Can I customize gift boxes for weddings?",
    answer:
      "Yes! We can fulfill bulk orders with custom labels and assorted namkeen. Message us on WhatsApp for details and sample boxes.",
  },
];

// ---- Delivery Areas ----
// TODO_DELIVERY_AREAS: confirm list with owner

export const deliveryAreas: string[] = [
  "TODO_AREA_1",
  "TODO_AREA_2",
  "TODO_AREA_3",
  "TODO_AREA_4",
];

// ---- Social Links ----

export const socialLinks = {
  instagram: "TODO_INSTAGRAM_URL",
} as const;

// =============================================================================
// PLACEHOLDER SUMMARY (for the owner to fill in)
// =============================================================================
//
//  TODO_PRICE_250G      — price for 250g pack (e.g. "₹120")
//  TODO_PRICE_500G      — price for 500g pack
//  TODO_PRICE_1KG       — price for 1 kg pack
//  TODO_FSSAI_NUMBER    — FSSAI licence number
//  TODO_PHONE_NUMBER    — phone number for Call button
//  TODO_WEBSITE_URL     — production domain
//  TODO_ABOUT_QUOTE     — Varsha's personal quote in her own words
//  TODO_SHELF_LIFE      — verified shelf-life claim
//  TODO_OIL_INFO        — verified oil type
//  TODO_OIL_TYPE        — exact oil (e.g. "peanut & sunflower")
//  TODO_DELIVERY_AREAS  — confirmed delivery neighbourhoods in Pune
//  TODO_INSTAGRAM_URL   — Instagram profile link
//  TODO_AREA_1 … 4      — individual area names
//
// =============================================================================
