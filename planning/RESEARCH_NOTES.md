# JNB Steel standard-system research

Research reviewed: 7 November 2026. Purpose: define a proposed operating-system scope for a stainless steel manufacturer/supplier, rather than expand the existing prototype with unrelated ERP menus.

This is desk research using company publications, official product documentation and government/authorized portal material. It is not an observation of JNB's actual factory, accounting setup or quality procedures. Recommendations in the companion plan are design proposals to validate with the team.

## What is established and what is not

| Finding | Evidence | Planning consequence |
| --- | --- | --- |
| JNB advertises stainless steel coils, pipes/tubes and wires, with several product forms. | [JNB product page](https://www.jnbsteel.com/product/) | Model product family, grade, dimensions, finish and supply condition. Do not treat every size as a new application page. |
| Its public pages describe customer-specific requirements and production-planning flexibility. | [JNB about page](https://www.jnbsteel.com/about/) | Plan for specification revisions, promised schedules and configurable routes. Actual operations still need validation. |
| The company lists multiple plant locations and a corporate office. | [JNB product/contact information](https://www.jnbsteel.com/product/) | Include plant/location access and transfer capability in the design; confirm legal entities, registrations and stock ownership separately. |
| The present demo covers order entry, simple SKU-level reservations, stock receipts and partial dispatch. | Local `PLAN.md`, `README.md` and application source | It is a useful sales walkthrough, but it lacks persistent server controls, unit/heat genealogy, controlled QC, production accounting and finance integration. |
| Public product descriptions do not establish JNB's complete process sequence or installed systems. | Limits of the company evidence above | Do not assume a melt shop, casting line, every annealing/welding process, an existing Tally installation, or an API-ready weighbridge. |

The coil, tube and wire pages provide further product context: [coils](https://www.jnbsteel.com/coil/), [tubes](https://www.jnbsteel.com/tube/), [wires](https://www.jnbsteel.com/wire/). They support the family distinction, not a claim that every proposed manufacturing operation happens at every JNB plant.

## Workflow benchmarks used

These sources describe their own products or processes. They are useful benchmarks, not a selection of ERP software and not evidence of JNB's installed workflow.

| Ref | Primary source | Research takeaway and limit |
| --- | --- | --- |
| S01 | [JNB Steel products](https://www.jnbsteel.com/product/) | Company-specific product families and listed locations. All demo/customer/transaction data remains illustrative. |
| S02 | [JNB Steel about](https://www.jnbsteel.com/about/) | Company-specific context for manufacturing and customer requirements. Actual plant routes and scope require discovery. |
| S03 | [Jindal Stainless manufacturing process](https://www.jindalstainless.com/stainless-steel-products-manufacturing-process/) | A manufacturer's example shows several processing stages, customization and quality checks. It is not JNB's routing; do not import an integrated mill's entire process into this proposal. |
| S04 | [ERPNext manufacturing overview](https://docs.frappe.io/erpnext/manufacturing) | Planning, work orders, workstations, operation records and inspection are established manufacturing-system concepts. Version and fit must be assessed if this platform is considered. |
| S05 | [ERPNext job cards](https://docs.frappe.io/erpnext/job-card) | Operation-level execution can record actual work and distinguish partial unfinished production from final loss. This supports a separate WIP balance in the proposed design. |
| S06 | [ERPNext batch traceability](https://docs.frappe.io/erpnext/serial-and-batch-traceability-report) | Forward/backward tracing depends on actual input-output links. Merely listing several raw and finished batches in one document does not prove the exact material relationship. |
| S07 | [ERPNext quality inspection](https://docs.frappe.io/erpnext/quality-inspection) | Receiving, production and outgoing checks can be linked to transactions and approved inspection criteria. This supports quality disposition as a control, not just an uploaded certificate. |
| S08 | [ERPNext credit limits](https://docs.frappe.io/erpnext/credit-limit) | Credit controls require an agreed exposure model, current financial balances and authorized overrides. JNB's actual credit terms and system of record are unknown. |
| S09 | [ERPNext sales order](https://docs.frappe.io/erpnext/sales-order) | Commercial commitment, delivery, billing and payment are separate stages; partial fulfilment and line schedules matter. The proposed system must not equate an order with recognized revenue. |
| S10 | [ERPNext stock entry](https://docs.frappe.io/erpnext/stock-entry) and [batch records](https://docs.frappe.io/erpnext/batch) | Movement documents, locations and batch identity provide a more defensible balance than an editable stock-total field. Actual posting policy must be chosen for the implementation. |
| S11 | [Odoo by-products](https://www.odoo.com/documentation/18.0/applications/inventory_and_mrp/manufacturing/workflows/byproducts.html) | Recoverable by-products can have their own stock quantities. The proposed design separates scrap, reusable remnants, unfinished WIP and unexplained loss. |
| S12 | [ERPNext subcontracting](https://docs.frappe.io/erpnext/subcontracting) and [inward subcontracting](https://docs.frappe.io/erpnext/subcontracting-inward) | Sending owned material to processors and receiving customer-owned material are different ownership workflows. Either becomes required when that business activity is in scope. |
| S13 | [TallyPrime XML integration](https://help.tallysolutions.com/xml-integration/) and [integration prerequisites](https://help.tallysolutions.com/pre-requisites-for-integrations/) | A Tally integration is technically possible, subject to the actual installation and company setup. Start by selecting document ownership and reconciling results; do not assume a working connector merely because an API format exists. |
| S14 | [Authorized IRP reporting-window advisory, 27 March 2025](https://einvoice6.gst.gov.in/content/revised-time-limit-for-e-invoice-reporting-for-businesses-with-aato-of-%E2%82%B910-crores-above/) | An example of a dated rule change that affects document reporting. This proposal does not infer JNB's turnover or legal applicability from it. Recheck current requirements before activation. |
| S15 | [NIC e-way bill portal updates](https://docs.ewaybillgst.gov.in/ewb.html) and [official FAQ](https://docs.ewaybillgst.gov.in/html/faq1.html) | Transport documents and government identifiers need their own operational status and error handling where applicable. Older FAQ versions can contain earlier rules, so effective dates and current notifications must be checked. |

## Design conclusions drawn from the research

1. **Start with material identity.** The target model separates product specification, heat/source batch, physical coil/bundle/spool and location. This is our design recommendation for steel traceability, not a claim about JNB's current labels.
2. **Quality changes availability.** Physically received material can be visible in stock yet unavailable for allocation or dispatch while held for inspection.
3. **Production needs a material balance.** Input, output, remnant, scrap, rework and unfinished WIP cannot be compressed into one editable quantity or one generic loss percentage.
4. **Dispatch and billing are related but distinct.** A reserved order is not a stock issue, and an invoice must not cause a second issue after a delivery document already posted it.
5. **Standard features depend on the business model.** Job work, exports and intercompany billing are conditional requirements, not decorations to add to every plant.
6. **Keep financial ownership explicit.** Compare extending a suitable existing ERP with building a custom operations layer. Assess the real system and licensing before making a platform recommendation or a commercial quote.

## Questions that desk research cannot answer

- What operations are performed at each plant, with what input/output labels and actual units of measure?
- Which processes are outsourced, and does JNB process customer-owned material?
- Which product/customer requirements require inspection, MTCs or additional test certificates? Who can release or sign them?
- What is the current accounting/ERP system, and which system should own invoices, stock valuation and receivables?
- Which legal entities, registrations, transaction classes and current statutory rules apply?
- How are piece counts, lengths, actual kg, weighbridge variances, packing and partial deliveries handled today?
- Which real documents, sample exports and devices can be used in a pilot?

No numeric acceptance limits, material density constants, statutory thresholds, current tax rates, certification claims, software prices or implementation dates have been invented in the companion plan.
