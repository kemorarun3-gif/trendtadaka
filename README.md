# Trend Tadka - Traditional Fashion Store

**Trend Tadka** - Gwalior ka apna Traditional Fashion Store (Ladies + Mens)

- 🌐 **Live Website:** https://trend-tadka-gwalior.web.app
- 📍 **Address:** Petrol Pump, Thatipur, Gwalior (Madhya Pradesh)
- 📞 **Phone:** 9098161630
- ⏰ **Timing:** 10:00 AM - 9:00 PM (Roz khula)

## Features (Website)

- Myntra-style store UI (Maroon + Gold theme)
- 16 products: Ladies (Saree, Suit, Lehenga, Kurti, Gown, Palazzo, Blouse, Nighty) + Mens (Kurta-Pajama, Sherwani, Pathani, Nehru Jacket, Dhoti-Kurta, Shirt, T-Shirt, Jeans)
- Product detail modal (fabric, size, price, care)
- Search bar + Women/Men/Offers filter
- WhatsApp order (direct 9098161630)
- Google Maps location embed
- Ladies + Mens size chart
- Customer reviews with photo
- Delivery / COD / Exchange / Refund policy
- SEO meta tags + JSON-LD schema (Google search ke liye)

## Folder Structure

```
E:\manorma
├── website/          # Website source (index.html)
├── Logo/             # Logo, visiting card, board flex
├── Bill/             # Bill files
├── Stock/            # Stock photos
├── Design/           # Design photos
├── tests/            # Playwright tests
├── rate-list.txt     # Rate list
├── whatsapp-catalog.txt
├── instagram-bio.txt
├── online-setup.txt
├── server.js         # Local static server
└── playwright.config.js
```

## Local Run (Website)

```bash
node server.js
# Browser mein kholein: http://localhost:3000
```

## Tests (Playwright)

Setup:
```bash
npm install
npx playwright install chromium
```

Run tests:
```bash
npm test              # saare tests
npx playwright test --grep "Delivery"   # specific test
npm run report        # test report dekho
```

Tests kya check karte hain:
- Website title, logo, nav
- Search bar aur filters
- 16 products load
- Product detail modal + WhatsApp order button
- Size chart, Delivery/Refund policy
- Google Maps embed, customer reviews
- SEO meta tags
- Mobile viewport

## Deploy (Firebase)

```bash
npm run deploy
# ya
firebase deploy --only hosting --project trend-tadka-gwalior
```

## GitHub Push

```bash
git add -A
git commit -m "changes"
git push
```

---

Made for **Trend Tadka, Thatipur, Gwalior** ❤️
