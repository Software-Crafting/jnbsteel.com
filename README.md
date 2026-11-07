# JNB Steel operations demo

A connected browser demo covering all **63 internal workspaces** from the researched operations and manufacturing plan, plus overview and page map. Plain HTML, CSS and vanilla JavaScript using the Software Crafting design system. No installation, build step or runtime CDN.

## Open locally

Open `index.html`, or serve this directory:

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000. Serving gives consistent browser storage across pages. All paths are relative for GitHub Pages. Browser data uses `jnb-steel-demo-v2`; the previous version's records are separate. **About this demo → Reset sample data** restores the seed.

## Workspaces

The overview and searchable [page map](map.html) reach every workspace. The sidebar groups the same records by team and includes workspace search.

| Group | Workspaces |
| --- | --- |
| Home | Dashboard, tasks and approvals |
| Sales | Quotations, orders, order detail/amendments, customers, customer account, delivery promises |
| Purchase | Material requests, suppliers, purchase orders, receipts, supplier returns |
| Material | Catalog, stock, material units, reservations, ledger, transfers, counts, WIP/remnants |
| Production | Plan, work orders, work order detail, routings, job cards, coil/tube/wire batch views, mass reconciliation, outward processing, machines, maintenance |
| Quality | Incoming/production inspection, holds, traceability, nonconformance, source/issued certificates, release queue, inspection plans, instruments |
| Dispatch | Dispatch board/detail, picking/packing, weighment/gate |
| Finance | Sales invoices, receivables, purchase matching, payables, returns/credits, document references, conversion costs |
| Reports and handoffs | Operational reports, offline integration outbox |
| Administration | Demo entry, specifications, locations, users/roles, policy records, opening imports, audit |

[IMPLEMENTATION.md](IMPLEMENTATION.md) maps all 63 catalog IDs to their page files. `assets/demo-catalog.js` supplies navigation metadata. Shared fictional records live in `assets/demo-data.js`; `demo-store.js` implements transaction rules, while `demo-operations.js`, `demo-modules.js` and `demo.js` render the workspaces. `demo-ui.js` handles popup placement and responsive shell behavior.

## Connected paths

Start with [incoming inspection](pages/inspection.html?id=BND-GRN-024). GRN-26024 has 1,000 kg of square tube in quarantine; this physical stock is excluded from free availability. Accept it after entering sample evidence and an available instrument, then open SO-26048. Allocate 1,500 kg square tube and 500 kg rectangular tube. Plan a partial dispatch, verify its picked unit labels, record a matching weighment ticket and move it to transit. Stock is issued once; its order balance remains open. Create a linked sample invoice and allocate a fictional customer receipt.

For production, open WO-26008. Start the job to transfer input into WIP. Record partial output, remnant, scrap and authorized loss, or return unused input. Unfinished material stays WIP. Finished output enters quarantine, retains actual parent links and needs inspection before allocation. Coil and wire sample jobs are also available.

Other paths include approved PO → receipt → partial QC → three-way supplier-invoice match → independently approved sample payment; same-owner transfers through transit; independently reviewed count adjustments; outward processor reconciliation; customer return quarantine and separate credits; maintenance availability; and validate/preview/post opening CSV imports.

## Scope and limits

All customers, quantities, rates, grades, dimensions, locations, vehicles, tests and operational records are fictional. Product families and branding reference [JNB Steel](https://www.jnbsteel.com/). INR invoice/payment examples are material-only, with freight and taxes excluded. Certificates and exported documents are marked sample.

This is a static browser prototype. Role entry and user/approval records are walkthrough controls, not real authentication or server permissions. It has no backend, real stock connection, carrier tracking, bank payments, accounting, government submission or hardware integration. Integration outcomes are explicitly simulated. Supporting policy records document proposed rules; they do not install a live configurable rules engine. The production board does not claim measured finite-capacity scheduling. A live implementation requires the architecture and discovery work in the system plan.

The stock ledger opens on 7 November 2026. Opening quantities already reflect earlier sample production and deliveries; historical deliveries without picked-unit evidence are not presented as exact genealogy. Source heat/certificate values supplied as Unknown remain explicitly incomplete.

## Code checks

```bash
node tests/store.test.cjs
```

The dependency-free checks cover material/ledger reconciliation, atomic allocation, partial QC, hold containment, exactly-once dispatch/invoice behavior, payments/credits, production/WIP, unused returns, transfers, count approvals, calibration and amendments. UI review is handed to the user; no further UI testing or video work is part of the final coding handoff.

## Planning and deployment

[System plan](planning/STANDARD_SYSTEM_PLAN.md), [page catalog](planning/PAGE_CATALOG.csv) and [research notes](planning/RESEARCH_NOTES.md) preserve the original proposal and assumptions. The 63 internal workspaces are now represented in the demo; conditional external portals and advanced expansion remain outside this release. `PLAN.md` records the build approach.

Origin: [Software-Crafting/jnbsteel.com](https://github.com/Software-Crafting/jnbsteel.com). For GitHub Pages, keep `.nojekyll` and select `main` and **/(root)** in repository settings. Each page has a top Software Crafting attribution with client-specific UTM values. Brand tokens remain in `tokens/theme.css`; the reference design-system repository is unchanged.
