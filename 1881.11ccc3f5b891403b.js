"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[1881],{31913:(T,C,s)=>{s.d(C,{i:()=>p});var p=(()=>{return(i=p||(p={}))[i.PENDING=0]="PENDING",i[i.CANCEL=1]="CANCEL",i[i.CONFIRM=2]="CONFIRM",i[i.PARTIAL_SHIPPING=3]="PARTIAL_SHIPPING",i[i.SHIPPING=4]="SHIPPING",i[i.DELIVERED=5]="DELIVERED",i[i.RETURNING=6]="RETURNING",i[i.RETURNED=7]="RETURNED",i[i.PARTIAL_RETURNED=8]="PARTIAL_RETURNED",i[i.REFUND=9]="REFUND",i[i.EDIT=10]="EDIT",p;var i})()},4602:(T,C,s)=>{s.d(C,{b:()=>p});var p=(()=>{return(i=p||(p={}))[i.PAID=0]="PAID",i[i.UNPAID=1]="UNPAID",i[i.PENDING=2]="PENDING",i[i.PARTIALPAID=3]="PARTIALPAID",i[i.REFUNDED=4]="REFUNDED",i[i.OVERDUE=5]="OVERDUE",i[i.CANCEL=6]="CANCEL",i[i.EXPIRED=7]="EXPIRED",i[i.WRITE_OFF=8]="WRITE_OFF",p;var i})()},88068:(T,C,s)=>{s.r(C),s.d(C,{OrderDetailsModule:()=>H});var p=s(16102),i=s(24586),z=s(69808),o=s(31913),e=s(5e3),h=s(66082),Z=s(68132),n=s(99826),d=s(49727),a=s(61293),c=s(63640),_=s(11047),f=s(93075),v=s(76042),M=s(82683),E=s(92643),I=s(78054),A=s(50939),b=s(41894),x=s(98706),P=s(13762),N=s(77484),R=s(73433),q=s(81197);function L(l,g){if(1&l&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&l){const t=e.oxw().$implicit;e.xp6(1),e.hij("(",null==t?null:t.invoicedQuantity,")")}}function S(l,g){if(1&l){const t=e.EpF();e.TgZ(0,"i",33),e.NdJ("click",function(){e.CHM(t);const u=e.oxw(),m=u.$implicit,O=u.index,y=e.oxw();return e.KtG(y.onCancel(m,O))}),e.qZA()}}function B(l,g){if(1&l&&(e.TgZ(0,"tr")(1,"td"),e._UZ(2,"img",24),e.qZA(),e.TgZ(3,"td")(4,"p"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td")(11,"p"),e._uU(12),e.qZA(),e.TgZ(13,"p"),e._uU(14,"COD"),e.qZA()(),e.TgZ(15,"td")(16,"p",25),e._uU(17),e.ALo(18,"paymentStatus"),e.qZA()(),e.TgZ(19,"td",26),e._uU(20," Estimated Delivery by "),e.TgZ(21,"span"),e._uU(22),e.ALo(23,"date"),e.ALo(24,"date"),e.qZA()(),e.TgZ(25,"td",27)(26,"p",28),e._uU(27),e.ALo(28,"orderStatus"),e.qZA(),e.YNc(29,L,2,1,"span",20),e.qZA(),e.TgZ(30,"td",29)(31,"div",30),e.YNc(32,S,1,0,"i",31),e.TgZ(33,"span",32),e._uU(34,"Cancel"),e.qZA()()()()),2&l){const t=g.$implicit,r=e.oxw();e.xp6(2),e.Q6J("nzSrc",null!=t&&t.productId?r.getThumbnailImage(null==t?null:t.productId):"/assets/images/placeholder/test.png")("alt",null==t?null:t.name),e.xp6(3),e.Oqu(null==t?null:t.name),e.xp6(2),e.hij(" SKU: ",null==t?null:t.sku," "),e.xp6(2),e.lnq(" ",null==t?null:t.quantity," X ",(null==t?null:t.price)+(null==t?null:t.tax)," = ",(null==t?null:t.quantity)*((null==t?null:t.price)+(null==t?null:t.tax))," "),e.xp6(2),e.Jzz("display: ",null!=t&&t.advanceAmount?"block":"none","; color: #ff8100"),e.xp6(1),e.hij("",null==t?null:t.advanceAmount," TK"),e.xp6(1),e.Jzz("display: ",null!=t&&t.advanceAmount?"none":"block","; color: #00b500"),e.xp6(4),e.Oqu(e.lcZ(18,19,null==t?null:t.paymentStatus)),e.xp6(5),e.Oqu(null!=t&&t.deliveryDateTo?e.xi3(23,21,null==t?null:t.deliveryDateTo,"d MMM"):e.xi3(24,24,null==t?null:t.deliveryDateFrom,"d MMM")),e.xp6(5),e.Oqu(e.lcZ(28,27,null==t?null:t.deliveryStatus)),e.xp6(2),e.Q6J("ngIf",3===(null==t?null:t.deliveryStatus)),e.xp6(3),e.Q6J("ngIf",0===t.deliveryStatus)}}function F(l,g){1&l&&(e.TgZ(0,"nz-list-item")(1,"span"),e._uU(2,"Coupon Code"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"(-) 0 TK"),e.qZA()())}function V(l,g){1&l&&(e.TgZ(0,"nz-list-item")(1,"span"),e._uU(2,"Points Redeem"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"(-) 0 TK"),e.qZA()())}const J=function(l){return["../../../","success",l]};function k(l,g){if(1&l&&(e.TgZ(0,"a",34),e._uU(1,"Pay Now"),e.qZA()),2&l){const t=e.oxw();e.Q6J("routerLink",e.VKq(1,J,null==t.order?null:t.order.orderId))}}function w(l,g){if(1&l&&e._UZ(0,"nz-option",49),2&l){const t=g.$implicit;e.Q6J("nzValue",t._id)("nzLabel",t.name)}}function G(l,g){if(1&l){const t=e.EpF();e.ynx(0),e.TgZ(1,"form",35),e.NdJ("ngSubmit",function(){e.CHM(t);const u=e.oxw();return e.KtG(u.onSubmit())}),e.TgZ(2,"nz-form-item")(3,"nz-form-label",36),e._uU(4," Issue Type "),e.qZA(),e.TgZ(5,"nz-form-control",37)(6,"nz-select",38),e._UZ(7,"nz-option",39)(8,"nz-option",40)(9,"nz-option",41)(10,"nz-option",42)(11,"nz-option",43)(12,"nz-option",44),e.qZA()()(),e.TgZ(13,"nz-form-item")(14,"nz-form-label",36),e._uU(15," Product Skus "),e.qZA(),e.TgZ(16,"nz-form-control",45)(17,"nz-select",46),e.YNc(18,w,1,2,"nz-option",47),e.qZA()()(),e.TgZ(19,"nz-form-item")(20,"nz-form-label",36),e._uU(21," Message "),e.qZA(),e.TgZ(22,"nz-form-control",45),e._UZ(23,"textarea",48),e.qZA()()(),e.BQk()}if(2&l){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.dataForm),e.xp6(17),e.Q6J("ngForOf",t.orderedItems)}}const D=function(){return{span:24}},U=function(){return{span:8}},Q=function(){return{x:"600px"}},K=function(l){return["../../","track-order",l]},Y=[{path:":id",component:(()=>{class l{constructor(t,r,u,m,O,y){this.productService=t,this.orderService=r,this.activatedRoute=u,this.router=m,this.msg=O,this.reloadService=y,this.list=["Shipped","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires."],this.listOfChildrenData=[],this.success=!0,this.isVisible=!1}showModal(){this.isVisible=!0}handleOk(){console.log("Button ok clicked!"),this.isVisible=!1}handleCancel(){console.log("Button cancel clicked!"),this.isVisible=!1}ngOnInit(){this.subRouteOne=this.activatedRoute.paramMap.subscribe(t=>{this.id=t.get("id"),this.id&&this.getOrderById(this.id)})}getOrderById(t){console.log(t),this.orderService.getOrderDetails(t).subscribe(r=>{this.order=r.data,this.listOfChildrenData=this.order.orderedItems,console.log(this.listOfChildrenData)},r=>{console.log(r)})}getThumbnailImage(t){return t?this.productService.getImages(null==t?void 0:t.medias,null==t?void 0:t.images)[0]:"/assets/images/placeholder/test.png"}getImages(t,r){let u=[];if(t&&t.length>0){for(let m=0,O=0;m<t.length;m++)null!==t[m]&&""!==t[m]&&(u.push(t[m]),O++);u=[...u,...r]}else u=r;return u}getSubTotal(){let t=0;return this.listOfChildrenData.forEach(r=>{t+=(r.price+r.tax)*r.quantity}),t}onCancel(t,r){if(this.order.orderedItems[r].deliveryStatus=o.i.CANCEL,this.decreaseCommitted(t,t.productId._id),this.increaseAvailable(t,t.productId._id),this.success){this.updateOrder(this.order);let u="Item ("+this.order.orderedItems[r].sku+") Canceled";console.log("sku",u),this.sentToTimeline(u)}else this.msg.error("Order Could not be Canceled")}sentToTimeline(t){let r={status:o.i.CANCEL,title:"Cancel",date:new Date,message:t,addedBy:this.order.name};this.addToOrderTimeLine(r,this.order.orderId)}addToOrderTimeLine(t,r){this.orderService.addToOrderTimeline(t,r).subscribe(u=>{this.msg.success(u.message),this.reloadService.needRefreshOrder$()},u=>{this.msg.error(u.message)})}updateOrder(t){this.orderService.updateOrderById(t).subscribe(r=>{this.msg.success(r.message)},r=>{this.msg.error(r.message)})}decreaseCommitted(t,r){this.productService.decreaseCommitedProductQuantity(t,r).subscribe(u=>{this.success=!0},u=>{this.success=!1})}increaseAvailable(t,r){this.productService.increaseAvailableProductQuantity(t,r).subscribe(u=>{this.msg.success(u.message),this.success=!0},u=>{this.msg.error(u.message),this.success=!1})}get TotalWeight(){let t=0;return this.order.orderedItems.forEach(r=>{t+=r.productId.weight}),t}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(h.M),e.Y36(Z.p),e.Y36(n.gz),e.Y36(n.F0),e.Y36(d.dD),e.Y36(a.f))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-order-details"]],decls:136,vars:36,consts:[["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[1,"heading-title"],["nzSize","small",1,"order-details"],["nz-row",""],["nz-col","",3,"nzXs","nzMd"],["nz-row","",1,"order-list",3,"nzGutter"],["nzSize","small",3,"nzExtra"],["nzSize","small",3,"nzData","nzShowPagination","nzScroll"],["innerTable",""],[2,"background","transparent"],["nzWidth","100px"],["nzWidth","150px"],["nz-button","",3,"routerLink"],[1,"las","la-lg","la-truck",2,"margin-left","5px"],[4,"ngFor","ngForOf"],[1,"single-order-summary"],[1,"issue_button"],["nz-button","","nzType","outline","nzSize","large",3,"click"],["nzSize","small",1,"order-summary"],[4,"ngIf"],["orderAction",""],["nzTitle","Raise an Issue",3,"nzVisible","nzVisibleChange","nzOnCancel","nzOnOk"],[4,"nzModalContent"],["nz-image","",2,"width","50px",3,"nzSrc","alt"],[2,"color","#898989","font-style","italic"],[1,"estimated-time","instock"],[1,"order-status"],[2,"color","#585858","text-transform","uppercase","text-align","center"],[2,"text-align","center"],[1,"tooltip"],["class","las la-2x la-times-circle ","style","color: red",3,"click",4,"ngIf"],[1,"tooltiptext"],[1,"las","la-2x","la-times-circle",2,"color","red",3,"click"],["nz-button","","nzType","primary",3,"routerLink"],[1,"new_issue_submit",3,"formGroup","ngSubmit"],["nzXs","24","nzFor","issue"],["nzXs","24","nzMd","16","nzLg","12"],["formControlName","issueType","nzId","issue","ngModel","product"],["nzValue","delivery","nzLabel","Delivery Issue"],["nzValue","product","nzLabel","Product Issue"],["nzValue","payment","nzLabel","Payment Issue"],["nzValue","cashback","nzLabel","Cash Back"],["nzValue","bank_payment","nzLabel","Bank Payment"],["nzValue","cancel_order","nzLabel","Request For Order Cancel"],["nzXs","24"],["nzShowSearch","","nzAllowClear","","formControlName","productIds"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["formControlName","message","nz-input","","rows","3","placeholder","Your message..."],[3,"nzValue","nzLabel"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),e._uU(4,"Order Details"),e.qZA()()(),e.TgZ(5,"div",1)(6,"nz-card",3)(7,"div",4)(8,"div",5)(9,"h3"),e._uU(10,"Order Informations"),e.qZA(),e.TgZ(11,"table")(12,"tbody")(13,"tr")(14,"td"),e._uU(15,"Shipped by"),e.qZA(),e.TgZ(16,"td"),e._uU(17,":"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"Pathao"),e.qZA()(),e.TgZ(20,"tr")(21,"td"),e._uU(22,"Weight"),e.qZA(),e.TgZ(23,"td"),e._uU(24,":"),e.qZA(),e.TgZ(25,"td"),e._uU(26),e.qZA()(),e.TgZ(27,"tr")(28,"td"),e._uU(29,"Shipping Cost"),e.qZA(),e.TgZ(30,"td"),e._uU(31,":"),e.qZA(),e.TgZ(32,"td"),e._uU(33),e.qZA()(),e.TgZ(34,"tr")(35,"td"),e._uU(36,"Paid By"),e.qZA(),e.TgZ(37,"td"),e._uU(38,":"),e.qZA(),e.TgZ(39,"td"),e._uU(40,"-"),e.qZA()()()()(),e.TgZ(41,"div",5)(42,"h3"),e._uU(43,"Shipping Informations"),e.qZA(),e.TgZ(44,"table")(45,"tbody")(46,"tr")(47,"td"),e._uU(48,"Name"),e.qZA(),e.TgZ(49,"td"),e._uU(50,":"),e.qZA(),e.TgZ(51,"td"),e._uU(52),e.qZA()(),e.TgZ(53,"tr")(54,"td"),e._uU(55,"Phone No"),e.qZA(),e.TgZ(56,"td"),e._uU(57,":"),e.qZA(),e.TgZ(58,"td"),e._uU(59),e.qZA()(),e.TgZ(60,"tr")(61,"td"),e._uU(62,"Email"),e.qZA(),e.TgZ(63,"td"),e._uU(64,":"),e.qZA(),e.TgZ(65,"td"),e._uU(66),e.qZA()(),e.TgZ(67,"tr")(68,"td"),e._uU(69,"Address"),e.qZA(),e.TgZ(70,"td"),e._uU(71,":"),e.qZA(),e.TgZ(72,"td"),e._uU(73),e.qZA()()()()()()()()(),e.TgZ(74,"div",6)(75,"div",1)(76,"nz-card",7)(77,"nz-table",8,9)(79,"thead",10)(80,"tr")(81,"th",11)(82,"h2"),e._uU(83),e.qZA(),e.TgZ(84,"p"),e._uU(85),e.ALo(86,"date"),e.qZA()(),e.TgZ(87,"th"),e._uU(88,"Details"),e.qZA(),e.TgZ(89,"th"),e._uU(90,"Total Amount"),e.qZA(),e.TgZ(91,"th"),e._uU(92,"Advance Amount"),e.qZA(),e.TgZ(93,"th"),e._uU(94,"Payment Status"),e.qZA(),e._UZ(95,"th")(96,"th"),e.TgZ(97,"th",12)(98,"button",13),e._uU(99," Track Order "),e._UZ(100,"i",14),e.qZA()()()(),e.TgZ(101,"tbody"),e.YNc(102,B,35,29,"tr",15),e.qZA()(),e.TgZ(103,"div",16)(104,"div",17)(105,"button",18),e.NdJ("click",function(){return r.showModal()}),e._uU(106," Raise an Issue "),e.qZA()(),e.TgZ(107,"nz-card",19)(108,"nz-list")(109,"nz-list-item")(110,"h2"),e._uU(111,"Sub-Total"),e.qZA(),e.TgZ(112,"h3"),e._uU(113),e.qZA()(),e.YNc(114,F,5,0,"nz-list-item",20),e.YNc(115,V,5,0,"nz-list-item",20),e.TgZ(116,"nz-list-item")(117,"span"),e._uU(118,"Shipping Charge"),e.qZA(),e.TgZ(119,"p"),e._uU(120),e.qZA()(),e.TgZ(121,"nz-list-item")(122,"span"),e._uU(123,"Paid"),e.qZA(),e.TgZ(124,"p"),e._uU(125),e.qZA()()(),e.TgZ(126,"nz-list")(127,"nz-list-item")(128,"h2"),e._uU(129,"Amount to pay"),e.qZA(),e.TgZ(130,"h3"),e._uU(131),e.qZA()()()()()(),e.YNc(132,k,2,3,"ng-template",null,21,e.W1O),e.qZA()(),e.TgZ(134,"nz-modal",22),e.NdJ("nzVisibleChange",function(m){return r.isVisible=m})("nzOnCancel",function(){return r.handleCancel()})("nzOnOk",function(){return r.handleOk()}),e.YNc(135,G,24,2,"ng-container",23),e.qZA()),2&t){const u=e.MAs(78),m=e.MAs(133);e.Q6J("nzGutter",16),e.xp6(8),e.Q6J("nzXs",e.DdM(29,D))("nzMd",e.DdM(30,U)),e.xp6(18),e.hij("",r.TotalWeight," KG"),e.xp6(7),e.hij("",null==r.order?null:r.order.shippingCharge," Tk"),e.xp6(8),e.Q6J("nzXs",e.DdM(31,D))("nzMd",e.DdM(32,U)),e.xp6(11),e.Oqu(null==r.order?null:r.order.name),e.xp6(7),e.hij(" ",null==r.order?null:r.order.phoneNo," "),e.xp6(7),e.Oqu(null==r.order?null:r.order.email),e.xp6(7),e.Oqu(null==r.order?null:r.order.shippingAddress),e.xp6(1),e.Q6J("nzGutter",16),e.xp6(2),e.Q6J("nzExtra",m),e.xp6(1),e.Q6J("nzData",r.listOfChildrenData)("nzShowPagination",!1)("nzScroll",e.DdM(33,Q)),e.xp6(6),e.hij("#",null==r.order?null:r.order.orderId,""),e.xp6(2),e.Oqu(e.lcZ(86,27,null==r.order?null:r.order.checkoutDate)),e.xp6(13),e.Q6J("routerLink",e.VKq(34,K,null==r.order?null:r.order.orderId)),e.xp6(4),e.Q6J("ngForOf",null==u?null:u.data),e.xp6(11),e.Oqu(r.getSubTotal()),e.xp6(1),e.Q6J("ngIf",null==r.order?null:r.order.couponAmount),e.xp6(1),e.Q6J("ngIf",null==r.order?null:r.order.redeemedPoints),e.xp6(5),e.hij("",null==r.order?null:r.order.shippingCharge," TK"),e.xp6(5),e.hij("",null==r.order?null:r.order.paidAmount," TK"),e.xp6(6),e.hij("",(null==r.order?null:r.order.totalAmount)-(null==r.order?null:r.order.paidAmount)," TK"),e.xp6(3),e.Q6J("nzVisible",r.isVisible)}},dependencies:[z.sg,z.O5,n.rH,n.yS,c.du,c.Hf,_.Zp,f._Y,f.Fj,f.JJ,f.JL,f.sg,f.u,v.ix,M.w,E.dQ,I.Ip,I.Vq,A.N8,A.Uo,A._C,A.Om,A.p0,A.$Z,b.t3,b.SK,x.Ie,P.n_,P.AA,N.bd,z.uU,R.M,q.r],styles:['.tooltip[_ngcontent-%COMP%]{position:relative;display:inline-block}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]{visibility:hidden;width:120px;background-color:#555;color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;bottom:125%;left:50%;margin-left:-60px;opacity:0;transition:opacity .3s}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]:after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent transparent}.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%]{visibility:visible;opacity:1}.order-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:15px!important}.order-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin:5px 0;display:block}.order-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{min-width:100px}.order-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:15px}.heading-title[_ngcontent-%COMP%]{margin:0 0 30px}.order-list[_ngcontent-%COMP%]{margin:30px 0}.orderid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.product-details[_ngcontent-%COMP%]{display:flex;align-items:center}.product-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:15px}.product-details[_ngcontent-%COMP%]   .producttitle[_ngcontent-%COMP%]{display:flex;flex-direction:column}.product-details[_ngcontent-%COMP%]   .producttitle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:10px!important;display:block}.track-order[_ngcontent-%COMP%]{border:1px solid #ddd;padding:10px 15px;text-transform:uppercase;text-align:center}.single-order-summary[_ngcontent-%COMP%]{margin:30px 0;display:flex;justify-content:space-between;align-items:flex-end}.single-order-summary[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]{min-width:30%}nz-select[_ngcontent-%COMP%]{width:100%}@media (max-width: 500px){.single-order-summary[_ngcontent-%COMP%]{flex-direction:column-reverse}.single-order-summary[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]{min-width:100%;margin-bottom:25px}.single-order-summary[_ngcontent-%COMP%]   .issue_button[_ngcontent-%COMP%]{float:left;width:100%}}']}),l})()}];let j=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[n.Bz.forChild(Y),n.Bz]}),l})();var W=s(87238);let H=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[z.ez,W.AV,i.D,j,p.P]}),l})()},68132:(T,C,s)=>{s.d(C,{p:()=>e});var p=s(40520),i=s(92340),z=s(5e3);const o=i.N.apiBaseLink+"/api/order/";let e=(()=>{class h{constructor(n){this.httpClient=n}editOrder(n){return this.httpClient.post(o+"edit-order",n)}placeOrder(n){return this.httpClient.post(o+"place-order",n)}updateOrder(n){return this.httpClient.post(o+"update-order",n)}placeOrderRequest(n){return this.httpClient.post(o+"place-order-request",n)}placeTempOrder(n){return this.httpClient.post(o+"place-temp-order",n)}updateOrderSessionKey(n,d){return this.httpClient.post(o+"update-session-key/"+n+"/"+d,{})}getAllOrdersByUser(n,d,a,c){let _=new p.LE;return _=_.append("q",n),_=_.append("status",c),d&&(_=_.append("pageSize",d.pageSize),_=_.append("currentPage",d.currentPage)),this.httpClient.get(o+"get-all-orders-by-user",{params:_})}getAllOrdersByUserId(n){return this.httpClient.get(o+"get-all-orders-by-userId/"+n)}getAllCanceledOrdersByUser(n,d,a){return this.httpClient.get(o+"get-all-canceled-orders-by-user")}getAllOrdersByUserOrderId(n,d){let a=new p.LE;return n&&(console.log("param id ",n),a=a.append("id",n)),d&&(a=a.append("select",d)),this.httpClient.get(o+"get-orders-by-user-orderId",{params:a})}getAllOrdersofyUserByAdmin(n,d,a){let c=new p.LE;return a&&(c=c.append("userId",a)),n?(c=c.append("pageSize",n.pageSize),c=c.append("page",n.currentPage),d&&(c=c.append("select",d)),this.httpClient.get(o+"get-all-orders-of-user-by-admin",{params:c})):(d&&(c=c.append("select",d)),this.httpClient.get(o+"get-all-orders-of-user-by-admin",{params:c}))}getOrderDetails(n){return this.httpClient.get(o+"get-order-details/"+n)}getOrderDetailsByOrderId(n){return this.httpClient.get(o+"get-order-details-by-orderId/"+n)}getrequestOrderDetails(n){return this.httpClient.get(o+"get-request-order-details/"+n)}cancelOrderByUser(n){return this.httpClient.put(o+"cancel-order-by-user/"+n,{})}deleteOrderByAdmin(n){return this.httpClient.delete(o+"delete-order-by-admin/"+n)}getAllTransactionByUser(n,d){let a=new p.LE;return n?(a=a.append("pageSize",n.pageSize),a=a.append("page",n.currentPage),d&&(a=a.append("select",d)),this.httpClient.get(o+"get-all-transactions-by-user",{params:a})):(d&&(a=a.append("select",d)),this.httpClient.get(o+"get-all-transactions-by-user",{params:a}))}getAllOrdersByAdmin(n,d,a,c){return this.httpClient.post(o+"get-all-orders-by-admin",{paginate:n,sort:d,filter:a,select:c})}getOrdersBySearch(n,d,a){let c=new p.LE;return c=c.append("q",n),d&&(c=c.append("pageSize",d.pageSize),c=c.append("currentPage",d.currentPage)),this.httpClient.post(o+"get-order-by-search",{filter:a},{params:c})}getSelectedOrderDetails(n){return this.httpClient.post(o+"get-selected-order-details",{selectedIds:n})}getAllOrdersByAdminNoPaginate(){return this.httpClient.get(o+"get-all-orders-by-admin-no-paginate")}changeOrderStatus(n){return this.httpClient.put(o+"change-order-status",n)}getAllTransactionByAdmin(n,d){let a=new p.LE;return n?(a=a.append("pageSize",n.pageSize),a=a.append("page",n.currentPage),d&&(a=a.append("select",d)),this.httpClient.get(o+"get-all-transaction-by-admin",{params:a})):(d&&(a=a.append("select",d)),this.httpClient.get(o+"get-all-transaction-by-admin",{params:a}))}testSslSmsApi(){return this.httpClient.get(o+"sent-test-ssl-message")}updateOrderById(n){return this.httpClient.put(o+"update-order-by-id",n)}updateMultipleOrderById(n){return this.httpClient.post(o+"update-multiple-order-by-id",n)}updateRequestOrderById(n){return this.httpClient.put(o+"update-request-order-by-id",n)}payPayment(n){return this.httpClient.post(o+"pay-payment",n)}sendNotification(n){return this.httpClient.post(o+"confirm-notification",n)}addToOrderTimeline(n,d){return this.httpClient.post(o+"add-to-order-timeline",{data:n,orderId:d})}updateTag(n,d){return this.httpClient.post(o+"update-tag",{orderId:n,tag:d})}setFilterVariable(n){this.filterVariable=n}getFilterVariable(){let n=this.filterVariable;return this.clearFilterVariable(),n}clearFilterVariable(){this.filterVariable=void 0}}return h.\u0275fac=function(n){return new(n||h)(z.LFG(p.eN))},h.\u0275prov=z.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},73433:(T,C,s)=>{s.d(C,{M:()=>z});var p=s(31913),i=s(5e3);let z=(()=>{class o{transform(h,Z){switch(h){case p.i.PENDING:return"Pending";case p.i.CONFIRM:return"Confirmed";case p.i.PARTIAL_SHIPPING:return"Partial Invoiced";case p.i.SHIPPING:return"Invoiced";case p.i.DELIVERED:return"Delivered";case p.i.CANCEL:return"Canceled";case p.i.RETURNING:return"Returning";case p.i.RETURNED:return"Returned";case p.i.PARTIAL_RETURNED:return"Partial Returned";case p.i.REFUND:return"Refund";default:return"-"}}}return o.\u0275fac=function(h){return new(h||o)},o.\u0275pipe=i.Yjl({name:"orderStatus",type:o,pure:!0}),o})()}}]);