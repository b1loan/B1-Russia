
B1 RUSSIA - Static Demo Website
=================================

Contents:
- index.html            (Main "LOAN NOW" landing page)
- membership.html       (Membership fee upload & QR)
- calc.html             (Monthly payment calculation & confirmation)
- review.html           (Reviewing application - 72-hour timer)
- dashboard.html        (Dashboard placeholder)
- contact.html          (Contact page)
- about.html            (About / Company details)
- assets/style.css      (Site CSS)
- assets/app.js         (Site JavaScript)
- assets/logo.png       (Logo reference: not bundled; uses remote permalink)
- assets/qr.png         (QR reference: not bundled; uses remote permalink)

Notes:
- This is a static front-end prototype (no server-side processing).
- File upload inputs only simulate the UX and store files in browser memory; no files are uploaded to any server.
- Verification timers and review timers are client-side only. The 48-hour verification timer starts 5 minutes after verification is initiated, as requested. The review timer is a 72-hour countdown shown on the review page.
- Loan amounts are selected on index.html and passed between pages using localStorage.
- All loans are set to 12 months with 3% monthly interest (as requested). Calculation is performed in calc.html.
- Replace logo & QR permalinks (already present inside pages) if you prefer to bundle images locally.

How to use:
1. Unzip the archive and open index.html in a browser.
2. Navigate through Loan Now → Membership Fee → Monthly Calculation → Review flows.
3. For testing timers, you can adjust system time or the JS constants inside assets/app.js if desired.

Legal / Disclaimer:
This is a UI prototype only. It does not process real loans or payments. Do NOT use this for real lending without appropriate server-side processing and legal compliance. The company details used were provided by you and should be validated and used responsibly.
