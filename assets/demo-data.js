/* Fictional demonstration data. Grades, dimensions, rates and stock are illustrative, not a JNB quotation. */
window.JNB_DEMO = {
  version: 2, asOf: '2026-11-07', role: 'Owner',
  personas: {Owner:'JNB team',Sales:'Nikhil Sharma',Store:'Vikram Singh',Dispatch:'Neha Bansal',Production:'Aman Malik',Quality:'Meera Rao',Finance:'Kavita Gupta'},
  customers: [
    {id:'C-101',name:'Aravali Metal Distributors',type:'Dealer',contact:'Amit Jain',city:'Jaipur',email:'amit@aravalimetal.example',terms:'Advance before dispatch'},
    {id:'C-102',name:'Northern Steel Traders',type:'Dealer',contact:'Pooja Malhotra',city:'Gurugram',email:'pooja@northernsteel.example',terms:'Agreed dealer terms'},
    {id:'C-103',name:'Aarav Fabrication Works',type:'Industrial',contact:'Rahul Verma',city:'New Delhi',email:'rahul@aaravfab.example',terms:'Advance before dispatch'},
    {id:'C-104',name:'Meridian Process Equipment',type:'Industrial',contact:'Sana Khan',city:'Faridabad',email:'sana@meridianprocess.example',terms:'Against purchase order'},
    {id:'C-105',name:'Westline Engineering',type:'Industrial',contact:'Dev Patel',city:'Ahmedabad',email:'dev@westline.example',terms:'Advance before dispatch'},
    {id:'C-106',name:'Malwa Steel Supply',type:'Dealer',contact:'Gurpreet Singh',city:'Ludhiana',email:'gurpreet@malwasteel.example',terms:'Agreed dealer terms'}
  ],
  products: [
    {sku:'SS-304-RP-038',name:'Round pipe',family:'Pipes & tubes',grade:'304',size:'38.1 OD × 1.2 wall × 6000 length',finish:'Polished',onHand:1800,min:500,rate:265,location:'Plant 1 · Tube bay A'},
    {sku:'SS-202-SQ-025',name:'Square tube',family:'Pipes & tubes',grade:'202',size:'25 × 25 × 1.0 wall × 6000 length',finish:'Satin',onHand:920,min:1200,rate:178,location:'Plant 1 · Tube bay B'},
    {sku:'SS-304-CO-080',name:'Cold rolled coil',family:'Coils',grade:'304',size:'0.8 thickness × 1000 width',finish:'2B',onHand:4800,min:2000,rate:228,location:'Plant 2 · Coil bay A'},
    {sku:'SS-316-CO-120',name:'Cold rolled coil',family:'Coils',grade:'316L',size:'1.2 thickness × 1250 width',finish:'BA',onHand:2600,min:800,rate:342,location:'Plant 2 · Coil bay B'},
    {sku:'SS-304-WR-160',name:'Bright wire',family:'Wires',grade:'304',size:'1.6 diameter',finish:'Bright',onHand:2200,min:600,rate:252,location:'Plant 3 · Wire bay A'},
    {sku:'SS-202-RP-050',name:'Round pipe',family:'Pipes & tubes',grade:'202',size:'50.8 OD × 1.2 wall × 6000 length',finish:'Polished',onHand:3100,min:1000,rate:182,location:'Plant 1 · Tube bay C'},
    {sku:'SS-430-CO-060',name:'Cold rolled coil',family:'Coils',grade:'430',size:'0.6 thickness × 1000 width',finish:'2B',onHand:560,min:1000,rate:158,location:'Plant 2 · Coil bay C'},
    {sku:'SS-304-RT-040',name:'Rectangular tube',family:'Pipes & tubes',grade:'304',size:'40 × 20 × 1.2 wall × 6000 length',finish:'Satin',onHand:1600,min:500,rate:260,location:'Plant 1 · Tube bay D'},
    {sku:'SS-304-WR-080',name:'Fine wire',family:'Wires',grade:'304',size:'0.8 diameter',finish:'Bright',onHand:700,min:400,rate:270,location:'Plant 3 · Wire bay B'}
  ],
  orders: [
    {id:'SO-26048',customer:'C-103',po:'AFW/26/118',subject:'Railing fabrication order',owner:'Nikhil Sharma',created:'2026-11-06',due:'2026-11-09',lines:[{sku:'SS-202-SQ-025',qty:1500,rate:178,reserved:0,dispatched:0},{sku:'SS-304-RT-040',qty:500,rate:260,reserved:0,dispatched:0}],notes:[{date:'2026-11-06',by:'Nikhil Sharma',text:'Buyer needs both sizes together. Keep each grade labelled separately.'}]},
    {id:'SO-26047',customer:'C-102',po:'NST/26/204',subject:'Dealer coil and wire replenishment',owner:'Ritu Saini',created:'2026-11-05',due:'2026-11-08',lines:[{sku:'SS-304-CO-080',qty:2000,rate:228,reserved:2000,dispatched:0},{sku:'SS-304-WR-160',qty:500,rate:252,reserved:500,dispatched:0}],notes:[]},
    {id:'SO-26046',customer:'C-104',po:'MPE/26/092',subject:'Process equipment coil requirement',owner:'Nikhil Sharma',created:'2026-11-05',due:'2026-11-10',lines:[{sku:'SS-316-CO-120',qty:800,rate:342,reserved:0,dispatched:0}],notes:[{date:'2026-11-05',by:'Nikhil Sharma',text:'Confirm width and finish against the buyer PO before allocation.'}]},
    {id:'SO-26045',customer:'C-101',po:'AMD/26/341',subject:'Round pipe dealer order',owner:'Ritu Saini',created:'2026-11-02',due:'2026-11-08',lines:[{sku:'SS-304-RP-038',qty:1800,rate:265,reserved:800,dispatched:1000}],notes:[{date:'2026-11-05',by:'Neha Bansal',text:'First 1,000 kg left Hisar. Remaining 800 kg is reserved.'}]},
    {id:'SO-26044',customer:'C-105',po:'WLE/26/172',subject:'Bright wire for component production',owner:'Nikhil Sharma',created:'2026-10-31',due:'2026-11-09',lines:[{sku:'SS-304-WR-160',qty:1400,rate:252,reserved:800,dispatched:600}],notes:[]},
    {id:'SO-26043',customer:'C-106',po:'MSS/26/218',subject:'Round pipe retail replenishment',owner:'Ritu Saini',created:'2026-11-03',due:'2026-11-09',lines:[{sku:'SS-202-RP-050',qty:1600,rate:182,reserved:1600,dispatched:0}],notes:[]},
    {id:'SO-26042',customer:'C-101',po:'AMD/26/346',subject:'430 coil for dealer stock',owner:'Ritu Saini',created:'2026-11-04',due:'2026-11-11',lines:[{sku:'SS-430-CO-060',qty:900,rate:158,reserved:0,dispatched:0}],notes:[]},
    {id:'SO-26041',customer:'C-102',po:'NST/26/199',subject:'Rectangular tube order',owner:'Nikhil Sharma',created:'2026-11-02',due:'2026-11-07',lines:[{sku:'SS-304-RT-040',qty:700,rate:260,reserved:700,dispatched:0}],notes:[]},
    {id:'SO-26040',customer:'C-104',po:'MPE/26/084',subject:'Fine wire workshop delivery',owner:'Ritu Saini',created:'2026-10-27',due:'2026-11-05',lines:[{sku:'SS-304-WR-080',qty:500,rate:270,reserved:0,dispatched:500}],notes:[]}
  ],
  dispatches: [
    {id:'DN-26017',order:'SO-26045',status:'In transit',posted:true,lines:[{sku:'SS-304-RP-038',qty:1000}],vehicle:'HR 39 AF 4021',transporter:'Northway Roadlines',packages:20,grossWeight:1028,eta:'2026-11-08',created:'2026-11-05',events:[{date:'2026-11-05',status:'Preparing',by:'Neha Bansal',text:'20 bundles checked against the order.'},{date:'2026-11-06',status:'In transit',by:'Neha Bansal',text:'Left Hisar for Jaipur. First partial dispatch of this order.'}]},
    {id:'DN-26016',order:'SO-26044',status:'Delivered',posted:true,lines:[{sku:'SS-304-WR-160',qty:600}],vehicle:'HR 46 D 2186',transporter:'Western Freight',packages:12,grossWeight:618,eta:'2026-11-06',created:'2026-11-03',events:[{date:'2026-11-03',status:'Preparing',by:'Neha Bansal',text:'Wire coils packed and labelled.'},{date:'2026-11-04',status:'In transit',by:'Neha Bansal',text:'Vehicle departed Hisar.'},{date:'2026-11-06',status:'Delivered',by:'Neha Bansal',text:'Buyer acknowledged 600 kg. Order balance remains open.'}]},
    {id:'DN-26015',order:'SO-26040',status:'Delivered',posted:true,lines:[{sku:'SS-304-WR-080',qty:500}],vehicle:'HR 39 G 7612',transporter:'NCR Cargo',packages:10,grossWeight:514,eta:'2026-11-05',created:'2026-11-03',events:[{date:'2026-11-03',status:'Preparing',by:'Neha Bansal',text:'Packing completed.'},{date:'2026-11-04',status:'In transit',by:'Neha Bansal',text:'Left Hisar for Faridabad.'},{date:'2026-11-05',status:'Delivered',by:'Neha Bansal',text:'Full order delivered.'}]}
  ],
  movements: [
    {date:'2026-11-06',sku:'SS-304-RP-038',type:'Dispatch',qty:1000,reference:'DN-26017',note:'First lot to Aravali Metal Distributors'},
    {date:'2026-11-05',sku:'SS-202-SQ-025',type:'Receipt',qty:920,reference:'GRN-26022',note:'Opening demonstration receipt'},
    {date:'2026-11-04',sku:'SS-304-WR-160',type:'Dispatch',qty:600,reference:'DN-26016',note:'Partial order dispatch'}
  ]
};

/* All added records are fictional. Opening balances include activity before 7 November. */
(() => {
  const d = window.JNB_DEMO;
  d.products.forEach(p => { p.materialClass = 'Finished product'; p.specification = 'Sample buyer specification, revision A'; });
  d.products.push(
    {sku:'SS-202-ST-100',name:'Slit strip input',family:'Coils',grade:'202',size:'1.0 thickness × 100 width',finish:'2B',onHand:1230,min:500,rate:154,location:'Plant 1 · Raw material bay',materialClass:'Raw material',specification:'Sample tube input, revision A'},
    {sku:'SCRAP-202',name:'Segregated 202 scrap',family:'Recovered material',grade:'202',size:'Mixed offcuts',finish:'Unprocessed',onHand:40,min:0,rate:0,location:'Plant 1 · Scrap bay',materialClass:'Scrap',specification:'Recovery stock, not sale-grade product'}
  );
  d.customers.forEach(c => { c.creditLimit = 5000000; });
  d.suppliers = [
    {id:'SUP-101',name:'Haryana Alloy Supplies',city:'Hisar'},
    {id:'SUP-102',name:'Northline Stainless Materials',city:'Delhi'}
  ];
  d.units = d.products.filter(p => !['SS-202-SQ-025','SS-202-ST-100','SCRAP-202'].includes(p.sku)).map((p,i) => ({id:'UNIT-'+(26001+i),sku:p.sku,heat:'H-SAMPLE-'+(101+i),qty:p.onHand,originalQty:p.onHand,quality:'Released',location:p.location,owner:'JNB Steel',source:'Opening balance',certificate:'MTC-SAMPLE-'+(101+i),parents:[],created:'2026-11-07'}));
  d.units.push(
    {id:'COIL-SOURCE-007',sku:'SS-202-ST-100',heat:'H-SAMPLE-202-07',qty:0,originalQty:1000,quality:'Consumed',location:'Plant 1 · Raw material bay',owner:'JNB Steel',source:'GRN-SAMPLE-007',certificate:'MTC-SAMPLE-007',parents:[],created:'2026-11-05'},
    {id:'BND-SQ-007',sku:'SS-202-SQ-025',heat:'H-SAMPLE-202-07',qty:920,originalQty:920,quality:'Released',location:'Plant 1 · Tube bay B',owner:'JNB Steel',source:'WO-26007',workOrder:'WO-26007',certificate:'MTC-SAMPLE-007',parents:['COIL-SOURCE-007'],created:'2026-11-06'},
    {id:'REM-007',sku:'SS-202-ST-100',heat:'H-SAMPLE-202-07',qty:30,originalQty:30,quality:'Held',location:'Plant 1 · Remnant bay',owner:'JNB Steel',source:'WO-26007',workOrder:'WO-26007',certificate:'MTC-SAMPLE-007',parents:['COIL-SOURCE-007'],created:'2026-11-06'},
    {id:'SCRAP-007',sku:'SCRAP-202',heat:'H-SAMPLE-202-07',qty:40,originalQty:40,quality:'Recovery',location:'Plant 1 · Scrap bay',owner:'JNB Steel',source:'WO-26007',workOrder:'WO-26007',certificate:'MTC-SAMPLE-007',parents:['COIL-SOURCE-007'],created:'2026-11-06'},
    {id:'COIL-26008',sku:'SS-202-ST-100',heat:'H-SAMPLE-202-08',qty:1200,originalQty:1200,quality:'Released',location:'Plant 1 · Raw material bay',owner:'JNB Steel',source:'Opening balance',certificate:'MTC-SAMPLE-008',parents:[],created:'2026-11-07'},
    {id:'BND-GRN-024',sku:'SS-202-SQ-025',heat:'H-SAMPLE-202-24',qty:1000,originalQty:1000,quality:'Quarantine',location:'Plant 1 · Receiving quarantine',owner:'JNB Steel',source:'GRN-26024',receipt:'GRN-26024',certificate:'MTC-SAMPLE-024',parents:[],created:'2026-11-07'},
    {id:'COIL-GRN-023',sku:'SS-430-CO-060',heat:'H-SAMPLE-430-23',qty:500,originalQty:500,quality:'Quarantine',location:'Plant 2 · Receiving quarantine',owner:'JNB Steel',source:'GRN-26023',receipt:'GRN-26023',certificate:'MTC-SAMPLE-023',parents:[],created:'2026-11-07'}
  );
  d.purchaseOrders = d.products.filter(p => p.materialClass !== 'Scrap').map((p,i) => ({id:'PO-'+(26031+i),supplier:i%2?'SUP-102':'SUP-101',sku:p.sku,qty:3000,rate:p.rate,due:'2026-11-09',status:'Approved sample'}));
  d.receipts = [
    {id:'GRN-26024',po:'PO-26032',supplier:'SUP-102',sku:'SS-202-SQ-025',qty:1000,heat:'H-SAMPLE-202-24',certificate:'MTC-SAMPLE-024',challan:'SC-SAMPLE-024',date:'2026-11-07',unit:'BND-GRN-024',note:'Sample incoming tube bundles. Release after recording inspection evidence.'},
    {id:'GRN-26023',po:'PO-26037',supplier:'SUP-101',sku:'SS-430-CO-060',qty:500,heat:'H-SAMPLE-430-23',certificate:'MTC-SAMPLE-023',challan:'SC-SAMPLE-023',date:'2026-11-07',unit:'COIL-GRN-023',note:'Sample coil awaiting incoming inspection.'}
  ];
  d.inspections = [{id:'QC-26020',unit:'BND-SQ-007',date:'2026-11-06',accepted:920,rejected:0,held:0,by:'Meera Rao',evidence:'Fictional inspection: grade identity, dimensions and surface reviewed against sample buyer specification A. No real test certification.',note:'Sample finished bundle released.'}];
  d.quotes = [
    {id:'QT-26010',customer:'C-103',subject:'Railing fabrication sizes',po:'AFW/26/118',date:'2026-11-06',validUntil:'2026-11-12',due:'2026-11-09',revision:1,status:'Accepted',order:'SO-26048',lines:[{sku:'SS-202-SQ-025',qty:1500,rate:178},{sku:'SS-304-RT-040',qty:500,rate:260}],note:'Sample accepted quotation. Material only; freight and taxes excluded.'},
    {id:'QT-26011',customer:'C-105',subject:'Workshop coil requirement',po:'WLE/ENQ/207',date:'2026-11-07',validUntil:'2026-11-14',due:'2026-11-16',revision:1,status:'Draft',order:null,lines:[{sku:'SS-304-CO-080',qty:750,rate:228}],note:'Confirm finish and delivery schedule with the buyer.'}
  ];
  d.workOrders = [
    {id:'WO-26007',order:'SO-26048',sku:'SS-202-SQ-025',target:920,input:'COIL-SOURCE-007',inputQty:1000,wip:null,status:'Completed',station:'Sample tube line 1',due:'2026-11-06',route:'Sample tube forming, sizing and cut, revision A',batches:[{date:'2026-11-06',good:920,remnant:30,scrap:40,loss:10,note:'Fictional closed batch. Authorized sample loss; not an industry yield target.',units:['BND-SQ-007','REM-007','SCRAP-007']}],created:'2026-11-05'},
    {id:'WO-26008',order:'SO-26048',sku:'SS-202-SQ-025',target:960,input:'COIL-26008',inputQty:1000,wip:null,status:'Planned',station:'Sample tube line 1',due:'2026-11-08',route:'Sample tube forming, sizing and cut, revision A',batches:[],created:'2026-11-07'}
  ];
  d.invoices = [
    {id:'INV-26011',dispatch:'DN-26017',order:'SO-26045',customer:'C-101',date:'2026-11-06',due:'2026-11-13',status:'Issued',lines:[{sku:'SS-304-RP-038',qty:1000,rate:265}],note:'Sample material-only invoice. No tax or statutory acknowledgement.'},
    {id:'INV-26010',dispatch:'DN-26016',order:'SO-26044',customer:'C-105',date:'2026-11-04',due:'2026-11-11',status:'Issued',lines:[{sku:'SS-304-WR-160',qty:600,rate:252}],note:'Sample material-only invoice.'},
    {id:'INV-26009',dispatch:'DN-26015',order:'SO-26040',customer:'C-104',date:'2026-11-04',due:'2026-11-07',status:'Issued',lines:[{sku:'SS-304-WR-080',qty:500,rate:270}],note:'Sample material-only invoice.'}
  ];
  d.payments = [
    {id:'RCPT-26001',invoice:'INV-26010',amount:50000,reference:'BANK-SAMPLE-101',date:'2026-11-06',by:'Kavita Gupta'},
    {id:'RCPT-26002',invoice:'INV-26009',amount:135000,reference:'BANK-SAMPLE-102',date:'2026-11-05',by:'Kavita Gupta'}
  ];
  d.weighments = [];
  d.ledger = [];
  d.audit = [];
})();

/* Supporting modules share the same fictional masters and transaction references. */
(() => {
  const d=window.JNB_DEMO;
  Object.assign(d.personas,{Purchase:'Sahil Ahuja',Planner:'Aman Malik',Maintenance:'Deepa Saini',Admin:'Demo administrator',Auditor:'Demo auditor'});
  d.quoteHistory=[]; d.masterHistory=[]; d.orderHistory=[]; d.purchaseHistory=[];
  d.locations=[
    {id:'LOC-101',name:'Plant 1 · Tube bay B',plant:'Plant 1',kind:'Released',owner:'JNB Steel',status:'Active'},
    {id:'LOC-102',name:'Plant 1 · Receiving quarantine',plant:'Plant 1',kind:'Quarantine',owner:'JNB Steel',status:'Active'},
    {id:'LOC-103',name:'Plant 2 · Coil bay A',plant:'Plant 2',kind:'Released',owner:'JNB Steel',status:'Active'},
    {id:'LOC-104',name:'Plant 3 · Wire bay A',plant:'Plant 3',kind:'Released',owner:'JNB Steel',status:'Active'},
    {id:'LOC-105',name:'Plant 1 · Raw material bay',plant:'Plant 1',kind:'Released',owner:'JNB Steel',status:'Active'},
    {id:'LOC-106',name:'Plant 1 · Transfer transit',plant:'Plant 1',kind:'Transit',owner:'JNB Steel',status:'Active'}
  ];
  d.products.push(
    {sku:'SS-304-MC-1000',name:'Mother coil input',family:'Coils',grade:'304',size:'0.8 thickness × 1000 width',finish:'2B',onHand:2000,min:500,rate:210,location:'Plant 2 · Raw coil bay',materialClass:'Raw material',specification:'Sample slitting input, revision A'},
    {sku:'SS-304-RD-550',name:'Wire rod input',family:'Wires',grade:'304',size:'5.5 diameter',finish:'Unprocessed',onHand:900,min:300,rate:218,location:'Plant 3 · Rod bay',materialClass:'Raw material',specification:'Sample wire input, revision A'}
  );
  d.units.push(
    {id:'COIL-26009',sku:'SS-304-MC-1000',heat:'H-SAMPLE-304-09',qty:2000,originalQty:2000,quality:'Released',location:'Plant 2 · Raw coil bay',owner:'JNB Steel',source:'Opening balance',certificate:'MTC-SAMPLE-009',parents:[],created:'2026-11-07'},
    {id:'ROD-26010',sku:'SS-304-RD-550',heat:'H-SAMPLE-304-10',qty:900,originalQty:900,quality:'Released',location:'Plant 3 · Rod bay',owner:'JNB Steel',source:'Opening balance',certificate:'MTC-SAMPLE-010',parents:[],created:'2026-11-07'}
  );
  d.workOrders.push(
    {id:'WO-26009',order:'SO-26047',sku:'SS-304-CO-080',target:970,input:'COIL-26009',inputQty:1000,wip:null,status:'Planned',station:'Sample slitting line 1',due:'2026-11-09',route:'Sample slitting and labeling, revision A',batches:[],created:'2026-11-07'},
    {id:'WO-26010',order:'SO-26044',sku:'SS-304-WR-160',target:570,input:'ROD-26010',inputQty:600,wip:null,status:'Planned',station:'Sample wire line 1',due:'2026-11-10',route:'Sample drawing and packing, revision A',batches:[],created:'2026-11-07'}
  );
  d.machines=[
    {id:'MAC-101',name:'Sample tube line 1',plant:'Plant 1',kind:'Tube conversion',capacity:'Confirm during plant discovery',status:'Available'},
    {id:'MAC-102',name:'Sample slitting line 1',plant:'Plant 2',kind:'Coil conversion',capacity:'Confirm during plant discovery',status:'Available'},
    {id:'MAC-103',name:'Sample wire line 1',plant:'Plant 3',kind:'Wire processing',capacity:'Confirm during plant discovery',status:'Available'}
  ];
  d.specifications=[
    {id:'SPEC-101',name:'Grade list',kind:'Grade',value:'202, 304, 316L, 430',unit:'Grade code',revision:'A',note:'Illustrative variants, not material certification.',status:'Approved'},
    {id:'SPEC-102',name:'Actual stock mass',kind:'Unit',value:'Measured mass; no universal kg-per-piece conversion',unit:'kg',revision:'A',note:'Sample transaction precision: 0.1 kg.',status:'Approved'},
    {id:'SPEC-103',name:'Dimensions',kind:'Unit',value:'Thickness, width, section and length',unit:'mm',revision:'A',note:'Customer specification controls acceptance limits.',status:'Approved'}
  ];
  d.users=Object.entries(d.personas).map(([role,name],i)=>({id:'USER-'+(101+i),name,email:role.toLowerCase()+'@jnb-demo.example',role,plant:'All sample plants',status:'Active'}));
  d.settings=[
    {id:'RULE-101',name:'Sample stock posting',value:'First gate-cleared transit update',effective:'2026-11-07',note:'One stock issue per dispatch. Billing never issues stock again.',status:'Approved'},
    {id:'RULE-102',name:'Sample credit policy',value:'Receivables + unbilled deliveries + open order balance',effective:'2026-11-07',note:'Same commitment counted once. No live accounting balance.',status:'Approved'}
  ];
  d.requirements=[{id:'REQ-26001',sku:'SS-430-CO-060',qty:400,order:'SO-26042',due:'2026-11-10',note:'Review the incoming 500 kg before placing more supply.',status:'Draft',requester:'Planner'}];
  d.transfers=[];d.counts=[];d.supplierReturns=[];d.purchaseInvoices=[];d.supplierPayments=[];d.returns=[];d.creditNotes=[];
  d.documents=[{id:'DOC-26001',dispatch:'DN-26017',kind:'Transport reference',reference:'TRANSPORT-SAMPLE-017',issuer:'Manual sample record',note:'Illustration only. No government acknowledgement or validation.',status:'Reference recorded'}];
  d.integrationJobs=[{id:'SYNC-26001',system:'Accounting handoff',reference:'INV-26011',direction:'Outbound',note:'No live endpoint. Use the sample export and local acknowledgement preview.',status:'Ready for sample export'}];
  d.imports=[];
  d.routings=[
    {id:'ROUTE-101',name:'Sample tube route',family:'Pipes & tubes',operations:'Input issue; forming/sizing; cut; inspect; bundle',station:'Sample tube line 1',revision:'A',note:'Illustrative; validate actual plant method and tests.',status:'Approved'},
    {id:'ROUTE-102',name:'Sample coil route',family:'Coils',operations:'Input issue; slit/cut; reconcile child units; inspect',station:'Sample slitting line 1',revision:'A',note:'Illustrative; no automatic cut optimization.',status:'Approved'},
    {id:'ROUTE-103',name:'Sample wire route',family:'Wires',operations:'Input issue; draw/process; inspect; spool and weigh',station:'Sample wire line 1',revision:'A',note:'Illustrative; no unverified thermal-treatment claim.',status:'Approved'}
  ];
  d.jobCards=[{id:'JOB-26001',workOrder:'WO-26008',station:'Sample tube line 1',operator:'Aman Malik',operation:'Form and cut',minutes:0,note:'Start the linked work order before logging execution.',status:'Planned'}];
  d.jobWork=[];d.nonconformances=[];d.testCertificates=[];
  d.maintenance=[{id:'MT-26001',asset:'MAC-102',kind:'Preventive',priority:'Normal',due:'2026-11-12',note:'Sample scheduled inspection. Asset remains available until work starts.',status:'Planned'}];
  d.instruments=[
    {id:'INST-101',name:'Sample dimensional gauge',asset:'MAC-101',range:'Per approved sample method',due:'2026-12-31',certificate:'CAL-SAMPLE-101',note:'Fictional calibration reference.',status:'Available'},
    {id:'INST-102',name:'Sample load scale',asset:'MAC-102',range:'Per device specification',due:'2026-12-31',certificate:'CAL-SAMPLE-102',note:'No live scale integration.',status:'Available'}
  ];
  d.units.forEach(u=>{if(!d.locations.some(l=>l.name===u.location))d.locations.push({id:'LOC-'+(101+d.locations.length),name:u.location,plant:u.location.split(' · ')[0],kind:u.quality==='Released'?'Released':u.quality==='Recovery'?'Scrap':'Quarantine',owner:'JNB Steel',status:'Active'});});
  d.inspectionPlans=d.products.filter(p=>p.materialClass!=='Scrap').map((p,i)=>({id:'IP-'+(101+i),name:p.sku+' sample inspection',sku:p.sku,stage:'Incoming / final as applicable',method:'Identity, dimensions and surface against sample drawing A',limits:'Use approved buyer specification; no numeric limits invented',frequency:'Per sample lot; confirm actual sampling plan',revision:'A',status:'Approved'}));
  d.costEntries=[{id:'COST-26001',workOrder:'WO-26007',inputCost:142000,conversion:12000,recoveryCredit:4000,note:'Independent fictional cost inputs; not derived from selling rates.',status:'Reviewed'}];
})();
