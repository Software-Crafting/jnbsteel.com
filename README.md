# JNB Steel demo

A local, clickable order, stock and dispatch workspace for JNB Steel Industries. Plain HTML, CSS and vanilla JavaScript, using the Software Crafting design system. No install, build step or runtime CDN.

## Open locally

Open `index.html`, or serve the directory:

```bash
cd /home/deepak/SC/jnb-steel-demo
python3 -m http.server 8000
```

Visit http://localhost:8000. Serving the directory gives consistent browser storage across tabs. Direct `file://` navigation also works; keep the walkthrough in one tab when file storage is restricted.

## Screens

| Screen | File |
| --- | --- |
| Overview and video | `index.html` |
| Page map | `map.html` |
| Dashboard | `pages/dashboard.html` |
| Orders | `pages/orders.html` |
| Order detail | `pages/order-detail.html` |
| Stock | `pages/stock.html` |
| Dispatches | `pages/dispatches.html` |
| Dispatch detail | `pages/dispatch-detail.html` |
| Customers | `pages/customers.html` |

Order detail defaults to `SO-26048`; dispatch detail defaults to `DN-26017`. Lists open their specific record through the `id` query parameter. Customer rows filter the order list. Shortage links take you to the correct stock variant and return to the source order after a receipt.

## Suggested walkthrough

1. Review the dashboard and switch between Owner, Sales, Store and Dispatch views.
2. Open `SO-26048`, Aarav Fabrication Works. It requires 1,500 kg of square tube and 500 kg of rectangular tube. The square tube is 580 kg short.
3. Follow **Receive SS-202-SQ-025**, choose **Receive stock**, enter 1,000 kg and a new receipt reference, then save.
4. Back on the order, choose **Allocate stock**. Both product lines are reserved against free stock. Physical on-hand quantities stay unchanged.
5. Choose **Create dispatch**. Enter 600 kg square tube and 200 kg rectangular tube to plan a partial 800 kg load.
6. Open **Update dispatch**, select **In transit**, and fill vehicle, transporter, packages, gross weight and the milestone note. Gross weight must cover the net load.
7. Saving the transit update issues stock once, reduces the reservation and updates the dispatched quantity. Further transit updates do not issue stock again.
8. Return to the order: 1,200 kg remains to dispatch. Plan its balance when ready, or add notes and download the order summary.

Also try a multi-product order, a new customer, family/status filtering, search, sorting, paging, selected-row exports and dispatch/packing CSV downloads. Phone and tablet record cards keep actions visible; **Sort by** provides the same sorting as desktop headers. The dashboard's disclosure provides loading and error previews with retry.

Use **About this demo → Reset sample data** to restore the starting records. Browser edits do not modify `assets/demo-data.js`.

## Video

Choose **Watch short demo** on the overview, or open `assets/jnb-steel-walkthrough.webm`. It is a silent browser recording with visible step captions. The player includes an English caption track and a readable walkthrough transcript. The video is also available as a download from its dialog.

## Branding and sample data

The blue/red brand palette, JNB logo and product families come from [JNB Steel's website](https://www.jnbsteel.com/) and [product page](https://www.jnbsteel.com/product/). Coils, pipes/tubes and wires are represented. Customers, grades, dimensions, rates, locations, quantities, vehicles and delivery commitments are fictional demonstration records. INR values are sample material rates, with freight and taxes excluded.

Brand inputs are in `tokens/theme.css`; component styling and behavior were copied from [Software Crafting's design system](https://github.com/Software-Crafting/design-system). The reference repository was kept unchanged. `assets/demo.css` composes the pages; `assets/demo-ui.js` handles popup placement, sticky attribution offsets, responsive sorting and overlay focus; `assets/demo.js` provides the linked workflow and validation.

Each page has a top agency attribution with `jnb-steel-demo` UTM source/campaign values and a page-specific content tag such as `orders-top`.

This prototype uses local browser data. Roles are walkthrough views. It has no backend, authentication, real stock connection, carrier tracking, email delivery, accounting or statutory document integration. CSV documents are illustrative.

## Standard-system planning

The [researched system plan](planning/STANDARD_SYSTEM_PLAN.md) covers the proposed operations and manufacturing scope, current demo gaps, phased delivery, roles, data controls and acceptance scenarios. The [page catalog](planning/PAGE_CATALOG.csv) records fields, actions, dependencies and applicability for each workspace; [research notes](planning/RESEARCH_NOTES.md) distinguish company evidence from recommendations and discovery questions.

This is a planning proposal. The additional workspaces are not implemented in this demo. The original `PLAN.md` remains the build record for the current prototype.

## GitHub Pages

The repository is [Software-Crafting/jnbsteel.com](https://github.com/Software-Crafting/jnbsteel.com). Keep `.nojekyll` and select `main` and **/(root)** under GitHub **Settings → Pages**. All page and asset paths are relative, supporting `https://software-crafting.github.io/jnbsteel.com/`. GitHub Pages activation is managed separately in repository settings.
