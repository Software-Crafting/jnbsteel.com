# JNB Steel demo plan

Local-first HTML/CSS/vanilla JS demo using the Software Crafting design system. JNB Steel branding: blue primary, red accent, Inter. Roles: Owner, Sales, Store and Dispatch. Fictional dealer/industrial orders around Hisar and Delhi NCR; INR and kg throughout. Product families follow jnbsteel.com; sizes, rates and records are illustrative.

| Page | File | Starting template and catalog components | Sample data |
| --- | --- | --- | --- |
| Overview | index.html | site/landing; hero, feature-grid, card | Working-flow introduction and links to every page |
| Page map | map.html | site/landing; card, stepper | Sales → Store → Dispatch navigation |
| Dashboard | pages/dashboard.html | states/error-retry; app-shell, sidebar, stat, chart, timeline | Pending order value, allocation, stock and delivery priorities |
| Orders | pages/orders.html | states/no-results; data-table, select, dialog | Nine customer orders with grade/size lines and promised dates |
| Order detail | pages/order-detail.html | states/error-retry; tabs, table, description-list, alert | Required/reserved/dispatched kg, values, notes, linked dispatches |
| Stock | pages/stock.html | states/no-results; stat, data-table, dialog | Nine SKUs, on-hand/reserved/free kg, locations and stock receipts |
| Dispatches | pages/dispatches.html | states/no-results; stat, data-table | Preparing, in-transit and delivered dispatch notes |
| Dispatch detail | pages/dispatch-detail.html | states/error-retry; stepper, timeline, table, dialog | Quantity lines, packing, vehicle, transporter, delivery updates |
| Customers | pages/customers.html | states/no-results; data-table, dialog | Six fictional dealers/industrial buyers and their order histories |

Every page gets one top attribution with jnb-steel-demo UTM values and a page-specific content tag. Copy original component runtime files only; reuse the previous demo's tested composition and overlay fixes without carrying over client data, identity, Git state or storage keys.

Navigation: overview/map reach every page; shared app sidebar reaches Dashboard, Orders, Stock, Dispatches and Customers. Customers filter orders; order detail links shortage SKUs to stock receipts and allocated orders to dispatch planning; dispatch detail links back to its order. All data lives in assets/demo-data.js. Reserve atomically, prevent over-allocation, and deduct physical stock once when a planned dispatch moves to transit. Partial dispatches preserve the balance. Include search, sort, filters, CSV downloads, local saving/reset, and a short recorded walkthrough.
