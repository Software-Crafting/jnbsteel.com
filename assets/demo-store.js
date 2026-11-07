/* Browser-only transaction rules for fictional records. No server or authentication is implied. */
(() => {
  'use strict';
  window.JNBStore = function (s) {
    const q = n => Math.round((Number(n) + Number.EPSILON) * 10) / 10;
    const cash = n => Math.round((Number(n) + Number.EPSILON) * 100) / 100;
    const unit = id => s.units.find(u => u.id === id);
    const product = sku => s.products.find(p => p.sku === sku);
    const actor = () => s.personas[s.role];
    const next = (prefix, records, start = 26030) => prefix + '-' + (Math.max(start - 1, ...records.map(r => Number(r.id.match(/(\d+)$/)?.[1]) || 0)) + 1);
    const check = (ok, message) => { if (!ok) throw new Error(message); };
    const positive = (n, label) => check(Number.isFinite(n) && n > 0 && n <= 1000000 && Math.abs(q(n)-n)<0.00001, label + ' must be a positive kg quantity with at most one decimal.');
    const audit = (action, reference, note) => s.audit.unshift({id:next('AUD',s.audit),date:s.asOf,time:new Date().toISOString(),by:actor(),action,reference,note});
    const post = (u, qty, type, reference, note = '') => s.ledger.push({id:next('MOV',s.ledger),date:s.asOf,time:new Date().toISOString(),unit:u.id,sku:u.sku,heat:u.heat,location:u.location,quality:u.quality,qty:q(qty),type,reference,note,by:actor()});
    const sync = () => s.products.forEach(p => { p.onHand = q(s.units.filter(u => u.sku === p.sku).reduce((v,u) => v+u.qty,0)); });
    const reservations = id => q(s.orders.reduce((n,o) => n+o.lines.reduce((m,l) => m+(l.allocations||[]).filter(a => a.unit === id).reduce((v,a) => v+a.qty,0),0),0));
    const eligible = u => u && u.quality === 'Released' && u.owner === 'JNB Steel' && u.qty > 0;
    const free = u => eligible(u) ? q(Math.max(0,u.qty-reservations(u.id))) : 0;
    const available = sku => q(s.units.filter(u => u.sku === sku).reduce((n,u) => n+free(u),0));
    const unavailable = sku => q(s.units.filter(u => u.sku === sku && !eligible(u)).reduce((n,u) => n+u.qty,0));
    const addUnit = (data, type, reference, note = '') => {
      const u = {id:next('UNIT',s.units),owner:'JNB Steel',parents:[],created:s.asOf,...data};
      s.units.push(u); post(u,u.qty,type,reference,note); return u;
    };
    const family = id => {
      const found = new Set([id]); let changed = true;
      while(changed) { changed=false; s.units.forEach(u => { if(!found.has(u.id) && u.parents.some(p => found.has(p))) { found.add(u.id); changed=true; } }); }
      return s.units.filter(u => found.has(u.id));
    };
    function initialize() {
      if(!s.ledger.length) s.units.filter(u => u.qty>0).forEach(u => post(u,u.qty,'Opening balance','OPEN-2026-11-07','Opening cutoff; earlier sample production and deliveries are already reflected.'));
      s.orders.forEach(o => o.lines.forEach(l => {
        if(l.allocations) return;
        let left=l.reserved; l.allocations=[];
        s.units.filter(u => u.sku===l.sku && eligible(u)).forEach(u => { const n=q(Math.min(left,free(u))); if(n>0) { l.allocations.push({unit:u.id,qty:n}); left=q(left-n); } });
        check(left===0,'Opening reservation cannot be reconciled for '+o.id+'.');
      })); sync();
    }
    function allocate(o) {
      const plan=[];
      o.lines.forEach(l => {
        let left=q(l.qty-l.dispatched-l.reserved);
        s.units.filter(u => u.sku===l.sku && eligible(u)).forEach(u => {
          const n=q(Math.min(left,free(u))); if(n>0) { plan.push({line:l,unit:u.id,qty:n}); left=q(left-n); }
        });
        check(left===0,'Not enough released stock for '+l.sku+'. Inspect incoming material or complete production first.');
      });
      plan.forEach(a => { const old=a.line.allocations.find(x => x.unit===a.unit); if(old) old.qty=q(old.qty+a.qty); else a.line.allocations.push({unit:a.unit,qty:a.qty}); a.line.reserved=q(a.line.reserved+a.qty); });
      audit('Stock allocated',o.id,'Specific released units reserved; on-hand kg unchanged.');
    }
    function picks(o, lines) {
      return lines.map(l => {
        const original=o.lines.find(x => x.sku===l.sku); let left=l.qty; const units=[];
        (original?.allocations||[]).forEach(a => { const n=q(Math.min(left,a.qty)); if(n>0) { units.push({unit:a.unit,qty:n}); left=q(left-n); } });
        check(left===0,'Reserved unit quantities changed for '+l.sku+'.'); return {...l,units};
      });
    }
    function gateProblem(d) {
      if(!d) return 'Select an existing dispatch.';
      if(d.posted) return '';
      if(!d.packed) return 'Complete picking and packing verification before gate release.';
      for(const l of d.lines) {
        if(!l.units?.length) return 'Pick the material units again from the source order.';
        for(const a of l.units) if(!eligible(unit(a.unit)) || unit(a.unit).qty<a.qty) return a.unit+' is held or no longer available. Resolve QC before release.';
      }
      const c=s.customers.find(c => c.id===s.orders.find(o => o.id===d.order).customer);
      if(exposure(c.id)>c.creditLimit) return 'Customer exposure exceeds the sample credit limit. Review receivables before release.';
      return '';
    }
    function issue(d) {
      if(d.posted) return;
      const error=gateProblem(d); check(!error,error);
      const ticket=s.weighments.find(w => w.dispatch===d.id);
      check(ticket && Math.abs(ticket.material-d.lines.reduce((n,l)=>n+l.qty,0))<0.01,'Complete weighment and gate release before moving the load to transit.');
      const o=s.orders.find(o => o.id===d.order);
      // Validate the whole load before mutating any unit or reservation.
      d.lines.forEach(l => { const ol=o.lines.find(x => x.sku===l.sku); check(ol && ol.reserved>=l.qty,'Reservation changed. Review the order.'); l.units.forEach(a => check((ol.allocations.find(x => x.unit===a.unit)?.qty||0)>=a.qty,'A picked unit is no longer reserved for this order.')); });
      d.lines.forEach(l => {
        const ol=o.lines.find(x => x.sku===l.sku);
        l.units.forEach(a => { const u=unit(a.unit), allocation=ol.allocations.find(x => x.unit===a.unit); u.qty=q(u.qty-a.qty); allocation.qty=q(allocation.qty-a.qty); post(u,-a.qty,'Dispatch issue',d.id); });
        ol.allocations=ol.allocations.filter(a => a.qty>0); ol.reserved=q(ol.reserved-l.qty); ol.dispatched=q(ol.dispatched+l.qty);
        s.movements.unshift({date:s.asOf,sku:l.sku,type:'Dispatch',qty:l.qty,reference:d.id,note:'Unit-level gate-released stock issue'});
      });
      d.posted=true; sync(); audit('Stock issued',d.id,'Gate ticket '+ticket.id+'. Posted once.');
    }
    function receive(data) {
      const po=s.purchaseOrders.find(p => p.id===data.po); check(po,'Select a sample purchase order.');
      check(po.status==='Approved sample','Approve the sample purchase order before receiving material.');
      const received=s.receipts.filter(r => r.po===po.id).reduce((n,r)=>n+r.qty,0);
      positive(data.qty,'Received quantity'); check(data.qty<=q(po.qty-received),'Receipt exceeds the remaining sample PO quantity.');
      check(data.reference && data.heat && data.certificate && data.challan,'Enter receipt, heat, certificate and challan references.');
      check(/^[A-Za-z0-9][A-Za-z0-9._/-]{0,79}$/.test(data.reference),'Use letters, numbers, dots, hyphens, slashes or underscores in the receipt reference.');
      check(!s.receipts.some(r => r.id.toLowerCase()===data.reference.toLowerCase()),'This receipt reference already exists.');
      const p=product(po.sku), r={id:data.reference,po:po.id,supplier:po.supplier,sku:po.sku,qty:data.qty,heat:data.heat,certificate:data.certificate,challan:data.challan,date:s.asOf,note:data.note};
      const u=addUnit({sku:po.sku,heat:data.heat,qty:data.qty,originalQty:data.qty,quality:'Quarantine',location:p.location.split(' · ')[0]+' · Receiving quarantine',source:r.id,receipt:r.id,certificate:data.certificate},'Goods receipt',r.id);
      r.unit=u.id; s.receipts.unshift(r); sync(); audit('Receipt recorded',r.id,'Quarantined '+data.qty+' kg.'); return r;
    }
    function inspect(id, accepted, rejected, evidence, note, instrumentId) {
      const u=unit(id); check(u && u.qty>0 && ['Quarantine','Held'].includes(u.quality),'This unit is not awaiting inspection.');
      check(s.inspectionPlans.some(p=>p.sku===u.sku&&p.status==='Approved'),'Approve an applicable sample inspection plan first.');
      const instrument=s.instruments.find(i=>i.id===instrumentId);
      check(instrument && instrument.status==='Available' && instrument.due>=s.asOf,'Choose an available instrument with a current sample calibration record.');
      check(Number.isFinite(accepted)&&Number.isFinite(rejected)&&accepted>=0&&rejected>=0&&q(accepted)===accepted&&q(rejected)===rejected&&q(accepted+rejected)<=u.qty,'Accepted and rejected kg must fit the unit quantity, with one decimal at most.');
      check(evidence.trim() && note.trim(),'Record sample inspection evidence and a disposition note.');
      const held=q(u.qty-accepted-rejected), idQC=next('QC',s.inspections);
      const dispositions=[['Released',accepted],['Rejected',rejected],['Held',held]].filter(([,qty]) => qty>0);
      if(dispositions.length===1) { u.quality=dispositions[0][0]; post(u,0,'Quality disposition',idQC,note); }
      else {
        const old=u.qty; u.qty=0; post(u,-old,'Inspection split',idQC);
        dispositions.forEach(([quality,qty]) => addUnit({...u,id:next('UNIT',s.units),qty,originalQty:qty,quality,parents:[u.id]},'Inspection split',idQC,note));
        u.quality='Split';
      }
      s.inspections.unshift({id:idQC,unit:id,date:s.asOf,accepted,rejected,held,evidence,note,instrument:instrumentId,by:actor()});
      const receipt=s.receipts.find(r=>r.id===u.receipt); if(receipt) receipt.acceptedQty=q(Math.min(receipt.qty,(receipt.acceptedQty||0)+accepted));
      sync(); audit('Inspection disposition',idQC,note); return idQC;
    }
    function hold(id, note) {
      check(unit(id) && note.trim(),'Choose a material unit and enter the hold reason.');
      const affected=family(id).filter(u => u.qty>0 && ['Released','Quarantine'].includes(u.quality));
      check(affected.length,'No eligible remaining material to hold.');
      affected.forEach(u => { u.quality='Held'; post(u,0,'Quality hold',id,note); }); audit('Quality hold',id,note); return affected.length;
    }
    function startJob(w) {
      check(w.status==='Planned','This work order has already started.'); const input=unit(w.input);
      check(s.machines.some(m=>m.name===w.station&&m.status==='Available'),'The selected production station is unavailable.');
      check(eligible(input) && free(input)>=w.inputQty,'The selected input is held or has insufficient unreserved kg.');
      check(product(input.sku).grade===product(w.sku).grade,'Input and output grades must match this sample route.');
      input.qty=q(input.qty-w.inputQty); post(input,-w.inputQty,'Issue to WIP',w.id);
      const wip=addUnit({sku:input.sku,heat:input.heat,qty:w.inputQty,originalQty:w.inputQty,quality:'In process',location:input.location.split(' · ')[0]+' · Production WIP',source:w.id,workOrder:w.id,certificate:input.certificate,parents:[input.id]},'WIP receipt',w.id);
      w.wip=wip.id; w.status='In progress'; sync(); audit('Production started',w.id,'Input transferred to WIP; not available for sales.');
    }
    function output(w, values) {
      check(w.status==='In progress','Start this work order before recording output.');
      const input=unit(w.wip); check(input && input.quality==='In process','Production WIP is unavailable or held.');
      const {good,remnant,scrap,loss,note}=values, used=q(good+remnant+scrap+loss);
      check([good,remnant,scrap,loss].every(n=>Number.isFinite(n)&&n>=0&&q(n)===n),'Use non-negative quantities with at most one decimal.');
      check(used>0 && used<=input.qty,'Output, remnant, scrap and loss must fit the remaining WIP.'); check(note.trim(),'Record the batch evidence and any loss authorization.');
      input.qty=q(input.qty-used); post(input,-used,'WIP processed',w.id,note);
      const outputs=[], common={heat:input.heat,owner:input.owner,source:w.id,workOrder:w.id,certificate:input.certificate,parents:[input.id]};
      if(good>0) outputs.push(addUnit({...common,sku:w.sku,qty:good,originalQty:good,quality:'Quarantine',location:product(w.sku).location},'Production output',w.id,note).id);
      if(remnant>0) outputs.push(addUnit({...common,sku:input.sku,qty:remnant,originalQty:remnant,quality:'Held',location:input.location.split(' · ')[0]+' · Remnant bay'},'Reusable remnant',w.id,note).id);
      if(scrap>0) {
        const grade=product(w.sku).grade, sku='SCRAP-'+grade;
        if(!product(sku)) s.products.push({sku,name:grade+' segregated scrap',family:'Recovered material',grade,size:'Mixed offcuts',finish:'Unprocessed',rate:0,min:0,onHand:0,location:'Plant 1 · Scrap bay',materialClass:'Scrap',specification:'Recovery stock'});
        outputs.push(addUnit({...common,sku,qty:scrap,originalQty:scrap,quality:'Recovery',location:product(sku).location},'Recoverable scrap',w.id,note).id);
      }
      w.batches.push({date:s.asOf,good,remnant,scrap,loss,note,units:outputs}); if(!input.qty) { w.status='Completed'; input.quality='Consumed'; }
      sync(); audit('Production output',w.id,used+' kg reconciled; '+input.qty+' kg remains WIP.'); return outputs;
    }
    function returnUnused(w, qty, note) {
      const input=unit(w?.wip);check(w?.status==='In progress'&&input?.quality==='In process','Choose an active work order with available WIP.');positive(qty,'Unused return');check(qty<=input.qty,'Unused return exceeds unfinished WIP.');check(note.trim(),'Record the unused-input return reason.');
      input.qty=q(input.qty-qty);post(input,-qty,'Unused WIP return issue',w.id,note);
      const returned=addUnit({sku:input.sku,heat:input.heat,qty,originalQty:qty,quality:'Held',location:product(input.sku).location,source:w.id,workOrder:w.id,certificate:input.certificate,parents:[input.id]},'Unused input returned',w.id,note);
      w.returnedQty=q((w.returnedQty||0)+qty);if(!input.qty){w.status='Completed';input.quality='Consumed';}sync();audit('Unused input returned',w.id,note);return returned;
    }
    const invoiceTotal = i => cash(i.lines.reduce((n,l)=>n+l.qty*l.rate,0));
    const paid = id => cash(s.payments.filter(p=>p.invoice===id).reduce((n,p)=>n+p.amount,0));
    const credits = id => cash(s.creditNotes.filter(c=>c.invoice===id&&c.status==='Issued').reduce((n,c)=>n+c.amount,0));
    const balance = i => i.status==='Issued' ? cash(invoiceTotal(i)-paid(i.id)-credits(i.id)) : 0;
    function exposure(customer) {
      const open=s.orders.filter(o=>o.customer===customer).reduce((n,o)=>n+o.lines.reduce((v,l)=>v+(l.qty-l.dispatched)*l.rate,0),0);
      const unbilled=s.dispatches.filter(d=>d.posted && s.orders.find(o=>o.id===d.order)?.customer===customer && !s.invoices.some(i=>i.dispatch===d.id && i.status==='Issued')).reduce((n,d)=>n+d.lines.reduce((v,l)=>v+l.qty*s.orders.find(o=>o.id===d.order).lines.find(x=>x.sku===l.sku).rate,0),0);
      return cash(open+unbilled+s.invoices.filter(i=>i.customer===customer).reduce((n,i)=>n+balance(i),0));
    }
    function invoice(d, due) {
      check(d?.posted,'Only a posted dispatch can be billed.'); check(!s.invoices.some(i=>i.dispatch===d.id),'This dispatch already has an invoice.'); check(due>=s.asOf,'Due date cannot precede the demo date.');
      const o=s.orders.find(o=>o.id===d.order), i={id:next('INV',s.invoices,26012),dispatch:d.id,order:o.id,customer:o.customer,date:s.asOf,due,status:'Draft',lines:d.lines.map(l=>({sku:l.sku,qty:l.qty,rate:o.lines.find(x=>x.sku===l.sku).rate})),note:'Fictional material-only invoice; tax and freight excluded. Not a statutory document.'};
      s.invoices.unshift(i); audit('Invoice drafted',i.id,'Linked to '+d.id+'. Stock unchanged.'); return i;
    }
    function pay(invoiceId, amount, reference, date) {
      const i=s.invoices.find(i=>i.id===invoiceId); check(i?.status==='Issued','Choose an issued invoice.');
      check(Number.isFinite(amount)&&amount>0&&cash(amount)===amount&&amount<=balance(i),'Receipt must be positive, with two decimals at most, and cannot exceed the invoice balance.');
      check(reference.trim(),'Enter a sample bank/reference number.'); check(!s.payments.some(p=>p.reference.toLowerCase()===reference.toLowerCase()),'This receipt reference has already been recorded.');
      check(date>=i.date && date<=s.asOf,'Receipt date must fall between the invoice date and the demo date.');
      const p={id:next('RCPT',s.payments,26003),invoice:invoiceId,amount,reference,date,by:actor()}; s.payments.unshift(p); audit('Customer receipt',p.id,reference); return p;
    }
    function transfer(id, qty, destination, note) {
      const u=unit(id), location=s.locations.find(l=>l.name===destination&&l.status==='Active');
      positive(qty,'Transfer'); check(eligible(u)&&free(u)>=qty,'Only released unreserved stock can be transferred.');check(location&&location.kind==='Released'&&destination!==u.location&&location.owner===u.owner,'Choose a different active released-stock location with the same owner.');
      const reference=next('TR',s.transfers);u.qty=q(u.qty-qty);post(u,-qty,'Transfer issue',reference,note);
      const child=addUnit({...u,id:next('UNIT',s.units),qty,originalQty:qty,quality:'In transit',location:'Transfer transit',parents:[u.id],source:reference},'Transfer transit',reference,note);
      const r={id:reference,unit:child.id,sourceUnit:id,from:u.location,to:destination,qty,received:0,status:'In transit',note,date:s.asOf};s.transfers.unshift(r);sync();audit('Transfer issued',reference,note);return r;
    }
    function receiveTransfer(id) {
      const r=s.transfers.find(r=>r.id===id);check(r?.status==='In transit','This transfer is not awaiting receipt.');const u=unit(r.unit);check(u?.quality==='In transit','Resolve the transit material hold before receipt.');
      post(u,-u.qty,'Transit cleared',r.id);u.location=r.to;u.quality='Released';post(u,u.qty,'Transfer receipt',r.id);r.received=r.qty;r.status='Received';sync();audit('Transfer received',r.id,r.to);
    }
    function count(id, actual, note) {
      const u=unit(id);check(u&&u.qty>0&&u.quality!=='In process'&&u.quality!=='In transit','Choose a present unit outside production WIP or transit.');check(Number.isFinite(actual)&&actual>=0&&q(actual)===actual&&actual<=1000000,'Count must be non-negative with one decimal at most.');
      const r={id:next('COUNT',s.counts),unit:id,expected:u.qty,actual,variance:q(actual-u.qty),note,requester:s.role,status:'Pending review',date:s.asOf};s.counts.unshift(r);audit('Count submitted',r.id,note);return r;
    }
    function approveCount(id) {
      const c=s.counts.find(c=>c.id===id);check(c?.status==='Pending review','Count has already been reviewed.');check(c.requester!==s.role,'Switch to a different authorized demo role for independent review.');check(['Owner','Finance'].includes(s.role),'Choose Owner or Finance demo view for count approval.');
      const u=unit(c.unit);check(u&&u.qty===c.expected,'Material moved after the count. Record a fresh count instead.');check(c.actual>=reservations(u.id),'Release affected reservations before reducing counted stock.');u.qty=c.actual;post(u,c.variance,'Approved count adjustment',c.id,c.note);c.status='Posted';c.approver=actor();sync();audit('Count adjustment approved',c.id,c.note);
    }
    function customerReturn(dispatchId, sku, qty, note) {
      const d=s.dispatches.find(d=>d.id===dispatchId),line=d?.lines.find(l=>l.sku===sku);check(d?.posted&&line,'Choose a product in a posted dispatch.');positive(qty,'Return');
      const prior=s.returns.filter(r=>r.dispatch===dispatchId&&r.sku===sku).reduce((n,r)=>n+r.qty,0);check(qty<=q(line.qty-prior),'Return exceeds the unreturned dispatched quantity.');
      const id=next('RET',s.returns),origins=line.units?.map(a=>a.unit)||[], heat=origins.length===1?unit(origins[0]).heat:'Unknown / historical sample';
      const u=addUnit({sku,heat,qty,originalQty:qty,quality:'Quarantine',location:product(sku).location.split(' · ')[0]+' · Return quarantine',source:id,certificate:origins.length===1?unit(origins[0]).certificate:'Unknown; review source records',parents:origins},'Customer return',id,note);
      const r={id,dispatch:dispatchId,order:d.order,sku,qty,unit:u.id,note,status:'Awaiting inspection',date:s.asOf};s.returns.unshift(r);sync();audit('Customer return received',id,'Original order shipping balance unchanged.');return r;
    }
    function supplierReturn(receiptId, unitId, qty, note) {
      const r=s.receipts.find(r=>r.id===receiptId),u=unit(unitId);check(r&&u&&family(r.unit).some(v=>v.id===u.id),'Select material from this receipt.');positive(qty,'Supplier return');check(qty<=u.qty&&qty<=q(u.qty-reservations(u.id)),'Return exceeds present unreserved material.');check(['Rejected','Held','Quarantine'].includes(u.quality),'Only segregated material can use this supplier-return flow.');
      const id=next('SRET',s.supplierReturns);u.qty=q(u.qty-qty);post(u,-qty,'Supplier return',id,note);const record={id,receipt:receiptId,unit:unitId,qty,note,status:'Issued / claim pending',date:s.asOf};s.supplierReturns.unshift(record);sync();audit('Supplier return issued',id,note);return record;
    }
    function credit(returnId, amount, note) {
      const r=s.returns.find(r=>r.id===returnId),i=r&&s.invoices.find(i=>i.dispatch===r.dispatch&&i.status==='Issued');check(i,'The source dispatch needs an issued invoice before a credit can be recorded.');
      const l=i.lines.find(l=>l.sku===r.sku),prior=s.creditNotes.filter(c=>c.return===returnId).reduce((n,c)=>n+c.amount,0);check(Number.isFinite(amount)&&amount>0&&cash(amount)===amount&&amount<=cash(r.qty*l.rate-prior)&&amount<=balance(i),'Credit must fit the remaining returned material value and unpaid invoice balance. Refunds/advance balances need a separate finance workflow.');
      const c={id:next('CN',s.creditNotes),return:returnId,invoice:i.id,amount,note,status:'Issued',date:s.asOf};s.creditNotes.unshift(c);audit('Sample credit issued',c.id,note);return c;
    }
    function amendOrder(o, lines, due, reason) {
      check(o&&!o.balanceClosed,'A closed order balance cannot be amended.');check(!s.dispatches.some(d=>d.order===o.id&&!d.posted),'Complete the active dispatch plan before amending its order.');check(due>=s.asOf&&reason.trim(),'Choose a current/future promise and record the amendment reason.');
      check(lines.length===o.lines.length,'Retain the existing product lines.');lines.forEach((l,index)=>{positive(l.qty,'Line quantity');check(l.sku===o.lines[index].sku&&l.qty>=q(o.lines[index].dispatched+o.lines[index].reserved),'Quantity cannot fall below already dispatched plus reserved kg.');check(Number.isFinite(l.rate)&&l.rate>0&&cash(l.rate)===l.rate,'Use a valid material rate with two decimals at most.');check(!o.lines[index].dispatched||l.rate===o.lines[index].rate,'A partially dispatched line keeps its original rate. Use a separate order for a new price.');});
      s.orderHistory.push(JSON.parse(JSON.stringify(o)));lines.forEach((l,index)=>Object.assign(o.lines[index],{qty:l.qty,rate:l.rate}));o.due=due;o.revision=(o.revision||1)+1;o.notes.unshift({date:s.asOf,by:actor(),text:'Amendment '+o.revision+': '+reason});audit('Order amended',o.id,reason);
    }
    function closeOrder(o, reason) {
      check(o&&!o.balanceClosed,'This unshipped balance is already closed.');check(!s.dispatches.some(d=>d.order===o.id&&!d.posted),'Complete the active dispatch plan before closing the order balance.');check(reason.trim(),'Record the agreed cancellation reason.');
      s.orderHistory.push(JSON.parse(JSON.stringify(o)));o.lines.forEach(l=>{l.cancelledQty=q((l.cancelledQty||0)+l.qty-l.dispatched);l.qty=l.dispatched;l.reserved=0;l.allocations=[];});o.balanceClosed=true;o.revision=(o.revision||1)+1;o.notes.unshift({date:s.asOf,by:actor(),text:'Unshipped balance closed: '+reason});audit('Order balance closed',o.id,reason);
    }
    function amendPurchase(p, qty, rate, due, reason) {
      check(p&&p.status!=='Closed','A closed PO cannot be amended.');positive(qty,'PO quantity');const received=q(s.receipts.filter(r=>r.po===p.id).reduce((n,r)=>n+r.qty,0));check(qty>=received,'PO quantity cannot be below already received kg.');check(rate>0&&cash(rate)===rate,'Use a positive rate with two decimals.');check(!received||rate===p.rate,'Keep the original rate after receipts; create a new PO for a different price.');check(due>=s.asOf&&reason.trim(),'Record a current/future date and amendment reason.');
      s.purchaseHistory.push(JSON.parse(JSON.stringify(p)));Object.assign(p,{qty,rate,due,status:'Draft',revision:(p.revision||1)+1});audit('Purchase order amended',p.id,reason);
    }
    function closePurchase(p, reason) {
      check(p&&p.status!=='Closed'&&reason.trim(),'Choose an open PO and enter the closure reason.');s.purchaseHistory.push(JSON.parse(JSON.stringify(p)));p.cancelledQty=q(p.qty-s.receipts.filter(r=>r.po===p.id).reduce((n,r)=>n+r.qty,0));p.qty=q(p.qty-p.cancelledQty);p.status='Closed';audit('PO balance closed',p.id,reason);
    }
    initialize();
    return {q,cash,next,unit,product,free,available,unavailable,reservations,eligible,sync,post,addUnit,audit,check,positive,family,allocate,picks,gateProblem,issue,receive,inspect,hold,startJob,output,returnUnused,invoiceTotal,paid,credits,balance,exposure,invoice,pay,transfer,receiveTransfer,count,approveCount,customerReturn,supplierReturn,credit,amendOrder,closeOrder,amendPurchase,closePurchase};
  };
})();
