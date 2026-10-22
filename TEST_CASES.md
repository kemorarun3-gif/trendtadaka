# Trend Tadka - Test Cases

**Project:** Trend Tadka - Traditional Fashion Store  
**URL:** https://trend-tadka-gwalior.web.app  
**Store:** Petrol Pump, Thatipur, Gwalior  
**Phone:** 9098161630  
**Total Test Cases:** 24  
**Status:** 15 automated, 9 manual  

---

## 1. FUNCTIONAL TEST CASES

| TC ID | Module | Test Case | Steps | Expected Result | Priority |
|-------|--------|-----------|-------|-----------------|----------|
| TC01 | Home | Website load check | Open website URL | Homepage loads with Trend Tadka title | High |
| TC02 | Navigation | Logo click | Click Trend Tadka logo in header | Redirects to homepage | High |
| TC03 | Navigation | Nav link - Women | Click WOMEN in nav | Ladies products displayed | High |
| TC04 | Navigation | Nav link - Men | Click MEN in nav | Mens products displayed | High |
| TC05 | Navigation | Nav link - Offers | Click OFFERS in nav | Offers section visible | High |
| TC06 | Navigation | Nav link - About | Click ABOUT in nav | About Us section visible | High |
| TC07 | Navigation | Nav link - Size Chart | Click SIZE CHART in nav | Size chart table visible | High |
| TC08 | Search | Search bar visible | Check search input in header | Search bar present and editable | High |
| TC09 | Search | Search - Sherwani | Type "Sherwani" in search, press Enter | Only Sherwani product cards visible | High |
| TC10 | Search | Search - invalid item | Type "xyz123" in search | No results / empty grid | Medium |
| TC11 | Search | Search - Saree | Type "Saree" in search | Only Saree products visible | High |
| TC12 | Filter | Filter - Women | Click Women button | Only women category cards visible | High |
| TC13 | Filter | Filter - Men | Click Men button | Only men category cards visible | High |
| TC14 | Filter | Filter - All | Click All button | All 16 products visible | High |
| TC15 | Filter | Filter - Offers | Click Offers button | Offer cards visible | Medium |
| TC16 | Product Modal | Open product detail | Click any product card | Modal opens with product image, name, fabric, size, price | High |
| TC17 | Product Modal | Close modal | Click X button or outside modal | Modal closes | High |
| TC18 | Product Modal | WhatsApp button in modal | Click Order on WhatsApp in modal | WhatsApp opens with product name + price | High |
| TC19 | Quick Order | Quick Order button | Click Quick Order on product card | WhatsApp opens with product name | High |
| TC20 | Contact | Phone number | Check contact section | 9098161630 displayed and clickable (tel:) | High |
| TC21 | Contact | Google Maps link | Click Google Maps button | Maps opens with Thatipur, Gwalior location | High |
| TC22 | Contact | Google Maps iframe | Check contact section | Map iframe loads with Thatipur location | High |
| TC23 | Order Banner | Order kaise karein banner | Check hero section banner | 3 steps visible + WhatsApp Order button | Medium |
| TC24 | Footer | Footer links | Check footer | SHOP, HELP links visible | Medium |

---

## 2. UI / UX TEST CASES

| TC ID | Module | Test Case | Expected Result | Priority |
|-------|--------|-----------|-----------------|----------|
| UI01 | Header | Sticky header | Header stays fixed on scroll | High |
| UI02 | Colors | Maroon + Gold theme | Header maroon, accents gold | Medium |
| UI03 | Responsive | Mobile view | Website renders correctly on 375px width | High |
| UI04 | Responsive | Tablet view | Website renders correctly on 768px width | Medium |
| UI05 | Images | Product images | All 16 product images load without broken link | High |
| UI06 | Typography | Font readable | Verdana font, legible sizes | Low |
| UI07 | Spacing | Grid layout | Products arranged in grid, no overlap | Medium |
| UI08 | Buttons | WhatsApp button color | Green (#25D366) WhatsApp buttons | Low |
| UI09 | Links | All nav links clickable | All nav anchors navigate correctly | High |
| UI10 | Focus | Keyboard navigation | Tab key moves focus logically | Medium |

---

## 3. CONTENT TEST CASES

| TC ID | Module | Test Case | Expected Result | Priority |
|-------|--------|-----------|-----------------|----------|
| CT01 | Ladies Category | 8 ladies items | Saree, Suit, Lehenga, Kurti, Gown, Palazzo, Blouse, Nighty | High |
| CT02 | Mens Category | 8 mens items | Kurta-Pajama, Sherwani, Pathani, Nehru Jacket, Dhoti-Kurta, Shirt, T-Shirt, Jeans | High |
| CT03 | Product Count | Total 16 products | Exactly 16 product cards | High |
| CT04 | Price Display | Price shown | Each product shows price (₹) | High |
| CT05 | Size Info | Size mentioned | Each product shows available sizes | High |
| CT06 | Fabric Info | Fabric mentioned | Each product shows fabric type | High |
| CT07 | Offers Section | 3 offers | 2 Kurti FREE, Dulha Set Combo, Family Pack 10% | Medium |
| CT08 | About Section | Store info | Trend Tadka, Petrol Pump Thatipur Gwalior | High |
| CT09 | Reviews | 4 customer reviews | Pooja, Rahul, Sunita, Anjali with stars | Medium |
| CT10 | Policy | Delivery info | Free delivery Gwalior (min ₹500), outside ₹100-200 | High |
| CT11 | Policy | Payment info | COD, UPI, PhonePe, Google Pay, Paytm | High |
| CT12 | Policy | Exchange/Refund | 7 days exchange/refund with bill + tag | High |
| CT13 | Policy | Return process | 5-step return/refund process visible | High |
| CT14 | SEO | Meta title | Contains Trend Tadka + Gwalior + product types | High |
| CT15 | SEO | Meta description | Contains store info and keywords | High |
| CT16 | SEO | Canonical URL | https://trend-tadka-gwalior.web.app/ | Medium |
| CT17 | SEO | Schema.org JSON-LD | ClothingStore schema present | Medium |
| CT18 | SEO | Open Graph tags | og:title, og:description present | Medium |

---

## 4. NEGATIVE / EDGE CASE TEST CASES

| TC ID | Module | Test Case | Steps | Expected Result | Priority |
|-------|--------|-----------|-------|-----------------|----------|
| NE01 | Search | Empty search | Click search, press Enter without typing | All products still visible | Medium |
| NE02 | Search | Special characters | Type "@#$%" in search | No crash, empty or all results | Medium |
| NE03 | Modal | Open modal without product | Try to open modal directly | Error or no modal (graceful) | Low |
| NE04 | WhatsApp | Invalid number check | WhatsApp link uses correct number | Link contains 919098161630 | High |
| NE05 | Network | Slow network | Simulate slow 3G | Page eventually loads (may take longer) | Medium |
| NE06 | Browser | Different browser | Open in Firefox/Edge | Website renders correctly | Medium |
| NE07 | Tab | Multiple tabs | Open website in 2 tabs | Both work independently | Low |

---

## 5. AUTOMATED TEST CASES (Playwright)

These are automated in `tests/website.spec.js`:

| # | Test Case | Status |
|---|-----------|--------|
| AT01 | Website khulti hai aur title sahi hai | ✅ Pass |
| AT02 | Logo aur nav dikh raha hai | ✅ Pass |
| AT03 | Search bar kaam kar raha hai | ✅ Pass |
| AT04 | 16 products load ho rahe hain | ✅ Pass |
| AT05 | Product detail modal khulta hai | ✅ Pass |
| AT06 | WhatsApp order button kaam kar raha hai | ✅ Pass |
| AT07 | Order banner dikh raha hai | ✅ Pass |
| AT08 | Size chart section maujood hai | ✅ Pass |
| AT09 | Delivery aur Refund policy dikh raha hai | ✅ Pass |
| AT10 | Google Maps embed maujood hai | ✅ Pass |
| AT11 | Customer reviews dikh rahe hain | ✅ Pass |
| AT12 | Contact aur phone number sahi hai | ✅ Pass |
| AT13 | SEO meta tags sahi hain | ✅ Pass |
| AT14 | Filter Women / Men kaam kar raha hai | ✅ Pass |
| AT15 | Mobile viewport par bhi website chalti hai | ✅ Pass |

---

## 6. HOW TO RUN TESTS

```bash
# Install dependencies
npm install

# Install browser
npx playwright install chromium

# Run all tests
npm test

# Run specific test
npx playwright test --grep "Delivery"

# Run headed (see browser)
npm run test:headed

# View report
npm run report

# CLI commands
npm run cli:open      # Open website in browser
npm run cli:codegen   # Generate test code by recording actions
npm run cli:screenshot # Take screenshot
npm run cli:pdf       # Save website as PDF
```

---

## 7. TEST ENVIRONMENT

- **Browser:** Chromium (Playwright)
- **URL:** https://trend-tadka-gwalior.web.app (live) / http://localhost:3000 (local)
- **Node.js:** v18+
- **OS:** Windows 10/11

---

**Last Updated:** 22 October 2026  
**Prepared by:** Trend Tadka - Traditional Fashion, Gwalior
