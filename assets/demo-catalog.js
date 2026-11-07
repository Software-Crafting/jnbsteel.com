/* Proposed internal workspaces. All interactions use fictional browser data. */
window.JNB_CATALOG = [
  {
    "id": "CORE-01",
    "page": "signin",
    "title": "Sign in and access",
    "module": "Platform",
    "description": "Sign in; recover access; revoke session",
    "fields": "Identity; company/site scope; session; MFA policy",
    "acceptance": "A disabled user cannot create or approve transactions; site scope is enforced by the server",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-02",
    "page": "dashboard",
    "title": "Role dashboard",
    "module": "Platform",
    "description": "Drill into actionable queues",
    "fields": "Promises; shortages; holds; WIP; receivables; sync exceptions",
    "acceptance": "Dashboard values reconcile to underlying posted records and respect user/site permissions",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-03",
    "page": "tasks",
    "title": "My tasks and approvals",
    "module": "Platform",
    "description": "Approve; reject; delegate; escalate",
    "fields": "Document; requester; reason; revision; approval limit; due time",
    "acceptance": "An approval applies only to the reviewed revision and becomes invalid after a material change",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-04",
    "page": "catalog",
    "title": "Product catalog and variant detail",
    "module": "Masters",
    "description": "Create variants; validate dimensions; disable; view history",
    "fields": "Material class (raw/intermediate/finished/packing/spare/remnant/scrap); family; grade; dimensions; finish; condition; standard/revision; kg and secondary UOM",
    "acceptance": "Different heats do not create duplicate product definitions; incompatible sizes or finishes cannot be substituted silently",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-05",
    "page": "specifications",
    "title": "Specifications, units and controlled lists",
    "module": "Masters",
    "description": "Maintain approved lists; version conversions and acceptance rules",
    "fields": "Grades; dimensions; finishes; standard revisions; UOM; variable-weight rules; tolerances",
    "acceptance": "Actual measured kg remains distinct from theoretical weight and piece/metre counts",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-06",
    "page": "customers",
    "title": "Customer directory",
    "module": "Sales",
    "description": "Search; add; disable; open customer detail",
    "fields": "Dealer/industrial type; billing/ship-to; tax identifiers; contacts; active status",
    "acceptance": "Duplicate accounts are detected; disabling a customer retains transaction history",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-07",
    "page": "customer-account",
    "title": "Customer account detail",
    "module": "Sales",
    "description": "Review account; set approved terms; open linked records",
    "fields": "Sites; POs; rates/contracts; credit exposure; invoices; receipts; certificates; complaints",
    "acceptance": "Outstanding balance distinguishes invoiced receivables from open-order commitments without double counting",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-08",
    "page": "suppliers",
    "title": "Supplier directory and detail",
    "module": "Purchasing",
    "description": "Approve supplier; maintain contacts; view PO/receipt/claim history",
    "fields": "Approved products; addresses; tax identifiers; payment terms; document status; bank-change review",
    "acceptance": "Supplier-bank edits have approval and history; supplier and carrier roles are distinguished",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-09",
    "page": "locations",
    "title": "Company, plant, warehouse and bin setup",
    "module": "Masters",
    "description": "Configure locations; restrict access; disable unused locations",
    "fields": "Legal entity; GST registration mapping; plant; released/quarantine/WIP/scrap/transit bins",
    "acceptance": "A plant is not assumed to be a separate legal entity; transfers preserve ownership and location history",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-10",
    "page": "access",
    "title": "Users, roles and approval limits",
    "module": "Platform",
    "description": "Grant/revoke permissions; manage segregation of duties",
    "fields": "Role; site; actions; approval caps; delegation; access review",
    "acceptance": "A store operator cannot approve their own stock write-off or override a quality hold",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-11",
    "page": "settings",
    "title": "Business rules and document settings",
    "module": "Platform",
    "description": "Version settings; preview impact; approve changes",
    "fields": "Document series; fiscal periods; rate/quantity tolerances; posting policy; effective dates",
    "acceptance": "Changes affect eligible future transactions; historical documents retain their original rules",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-12",
    "page": "audit",
    "title": "Audit trail and document revisions",
    "module": "Platform",
    "description": "Search; export by permission; inspect approvals and reversals",
    "fields": "Actor; time; device/session; before/after; reason; source document; correlation ID",
    "acceptance": "Posted stock and financial events cannot be silently overwritten or deleted",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-13",
    "page": "quotations",
    "title": "Enquiries and quotation workspace",
    "module": "Sales",
    "description": "Capture enquiry; price; approve exceptions; revise; convert to order",
    "fields": "Buyer requirements; grade/size/finish; qty/UOM; rate basis; validity; freight/tax terms; revision",
    "acceptance": "The accepted quotation revision is frozen and copied to the order; expired quotes need explicit review",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-14",
    "page": "orders",
    "title": "Sales orders",
    "module": "Sales",
    "description": "Create; filter; confirm; open detail",
    "fields": "Customer PO; line promises; ordered/open kg; commercial/production/QC/billing states",
    "acceptance": "Partial fulfilment and promised dates can be inspected by product line and schedule, not only at order-header level",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-15",
    "page": "order-detail",
    "title": "Sales order detail and amendments",
    "module": "Sales",
    "description": "Confirm; amend unfulfilled balance; close balance; request allocation; link procurement/production",
    "fields": "Specification revision; qty; rate/UOM; allocation; dispatches; invoices; cancellations; notes",
    "acceptance": "Confirmed, shipped and billed quantities have separate histories; return receipt does not silently reopen an order",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-16",
    "page": "allocations",
    "title": "Allocation and reservation board",
    "module": "Inventory",
    "description": "Reserve; partially reserve; release; reassign through approval",
    "fields": "Order line/schedule; eligible lot/unit; location; kg; priority; release reason",
    "acceptance": "Two simultaneous requests cannot reserve the same final stock; picking remains part of the same reservation",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-17",
    "page": "commitments",
    "title": "Promise and shortage planning",
    "module": "Sales",
    "description": "Review due/overdue; revise promise; request buy/make; notify account owner",
    "fields": "Line due dates; eligible free stock; expected receipts; capacity commitments; revision reasons",
    "acceptance": "A proposed receipt or unfinished production batch is not presented as dispatch-ready stock",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-18",
    "page": "requirements",
    "title": "Material requirements and purchase requests",
    "module": "Purchasing",
    "description": "Raise request; consolidate demand; approve; request quotes",
    "fields": "Order demand; available lots; planned supply; reorder levels; requested date; approval",
    "acceptance": "Demand already reserved or covered by a firm PO is not ordered again without an exception",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-19",
    "page": "purchase-orders",
    "title": "Supplier quotes and purchase orders",
    "module": "Purchasing",
    "description": "Compare quotes; approve PO; receive partially; amend or close balance",
    "fields": "Supplier quote; revision; sizes; qty/UOM; rate basis; delivery schedule; inspections",
    "acceptance": "Receipts and supplier invoices reference the approved PO lines and tolerances",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-20",
    "page": "receipts",
    "title": "Goods receipt workspace",
    "module": "Receiving",
    "description": "Record partial GRN; attach documents; send to inspection; reject excess",
    "fields": "PO; supplier challan; received kg/pieces; weigh ticket; heat/lot/unit IDs; MTC; discrepancies",
    "acceptance": "Required-inspection material enters quarantine and cannot increase allocatable stock before release",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-21",
    "page": "inspection",
    "title": "Incoming inspection",
    "module": "Quality",
    "description": "Inspect; attach results; accept; hold; reject; request review",
    "fields": "Receipt; sample; method/spec revision; readings; supplier MTC; accepted/held/rejected kg",
    "acceptance": "QC disposition quantities reconcile with received quantities; store users cannot self-release held material",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-22",
    "page": "supplier-returns",
    "title": "Supplier returns and purchase claims",
    "module": "Purchasing",
    "description": "Authorize return; issue material; follow supplier claim; reconcile credit",
    "fields": "Receipt/lot; rejection reason; return quantity; approval; transport document; supplier credit",
    "acceptance": "Returned kg cannot exceed the eligible source lot; physical return and supplier credit remain separate linked events",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-23",
    "page": "stock",
    "title": "Stock overview and availability",
    "module": "Inventory",
    "description": "Filter; inspect lot; see shortage; drill into ledger",
    "fields": "SKU; lot/unit; location; disposition; owned/third-party; on-hand/reserved/free; actual kg; secondary UOM",
    "acceptance": "Free stock excludes quality holds, third-party material and transit stock; every balance drills into posted entries",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-24",
    "page": "lots",
    "title": "Heat, lot, coil and bundle detail",
    "module": "Inventory",
    "description": "Receive units; label; split through authorized conversion; inspect history",
    "fields": "Immutable unit ID; supplier heat; lot; parent-child links; grade/size; weights; certificate; location",
    "acceptance": "SKU, heat, batch and handling-unit IDs are distinct; a split preserves origin without overwriting the parent unit",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-25",
    "page": "traceability",
    "title": "Forward/backward traceability",
    "module": "Quality",
    "description": "Trace upstream/downstream; identify affected shipments; export evidence",
    "fields": "Heat/lot/unit; receipt; transformations; holds; customers; dispatches; returned material",
    "acceptance": "Trace a delivered bundle to its actual source material and identify all affected deliveries of a held source lot",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-26",
    "page": "ledger",
    "title": "Stock ledger and movement detail",
    "module": "Inventory",
    "description": "Filter balances; view immutable entry; request reversal",
    "fields": "Posting ID; source document; unit/lot; location; quality status; signed qty; reason; reversal link",
    "acceptance": "Opening balance plus all signed movements equals closing stock by unit/lot, ownership, location and disposition",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-27",
    "page": "transfers",
    "title": "Transfers and transit receipts",
    "module": "Inventory",
    "description": "Request; issue; receive partially; investigate discrepancy",
    "fields": "Source/destination; unit/lot; kg; transfer type; issue/receipt times; legal-document references",
    "acceptance": "Issued stock leaves source availability and is counted in transit until destination receipt; it cannot be free at both sites",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-28",
    "page": "counts",
    "title": "Physical count and stock adjustment",
    "module": "Inventory",
    "description": "Plan count; blind count; recount; approve variance; post adjustment",
    "fields": "Count scope/time; unit/lot/bin; expected/actual; freeze policy; variance reason",
    "acceptance": "Movements during a count are frozen or reconciled explicitly; adjustments require independent approval",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-29",
    "page": "holds",
    "title": "Quality holds and release",
    "module": "Quality",
    "description": "Hold; extend hold to descendants; approve release; reject; rework",
    "fields": "Unit/lot; affected kg; reason; linked inspections; disposition; approver; release time",
    "acceptance": "A hold immediately blocks new reservations, ordinary production consumption and dispatch; existing reservations are flagged; authorized rework/testing uses an explicit controlled route",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-30",
    "page": "certificates",
    "title": "Supplier certificates and document repository",
    "module": "Quality",
    "description": "Upload; verify linkage; mark superseded; attach approved copies to delivery",
    "fields": "Original MTC issuer; document revision; linked heat/lot; test evidence; verification; access",
    "acceptance": "The system does not fabricate a supplier MTC or infer a test result from the grade name",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-31",
    "page": "dispatches",
    "title": "Dispatch board",
    "module": "Dispatch",
    "description": "Plan full/partial load; group by route; inspect exceptions",
    "fields": "Order/schedule; pick status; packing; QC/credit/doc blocks; vehicle; ETA; kg",
    "acceptance": "Only eligible reserved quantities enter a load; blockers remain visible before gate release",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-32",
    "page": "dispatch-detail",
    "title": "Dispatch detail and delivery evidence",
    "module": "Dispatch",
    "description": "Confirm issue; update ETA; record POD; create claims; reverse through controlled action",
    "fields": "Unit-level picks; net/gross; vehicle; documents; transit; POD; shortages/damage",
    "acceptance": "A repeated submission or retry posts one stock issue only; POD captures delivered quantity rather than just a status label",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-33",
    "page": "packing",
    "title": "Picking, packing and label workspace",
    "module": "Dispatch",
    "description": "Pick; check; repack; print labels/packing list; reconcile variances",
    "fields": "Pick list; unit/heat; scans or manual IDs; pieces/metres/kg; bundles; labels; packing marks",
    "acceptance": "Wrong grade, finish, size, lot or held material is blocked; picked stock is not reserved a second time",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-34",
    "page": "weighment",
    "title": "Weighment and gate release",
    "module": "Dispatch",
    "description": "Enter/import ticket; reweigh; reconcile loaded kg; authorize departure",
    "fields": "Ticket ID; scale/device; calibration reference; vehicle tare/gross/net; material net kg; packing weight; tolerance; reweigh history; gate approval",
    "acceptance": "Ticket corrections retain originals; vehicle load, packaging and material weights are reconciled on the approved basis before the authorized stock-issue event",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-35",
    "page": "invoices",
    "title": "Sales invoices and credit/debit documents",
    "module": "Finance",
    "description": "Prepare; approve; post to accounting owner; request permitted correction",
    "fields": "Dispatch/order references; actual billable qty/UOM; rates; charges; configured taxes; issuer; external IDs",
    "acceptance": "Invoicing cannot issue stock again when dispatch already did; submitted document amounts are not edited silently",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-36",
    "page": "receivables",
    "title": "Receivables, customer receipts and credit control",
    "module": "Finance",
    "description": "Allocate receipts; review aging; request credit release; reconcile balances",
    "fields": "Authoritative outstanding; invoice/receipt allocations; advances; credit limit; overdue; exception approvals",
    "acceptance": "Invoice exposure and order commitments follow one agreed credit model without double counting; stale accounting data is flagged",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-37",
    "page": "purchase-invoices",
    "title": "Purchase invoices and three-way matching",
    "module": "Finance",
    "description": "Match PO/receipt/invoice; resolve variance; approve; post to accounting owner",
    "fields": "Supplier invoice; PO; accepted GRN; prices; quantities; charges; match tolerances; credit documents",
    "acceptance": "Payment cannot be approved against an unmatched invoice outside permitted tolerances without an authorized exception",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-38",
    "page": "payables",
    "title": "Payables and supplier payment allocation",
    "module": "Finance",
    "description": "Plan payments; approve separately; allocate; reconcile",
    "fields": "Supplier balance; invoice due dates; advances; payment references; approvals; ledger acknowledgments",
    "acceptance": "Payment preparation and approval are separated; repeated sync does not create duplicate payment entries",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-39",
    "page": "returns",
    "title": "Customer returns and complaint cases",
    "module": "Service",
    "description": "Authorize return; receive to quarantine; investigate; approve credit or linked replacement",
    "fields": "Original dispatch/unit/lot; complaint; received kg; inspection; disposition; credit/replacement decision",
    "acceptance": "A returned item never becomes immediately free stock; replacement and financial credit follow explicit approved decisions",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-40",
    "page": "documents",
    "title": "Statutory and transport-document workbench",
    "module": "Finance",
    "description": "Prepare/validate; send or import authoritative IDs; query uncertain result; resolve failure",
    "fields": "Legal entity; applicable rule version; invoice/challan; IRN/QR; e-way references; status; errors; cancellation links",
    "acceptance": "A PDF or CSV is not treated as a generated government document; timeout recovery checks existing status before a retry",
    "applicability": "Required for legal entities and transaction types to which the current verified rules apply"
  },
  {
    "id": "CORE-41",
    "page": "integrations",
    "title": "Integrations, outbox and reconciliation",
    "module": "Platform",
    "description": "Map; queue; retry safely; inspect failure; reconcile against the authoritative system",
    "fields": "System-of-record mapping; document IDs; request IDs; acknowledgments; payload versions; reconciliation differences",
    "acceptance": "Every external document has one owner and a unique mapping; duplicates and unknown outcomes cannot silently post twice",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-42",
    "page": "reports",
    "title": "Operational reports and exceptions",
    "module": "Reporting",
    "description": "Filter by site/date/customer/grade; drill down; export under access rules",
    "fields": "Open orders; promises; shortages; aging stock; QC holds; dispatch balances; AR/AP; valuation source",
    "acceptance": "Report totals match source documents and the selected posting cutoff; pending order value is not reported as sales revenue",
    "applicability": "All deployments"
  },
  {
    "id": "CORE-43",
    "page": "imports",
    "title": "Data import and opening-balance workbench",
    "module": "Platform",
    "description": "Dry run; deduplicate; reconcile; approve; post; retain import evidence",
    "fields": "Import batch; source file; mapping; validation errors; lots/units; opening reservations; signoff",
    "acceptance": "Opening stock reconciles by lot and location; unknown heat origins are explicitly marked, never invented",
    "applicability": "All deployments"
  },
  {
    "id": "MFG-01",
    "page": "production",
    "title": "Production plan and capacity board",
    "module": "Planning",
    "description": "Plan make-to-order/stock; sequence jobs; identify bottlenecks",
    "fields": "Demand schedules; free input; current WIP; machine/shift capacity; expected finish/QC dates",
    "acceptance": "A production promise uses available input and approved route capacity; tentative plans do not become released stock",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  },
  {
    "id": "MFG-02",
    "page": "work-orders",
    "title": "Work orders",
    "module": "Production",
    "description": "Release; prioritize; split partial completion; open detail",
    "fields": "Plan; input/output specifications; target kg; due date; route revision; status",
    "acceptance": "Released work orders retain their specification and route revision even after master updates",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  },
  {
    "id": "MFG-03",
    "page": "work-order",
    "title": "Work order detail and material genealogy",
    "module": "Production",
    "description": "Issue/reconcile material; post outputs; view lineage and cost; close only after checks",
    "fields": "Actual input units; consumption; returned input; operation results; output child units; balance; rework",
    "acceptance": "Actual input-to-output unit links are retained; a parent coil cannot be consumed twice",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  },
  {
    "id": "MFG-04",
    "page": "routings",
    "title": "BOM, process routing and specification revisions",
    "module": "Masters",
    "description": "Define; approve; supersede; copy route; record permitted alternatives",
    "fields": "Product family; operation sequence; stations; input/output rules; parameters; methods; approval revision",
    "acceptance": "Unapproved route changes cannot alter an in-process or historical job",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  },
  {
    "id": "MFG-05",
    "page": "job-cards",
    "title": "Operator job cards and shift entry",
    "module": "Production",
    "description": "Start; pause; record partial work; attach inspection; submit shift",
    "fields": "Station; operator; input units; start/stop; settings/readings; good/held/scrap/pending kg; downtime",
    "acceptance": "Partial unfinished material remains pending/WIP rather than being automatically classified as loss",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  },
  {
    "id": "MFG-06",
    "page": "wip",
    "title": "WIP, material issues and unused returns",
    "module": "Production",
    "description": "Issue to job; move WIP; return unused material; reconcile aging",
    "fields": "Unit/lot ownership; input issue; operation/bin; pending kg; unused input; rework queue",
    "acceptance": "RM, WIP and FG movements balance; unused input returned to stock is not also reported as consumed",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  },
  {
    "id": "MFG-07",
    "page": "coil-processing",
    "title": "Coil slitting and cut-to-length batch sheet",
    "module": "Production",
    "description": "Plan cuts; record outputs/remnant; label child units; reconcile material",
    "fields": "Mother coil; input weight/width; output strips/sheets; child IDs; trim; remnant; measured weights",
    "acceptance": "Child outputs, scrap, remnant/WIP and approved loss reconcile to the mother coil without creating material",
    "applicability": "Enable only for confirmed in-house coil/slitting/CTL operations"
  },
  {
    "id": "MFG-08",
    "page": "tube-processing",
    "title": "Tube and pipe production batch sheet",
    "module": "Production",
    "description": "Capture approved route operations; inspect; bundle; link output units",
    "fields": "Actual input strip/coils; grade; OD/section/wall/length; relevant forming/welding/sizing/cut/finish operations; bundles",
    "acceptance": "Finished bundle provenance points to actual input; specified dimensions and applicable tests are checked before release",
    "applicability": "Enable only for confirmed in-house pipe/tube operations"
  },
  {
    "id": "MFG-09",
    "page": "wire-processing",
    "title": "Wire processing and spool/bundle batch sheet",
    "module": "Production",
    "description": "Record passes and outputs where required; inspect; pack; retain lineage",
    "fields": "Actual rod/wire input; diameter/condition; approved drawing/annealing/finishing route; spool IDs; kg; test plan",
    "acceptance": "Diameter, condition and output units follow the approved route; input ownership and heat links remain intact",
    "applicability": "Enable only for confirmed in-house wire operations"
  },
  {
    "id": "MFG-10",
    "page": "reconciliation",
    "title": "Output, yield, scrap and remnant reconciliation",
    "module": "Production",
    "description": "Review mass balance; approve deviation; post separate output/scrap units; close batch",
    "fields": "Input consumed; accepted/held outputs; unfinished WIP; reusable remnants; recoverable scrap; approved loss; reason",
    "acceptance": "Accounting categories are mutually exclusive; unexplained differences block closure rather than becoming hidden process loss",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  },
  {
    "id": "MFG-11",
    "page": "job-work",
    "title": "Outward job-work and subcontract processing",
    "module": "Purchasing",
    "description": "Issue; receive partially; inspect; reconcile material; match service invoice",
    "fields": "Processor; issued owned units; expected output; charges; return kg; scrap; balance at processor; transport references",
    "acceptance": "Material at processor stays identified and owned correctly; output, returned input, scrap and outstanding balances reconcile",
    "applicability": "Required if JNB sends material to outside processors"
  },
  {
    "id": "MFG-12",
    "page": "production-inspection",
    "title": "In-process and finished-goods inspection workbench",
    "module": "Quality",
    "description": "Record tests; verify; hold; trigger rework/retest; approve results",
    "fields": "Operation/work order; samples; test plan revision; instrument; measurements; pass/fail; supporting evidence",
    "acceptance": "Only the applicable approved methods and acceptance limits can produce a release decision",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  },
  {
    "id": "MFG-13",
    "page": "nonconformance",
    "title": "Nonconformance, rework and corrective action",
    "module": "Quality",
    "description": "Contain; authorize rework/rejection; retest; assign action; verify closure",
    "fields": "Failed test; affected units; containment; cause; disposition; rework route; corrective action; verification",
    "acceptance": "A failed material unit cannot bypass the hold through a renamed batch or a replacement certificate",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  },
  {
    "id": "MFG-14",
    "page": "test-certificates",
    "title": "Issued test certificates and controlled revisions",
    "module": "Quality",
    "description": "Compile from verified results; approve; issue; supersede; attach to dispatch",
    "fields": "Order/dispatch units; actual test evidence; issuer; certificate type; revision; signer; supersession",
    "acceptance": "No invented results or automatic certification to an unverified standard; issued documents match the supplied units",
    "applicability": "Required where JNB issues or supplies controlled test certificates"
  },
  {
    "id": "MFG-15",
    "page": "releases",
    "title": "Finished-goods and dispatch release queue",
    "module": "Quality",
    "description": "Review blockers; authorize FG/dispatch release; revoke with reason",
    "fields": "Finished unit; route completion; inspection; open NC; certificate requirements; release authority",
    "acceptance": "Stock remains physically visible but unavailable while required quality evidence or release is incomplete",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  },
  {
    "id": "MFG-16",
    "page": "machines",
    "title": "Machine, station and tooling master",
    "module": "Maintenance",
    "description": "Maintain capabilities; link tooling; schedule unavailable periods",
    "fields": "Plant/station; capability; tooling; available shifts; approved parameters; service records",
    "acceptance": "A machine unavailable for maintenance is not offered as usable capacity",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  },
  {
    "id": "MFG-17",
    "page": "maintenance",
    "title": "Breakdown and preventive maintenance jobs",
    "module": "Maintenance",
    "description": "Raise breakdown; schedule PM; record work; approve return to service",
    "fields": "Asset; symptoms; downtime; priority; spares; service task; maintenance completion; release",
    "acceptance": "Production downtime and maintenance records reconcile; completing a service task does not auto-release an unsafe/unapproved asset",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  },
  {
    "id": "MFG-18",
    "page": "instruments",
    "title": "Instruments and calibration",
    "module": "Quality",
    "description": "Register; schedule; attach calibration; restrict expired equipment; assess affected tests",
    "fields": "Instrument; range/resolution; method linkage; calibration certificate; due date; out-of-tolerance assessment",
    "acceptance": "Tests using unavailable or overdue instruments are blocked or routed through the explicitly approved exception policy",
    "applicability": "Required where measurements/instruments support controlled inspection or production decisions"
  },
  {
    "id": "MFG-19",
    "page": "costing",
    "title": "Conversion cost and WIP valuation reconciliation",
    "module": "Finance",
    "description": "Compare planned/actual cost; reconcile batch/period; approve posting through owner ledger",
    "fields": "Authorized input cost; labour/machine/service charges; yields; scrap treatment; WIP/FG; accounting mapping",
    "acceptance": "Financial valuation follows the chosen accounting system/policy; selling rates are not used as production costs",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  },
  {
    "id": "MFG-20",
    "page": "inspection-plans",
    "title": "Inspection plans and method/specification revisions",
    "module": "Quality",
    "description": "Approve method/limits; version template; assign to product/route",
    "fields": "Product/customer requirement; inspection stage; method; limit; sampling rule; instrument; revision; approval",
    "acceptance": "An old inspection retains its approved method revision even when a future acceptance limit changes",
    "applicability": "Manufacturing scope; confirm the actual plant workflow"
  }
];
