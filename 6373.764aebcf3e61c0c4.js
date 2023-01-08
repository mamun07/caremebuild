"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[6373],{31913:(O,v,l)=>{l.d(v,{i:()=>p});var p=(()=>{return(d=p||(p={}))[d.PENDING=0]="PENDING",d[d.CANCEL=1]="CANCEL",d[d.CONFIRM=2]="CONFIRM",d[d.PARTIAL_SHIPPING=3]="PARTIAL_SHIPPING",d[d.SHIPPING=4]="SHIPPING",d[d.DELIVERED=5]="DELIVERED",d[d.RETURNING=6]="RETURNING",d[d.RETURNED=7]="RETURNED",d[d.PARTIAL_RETURNED=8]="PARTIAL_RETURNED",d[d.REFUND=9]="REFUND",d[d.EDIT=10]="EDIT",p;var d})()},76373:(O,v,l)=>{l.r(v),l.d(v,{SummaryModule:()=>M});var p=l(24586),d=l(69808),c=l(31913),e=l(5e3),I=l(68132),g=l(8338),U=l(29264),t=l(73071),s=l(49727),n=l(5944),a=l(77484),h=l(41894),y=l(50939),P=l(99826);const T=function(o){return["../../order-details",o]};function z(o,m){if(1&o&&(e.TgZ(0,"tr")(1,"td",22)(2,"a",23),e._uU(3),e.qZA(),e.TgZ(4,"h5"),e._uU(5),e.ALo(6,"date"),e.qZA()(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"span"),e._uU(13,"Pending"),e.qZA()()()),2&o){const i=m.$implicit;e.xp6(2),e.Q6J("routerLink",e.VKq(8,T,i._id)),e.xp6(1),e.hij(" ",i.orderId," "),e.xp6(2),e.Oqu(e.xi3(6,5,i.createdAt,"short")),e.xp6(3),e.Oqu(null==i.orderedItems?null:i.orderedItems.length),e.xp6(2),e.Oqu(i.totalAmount)}}const f=function(){return{span:12}},A=function(){return{span:6}},R=[{path:"",component:(()=>{class o{constructor(i,r,u,C,Z,D){this.orderService=i,this.returnService=r,this.reviewService=u,this.userService=C,this.message=Z,this.userDataService=D,this.listOfData=[],this.totalOrders=0,this.totalPendingItems=0,this.totalCanceledItems=0,this.totalConfirmedItems=0,this.returns=[],this.totalReturns=0,this.returnAccepted=0,this.returnPending=0,this.reviews=[],this.totalReviews=0}ngOnInit(){this.userStatus=this.userService.getUserStatus(),this.userStatus?this.getLoggedInUserInfo():this.message.create("error","Please Login First")}getLoggedInUserInfo(){this.userStatus&&this.userDataService.getLoggedInUserInfo().subscribe(i=>{this.user=i.data,this.id=this.user._id,this.getAllOrders(this.id),this.getAllReturn(this.user)},i=>{console.log(i)})}getAllOrders(i){console.log(i),this.orderService.getAllOrdersByUser(null,null,i).subscribe(r=>{this.orders=r.data,this.setOrderData(this.orders),console.log(r.data)},r=>{console.log(r)})}getAllReturn(i){this.returnService.getReturnByUserId(i._id).subscribe(r=>{this.returns=r.data,this.totalReturns=0;for(let u=0;u<this.returns.length;u++){this.totalReturns+=this.returns[u].products.length;for(let C=0;C<this.returns[u].products.length;C++){let Z=this.returns[u].products[C];Z.quantity===Z.recievedQty?this.returnAccepted+=1:this.returnPending+=1}}})}getAllReviews(i){this.reviewService.getAllByUser().subscribe(r=>{this.reviews=r.data,this.totalReviews=0})}setOrderData(i){this.totalOrders=0,this.totalPendingItems=0,this.totalCanceledItems=0,this.totalConfirmedItems=0;for(let r=0;r<this.orders.length;r++){this.totalOrders+=this.orders[r].orderedItems.length;for(let u=0;u<this.orders[r].orderedItems.length;u++)this.orders[r].orderedItems[u].deliveryStatus===c.i.PENDING?this.totalPendingItems+=1:this.orders[r].orderedItems[u].deliveryStatus===c.i.CANCEL?this.totalCanceledItems+=1:(this.orders[r].orderedItems[u].deliveryStatus===c.i.CONFIRM||this.orders[r].orderedItems[u].deliveryStatus===c.i.SHIPPING)&&(this.totalConfirmedItems+=1)}}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(I.p),e.Y36(g.x),e.Y36(U.F),e.Y36(t.K),e.Y36(s.dD),e.Y36(n.M))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-summary"]],decls:103,vars:35,consts:[["nz-row","","nzGutter","0",1,"md"],["nz-col","","nzSpan","24"],[1,"dash_welcome"],["nz-row","","nzGutter","8"],["nz-col","",1,"md",3,"nzXs","nzMd"],["nzSize","small","nzHoverable",""],[1,"dash_header"],[1,"las","la-box"],[1,"dash_body"],[2,"color","orange"],[2,"color","green"],[2,"color","red"],[1,"las","la-coins"],[1,"las","la-wallet"],[2,"visibility","hidden"],[1,"lar","la-star"],["nz-row","","nzGutter","0"],["nzSize","small"],["nzSize","small",3,"nzSimple","nzData","nzPageSize"],["dashtable",""],[1,"twidth"],[4,"ngFor","ngForOf"],[1,"routerLink"],[3,"routerLink"]],template:function(i,r){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),e._uU(4),e.qZA()()()(),e.TgZ(5,"div",3)(6,"div",4)(7,"nz-card",5)(8,"div",6)(9,"h2"),e._UZ(10,"i",7),e._uU(11," Order Items"),e.qZA(),e.TgZ(12,"h1"),e._uU(13),e.qZA()(),e.TgZ(14,"div",8)(15,"h5"),e._uU(16,"Items Pending "),e.TgZ(17,"span",9),e._uU(18),e.qZA()(),e.TgZ(19,"h5"),e._uU(20,"Items Confirmed "),e.TgZ(21,"span",10),e._uU(22),e.qZA()(),e.TgZ(23,"h5"),e._uU(24,"Items Canceled"),e.TgZ(25,"span",11),e._uU(26),e.qZA()()()()(),e.TgZ(27,"div",4)(28,"nz-card",5)(29,"div",6)(30,"h2"),e._UZ(31,"i",12),e._uU(32," Points"),e.qZA(),e.TgZ(33,"h1"),e._uU(34),e.qZA()(),e.TgZ(35,"div",8)(36,"h5"),e._uU(37,"Lifetime Points "),e.TgZ(38,"span",9),e._uU(39),e.qZA()(),e.TgZ(40,"h5"),e._uU(41,"Use Points "),e.TgZ(42,"span",10),e._uU(43),e.qZA()(),e.TgZ(44,"h5"),e._uU(45,"Pending Points "),e.TgZ(46,"span",11),e._uU(47),e.qZA()()()()(),e.TgZ(48,"div",4)(49,"nz-card",5)(50,"div",6)(51,"h2"),e._UZ(52,"i",13),e._uU(53," Return"),e.qZA(),e.TgZ(54,"h1"),e._uU(55),e.qZA()(),e.TgZ(56,"div",8)(57,"h5",14),e._uU(58,"sani vai dont use it"),e.qZA(),e.TgZ(59,"h5"),e._uU(60,"Accepted "),e.TgZ(61,"span",10),e._uU(62),e.qZA()(),e.TgZ(63,"h5"),e._uU(64,"Pending "),e.TgZ(65,"span",9),e._uU(66),e.qZA()()()()(),e.TgZ(67,"div",4)(68,"nz-card",5)(69,"div",6)(70,"h2"),e._UZ(71,"i",15),e._uU(72," Reviews"),e.qZA(),e.TgZ(73,"h1"),e._uU(74),e.qZA()(),e.TgZ(75,"div",8)(76,"h5",14),e._uU(77,"sani vai dont use it"),e.qZA(),e.TgZ(78,"h5"),e._uU(79,"Reviews Done "),e.TgZ(80,"span",10),e._uU(81),e.qZA()(),e.TgZ(82,"h5"),e._uU(83,"Reviews Pending "),e.TgZ(84,"span",9),e._uU(85),e.qZA()()()()()(),e.TgZ(86,"div",16)(87,"div",1)(88,"nz-card",17)(89,"nz-table",18,19)(91,"thead")(92,"tr")(93,"th"),e._uU(94,"Order"),e.qZA(),e.TgZ(95,"th",20),e._uU(96,"Items"),e.qZA(),e.TgZ(97,"th",20),e._uU(98,"Total"),e.qZA(),e.TgZ(99,"th",20),e._uU(100,"Payment"),e.qZA()()(),e.TgZ(101,"tbody"),e.YNc(102,z,14,10,"tr",21),e.qZA()()()()()),2&i){const u=e.MAs(90);e.xp6(4),e.hij("Hello ",null==r.user?null:r.user.fullName,", Welcome to dashboard !"),e.xp6(2),e.Q6J("nzXs",e.DdM(27,f))("nzMd",e.DdM(28,A)),e.xp6(7),e.Oqu(r.totalOrders),e.xp6(5),e.Oqu(r.totalPendingItems),e.xp6(4),e.Oqu(r.totalConfirmedItems),e.xp6(4),e.Oqu(r.totalCanceledItems),e.xp6(1),e.Q6J("nzXs",e.DdM(29,f))("nzMd",e.DdM(30,A)),e.xp6(7),e.Oqu(null==r.user?null:r.user.points),e.xp6(5),e.Oqu(null==r.user?null:r.user.earnedPoints),e.xp6(4),e.Oqu(null==r.user?null:r.user.redeemedPoints),e.xp6(4),e.Oqu((null==r.user?null:r.user.earnedPoints)-(null==r.user?null:r.user.points)-(null==r.user?null:r.user.redeemedPoints)),e.xp6(1),e.Q6J("nzXs",e.DdM(31,f))("nzMd",e.DdM(32,A)),e.xp6(7),e.Oqu(r.totalReturns),e.xp6(7),e.Oqu(r.returnAccepted),e.xp6(4),e.Oqu(r.returnPending),e.xp6(1),e.Q6J("nzXs",e.DdM(33,f))("nzMd",e.DdM(34,A)),e.xp6(7),e.Oqu(r.totalReviews),e.xp6(7),e.Oqu(r.totalReviews),e.xp6(4),e.Oqu(r.totalConfirmedItems-r.totalReviews),e.xp6(4),e.Q6J("nzSimple",!0)("nzData",r.orders)("nzPageSize",50),e.xp6(13),e.Q6J("ngForOf",u.data)}},dependencies:[d.sg,a.bd,h.t3,h.SK,y.N8,y.Uo,y._C,y.Om,y.p0,y.$Z,P.yS,d.uU],styles:[".md[_ngcontent-%COMP%]{margin-bottom:15px!important}.dash_welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#585858}.dash_header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px!important}.dash_header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#585858;display:flex;align-items:center}.dash_header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px;margin-right:10px!important}.dash_body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;font-size:14px;line-height:20px;color:#707070}@media (width: 1400px){.twidth[_ngcontent-%COMP%]{width:100px}}@media (width: 500px){.twidth[_ngcontent-%COMP%]{width:80px}}"]}),o})()}];let _=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[P.Bz.forChild(R),P.Bz]}),o})();var S=l(90685);let M=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,a.vh,h.Jb,y.HQ,s.gR,S.Xo,p.D,_]}),o})()},68132:(O,v,l)=>{l.d(v,{p:()=>I});var p=l(40520),d=l(92340),c=l(5e3);const e=d.N.apiBaseLink+"/api/order/";let I=(()=>{class g{constructor(t){this.httpClient=t}editOrder(t){return this.httpClient.post(e+"edit-order",t)}placeOrder(t){return this.httpClient.post(e+"place-order",t)}updateOrder(t){return this.httpClient.post(e+"update-order",t)}placeOrderRequest(t){return this.httpClient.post(e+"place-order-request",t)}placeTempOrder(t){return this.httpClient.post(e+"place-temp-order",t)}updateOrderSessionKey(t,s){return this.httpClient.post(e+"update-session-key/"+t+"/"+s,{})}getAllOrdersByUser(t,s,n,a){let h=new p.LE;return h=h.append("q",t),h=h.append("status",a),s&&(h=h.append("pageSize",s.pageSize),h=h.append("currentPage",s.currentPage)),this.httpClient.get(e+"get-all-orders-by-user",{params:h})}getAllOrdersByUserId(t){return this.httpClient.get(e+"get-all-orders-by-userId/"+t)}getAllCanceledOrdersByUser(t,s,n){return this.httpClient.get(e+"get-all-canceled-orders-by-user")}getAllOrdersByUserOrderId(t,s){let n=new p.LE;return t&&(console.log("param id ",t),n=n.append("id",t)),s&&(n=n.append("select",s)),this.httpClient.get(e+"get-orders-by-user-orderId",{params:n})}getAllOrdersofyUserByAdmin(t,s,n){let a=new p.LE;return n&&(a=a.append("userId",n)),t?(a=a.append("pageSize",t.pageSize),a=a.append("page",t.currentPage),s&&(a=a.append("select",s)),this.httpClient.get(e+"get-all-orders-of-user-by-admin",{params:a})):(s&&(a=a.append("select",s)),this.httpClient.get(e+"get-all-orders-of-user-by-admin",{params:a}))}getOrderDetails(t){return this.httpClient.get(e+"get-order-details/"+t)}getOrderDetailsByOrderId(t){return this.httpClient.get(e+"get-order-details-by-orderId/"+t)}getrequestOrderDetails(t){return this.httpClient.get(e+"get-request-order-details/"+t)}cancelOrderByUser(t){return this.httpClient.put(e+"cancel-order-by-user/"+t,{})}deleteOrderByAdmin(t){return this.httpClient.delete(e+"delete-order-by-admin/"+t)}getAllTransactionByUser(t,s){let n=new p.LE;return t?(n=n.append("pageSize",t.pageSize),n=n.append("page",t.currentPage),s&&(n=n.append("select",s)),this.httpClient.get(e+"get-all-transactions-by-user",{params:n})):(s&&(n=n.append("select",s)),this.httpClient.get(e+"get-all-transactions-by-user",{params:n}))}getAllOrdersByAdmin(t,s,n,a){return this.httpClient.post(e+"get-all-orders-by-admin",{paginate:t,sort:s,filter:n,select:a})}getOrdersBySearch(t,s,n){let a=new p.LE;return a=a.append("q",t),s&&(a=a.append("pageSize",s.pageSize),a=a.append("currentPage",s.currentPage)),this.httpClient.post(e+"get-order-by-search",{filter:n},{params:a})}getSelectedOrderDetails(t){return this.httpClient.post(e+"get-selected-order-details",{selectedIds:t})}getAllOrdersByAdminNoPaginate(){return this.httpClient.get(e+"get-all-orders-by-admin-no-paginate")}changeOrderStatus(t){return this.httpClient.put(e+"change-order-status",t)}getAllTransactionByAdmin(t,s){let n=new p.LE;return t?(n=n.append("pageSize",t.pageSize),n=n.append("page",t.currentPage),s&&(n=n.append("select",s)),this.httpClient.get(e+"get-all-transaction-by-admin",{params:n})):(s&&(n=n.append("select",s)),this.httpClient.get(e+"get-all-transaction-by-admin",{params:n}))}testSslSmsApi(){return this.httpClient.get(e+"sent-test-ssl-message")}updateOrderById(t){return this.httpClient.put(e+"update-order-by-id",t)}updateMultipleOrderById(t){return this.httpClient.post(e+"update-multiple-order-by-id",t)}updateRequestOrderById(t){return this.httpClient.put(e+"update-request-order-by-id",t)}payPayment(t){return this.httpClient.post(e+"pay-payment",t)}sendNotification(t){return this.httpClient.post(e+"confirm-notification",t)}addToOrderTimeline(t,s){return this.httpClient.post(e+"add-to-order-timeline",{data:t,orderId:s})}updateTag(t,s){return this.httpClient.post(e+"update-tag",{orderId:t,tag:s})}setFilterVariable(t){this.filterVariable=t}getFilterVariable(){let t=this.filterVariable;return this.clearFilterVariable(),t}clearFilterVariable(){this.filterVariable=void 0}}return g.\u0275fac=function(t){return new(t||g)(c.LFG(p.eN))},g.\u0275prov=c.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);