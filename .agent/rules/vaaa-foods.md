# Vaaa Foods: Project Rules

Save this file as `.agent/rules/vaaa-foods.md` in your Antigravity workspace.

## 1. Project context
- Business: **Vaaa Foods**, a homemade Namkeen Puri business in India, run by Varsha Ukhalkar.
- Taglines: "Crispy Bites... Happier Times!", "Snack Good, Feel Good", "Let's Snack Together!"
- Brand points: Quality Ingredients, Homemade Goodness, Perfect for Every Occasion.
- Goal of the site: turn visitors into WhatsApp orders. Primary action is always **Order on WhatsApp**.
- End goal: automated ordering over WhatsApp (see section 9). Keep the code ready for it, but do not build it until asked.

## 2. Tech stack (do not change without asking)
- Next.js (App Router) + TypeScript (strict) + Tailwind CSS + shadcn/ui
- `next/image` for images, `next/font` for fonts
- Deployment target: Vercel
- Ask before installing any new dependency.

## 3. Golden rules
- **Mobile-first.** Design for 375px width first, then scale up. Most visitors arrive from WhatsApp or Instagram on a phone.
- **One clear action per screen:** Order on WhatsApp.
- **Never invent facts.** Do not make up prices, FSSAI number, reviews, addresses, delivery areas, ingredients or shelf life. Use clearly marked placeholders (`TODO_PRICE_250G`) and list every placeholder at the end of each task.
- Plain, warm, simple English. Short sentences. No jargon.

## 4. Content lives in one file
- All editable content goes in `src/content/site.ts`: business info, products, pack sizes, prices, FAQs, testimonials, delivery areas, social links.
- Components read from this file. No hardcoded copy inside components.
- The owner should be able to change a price by editing one line.

## 5. WhatsApp ordering
- WhatsApp number comes from env var `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits with country code, no `+`). The number on the business card is `917775048578`. Confirm it with the owner before using it.
- Create one helper, `src/lib/whatsapp.ts`, with `buildWhatsAppLink({ product, pack, qty, note })`. It returns `https://wa.me/<number>?text=<encoded message>`. Every Order button uses this helper. No hand-written wa.me links elsewhere.
- The prefilled message must be friendly and include:
  - the product and pack size, if selected
  - a short order reference like `VF-4F9K2` (so later automation can match a website visit to a chat)
  - a line like `Source: website`
- Mobile: sticky bottom bar with **Order on WhatsApp** and **Call** buttons.
- Use the WhatsApp green (`--whatsapp`) only for the order button, so it stands out.

## 6. Design system
Use CSS variables and the Tailwind theme. Do not use random hex values in components.

| Token | Value | Purpose |
|---|---|---|
| `--maroon` | `#7A1020` | Brand, headings, footer (richness, tradition) |
| `--maroon-deep` | `#4E0A15` | Dark sections, text on cream |
| `--turmeric` | `#F4B72E` | Accents, highlights, badges (warmth, appetite, happiness) |
| `--cream` | `#FFF6E3` | Main background (homemade, soft, clean) |
| `--sand` | `#F4E2BE` | Alternate section background, cards |
| `--coriander` | `#3E7B3F` | Small freshness accents only |
| `--ink` | `#2B1810` | Body text (warm dark brown, never pure black) |
| `--whatsapp` | `#25D366` | Order button only |

- Never use blue or purple as a main colour, and no cold greys.
- Fonts: bold brush-script for the main headline only, a friendly serif for section titles, a clean sans-serif for body text. Body text is at least 16px.
- Shapes: rounded corners (`rounded-2xl` or more), organic blob edges, curved swoosh dividers like the business card. Soft warm shadows (brown-tinted, never grey).
- Details: subtle jute or paper texture, hand-drawn doodles (sesame seeds, curry leaves, steam), sticker-style badges. Do not overdo it.
- The page must look handmade and unique, not like a generic SaaS template. No purple gradients, no stock-icon grids.

## 7. UI and accessibility
- Tap targets are at least 44x44px.
- Colour contrast meets WCAG AA.
- All images have meaningful `alt` text. Use semantic HTML.
- Motion is subtle and respects `prefers-reduced-motion`.
- Section order: Hero, Trust strip (3 brand points), Products, Why Vaaa Foods, Occasions and bulk orders, About Varsha, Reviews, FAQ, Contact and delivery, Footer (with FSSAI number).
- Real photos go in `public/images`. Use clearly labelled placeholders until they are provided.

## 8. Code quality, performance, SEO
- TypeScript strict, no `any`, small focused components, no unused code.
- Comments explain *why*, not *what*.
- Lint and build must pass before reporting a task as done.
- Images in WebP, lazy-loaded below the fold. Target Lighthouse mobile score of 90 or higher.
- `lang="en-IN"`, page metadata, Open Graph image (this is the preview shown when the link is shared on WhatsApp), `sitemap`, `robots`, and JSON-LD for a local food business.

## 9. Future WhatsApp automation (design for it, do not build yet)
- Planned: WhatsApp Cloud API, a webhook at `/api/whatsapp/webhook`, and an `orders` table in Supabase.
- When built: verify Meta's webhook signature, validate all input, rate-limit, and never log customer phone numbers in plain text.
- Keep order data shapes in `src/types/order.ts` so they can be reused later.

## 10. Security
- No secrets in code or git. Use `.env.local` and keep an `.env.example` with empty values.
- Do not collect personal data on the website in version 1.

## 11. Working style
1. For any task bigger than one component, **write a short plan first** and wait for approval.
2. Work in small steps, one section at a time.
3. After every UI change, open the page in the browser at 375px and 1280px wide, take screenshots and check for overflow or broken layout.
4. Commit to git after each working step with a clear message.
5. Ask before installing dependencies, changing the stack or deleting files.
6. Finish every task with a short report: what changed, which placeholders remain, how to run it.
