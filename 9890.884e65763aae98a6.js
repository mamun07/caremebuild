"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[9890],{39890:(k,f,a)=>{a.r(f),a.d(f,{TicketsPageModule:()=>q});var g=a(90898),h=a(69808),c=a(93075),e=a(5e3),C=a(71857),m=a(5944),T=a(49727),t=a(68132),s=a(61293),r=a(99826),o=a(50939),p=a(77484),_=a(90868),b=a(11047),y=a(76042),A=a(82683),Z=a(92643),O=a(63640),v=a(78054),P=a(41894);const M=function(i){return["../../","ticket-details",i]};function S(i,u){if(1&i&&(e.TgZ(0,"tr",13)(1,"td")(2,"div")(3,"h4"),e._uU(4),e.qZA(),e.TgZ(5,"h5"),e._uU(6),e.ALo(7,"date"),e.qZA()()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td")(17,"span"),e._uU(18),e.qZA()()()),2&i){const n=u.$implicit;e.Q6J("routerLink",e.VKq(13,M,n._id)),e.xp6(4),e.Oqu(n.ticketId),e.xp6(2),e.Oqu(e.xi3(7,10,n.createdAt,"short")),e.xp6(3),e.Oqu(n.orderNo.orderId),e.xp6(2),e.Oqu(n.productsku),e.xp6(2),e.Oqu(n.issueType),e.xp6(2),e.Oqu(n.message),e.xp6(2),e.Tol(1==n.status?"closebtn":"openbtn"),e.xp6(1),e.Oqu(1==n.status?"Close":"Open")}}function I(i,u){if(1&i){const n=e.EpF();e.TgZ(0,"input",14),e.NdJ("ngModelChange",function(d){e.CHM(n);const z=e.oxw();return e.KtG(z.value=d)}),e.qZA()}if(2&i){const n=e.oxw();e.Q6J("ngModel",n.value)}}function U(i,u){if(1&i&&e._UZ(0,"nz-option",32),2&i){const n=u.$implicit;e.Q6J("nzValue",n._id)("nzLabel",n.orderId)}}function x(i,u){if(1&i&&e._UZ(0,"nz-option",33),2&i){const n=u.$implicit;e.Q6J("nzValue",n._id)("nzLabel",n.name)}}function F(i,u){if(1&i){const n=e.EpF();e.ynx(0),e.TgZ(1,"form",15),e.NdJ("ngSubmit",function(){e.CHM(n);const d=e.oxw();return e.KtG(d.onSubmit())}),e.TgZ(2,"nz-form-item")(3,"nz-form-label",16),e._uU(4," Choose Order ID "),e.qZA(),e.TgZ(5,"nz-form-control",17)(6,"nz-select",18),e.YNc(7,U,1,2,"nz-option",19),e.qZA()()(),e.TgZ(8,"nz-form-item")(9,"nz-form-label",20),e._uU(10," Issue Type "),e.qZA(),e.TgZ(11,"nz-form-control",17)(12,"nz-select",21),e._UZ(13,"nz-option",22)(14,"nz-option",23)(15,"nz-option",24)(16,"nz-option",25)(17,"nz-option",26)(18,"nz-option",27),e.qZA()()(),e.TgZ(19,"nz-form-item")(20,"nz-form-label",20),e._uU(21," Product Skus "),e.qZA(),e.TgZ(22,"nz-form-control",28)(23,"nz-select",29),e.YNc(24,x,1,2,"nz-option",30),e.qZA()()(),e.TgZ(25,"nz-form-item")(26,"nz-form-label",20),e._uU(27," Message "),e.qZA(),e.TgZ(28,"nz-form-control",28),e._UZ(29,"textarea",31),e.qZA()()(),e.BQk()}if(2&i){const n=e.oxw();e.xp6(1),e.Q6J("formGroup",n.dataForm),e.xp6(5),e.Q6J("ngModel",n.orders[0]._id),e.xp6(1),e.Q6J("ngForOf",n.orders),e.xp6(17),e.Q6J("ngForOf",n.orderedItems)}}const B=[{path:"",component:(()=>{class i{constructor(n,l,d,z,D,N){this.ticketService=n,this.userDataService=l,this.msg=d,this.orderService=z,this.reloadService=D,this.fb=N,this.isVisible=!1,this.tickets=[],this.orderedItems=[],this.orders=[]}ngOnInit(){this.reloadService.refreshTickets$.subscribe(()=>{this.getUserInfo(),this.getAllTickets(),this.initModule()}),this.getUserInfo(),this.getAllTickets(),this.initModule()}getAllOrders(n){this.orderService.getAllOrdersByUser(null,null,n).subscribe(l=>{this.orders=l.data,console.log(this.orders)},l=>{console.log(l.message)})}getUserInfo(){this.userDataService.getLoggedInUserInfo().subscribe(n=>{this.user=n.data,this.user&&this.getAllOrders(this.user._id)},n=>{this.msg.error(n.message)})}initModule(){this.dataForm=this.fb.group({issueType:[null,c.kI.required],orderNo:[null],productIds:[null],attachments:[null],message:[null,c.kI.required]})}ticketModal(){this.isVisible=!0}ticketCancle(){this.isVisible=!1}onSubmit(){this.dataForm.invalid?this.msg.warning("Please Complete All the Fields"):(this.ticketService.add({issueType:this.dataForm.value.issueType,orderNo:this.dataForm.value.orderNo,userId:this.user._id,productIds:this.dataForm.value.productIds,attachments:this.dataForm.value.attachemnts,message:this.dataForm.value.message,status:0,createdByType:"User",read:!1}).subscribe(d=>{this.reloadService.needRefreshTickets$(),this.msg.success(d.message)},d=>{this.msg.error(d.message)}),this.isVisible=!1)}getAllTickets(){this.ticketService.getAllByUser().subscribe(n=>{this.tickets=n.data},n=>{this.msg.error(n.message)})}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(C.w),e.Y36(m.M),e.Y36(T.dD),e.Y36(t.p),e.Y36(s.f),e.Y36(c.qu))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-tickets-page"]],decls:32,vars:4,consts:[["nz-row","",1,"mb15"],["nz-col","","nzXs","24"],[1,"ticket-create"],["nz-button","",3,"click"],["nzSize","small",1,"ticket-main"],[3,"nzTabBarExtraContent"],["nzTitle","Tickets"],["nzSize","small",3,"nzData"],["fixedTable",""],[3,"routerLink",4,"ngFor","ngForOf"],["ticketTemplate",""],["nzTitle","Raise an Issue",3,"nzVisible","nzVisibleChange","nzOnCancel","nzOnOk"],[4,"nzModalContent"],[3,"routerLink"],["nz-input","","placeholder","Search here",3,"ngModel","ngModelChange"],[1,"new_issue_submit",3,"formGroup","ngSubmit"],["nzXs","24","nzFor","orderid"],["nzXs","12"],["nzShowSearch","","nzAllowClear","","formControlName","orderNo",3,"ngModel"],["nzId","orderid",3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzXs","24","nzFor","issue"],["formControlName","issueType","nzId","issue","ngModel","product"],["nzValue","delivery","nzLabel","Delivery Issue"],["nzValue","product","nzLabel","Product Issue"],["nzValue","payment","nzLabel","Payment Issue"],["nzValue","cashback","nzLabel","Cash Back"],["nzValue","bank_payment","nzLabel","Bank Payment"],["nzValue","cancel_order","nzLabel","Request For Order Cancel"],["nzXs","24"],["nzShowSearch","","nzAllowClear","","formControlName","productIds"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["formControlName","message","nz-input","","rows","3","placeholder","Your message..."],["nzId","orderid",3,"nzValue","nzLabel"],[3,"nzValue","nzLabel"]],template:function(n,l){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),e._uU(4,"Ticket"),e.qZA(),e.TgZ(5,"button",3),e.NdJ("click",function(){return l.ticketModal()}),e._uU(6," Create Ticket "),e.qZA()()()(),e.TgZ(7,"nz-card",4)(8,"nz-tabset",5)(9,"nz-tab",6)(10,"nz-table",7,8)(12,"thead")(13,"tr")(14,"th"),e._uU(15,"Ticket ID"),e.qZA(),e.TgZ(16,"th"),e._uU(17,"Order Details"),e.qZA(),e.TgZ(18,"th"),e._uU(19,"Product SKU"),e.qZA(),e.TgZ(20,"th"),e._uU(21,"Issue Type"),e.qZA(),e.TgZ(22,"th"),e._uU(23,"Message"),e.qZA(),e.TgZ(24,"th"),e._uU(25,"Status"),e.qZA()()(),e.TgZ(26,"tbody"),e.YNc(27,S,19,15,"tr",9),e.qZA()()()(),e.YNc(28,I,1,1,"ng-template",null,10,e.W1O),e.qZA(),e.TgZ(30,"nz-modal",11),e.NdJ("nzVisibleChange",function(z){return l.isVisible=z})("nzOnCancel",function(){return l.ticketCancle()})("nzOnOk",function(){return l.onSubmit()}),e.YNc(31,F,30,4,"ng-container",12),e.qZA()),2&n){const d=e.MAs(29);e.xp6(8),e.Q6J("nzTabBarExtraContent",d),e.xp6(2),e.Q6J("nzData",l.tickets),e.xp6(17),e.Q6J("ngForOf",l.tickets),e.xp6(3),e.Q6J("nzVisible",l.isVisible)}},dependencies:[h.sg,r.rH,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,c.On,o.N8,o.Uo,o._C,o.Om,o.p0,o.$Z,p.bd,_.xH,_.xw,b.Zp,y.ix,A.w,Z.dQ,O.du,O.Hf,v.Ip,v.Vq,P.t3,P.SK,h.uU],styles:[".mb15[_ngcontent-%COMP%]{margin-bottom:15px}.ticket-create[_ngcontent-%COMP%]{margin-bottom:30px;display:flex;align-items:center;justify-content:space-between}.ticket-main[_ngcontent-%COMP%]{padding:0}.ticket-main[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%], .ticket-main[_ngcontent-%COMP%]   .openbtn[_ngcontent-%COMP%]{padding:5px 15px;border-radius:50px}.ticket-main[_ngcontent-%COMP%]   .openbtn[_ngcontent-%COMP%]{background:#ddd}.ticket-main[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%]{background:rgb(11,133,0);color:#fff}.ticket-main[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:pointer;width:100%}.new_issue_submit[_ngcontent-%COMP%]   nz-form-item[_ngcontent-%COMP%]{margin-bottom:10px}.new_issue_submit[_ngcontent-%COMP%]   nz-option[_ngcontent-%COMP%], .new_issue_submit[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%]{width:100%}"]}),i})()}];let V=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[r.Bz.forChild(B),r.Bz]}),i})();var L=a(96120);let q=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.ez,V,g.q,o.HQ,p.vh,_.we,b.o7,y.sL,O.Qp,L.P]}),i})()},68132:(k,f,a)=>{a.d(f,{p:()=>C});var g=a(40520),h=a(92340),c=a(5e3);const e=h.N.apiBaseLink+"/api/order/";let C=(()=>{class m{constructor(t){this.httpClient=t}editOrder(t){return this.httpClient.post(e+"edit-order",t)}placeOrder(t){return this.httpClient.post(e+"place-order",t)}updateOrder(t){return this.httpClient.post(e+"update-order",t)}placeOrderRequest(t){return this.httpClient.post(e+"place-order-request",t)}placeTempOrder(t){return this.httpClient.post(e+"place-temp-order",t)}updateOrderSessionKey(t,s){return this.httpClient.post(e+"update-session-key/"+t+"/"+s,{})}getAllOrdersByUser(t,s,r,o){let p=new g.LE;return p=p.append("q",t),p=p.append("status",o),s&&(p=p.append("pageSize",s.pageSize),p=p.append("currentPage",s.currentPage)),this.httpClient.get(e+"get-all-orders-by-user",{params:p})}getAllOrdersByUserId(t){return this.httpClient.get(e+"get-all-orders-by-userId/"+t)}getAllCanceledOrdersByUser(t,s,r){return this.httpClient.get(e+"get-all-canceled-orders-by-user")}getAllOrdersByUserOrderId(t,s){let r=new g.LE;return t&&(console.log("param id ",t),r=r.append("id",t)),s&&(r=r.append("select",s)),this.httpClient.get(e+"get-orders-by-user-orderId",{params:r})}getAllOrdersofyUserByAdmin(t,s,r){let o=new g.LE;return r&&(o=o.append("userId",r)),t?(o=o.append("pageSize",t.pageSize),o=o.append("page",t.currentPage),s&&(o=o.append("select",s)),this.httpClient.get(e+"get-all-orders-of-user-by-admin",{params:o})):(s&&(o=o.append("select",s)),this.httpClient.get(e+"get-all-orders-of-user-by-admin",{params:o}))}getOrderDetails(t){return this.httpClient.get(e+"get-order-details/"+t)}getOrderDetailsByOrderId(t){return this.httpClient.get(e+"get-order-details-by-orderId/"+t)}getrequestOrderDetails(t){return this.httpClient.get(e+"get-request-order-details/"+t)}cancelOrderByUser(t){return this.httpClient.put(e+"cancel-order-by-user/"+t,{})}deleteOrderByAdmin(t){return this.httpClient.delete(e+"delete-order-by-admin/"+t)}getAllTransactionByUser(t,s){let r=new g.LE;return t?(r=r.append("pageSize",t.pageSize),r=r.append("page",t.currentPage),s&&(r=r.append("select",s)),this.httpClient.get(e+"get-all-transactions-by-user",{params:r})):(s&&(r=r.append("select",s)),this.httpClient.get(e+"get-all-transactions-by-user",{params:r}))}getAllOrdersByAdmin(t,s,r,o){return this.httpClient.post(e+"get-all-orders-by-admin",{paginate:t,sort:s,filter:r,select:o})}getOrdersBySearch(t,s,r){let o=new g.LE;return o=o.append("q",t),s&&(o=o.append("pageSize",s.pageSize),o=o.append("currentPage",s.currentPage)),this.httpClient.post(e+"get-order-by-search",{filter:r},{params:o})}getSelectedOrderDetails(t){return this.httpClient.post(e+"get-selected-order-details",{selectedIds:t})}getAllOrdersBySku(t){return this.httpClient.get(e+"get-all-orders-by-sku/"+t)}changeOrderStatus(t){return this.httpClient.put(e+"change-order-status",t)}getAllTransactionByAdmin(t,s){let r=new g.LE;return t?(r=r.append("pageSize",t.pageSize),r=r.append("page",t.currentPage),s&&(r=r.append("select",s)),this.httpClient.get(e+"get-all-transaction-by-admin",{params:r})):(s&&(r=r.append("select",s)),this.httpClient.get(e+"get-all-transaction-by-admin",{params:r}))}testSslSmsApi(){return this.httpClient.get(e+"sent-test-ssl-message")}updateOrderById(t){return this.httpClient.put(e+"update-order-by-id",t)}updateMultipleOrderById(t){return this.httpClient.post(e+"update-multiple-order-by-id",t)}updateRequestOrderById(t){return this.httpClient.put(e+"update-request-order-by-id",t)}payPayment(t){return this.httpClient.post(e+"pay-payment",t)}sendNotification(t){return this.httpClient.post(e+"confirm-notification",t)}addToOrderTimeline(t,s){return this.httpClient.post(e+"add-to-order-timeline",{data:t,orderId:s})}updateTag(t,s){return this.httpClient.post(e+"update-tag",{orderId:t,tag:s})}updateDeliveryAddress(t,s){return this.httpClient.post(e+"update-delivery-address",{orderId:t,address:s})}setFilterVariable(t){this.filterVariable=t}getFilterVariable(){let t=this.filterVariable;return this.clearFilterVariable(),t}clearFilterVariable(){this.filterVariable=void 0}}return m.\u0275fac=function(t){return new(t||m)(c.LFG(g.eN))},m.\u0275prov=c.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);