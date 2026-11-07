# Verification

Verified locally in Chromium using the existing Playwright and axe tooling. No dependencies were installed in the demo.

- Nine pages opened at 320, 375, 640, 768, 1024, 1280, 1440 and 1920 px: 72 page/viewport checks. No document overflow, missing icons, clipped statistics, hidden record actions, JavaScript errors or failed local assets.
- Touch checks cover the nine pages at 320, 375, 390 and 768 px, including client/page UTM links, role selection and a dynamically added product dropdown inside a dialog.
- All 33 design-system contrast pairs passed for the JNB theme. Desktop/mobile WCAG A/AA scans passed on nine pages and the dynamic product-selector dialog: 20 scans with no violations.
- Allocation was blocked for SO-26048 while SS-202-SQ-025 had a 580 kg shortage. Neither product line was partially reserved after the failed allocation.
- A 1,000 kg receipt increased the variant's on-hand stock from 920 to 1,920 kg. Allocation reserved 1,500 kg square tube and 500 kg rectangular tube without changing physical stock.
- A planned partial dispatch kept stock unchanged. Moving a 600 kg test load to transit reduced on-hand and reserved kg once and increased the order's dispatched kg. Repeating the transit update did not deduct stock again.
- A second balance load correctly cleared the remaining reservation. All stock positions stayed non-negative, and total reservations never exceeded physical stock. Every line maintained reserved plus dispatched kg within the ordered kg.
- The order CSV retained its INR 397,000 base value; the pending value reached zero after the balance was issued. Packing-list quantities and gross weight matched the saved load.
- New multi-product orders, new industrial customers, notes, auto-filled sample rates, search, no-results clearing, paging and selected-row exports passed.
- Numeric kg sorting was verified across comma-formatted weights. Phone/tablet record cards expose sorting through the custom select. Mobile sidebar opening and closing releases background focus correctly.
- The recorded video was checked for playable metadata, actual playback, caption-track presence and pausing when the dialog closes. The overview also includes a readable transcript. Direct-file navigation was checked in one tab.
- The original design-system repository remains unchanged. Delivered source contains no previous-client identity, storage keys or sample records.

The stock quantities are opening demonstration balances, already reflecting the sample dispatch history. Recent movements are a short activity feed, not a complete accounting ledger.

Browser verification was performed in Chromium; other browser engines and live business integrations were not exercised.
