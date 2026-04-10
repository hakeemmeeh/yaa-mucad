# CLAUDE.md — Yaa Mucaad Global Fruits Export Ltd

> This file is the single source of truth for building this website.
> Read it fully before writing any code. Every decision — layout, colour,
> copy, component — must trace back to something in this document.

---

## 1. PROJECT BRIEF

| Field | Value |
|---|---|
| Client | Yaa Mucaad Global Fruits Export Ltd |
| Type | B2B marketing website — NOT an e-commerce shop |
| Business | Fresh fruits & vegetables export from Kenya |
| Origin | Nairobi, Kenya |
| Target Markets | GCC (UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain) + Europe (NL, DE, UK, FR, BE) |
| Audience | International importers, wholesale buyers, procurement managers |
| Reference Theme | https://jthemes.net/themes/html/organic/index.html |

---

## 2. REFERENCE THEME — jthemes Organic (STUDY AND REPLICATE)

The jthemes organic theme defines the **visual language** for this site.
Replicate its layout patterns, then apply Yaa Mucaad brand colours and content on top.

### 2.1 Global Layout Patterns (all pages)

```
TOP BAR
  Thin strip above navbar
  Left:  email + address info
  Right: utility text (office hours)
  bg: olive (#4A5C2F), text: white

NAVBAR
  White bg, sticky, box-shadow on scroll
  Left:   Logo (height 44px)
  Centre: Nav links — Home | About | Products | Quality | Markets | Services | Contact
  Right:  [Trade Enquiry] CTA button (olive filled)
  Active link: 3px bottom border in gold

INNER PAGE BANNER (every inner page — jthemes style)
  Full-width strip below navbar, ~220px tall
  Left-aligned: page title (H1) + breadcrumb (Home > Page)
  bg: olive-pale or light image with olive overlay
  This pattern appears on shop-list, about-us, contact-us pages

SECTION HEADER PATTERN (every content section)
  Eyebrow: 10px, spaced caps, olive-lt colour, e.g. "FRESH FROM OUR FARMS"
  Title:   large Cormorant Garamond serif, 2 lines max, olive
  Subtitle: optional muted paragraph, max 520px wide

FOOTER
  Dark olive bg
  4-col grid: Brand+tagline | Products | Markets | Contact
  Bottom bar: copyright + cert badge pills
```

### 2.2 Home Page — Section Order (from jthemes index.html)

Replicate these sections in this exact order:

```
1.  TopBar
2.  Navbar
3.  Hero             full-width, text left col + image right col
                     jthemes cycles animated words: carrot / asparagus / cauliflower
                     → Yaa Mucaad version cycles: "Avocados" / "Mangoes" / "French Beans"
4.  StatsStrip       olive bg, 4 numbers in a row
5.  CategoryCircles  eyebrow "FRESH FROM OUR FARMS"
                     7 circular icon bubbles in a row — jthemes circular cat style
                     circle: 90–100px, olive-pale bg + olive border, hover lifts
6.  PromoBanners     2 side-by-side banner cards with image area + text + CTA link
7.  FeaturedProducts eyebrow + title + filter tabs + 4-col product card grid
                     Show 8 cards on homepage
                     NO prices — "Request Inquiry" button instead
8.  WhyKenya         2-col: copy left, 4 icon feature cards right
9.  PromiseBlocks    3 olive-bg cards: Quality | Compliance | Delivery
10. ProcessSteps     5 numbered steps in a row with connecting line
11. CertGrid         4×2 cert cards
12. CtaBanner        olive-pale bg, "Ready to source from Kenya?" + CTA button
13. Footer
14. WhatsApp FAB     fixed bottom-right, all pages
```

### 2.3 Shop List Page — Products Page (from jthemes shop-list.html)

```
1.  TopBar + Navbar
2.  PageBanner       "Our Export Products" + breadcrumb: Home > Products
3.  Products Layout  Left: vertical filter sidebar (All|Fruits|Vegetables|Herbs|GCC|Europe)
                     Right: product grid
                     "Showing X of 14 products" count above grid
                     4-col product grid, all 14 cards
                     NO prices, "Request Inquiry" + "Details →" buttons on each card
4.  CategoryCircles  below grid
5.  CtaBanner
6.  Footer
```

### 2.4 About Us Page (from jthemes about-us.html)

```
1.  TopBar + Navbar
2.  PageBanner       "About Us" + breadcrumb
3.  About Content    2-col: image left, founding story text right
                     jthemes uses: eyebrow + heading + body + CTA button
4.  CategoryCircles  same circles as homepage
5.  WhyKenya         feature blocks
6.  ProcessSteps     5-step process
7.  StatsStrip
8.  CtaBanner
9.  Footer
```

### 2.5 Contact Page (from jthemes contact-us.html)

```
1.  TopBar + Navbar
2.  PageBanner       "Contact Us" + breadcrumb + subtitle
3.  Contact Section  2-col:
                     Left:  4 contact detail cards (icon + label + value)
                     Right: full TradeInquiryForm
4.  Map              Google Maps embed — Nairobi, Kenya
5.  Footer
```

### 2.6 Product Card — Exact Structure to Build (from jthemes)

```
<ProductCard>
  <ImageArea>                         ← square, bg: olive-pale
    <PrimaryImage />                  ← shown by default
    <HoverImage />                    ← shown on card hover (CSS swap)
    <TopLeftBadge>Fruits</TopLeftBadge>          ← category
    <TopRightBadge>GCC+EU</TopRightBadge>        ← market tag (Yaa Mucaad addition)
    <SeasonBadge>Mar–Oct</SeasonBadge>           ← bottom of image area
  </ImageArea>
  <CardBody>
    <CategoryLabel>Fruits</CategoryLabel>        ← 10px spaced caps, olive-lt
    <ProductName>Hass Avocado</ProductName>      ← Cormorant Garamond 18px bold
    <Varieties>Hass · Fuerte</Varieties>         ← 12px italic, text-muted
    <ShortDesc>2-line max description</ShortDesc>
    <CertTag>✓ GlobalGAP</CertTag>              ← small olive pill
  </CardBody>
  <CardFooter>                        ← border-top
    <InquiryButton href="/contact?product=[slug]">
      Request Inquiry
    </InquiryButton>
    <DetailsLink href="/products/[slug]">Details →</DetailsLink>
  </CardFooter>
</ProductCard>

Hover behaviour (jthemes pattern):
  card: translateY(-4px), shadow increases, top border 3px solid olive appears
  image: swaps to hover image
  footer buttons: visible (can be always visible for simplicity)

NEVER render a price. NEVER render a rating/stars. These are not retail products.
```

---

## 3. BRAND COLOURS — STRICT

```css
/* Copy into tailwind.config.ts under theme.extend.colors */
/* and as CSS variables in globals.css */

--olive:        #4A5C2F   /* primary: nav active, buttons, headings */
--olive-mid:    #5E7339   /* button hover */
--olive-lt:     #7A9148   /* eyebrow labels, icon bg, cert tag */
--olive-pale:   #EEF2E6   /* section bg, image placeholder bg */
--olive-soft:   #D6E0C0   /* borders, dividers */
--gold:         #C9A84C   /* accent gold */
--gold-lt:      #E8C97A   /* italic em text, floating badges */
--gold-dk:      #8A6B2A   /* dark gold: subheadings, detail links */
--gold-pale:    #FBF3DC   /* gold-tinted bg for promo cards */
--cream:        #FDFAF4   /* page background */
--cream-2:      #F5F0E4   /* alternating section bg */
--white:        #FFFFFF   /* cards, navbar bg */
--text:         #2A2A1E   /* body text */
--text-mid:     #555545   /* secondary text */
--text-muted:   #888878   /* captions, labels, placeholders */
--border:       #DDD8C4   /* default borders */
--border-lt:    #EEEADC   /* light dividers */
```

```ts
// tailwind.config.ts — extend.colors
colors: {
  olive: {
    DEFAULT: '#4A5C2F',
    mid:     '#5E7339',
    lt:      '#7A9148',
    pale:    '#EEF2E6',
    soft:    '#D6E0C0',
  },
  gold: {
    DEFAULT: '#C9A84C',
    lt:      '#E8C97A',
    dk:      '#8A6B2A',
    pale:    '#FBF3DC',
  },
  cream: {
    DEFAULT: '#FDFAF4',
    2:       '#F5F0E4',
  },
}
```

---

## 4. TYPOGRAPHY

```
Display/Headings: Cormorant Garamond — weights 500, 600, 700 + italic
Body/UI/Nav:      DM Sans — weights 300, 400, 500, 600
Arabic accent:    يا معاذ — hero ONLY, decorative, gold, 32px, dir="rtl"
```

**Google Fonts URL for `layout.tsx`:**
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=DM+Sans:wght@300;400;500;600&display=swap
```

---

## 5. FULL FILE STRUCTURE — Next.js 14 App Router (MULTIPAGE)

```
yaa-mucaad/
├── CLAUDE.md
├── package.json
├── tailwind.config.ts
├── next.config.ts
├── .env.local
│
├── app/
│   ├── layout.tsx              ← fonts, TopBar, Navbar, Footer, WhatsAppFAB
│   ├── globals.css             ← CSS variables, base styles
│   ├── page.tsx                ← / Home
│   ├── about/
│   │   └── page.tsx            ← /about
│   ├── products/
│   │   ├── page.tsx            ← /products  (full 14-product catalogue)
│   │   └── [slug]/
│   │       └── page.tsx        ← /products/hass-avocado  (detail page)
│   ├── quality/
│   │   └── page.tsx            ← /quality
│   ├── markets/
│   │   └── page.tsx            ← /markets
│   ├── services/
│   │   └── page.tsx            ← /services
│   ├── contact/
│   │   └── page.tsx            ← /contact
│   └── api/
│       └── inquiry/
│           └── route.ts        ← POST handler (Resend email)
│
├── components/
│   ├── layout/
│   │   ├── TopBar.tsx
│   │   ├── Navbar.tsx          ← sticky, mobile hamburger included
│   │   ├── Footer.tsx
│   │   └── WhatsAppFAB.tsx     ← fixed bottom-right, all pages
│   │
│   ├── shared/
│   │   ├── PageBanner.tsx      ← inner page title + breadcrumb (jthemes style)
│   │   ├── SectionHeader.tsx   ← eyebrow + title + optional subtitle
│   │   ├── Button.tsx          ← variants: olive | outline | gold
│   │   ├── CertBadge.tsx       ← small pill badge (GlobalGAP ✓)
│   │   └── GoldDivider.tsx     ← 48px gold rule line
│   │
│   ├── home/
│   │   ├── HeroSlider.tsx      ← cycling words, 2-col layout
│   │   ├── StatsStrip.tsx      ← 4 stats, olive bg
│   │   ├── CategoryCircles.tsx ← 7 circular bubbles (jthemes style)
│   │   ├── PromoBanners.tsx    ← 2 side-by-side promo cards
│   │   ├── FeaturedProducts.tsx← filter tabs + 4-col card grid (8 cards)
│   │   ├── WhyKenya.tsx        ← 2-col: copy + 4 icon cards
│   │   ├── PromiseBlocks.tsx   ← 3 olive-bg blocks
│   │   ├── ProcessSteps.tsx    ← 5-step numbered row
│   │   ├── CertGrid.tsx        ← 4×2 certification cards
│   │   └── CtaBanner.tsx       ← "Ready to Source?" strip
│   │
│   ├── products/
│   │   ├── ProductCard.tsx     ← jthemes card (NO price)
│   │   ├── ProductGrid.tsx     ← responsive grid wrapper
│   │   ├── FilterTabs.tsx      ← All|Fruits|Veg|Herbs|GCC|EU
│   │   └── FilterSidebar.tsx   ← vertical sidebar version for /products page
│   │
│   └── contact/
│       └── TradeInquiryForm.tsx← full B2B form
│
├── data/
│   ├── products.ts             ← 14 products (see Section 8)
│   ├── certifications.ts       ← 8 cert objects
│   ├── categories.ts           ← 7 category circles
│   └── markets.ts              ← GCC + Europe data
│
├── lib/
│   └── send-inquiry.ts         ← server action: Resend email
│
└── public/
    ├── logo/
    │   ├── logo.png            ← transparent bg (CLIENT TO PROVIDE)
    │   └── logo-white.png      ← white version for footer (CLIENT TO PROVIDE)
    ├── hero/
    │   └── hero-farm.jpg       ← hero right col (CLIENT TO PROVIDE)
    ├── products/               ← product images (CLIENT TO PROVIDE)
    │   ├── avocado.jpg
    │   ├── mango.jpg
    │   └── [etc...]
    └── packhouse/
        └── packhouse-1.jpg     ← (CLIENT TO PROVIDE)
```

> Until client provides images, use emoji + `bg-olive-pale` placeholder divs.
> Use `next/image` for all images throughout.

---

## 6. PAGE SPECIFICATIONS

### 6.1 Home (`app/page.tsx`)

Sections in order — see Section 2.2 for jthemes reference:

```
HeroSlider
  Left:
    Gold pill badge: "100% CERTIFIED EXPORT"
    Arabic يا معاذ (32px, gold, decorative, dir=rtl)
    H1: "From Kenya's Highlands to Your Market —" + <em>Fresh.</em>
    Cycling animated word: "Avocados" → "Mangoes" → "French Beans" (CSS animation)
    Sub: "Premium fruits and vegetables, sourced from Kenya's most fertile growing
         regions and delivered to GCC and European markets with full certification
         and cold chain integrity."
    [View Our Products] → /products     (olive filled)
    [Request Trade Inquiry] → /contact  (olive outline)
    Trust row: ✓ GlobalGAP Certified · ✓ KEPHIS Approved · ✓ Year-Round Supply
  Right:
    Farm hero image (next/image, fill, olive-pale placeholder)
    Floating badge bottom-left: "1,500–2,800m" / "Growing Altitude" (white card)
    Floating badge top-right: "GlobalGAP ✓" (gold pill)

StatsStrip (olive bg)
  14+ Export Products | GCC & European Markets | 52 Weeks Supply | 24h Response

CategoryCircles (white bg)
  Eyebrow: "FRESH FROM OUR FARMS"
  Title: "Popular" <em>Categories</em>
  7 circles linking to /products?category=X

PromoBanners (cream-2 bg)
  Card 1 olive-pale: "Premium Kenyan Avocados" / Mar–Oct / [View Avocados →]
  Card 2 gold-pale:  "Year-Round Vegetable Supply" / Beans · Peas · Corn / [View Vegetables →]

FeaturedProducts (cream-2 bg)
  Eyebrow: "EXPORT CATALOGUE"
  Title: "Our" <em>Export Products</em>
  FilterTabs: All | Fruits | Vegetables | Herbs | GCC | Europe
  8 ProductCards (4-col grid)
  [View Full Catalogue →] below → /products

WhyKenya (white bg)
  Left: H2 "Grown in" <em>Africa's Garden</em> + copy + gold divider
  Right: 4 icon cards: Farm-Direct | Cold Chain | Full Docs | Air Freight

PromiseBlocks (olive bg)
  🌿 Consistent Quality | 📜 Full Compliance | ✈️ Reliable Delivery

ProcessSteps (cream bg)
  Eyebrow: "HOW WE WORK"
  Title: "Farm to" <em>Port — Five Steps</em>
  Steps: Farm Selection → Harvest & Collection → Packhouse QC → Documentation → Airfreight

CertGrid (white bg)
  Title: "We Clear Every Border" <em>Before You Do</em>
  4×2 grid of CertCard components

CtaBanner (olive-pale bg)
  "Ready to source from Kenya?"
  [Send a Trade Enquiry →] → /contact
```

---

### 6.2 About (`app/about/page.tsx`)

```
PageBanner: "About Us" / breadcrumb: Home > About

2-col About Block (jthemes about-us layout)
  Eyebrow: "OUR STORY"
  Left col: farm/team image (olive-pale placeholder)
  Right col:
    Title: "A Name That Carries a" <em>Promise</em>
    GoldDivider
    Founding story copy (see Section 9)
    3 value bullets with olive dots: Integrity | Quality First | Partnership
    [Learn About Our Process →] smooth scrolls to ProcessSteps

CategoryCircles (same as homepage)

WhyKenya (2-col)
  Eyebrow: "KENYA'S ADVANTAGE"
  Title: "Grown in" <em>Africa's Garden</em>
  Stats: 1,500–2,800m Altitude | Volcanic Soils | Year-Round Rain | Farm-Direct

ProcessSteps (same component)

StatsStrip (same as homepage)

CtaBanner
```

---

### 6.3 Products (`app/products/page.tsx`)

```
PageBanner: "Our Export Products" / breadcrumb: Home > Products
Subtitle: "Export-grade fruits and vegetables. Farm-direct. Fully certified."

Main Products Section (jthemes shop-list layout)
  Eyebrow: "EXPORT CATALOGUE"
  2-col layout:
    Left (sidebar 260px): FilterSidebar
      Categories: All | Fruits | Vegetables | Herbs
      Market: All | GCC | European
      Certification: All | GlobalGAP | KEPHIS
    Right: ProductGrid
      "Showing X of 14 products" count
      4-col → 2-col → 1-col responsive grid
      All 14 ProductCards
      NO prices anywhere
      Each card: [Request Inquiry] → /contact?product=[slug]
      Each card: [Details →] → /products/[slug]

CategoryCircles (below grid)

CtaBanner
```

---

### 6.4 Product Detail (`app/products/[slug]/page.tsx`)

```
PageBanner: [product.name] / breadcrumb: Home > Products > [name]

Product Detail Section (jthemes product-detail layout)
  2-col:
    Left: large product image (next/image, olive-pale placeholder)
    Right:
      Category badge + Market tags (GCC | EU badges)
      H1: product.name
      Varieties: product.varieties
      GoldDivider
      Full description (product.fullDesc)
      Info rows:
        Season:        product.season
        Certification: product.cert
        Packaging:     product.packaging
        MOQ:           product.moq
      [Request Inquiry for This Product →] → /contact?product=[slug]  (olive full-width)
      [← Back to Catalogue] link → /products

Related Products (3-col grid, same category)
  Title: "More" <em>Export Products</em>
  3 cards, filtered by same category

CtaBanner
```

---

### 6.5 Quality (`app/quality/page.tsx`)

```
PageBanner: "Quality & Compliance" / breadcrumb: Home > Quality
Subtitle: "We Clear Every Border Before You Do"

Intro 2-col
  Left: compliance philosophy copy (see Section 9)
  Right: packhouse image placeholder

CertGrid (4×2 — same component as homepage)

QC Checklist Section
  Eyebrow: "WHAT WE CHECK PER CONSIGNMENT"
  Title: "Every Shipment" <em>Passes Our Gate</em>
  6-item checklist with check icons:
    Visual inspection for blemishes and uniformity
    Size and weight grading to buyer specification
    Temperature verification (pre-cooling confirmed)
    MRL testing records from farm level
    Lot traceability to individual farm or farmer group
    Packaging integrity check before palletisation

GCC vs EU Compliance (2-col cards)
  GCC card (olive-pale): health cert, halal, UAE MOIAT, Saudi SFDA, Qatar MOPH
  EU card (gold-pale):   GlobalGAP, MRL, Euro 1, BRC optional

CtaBanner
```

---

### 6.6 Markets (`app/markets/page.tsx`)

```
PageBanner: "Markets We Serve" / breadcrumb: Home > Markets
Subtitle: "Two Continents. One Reliable Source."

Markets Cards (2-col full-width)
  GCC Card (olive-pale bg):
    Flags: 🇦🇪 🇸🇦 🇶🇦 🇰🇼 🇴🇲 🇧🇭
    Label: "Gulf Cooperation Council"
    Title: "GCC Markets"
    Copy: GCC market overview
    Country pills: UAE | Saudi Arabia | Qatar | Kuwait | Oman | Bahrain
    ✈ Transit: 4–6 hrs to DXB, RUH, DOH
    Incoterms: FOB / CIF / DAP
    Key products: Mangoes, Avocados, Passion Fruit, Okra, Chillies, Watermelon, Banana

  Europe Card (gold-pale bg):
    Flags: 🇳🇱 🇩🇪 🇫🇷 🇬🇧 🇧🇪
    Label: "European Union & United Kingdom"
    Title: "European Markets"
    Copy: EU market overview
    Country pills: Netherlands | Germany | France | United Kingdom | Belgium
    ✈ Transit: 8–11 hrs to AMS, LHR, FRA
    Certs: GlobalGAP + Euro 1 + MRL
    Key products: Avocados, French Beans, Sugar Snaps, Baby Corn, Herbs, Courgette

Logistics Info (3-col cards)
  Dispatch: JKIA Nairobi | GCC: weekly flights | Europe: weekly flights

CtaBanner
```

---

### 6.7 Services (`app/services/page.tsx`)

```
PageBanner: "Export Services" / breadcrumb: Home > Services

Services Grid (3-col icon cards)
  Farm Sourcing & Procurement
  Packhouse Quality Control
  Cold Chain Management
  Export Documentation
  Air Freight Logistics
  Buyer Support & Communication

ProcessSteps (same component as homepage)

CtaBanner
```

---

### 6.8 Contact (`app/contact/page.tsx`)

```
PageBanner: "Contact Us" / breadcrumb: Home > Contact
Subtitle: "Let's Start a Conversation"

2-col Contact Section (jthemes contact-us layout)
  Left col — 4 contact cards, each with icon box:
    📍  Nairobi, Kenya
    📧  exports@yaamucaad.com
    📞  +254 [TBC by client]
    🕐  Mon–Fri 08:00–17:00 EAT (UTC+3)

  Right col — TradeInquiryForm (see Section 7)

Map Section
  Google Maps embed → Nairobi, Kenya
  OR static placeholder if Maps API key not available

Footer
```

---

## 7. TRADE INQUIRY FORM

```tsx
// components/contact/TradeInquiryForm.tsx
// Uses: react-hook-form + zod

Fields:
  fullName     text     required
  companyName  text     required
  email        email    required
  phone        tel      optional
  country      select   required
    — GCC:     UAE | Saudi Arabia | Qatar | Kuwait | Oman | Bahrain
    — Europe:  Netherlands | Germany | United Kingdom | France | Belgium
    — Other
  product      select   required
    — [all 14 product names] + "Multiple Products" + "Not Sure Yet"
  volume       select   required
    — 500–1,000 kg/week
    — 1,000–5,000 kg/week
    — 5,000–10,000 kg/week
    — 10,000+ kg/week
  incoterm     select   optional
    — FOB Nairobi | CIF Destination | DAP | Not Sure
  message      textarea optional  (minHeight: 120px)

Submit: "Send Trade Inquiry →"  (olive, full-width)

Below form: "We do not share your information with third parties.
             We respond to all enquiries within 24 hours."

Success state:
  Replace form with olive-pale card:
  ✓ icon + "Thank you! We'll be in touch within 24 hours."

Error state:
  Red border on invalid fields, inline error messages below each

Pre-fill from URL:
  /contact?product=hass-avocado → pre-selects "Hass Avocado" in product dropdown
  useSearchParams() to read param on mount
```

**Server action (`app/api/inquiry/route.ts`):**
```ts
// POST handler
// Uses Resend SDK
// To: process.env.CONTACT_EMAIL
// Subject: `New Trade Inquiry — ${product} — ${country}`
// Reply-to: submitter's email
// Body: formatted HTML with all fields
```

---

## 8. PRODUCTS DATA (`data/products.ts`)

```ts
export const products = [
  {
    slug: "hass-avocado",
    name: "Hass Avocado",
    category: "Fruits",
    varieties: "Hass · Fuerte",
    season: "Mar – Oct",
    market: "both",
    cert: "GlobalGAP",
    emoji: "🥑",
    shortDesc: "Rich and creamy, grown at 1,800m+ in Kenya's Central Highlands.",
    fullDesc: "Grown in Kenya's Central Highlands at elevations between 1,500 and 2,200m, our Hass avocados develop the rich, nutty flavour and dense creamy texture that European and GCC retailers demand. Available in sizes 16, 20, 24, and 28 per 4kg carton.",
    packaging: "4kg cartons — sizes 16/20/24/28",
    moq: "1 pallet",
  },
  {
    slug: "mango",
    name: "Mango",
    category: "Fruits",
    varieties: "Kent · Apple · Ngowe",
    season: "Nov – Mar",
    market: "both",
    cert: "GlobalGAP",
    emoji: "🥭",
    shortDesc: "Kent for GCC premium. Apple for EU retail. Ngowe for specialty buyers.",
    fullDesc: "Kent mangoes — large, sweet, low-fibre — are favoured in the UAE and Saudi markets. Apple mangoes are preferred in European retail for bright colour and flavour intensity. Ngowe, the original Kenyan variety, commands premium pricing in specialty markets.",
    packaging: "4kg or 5kg cartons depending on variety",
    moq: "1 pallet",
  },
  {
    slug: "passion-fruit",
    name: "Passion Fruit",
    category: "Fruits",
    varieties: "Purple · Yellow",
    season: "Year-round",
    market: "both",
    cert: "KEPHIS",
    emoji: "🌸",
    shortDesc: "Intensely aromatic, high juice content. From Meru and Thika.",
    fullDesc: "Sourced from Meru, Thika, Nyamira and Kisii. Intensely aromatic with high juice content. Year-round supply. Available in 2kg and 5kg cartons.",
    packaging: "2kg / 5kg cartons",
    moq: "500kg",
  },
  {
    slug: "pineapple",
    name: "Pineapple",
    category: "Fruits",
    varieties: "Smooth Cayenne · MD2",
    season: "Year-round",
    market: "both",
    cert: "KEPHIS",
    emoji: "🍍",
    shortDesc: "High sugar, low acidity. Ideal for fresh-cut and retail segments.",
    fullDesc: "Year-round supply from the Coast and Thika regions. High sugar content, low acidity. Ideal for fresh-cut and retail segments. Available in 10kg cartons, sizes 5–12.",
    packaging: "10kg cartons, sizes 5–12",
    moq: "500kg",
  },
  {
    slug: "banana",
    name: "Banana",
    category: "Fruits",
    varieties: "Cavendish · Gros Michel",
    season: "Year-round",
    market: "gcc",
    cert: "KEPHIS",
    emoji: "🍌",
    shortDesc: "100% drip-irrigated farms. Uniform size, hygienic packing.",
    fullDesc: "100% drip-irrigated farms. Carefully selected, uniform size. Preferred by GCC wholesale markets. Available in 13kg cartons.",
    packaging: "13kg cartons",
    moq: "1 pallet",
  },
  {
    slug: "papaya",
    name: "Papaya",
    category: "Fruits",
    varieties: "Red Lady · Solo",
    season: "Year-round",
    market: "gcc",
    cert: "KEPHIS",
    emoji: "🍈",
    shortDesc: "Sweet, firm, handpicked. Strong GCC wholesale demand.",
    fullDesc: "Fresh, firm papaya. Sweet taste, healthy choice. Available in 4kg cartons, sizes 8–10. Preferred by GCC wholesale and retail buyers.",
    packaging: "4kg cartons, sizes 8–10",
    moq: "500kg",
  },
  {
    slug: "french-beans",
    name: "French Beans",
    category: "Vegetables",
    varieties: "Fine · Extra Fine",
    season: "Year-round",
    market: "both",
    cert: "GlobalGAP",
    emoji: "🫛",
    shortDesc: "Precision-graded to EU spec. Straight pods, MRL compliant.",
    fullDesc: "Precision-graded to EU specification — straight pods, mid-to-dark green, blemish-free. Sourced from Central and Eastern Kenya. Consumer retail packs (200g) or bulk catering. Year-round weekly volumes.",
    packaging: "200g retail packs / 3kg bulk cartons",
    moq: "500kg",
  },
  {
    slug: "sugar-snap-peas",
    name: "Sugar Snap Peas",
    category: "Vegetables",
    varieties: "Cascadia",
    season: "Year-round",
    market: "eu",
    cert: "GlobalGAP",
    emoji: "🟢",
    shortDesc: "Juicy, thick-walled pods. High demand in EU supermarkets.",
    fullDesc: "Cascadia variety. Juicy, thick-walled, plump pods. Highly demanded by EU retail buyers. Packed in flow-wrap or punnet formats for supermarkets.",
    packaging: "150g punnet / flow-wrap",
    moq: "500kg",
  },
  {
    slug: "baby-corn",
    name: "Baby Corn",
    category: "Vegetables",
    varieties: "Standard",
    season: "Year-round",
    market: "both",
    cert: "GlobalGAP",
    emoji: "🌽",
    shortDesc: "Tender and sweet. Retail punnet or bulk catering formats.",
    fullDesc: "Tender, sweet baby corn. Available in retail punnet (200g) or bulk catering packs. Consistent year-round supply to GCC and EU markets.",
    packaging: "200g retail / 3kg bulk",
    moq: "500kg",
  },
  {
    slug: "okra",
    name: "Okra",
    category: "Vegetables",
    varieties: "Clemson Spineless",
    season: "Year-round",
    market: "gcc",
    cert: "KEPHIS",
    emoji: "🫑",
    shortDesc: "Crisp and fresh. High demand in GCC food service markets.",
    fullDesc: "Clemson Spineless variety. Crisp, fresh, carefully graded. Highly demanded across GCC food service and wholesale markets. Available in 3kg cartons.",
    packaging: "3kg cartons",
    moq: "300kg",
  },
  {
    slug: "chillies",
    name: "Chillies",
    category: "Vegetables",
    varieties: "Bird's Eye · Bullet · Habanero",
    season: "Year-round",
    market: "both",
    cert: "GlobalGAP",
    emoji: "🌶️",
    shortDesc: "High heat varieties for GCC and EU specialty markets.",
    fullDesc: "High heat varieties for GCC food service. ABE and Habanero also exported to EU specialty markets. Year-round supply. Available in 3kg and 5kg cartons.",
    packaging: "3kg / 5kg cartons",
    moq: "300kg",
  },
  {
    slug: "fresh-herbs",
    name: "Fresh Herbs",
    category: "Herbs",
    varieties: "Basil · Coriander · Thyme · Rosemary",
    season: "Year-round",
    market: "eu",
    cert: "GlobalGAP",
    emoji: "🌿",
    shortDesc: "Aromatic and vibrant. Packaged for EU retail herb formats.",
    fullDesc: "Aromatic and vibrant herbs packaged for European retail formats. Strong demand in Dutch, German and UK supermarket herb categories. Available in 100g bunches or retail pots.",
    packaging: "100g bunches / retail pots",
    moq: "200kg",
  },
  {
    slug: "courgette",
    name: "Courgette",
    category: "Vegetables",
    varieties: "Green · Yellow",
    season: "Year-round",
    market: "eu",
    cert: "GlobalGAP",
    emoji: "🥒",
    shortDesc: "Firm, consistent sizing. Preferred by NL and UK retailers.",
    fullDesc: "Firm, consistent sizing. Available in green and yellow varieties. Preferred by Netherlands and UK retailers. Packed in 5kg cartons.",
    packaging: "5kg cartons",
    moq: "500kg",
  },
  {
    slug: "watermelon",
    name: "Watermelon",
    category: "Fruits",
    varieties: "Sugar Baby · Crimson Sweet",
    season: "Seasonal",
    market: "gcc",
    cert: "KEPHIS",
    emoji: "🍉",
    shortDesc: "High sugar content. Strong seasonal GCC market demand.",
    fullDesc: "High sugar content. Strong seasonal demand across GCC markets. Available in loose or netted packing, 8–12kg per fruit.",
    packaging: "Loose / netted, 8–12kg per unit",
    moq: "1 pallet",
  },
]
```

---

## 9. COPY REFERENCE

```
HERO H1:
"From Kenya's Highlands to Your Market — Fresh."

HERO SUB:
"Premium fruits and vegetables, sourced from Kenya's most fertile growing
regions and delivered to GCC and European markets with full certification
and cold chain integrity."

HERO ARABIC (decorative):
"يا معاذ"

FOUNDING STORY (About page):
"In Somali, Yaa Mucaad means 'mother of promise.' It is a name that speaks
of commitment, of reliability, of something given and honoured. That meaning
sits at the heart of how we operate.

Founded with a clear purpose: to connect Kenya's exceptional agricultural
talent to the world's most demanding markets — and to do it with the
consistency and professionalism those markets require.

Operating from Nairobi, we work directly with certified growers and farming
cooperatives across the Central Highlands, Rift Valley, Eastern Province,
and the Coast. We don't just buy and ship — we build relationships with
farmers, invest in post-harvest handling, and stand behind every consignment."

MISSION:
"To be the most reliable Kenyan fresh produce exporter for GCC and European
buyers — delivering premium quality, full documentation, and responsive
service on every order."

QUALITY HEADLINE:
"We Clear Every Border Before You Do"

QUALITY INTRO:
"Compliance isn't an afterthought — it's built into how we source, pack,
and document every shipment. A single rejected consignment costs more than
money. Our certifications and documentation protocols exist to prevent that."

CONTACT INTRO:
"We respond to all genuine trade enquiries within 24 hours. Whether you're
a first-time importer or an established buyer diversifying supply — we're
ready to discuss volumes, pricing, seasonality, and logistics."
```

---

## 10. ENVIRONMENT VARIABLES (`.env.local`)

```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=exports@yaamucaad.com
NEXT_PUBLIC_WHATSAPP=+254XXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 11. ABSOLUTE RULES

```
1. NO PRICES anywhere on the site — zero price fields, ever.

2. NO DARK BACKGROUND — light cream/white theme throughout.
   Olive (#4A5C2F) is for text, buttons, accents, topbar — NOT page backgrounds.

3. MULTIPAGE — every route is its own page.tsx in app/[route]/.
   This is NOT a single-page scroll app.

4. INNER PAGE BANNER on every page except Home —
   title + breadcrumb strip below navbar (jthemes pattern).

5. JTHEMES LAYOUT PATTERNS — study the reference URLs and replicate
   the exact section structure, card layout, and spacing system.
   Then apply Yaa Mucaad brand colours and content on top.

6. PRODUCT CARDS — follow jthemes card structure.
   Image swap on hover. Category badge top-left. Market badge top-right.
   NO price. "Request Inquiry" + "Details →" in footer.

7. CATEGORY CIRCLES — must be circular (border-radius: 50%).
   olive-pale bg, olive border, emoji centred, name below.
   Hover: lift + shadow. Do not use rectangles.

8. ARABIC يا معاذ — hero section ONLY. Decorative. Gold, 32px, dir=rtl.
   Never in navigation, labels, or UI elements.

9. WHATSAPP FAB — fixed, bottom-right, all pages.
   href: https://wa.me/${NEXT_PUBLIC_WHATSAPP}

10. FORM PRE-FILL — /contact?product=[slug] pre-selects product dropdown.

11. next/image for ALL images. Placeholder: bg-olive-pale div with emoji.

12. MOBILE-FIRST responsive:
    4-col grids (desktop 1024+) → 2-col (tablet 640–1024) → 1-col (mobile)
```

---

*Yaa Mucaad Global Fruits Export Ltd · Nairobi, Kenya*
*Reference theme: https://jthemes.net/themes/html/organic/index.html*
*shop-list: https://jthemes.net/themes/html/organic/shop-list.html*
*about-us:  https://jthemes.net/themes/html/organic/about-us.html*
*contact:   https://jthemes.net/themes/html/organic/contact-us.html*
