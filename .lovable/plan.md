

# Scalelist Chrome Extension Landing Page - Faithful Reproduction

## Overview
Recreate the Scalelist landing page exactly as shown in the two screenshots, preserving all layout, structure, copy, sections, and visuals.

## Sections to Build (in order from screenshots)

### 1. Hero Section
- Two rating badges top-left: "4.8/5 on Google" and "4.9/5 on Capterra" with stars
- Large heading: "Get the best emails and mobile numbers, Anywhere"
- Subtext about verified professional emails and phone numbers
- Two CTAs: "Try for free" (blue button with arrow) and "Talk to Sales" (outline)
- "7000+ COMPANIES SAVE TIME USING SCALELIST" text
- Right side: browser mockup showing Scalelist extension panel (Daniel Scott at Zapier, contact details, Add to list button)

### 2. Trust Bar
- Logo row: ElevenLabs, CLOUDERA, stripe, J.P.Morgan, ORACLE NetSuite, BD

### 3. Features Section
- Blue uppercase label: "REVEAL VERIFIED EMAILS AND MOBILE NUMBERS ON ANY SITE OR PROFILE"
- Heading: "Find Contact Information & Build Targeted Lists Anywhere"
- Two feature cards with image placeholders:
  - Left: "On Social & Professional Profiles" with 3 bullet points
  - Right: "On Any Website" with 3 bullet points

### 4. Accuracy Section (dark background)
- "JOIN 7,000+ COMPANIES USING SCALELIST"
- Heading: "The most accurate data"
- Left: Data coverage card showing "up to 95%" with bar chart (Comp 1-5 vs Scalelist)
- Right: "Sales Teams Winning with Scalelist's Data" with two testimonial cards

### 5. Testimonial Section (light card)
- Quote: "I can access the contact data I need instantly"
- Extended quote text about Chrome extension
- Author: Joseph Aboutariya, Director, Sales Development at FlashIntel
- Right side: landscape photo placeholder

### 6. Weekly Refreshed Data Section
- Stars rating 4.8 + GDPR Compliant badge
- Heading: "Weekly refreshed data"
- Two CTAs: "Get started for free" (blue) and "View all reviews"
- Four G2 badge icons (Most Used 2025, Tier 1 Accuracy, High Performer, Top 50)

### 7. FAQ Section
- "FAQ" pill badge
- Heading: "Frequently asked questions"
- 4 accordion items (first expanded)

### 8. Footer CTA
- Scalelist icon
- Heading: "Try our data quality for free!"
- Two CTAs: "Get started for free" (blue) and "Talk to Sales" (with arrow)

### 9. Footer
- Copyright: "2026 Scalelist. All rights reserved. Built for high-fidelity data extraction."

## Technical Approach

### Files to Create/Modify

| File | Action |
|------|--------|
| `src/index.css` | Add brand colors (blue #2563eb, dark #1a1a1a, warm bg #f8f7f4, card #f3f0e8), Inter font |
| `tailwind.config.ts` | Add brand color palette and custom font |
| `src/components/Hero.tsx` | Hero section + Trust bar |
| `src/components/Features.tsx` | Two-column feature cards |
| `src/components/Accuracy.tsx` | Dark data accuracy section with chart and testimonials |
| `src/components/Testimonial.tsx` | Large testimonial quote with image |
| `src/components/WeeklyData.tsx` | Ratings, GDPR badge, G2 badges |
| `src/components/FAQ.tsx` | Accordion FAQ section |
| `src/components/FooterCTA.tsx` | Final CTA section |
| `src/components/Footer.tsx` | Simple copyright footer |
| `src/pages/Index.tsx` | Assemble all sections in order |
| `index.html` | Update title to "Scalelist" |

### Design Tokens
- Primary blue: #2563eb
- Dark/heading: #1a1a1a
- Page background: #f8f7f4 (warm off-white)
- Card background: #f3f0e8 (warm beige)
- Dark section bg: #1a1a2e or similar dark navy
- Font: Inter (via Google Fonts)
- Border radius: rounded-xl for cards

### Image Handling
- Browser mockup in Hero: built with HTML/CSS to replicate the extension panel
- Company logos in Trust Bar: rendered as styled text (matching the screenshot where they appear as text)
- Bar chart in Accuracy: built with simple CSS/divs
- G2 badges: styled with CSS circles and text
- Testimonial photo: placeholder image
- Feature card images: placeholder boxes with descriptive text

### No Additional Dependencies Needed
- The page is static with an accordion (using existing Radix accordion component)
- No animation library required for initial faithful reproduction
- All UI built with Tailwind CSS and existing shadcn/ui components

