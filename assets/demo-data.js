/* Fictional demonstration data. Grades, dimensions, rates and stock are illustrative, not a JNB quotation. */
window.JNB_DEMO = {
  version: 1, asOf: '2026-11-07', role: 'Owner',
  personas: {Owner:'JNB team',Sales:'Nikhil Sharma',Store:'Vikram Singh',Dispatch:'Neha Bansal'},
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
