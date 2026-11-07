# Internal workspace implementation map

All 63 catalog workspaces are represented in this static browser demo. Specialized screens and shared supporting-record forms use the same sample state. This is a prototype implementation map, not a claim of production ERP readiness. Conditional external portals are outside scope.

| Catalog ID | Workspace | Page |
| --- | --- | --- |
| CORE-01 | Sign in and access | [signin.html](pages/signin.html) |
| CORE-02 | Role dashboard | [dashboard.html](pages/dashboard.html) |
| CORE-03 | My tasks and approvals | [tasks.html](pages/tasks.html) |
| CORE-04 | Product catalog and variant detail | [catalog.html](pages/catalog.html) |
| CORE-05 | Specifications, units and controlled lists | [specifications.html](pages/specifications.html) |
| CORE-06 | Customer directory | [customers.html](pages/customers.html) |
| CORE-07 | Customer account detail | [customer-account.html](pages/customer-account.html) |
| CORE-08 | Supplier directory and detail | [suppliers.html](pages/suppliers.html) |
| CORE-09 | Company, plant, warehouse and bin setup | [locations.html](pages/locations.html) |
| CORE-10 | Users, roles and approval limits | [access.html](pages/access.html) |
| CORE-11 | Business rules and document settings | [settings.html](pages/settings.html) |
| CORE-12 | Audit trail and document revisions | [audit.html](pages/audit.html) |
| CORE-13 | Enquiries and quotation workspace | [quotations.html](pages/quotations.html) |
| CORE-14 | Sales orders | [orders.html](pages/orders.html) |
| CORE-15 | Sales order detail and amendments | [order-detail.html](pages/order-detail.html) |
| CORE-16 | Allocation and reservation board | [allocations.html](pages/allocations.html) |
| CORE-17 | Promise and shortage planning | [commitments.html](pages/commitments.html) |
| CORE-18 | Material requirements and purchase requests | [requirements.html](pages/requirements.html) |
| CORE-19 | Supplier quotes and purchase orders | [purchase-orders.html](pages/purchase-orders.html) |
| CORE-20 | Goods receipt workspace | [receipts.html](pages/receipts.html) |
| CORE-21 | Incoming inspection | [inspection.html](pages/inspection.html) |
| CORE-22 | Supplier returns and purchase claims | [supplier-returns.html](pages/supplier-returns.html) |
| CORE-23 | Stock overview and availability | [stock.html](pages/stock.html) |
| CORE-24 | Heat, lot, coil and bundle detail | [lots.html](pages/lots.html) |
| CORE-25 | Forward/backward traceability | [traceability.html](pages/traceability.html) |
| CORE-26 | Stock ledger and movement detail | [ledger.html](pages/ledger.html) |
| CORE-27 | Transfers and transit receipts | [transfers.html](pages/transfers.html) |
| CORE-28 | Physical count and stock adjustment | [counts.html](pages/counts.html) |
| CORE-29 | Quality holds and release | [holds.html](pages/holds.html) |
| CORE-30 | Supplier certificates and document repository | [certificates.html](pages/certificates.html) |
| CORE-31 | Dispatch board | [dispatches.html](pages/dispatches.html) |
| CORE-32 | Dispatch detail and delivery evidence | [dispatch-detail.html](pages/dispatch-detail.html) |
| CORE-33 | Picking, packing and label workspace | [packing.html](pages/packing.html) |
| CORE-34 | Weighment and gate release | [weighment.html](pages/weighment.html) |
| CORE-35 | Sales invoices and credit/debit documents | [invoices.html](pages/invoices.html) |
| CORE-36 | Receivables, customer receipts and credit control | [receivables.html](pages/receivables.html) |
| CORE-37 | Purchase invoices and three-way matching | [purchase-invoices.html](pages/purchase-invoices.html) |
| CORE-38 | Payables and supplier payment allocation | [payables.html](pages/payables.html) |
| CORE-39 | Customer returns and complaint cases | [returns.html](pages/returns.html) |
| CORE-40 | Statutory and transport-document workbench | [documents.html](pages/documents.html) |
| CORE-41 | Integrations, outbox and reconciliation | [integrations.html](pages/integrations.html) |
| CORE-42 | Operational reports and exceptions | [reports.html](pages/reports.html) |
| CORE-43 | Data import and opening-balance workbench | [imports.html](pages/imports.html) |
| MFG-01 | Production plan and capacity board | [production.html](pages/production.html) |
| MFG-02 | Work orders | [work-orders.html](pages/work-orders.html) |
| MFG-03 | Work order detail and material genealogy | [work-order.html](pages/work-order.html) |
| MFG-04 | BOM, process routing and specification revisions | [routings.html](pages/routings.html) |
| MFG-05 | Operator job cards and shift entry | [job-cards.html](pages/job-cards.html) |
| MFG-06 | WIP, material issues and unused returns | [wip.html](pages/wip.html) |
| MFG-07 | Coil slitting and cut-to-length batch sheet | [coil-processing.html](pages/coil-processing.html) |
| MFG-08 | Tube and pipe production batch sheet | [tube-processing.html](pages/tube-processing.html) |
| MFG-09 | Wire processing and spool/bundle batch sheet | [wire-processing.html](pages/wire-processing.html) |
| MFG-10 | Output, yield, scrap and remnant reconciliation | [reconciliation.html](pages/reconciliation.html) |
| MFG-11 | Outward job-work and subcontract processing | [job-work.html](pages/job-work.html) |
| MFG-12 | In-process and finished-goods inspection workbench | [production-inspection.html](pages/production-inspection.html) |
| MFG-13 | Nonconformance, rework and corrective action | [nonconformance.html](pages/nonconformance.html) |
| MFG-14 | Issued test certificates and controlled revisions | [test-certificates.html](pages/test-certificates.html) |
| MFG-15 | Finished-goods and dispatch release queue | [releases.html](pages/releases.html) |
| MFG-16 | Machine, station and tooling master | [machines.html](pages/machines.html) |
| MFG-17 | Breakdown and preventive maintenance jobs | [maintenance.html](pages/maintenance.html) |
| MFG-18 | Instruments and calibration | [instruments.html](pages/instruments.html) |
| MFG-19 | Conversion cost and WIP valuation reconciliation | [costing.html](pages/costing.html) |
| MFG-20 | Inspection plans and method/specification revisions | [inspection-plans.html](pages/inspection-plans.html) |

## Data and transaction boundaries

- Actual material units carry source heat, parent links, quantity, ownership, location and quality disposition.
- Allocation is unit-aware. Receipts and produced output are quarantined; QC controls free availability. Holds block ordinary allocation and issue.
- Stock posts to a signed ledger. Dispatch issue is idempotent; invoice creation never creates another issue.
- Production separates output, remnant, scrap, authorized loss, unfinished WIP and unused input returns.
- Transfers, counts, purchase matching, payments, returns/credits and opening imports retain references and audit records.
- Confirmed-order and PO changes preserve prior snapshots. Posted quantities constrain amendments; closing unfulfilled balances does not erase physical history.
- Shared supporting forms maintain specifications, suppliers, locations, role previews, policies, routings, machines, instruments and inspection plans.
- Browser records are editable demonstrations. Real multi-user identity, immutable server audit, accounting ownership, statutory applicability and live devices need the separately planned backend.

## Handoff

Run `node tests/store.test.cjs` for the dependency-free transaction checks. UI review is left to the user as requested. No further video work is included.
