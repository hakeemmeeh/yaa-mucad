# Yaa Mucaad — Kenya Fresh Produce Export

> Premium B2B export website for Kenyan fresh produce — avocados, mangoes, vegetables and herbs — serving EU and GCC markets.

---

## 🌿 Overview

**Yaa Mucaad** is a Next.js 16 B2B export marketing website for a premium Kenyan fresh produce exporter. It showcases the product catalogue, sourcing regions, certifications, and provides a trade inquiry form for wholesale buyers across Europe and the Gulf.

## ✨ Features

- 📦 Full product catalogue with filtering by category and market (EU / GCC / Both)
- 🌍 Target markets overview (EU & GCC)
- 🏷️ Certifications page (GlobalGAP, KEPHIS, and more)
- 📋 Trade inquiry form with email delivery via [Resend](https://resend.com)
- 📱 WhatsApp direct contact FAB
- 🎠 Full-bleed cinematic hero slider
- 🚀 SEO-ready with per-page metadata

## 🛠️ Tech Stack

| Layer       | Tech                          |
|-------------|-------------------------------|
| Framework   | Next.js 16 (App Router)       |
| Language    | TypeScript                    |
| Styling     | Tailwind CSS v4               |
| Fonts       | Poppins + Outfit (Google)     |
| Forms       | React Hook Form + Zod         |
| Email       | Resend API                    |
| Icons       | Lucide React                  |
| Deployment  | Vercel (recommended)          |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/yaa-mucaad.git
cd yaa-mucaad

# Install dependencies
npm install

# Copy the environment variables
cp .env.example .env.local
```

### Environment Variables

Fill in your `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx         # Get from https://resend.com
CONTACT_EMAIL=exports@yaamucaad.com    # Where inquiry emails are sent
NEXT_PUBLIC_WHATSAPP=+254XXXXXXXXX     # WhatsApp number for the FAB
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX         # Optional: Google Analytics 4
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
yaa-mucaad/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── markets/
│   ├── products/
│   │   └── [slug]/         # Dynamic product detail pages
│   ├── quality/
│   ├── services/
│   └── api/inquiry/        # Trade inquiry email API route
├── components/
│   ├── home/               # Homepage section components
│   ├── layout/             # Navbar, Footer, TopBar, WhatsApp FAB
│   ├── products/           # Product card, grid, filter sidebar
│   └── shared/             # Reusable UI primitives
├── data/                   # Static data (products, categories, markets)
├── lib/                    # Utility functions (email sending, etc.)
└── public/
    ├── products/           # Product photography (PNG)
    ├── categories/         # Category images
    └── logo/               # Brand logo assets
```

## 📬 Email Inquiries

The contact form at `/contact` uses the Resend API to deliver trade inquiry emails. To enable:

1. Create a free account at [resend.com](https://resend.com)
2. Add your domain and verify it
3. Create an API key and add it to `.env.local` as `RESEND_API_KEY`

## 🚢 Deployment

This project is optimised for **Vercel**:

1. Push your repo to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Set the environment variables in the Vercel dashboard
4. Deploy — it's live!

For other platforms, run:

```bash
npm run build
npm start
```

## 📄 License

This project is proprietary. All rights reserved © Yaa Mucaad Exports.
