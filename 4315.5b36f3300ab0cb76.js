"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[4315],{84315:(M,y,s)=>{s.r(y),s.d(y,{NewPaymentModule:()=>Y});var g=s(69808),t=s(5e3),x=s(73071),i=s(5944),b=s(68132),m=s(99826),C=s(85314),e=s(71188),a=s(49727),r=s(30888),d=s(11047),l=s(93075),v=s(76042),w=s(82683),S=s(92643),O=s(90868),z=s(41894),T=s(55737),Z=s(77484);function A(o,c){if(1&o&&(t.TgZ(0,"div",18),t._UZ(1,"img",19),t.TgZ(2,"p"),t._uU(3),t.qZA()()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.s9C("src",n.icon,t.LSH),t.s9C("alt",n.id),t.xp6(2),t.Oqu(n.id)}}function N(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(n);const u=t.oxw().$implicit,f=t.oxw();return t.KtG(f.payPayment(u.id))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function I(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(n);const u=t.oxw(2);return t.KtG(u.payPayment("Rocket"))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function U(o,c){1&o&&(t.TgZ(0,"div")(1,"form",21)(2,"div",4)(3,"div",22)(4,"nz-form-item")(5,"nz-form-label",23),t._uU(6," Card Number "),t.qZA(),t.TgZ(7,"nz-form-control",24),t._UZ(8,"input",25),t.qZA()()(),t.TgZ(9,"div",22)(10,"nz-form-item")(11,"nz-form-label",23),t._uU(12," Name on card "),t.qZA(),t.TgZ(13,"nz-form-control",24),t._UZ(14,"input",25),t.qZA()()(),t.TgZ(15,"div",26)(16,"nz-form-item")(17,"nz-form-label",23),t._uU(18," Expiration date "),t.qZA(),t.TgZ(19,"nz-form-control",24),t._UZ(20,"input",25),t.qZA()()(),t.TgZ(21,"div",27)(22,"nz-form-item")(23,"nz-form-label",23),t._uU(24," CVV "),t.qZA(),t.TgZ(25,"nz-form-control",24),t._UZ(26,"input",25),t.qZA()()()()()()),2&o&&(t.xp6(5),t.Q6J("nzSpan",24),t.xp6(2),t.Q6J("nzSpan",24),t.xp6(4),t.Q6J("nzSpan",24),t.xp6(2),t.Q6J("nzSpan",24),t.xp6(4),t.Q6J("nzSpan",24),t.xp6(2),t.Q6J("nzSpan",24),t.xp6(4),t.Q6J("nzSpan",24),t.xp6(2),t.Q6J("nzSpan",24))}function B(o,c){if(1&o&&(t.TgZ(0,"div")(1,"p"),t._uU(2," You can pay in cash to our courier when you receive the goods at your doorstep. "),t.qZA(),t._UZ(3,"br"),t.TgZ(4,"button",28),t._uU(5),t.qZA()()),2&o){const n=t.oxw().$implicit;t.xp6(5),t.hij(" ",n.name," ")}}function k(o,c){if(1&o&&(t.TgZ(0,"nz-tab",13),t.YNc(1,A,4,3,"ng-template",null,14,t.W1O),t.TgZ(3,"div",15),t.YNc(4,N,2,1,"button",16),t.YNc(5,I,2,1,"button",16),t.YNc(6,U,27,8,"div",17),t.YNc(7,B,6,1,"div",17),t.qZA()()),2&o){const n=c.$implicit,p=t.MAs(2);t.Q6J("nzTitle",p),t.xp6(4),t.Q6J("ngIf","bKash"===n.id),t.xp6(1),t.Q6J("ngIf","Rocket"===n.id),t.xp6(1),t.Q6J("ngIf","Card"===n.id),t.xp6(1),t.Q6J("ngIf","COD"===n.id)}}const F=function(){return{padding:0}},J=[{path:"",component:(()=>{class o{constructor(n,p,u,f,_,P,h,Q,R){this.userService=n,this.userDataService=p,this.orderService=u,this.activatedRoute=f,this.uiService=_,this.sessionStorage=P,this.router=h,this.msg=Q,this.paymentService=R,this.tabs=[{id:"bKash",name:"Pay with bKash",icon:"https://logos-download.com/wp-content/uploads/2022/01/BKash_Logo_icon-700x662.png"},{id:"Rocket",name:"Pay with Rocket",icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTl-jgV4vHgARBJ5EgeJfHwutnWF01g-ueDcOLvnarw&s"},{id:"Card",name:"Credit/Debit Card",icon:"https://cdn-icons-png.flaticon.com/512/60/60378.png"},{id:"Installment",name:"Installment",icon:"https://cdn-icons-png.flaticon.com/512/1553/1553589.png"}],this.amount=0,this.selectedSkus=[]}ngOnInit(){this.getUserInfo(),this.subRouteOne=this.activatedRoute.queryParamMap.subscribe(n=>{this.orderId=n.get("orderId"),this.orderId?(this.selectedSkus=this.sessionStorage.getDataFromSessionStorage("selectedSkus"),this.selectedSkus.length?(this.amount=Number(this.sessionStorage.getDataFromSessionStorage("amount")),this.paymentStatus=this.sessionStorage.getDataFromSessionStorage("paymentStatus")):(this.router.navigate(["success",this.orderId]),this.msg.error("Please select items first"))):this.msg.error("No Order Id found")})}getUserInfo(){this.userDataService.getLoggedInUserInfo().subscribe(n=>{this.user=n.data},n=>{this.msg.error(n.message)})}payPayment(n){"bKash"===n&&this.paymentService.grantTokenBkash(this.user).subscribe(p=>{console.log(p.message)})}paymentForOrder(){this.orderService.payPayment({orderId:this.orderId,paidAmount:this.amount,paymentStatus:this.paymentStatus,selectedSkus:this.selectedSkus}).subscribe(p=>{p.success?(this.uiService.success("Your Payment is successful"),this.addToOrderTimeLine(this.orderId,null,this.amount+"Tk paid by Bkash","Payment",0)):this.uiService.warn("Something went wrong")},p=>{this.msg.error("Something went wrong")})}addToOrderTimeLine(n,p,u,f,_){let P={status:_,title:f,date:new Date,message:u,addedBy:"User"};this.orderService.addToOrderTimeline(P,n).subscribe(h=>{console.log(h.message)},h=>{this.msg.error(h.message)})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(x.K),t.Y36(i.M),t.Y36(b.p),t.Y36(m.gz),t.Y36(C.F),t.Y36(e.V),t.Y36(m.F0),t.Y36(a.dD),t.Y36(r.F))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-new-payment"]],decls:23,vars:6,consts:[[1,"payment_success"],[1,"container"],["nz-row","","nzJustify","center",3,"nzGutter"],["nz-col","","nzXs","24","nzMd","24","nzLg","24","nzXXl","17"],["nz-row","","nzGutter","16"],["nz-col","","nzXs","24","nzMd","8","nzLg","8"],[1,"order_summery"],[1,"order_info"],["nz-col","","nzXs","24","nzMd","16","nzLg","16"],[1,"payment_options",3,"nzBodyStyle"],[1,"card-container"],["nzType","card"],["style","",3,"nzTitle",4,"ngFor","ngForOf"],[3,"nzTitle"],["titleTemplate",""],[1,"payment_details"],["nz-button","","nzType","primary","nzSize","large",3,"click",4,"ngIf"],[4,"ngIf"],[1,"tab_title"],["width","30px",3,"src","alt"],["nz-button","","nzType","primary","nzSize","large",3,"click"],["nz-form",""],["nz-col","","nzXs","24","nzMd","12"],["nzFor","number",3,"nzSpan"],[3,"nzSpan"],["nz-input","","name","number","type","number","id","number"],["nz-col","","nzXs","24","nzMd","16"],["nz-col","","nzXs","24","nzMd","8"],["nz-button","","nzType","primary","nzSize","large"]],template:function(n,p){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"nz-card",6)(7,"div",7)(8,"h2"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11,"19 jul 2022 12:33:14"),t.qZA()(),t._UZ(12,"nz-divider"),t.TgZ(13,"h1"),t._uU(14," Total Amount "),t._UZ(15,"br"),t.TgZ(16,"span"),t._uU(17),t.qZA()()()(),t.TgZ(18,"div",8)(19,"nz-card",9)(20,"div",10)(21,"nz-tabset",11),t.YNc(22,k,8,5,"nz-tab",12),t.qZA()()()()()()()()()),2&n&&(t.xp6(2),t.Q6J("nzGutter",16),t.xp6(7),t.hij("#",p.orderId,""),t.xp6(8),t.hij("",p.amount," TK"),t.xp6(2),t.Q6J("nzBodyStyle",t.DdM(5,F)),t.xp6(3),t.Q6J("ngForOf",p.tabs))},dependencies:[g.sg,g.O5,d.Zp,l._Y,l.JL,l.F,v.ix,w.w,S.dQ,O.xH,O.xw,z.t3,z.SK,T.g,Z.bd],styles:['nz-card[_ngcontent-%COMP%]{min-height:250px;margin:0 0 15px}nz-form-item[_ngcontent-%COMP%]{margin-bottom:15px}.payment_success[_ngcontent-%COMP%]{padding:15px 0;min-height:70vh}.payment_details[_ngcontent-%COMP%]{padding:0 0 15px 15px}.tab_title[_ngcontent-%COMP%]{text-align:center;padding:15px}.card-container[_ngcontent-%COMP%]    >.ant-tabs>.ant-tabs-nav .ant-tabs-nav-wrap{background:#f5f5f5}.card-container[_ngcontent-%COMP%]    >.ant-tabs-card .ant-tabs-tab{border-color:#efefef;background:#f5f5f5;margin:0!important}.card-container[_ngcontent-%COMP%]    >.ant-tabs-card .ant-tabs-tab-active{border-color:#fff;background:#fff}.card-container[_ngcontent-%COMP%]    >.ant-tabs-card .ant-tabs-content>.ant-tabs-tabpane{background:#fff;padding:16px}.order_info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.order_summery[_ngcontent-%COMP%]{text-align:center}.order_summery[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff4500;padding:10px 0;font-weight:800;font-size:28px;display:block}@media (max-width: 768px){.tab_title[_ngcontent-%COMP%]{padding:10px}}.order-process-system[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box;margin:50px 0}.order-process-main[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;gap:20px;max-width:600px;flex-direction:row;width:100%;margin:auto;flex-basis:20%}.order-process-system-info[_ngcontent-%COMP%]{display:block;text-align:center;width:100%;position:relative}.order-process-system-info[_ngcontent-%COMP%]:after{content:"\\f105";font-family:"Font Awesome 5 Free";font-weight:700;color:#c7c7c7;font-size:20px;position:absolute;top:5%;right:-5px}.order-process-system-info[_ngcontent-%COMP%]:last-child:after{display:none}@media (max-width: 550px){.order-process-system-info[_ngcontent-%COMP%]:after{display:none}}.order-process-system-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#adadad;font-size:27px;font-weight:700;font-style:normal;margin-bottom:20px!important;transition:all .3s linear}.order-process-system-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#adadad;font-family:Poppins,sans-serif;font-style:normal;font-weight:500;font-size:16px;display:blockb;width:100%;line-height:25px;transition:all .3s linear}.order-process-system-info[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .order-process-system-info[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .active-process[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .active-process[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#db5791}.complate-process[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .complate-process[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#db5791!important}@media (max-width: 550px){.order-process-main[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center;gap:20px 10px;flex-basis:100%}.order-process-system[_ngcontent-%COMP%]{margin:10px 0 30px}}.payment-area[_ngcontent-%COMP%]{display:block;width:100%}.payment-area-main[_ngcontent-%COMP%]{max-width:1200px;width:100%;margin:auto auto 40px;background-color:#fff;box-shadow:0 4px 7px #0000001a;padding:20px;box-sizing:border-box;border-radius:7px;display:grid;grid-template-columns:64% 34%;gap:1%}.payment-left[_ngcontent-%COMP%]{padding:30px}.step2[_ngcontent-%COMP%]{display:block;margin-top:20px;padding:5px 10px;box-sizing:border-box}.step2-title[_ngcontent-%COMP%]{display:block;padding-bottom:15px;box-sizing:border-box;margin-bottom:10px}.step2-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d2d2d;font-family:Signika Negative,sans-serif;font-style:normal;font-weight:600;font-size:18px;display:block}.online-payment[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);grid-gap:15px;grid-template-rows:auto}@media (max-width: 500px){.online-payment[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);padding:0}.payment-left[_ngcontent-%COMP%]{padding:10px}}.method-info[_ngcontent-%COMP%]{cursor:pointer;border:2px solid #e2e5ec;padding:10px;box-sizing:border-box;border-radius:5px;text-align:center}.method-info[_ngcontent-%COMP%]:hover{border-color:#db5791;background-color:#fcf2f6;border-radius:0}.method-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100px;height:40px;width:100%;margin:auto auto 5px!important;text-align:center;display:block;object-fit:cover;border-radius:5px}.nagad[_ngcontent-%COMP%]{background-color:#fbcf9a}.bkash[_ngcontent-%COMP%]{background-color:#fbe4ee}.method-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2d2d2d;font-family:Signika Negative,sans-serif;font-style:normal;font-weight:600;font-size:15px;display:block}.note[_ngcontent-%COMP%]{margin-top:50px}.note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:3px 10px;background-color:#fef0bf;font-style:normal;font-size:12px;font-family:Poppins,sans-serif;font-weight:500}.note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:550}.payment-right[_ngcontent-%COMP%]{max-width:400px;width:100%;margin:auto;background-color:#fff;border:.5px solid #f1f1f1;box-sizing:border-box;border-radius:7px}.order-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{border-top-left-radius:7px;border-top-right-radius:7px;background-color:#f1f1f1;text-align:center;padding:10px 20px;font-style:normal;font-size:22px;font-family:Poppins,sans-serif;font-weight:500}.order-info[_ngcontent-%COMP%]{padding:20px 5px 5px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #f1f1f1}.order-info[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]{font-style:normal;font-size:15px;font-family:Poppins,sans-serif;font-weight:500}.order-info[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#db5791}.order-info[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%]{font-style:normal;font-size:12px;font-family:Poppins,sans-serif;font-weight:500}.total-amount[_ngcontent-%COMP%]{padding:50px 0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px}.total-amount[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-style:normal;font-size:1.5rem;line-height:2rem;font-family:Poppins,sans-serif;font-weight:500}.total-amount[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#e62e04;font-style:normal;font-size:2.5rem;line-height:3rem;letter-spacing:.3px;font-family:Poppins,sans-serif;font-weight:600}@media (max-width: 1080px){.payment-area-main[_ngcontent-%COMP%]{border-radius:7px;display:grid;grid-template-columns:59% 39%;gap:1%}.online-payment[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:15px;grid-template-rows:auto}}@media (max-width: 950px){.payment-area-main[_ngcontent-%COMP%]{border-radius:7px;display:grid;grid-template-columns:54% 44%;gap:1%}.online-payment[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:15px;grid-template-rows:auto}}@media (max-width: 850px){.online-payment[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:15px;grid-template-rows:auto}.payment-area-main[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.payment-right[_ngcontent-%COMP%]{max-width:100%}}@media (max-width: 650px){.online-payment[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 450px){.online-payment[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 410px){.order-info[_ngcontent-%COMP%]{padding:10px 5px 5px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px}}']}),o})()}];let D=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(J),m.Bz]}),o})();var L=s(77446),E=s(72408);let Y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,D,L.p9,E.P]}),o})()},68132:(M,y,s)=>{s.d(y,{p:()=>b});var g=s(40520),t=s(92340),x=s(5e3);const i=t.N.apiBaseLink+"/api/order/";let b=(()=>{class m{constructor(e){this.httpClient=e}editOrder(e){return this.httpClient.post(i+"edit-order",e)}placeOrder(e){return this.httpClient.post(i+"place-order",e)}updateOrder(e){return this.httpClient.post(i+"update-order",e)}placeOrderRequest(e){return this.httpClient.post(i+"place-order-request",e)}placeTempOrder(e){return this.httpClient.post(i+"place-temp-order",e)}updateOrderSessionKey(e,a){return this.httpClient.post(i+"update-session-key/"+e+"/"+a,{})}getAllOrdersByUser(e,a,r,d){let l=new g.LE;return l=l.append("q",e),l=l.append("status",d),a&&(l=l.append("pageSize",a.pageSize),l=l.append("currentPage",a.currentPage)),this.httpClient.get(i+"get-all-orders-by-user",{params:l})}getAllOrdersByUserId(e){return this.httpClient.get(i+"get-all-orders-by-userId/"+e)}getAllCanceledOrdersByUser(e,a,r){return this.httpClient.get(i+"get-all-canceled-orders-by-user")}getAllOrdersByUserOrderId(e,a){let r=new g.LE;return e&&(console.log("param id ",e),r=r.append("id",e)),a&&(r=r.append("select",a)),this.httpClient.get(i+"get-orders-by-user-orderId",{params:r})}getAllOrdersofyUserByAdmin(e,a,r){let d=new g.LE;return r&&(d=d.append("userId",r)),e?(d=d.append("pageSize",e.pageSize),d=d.append("page",e.currentPage),a&&(d=d.append("select",a)),this.httpClient.get(i+"get-all-orders-of-user-by-admin",{params:d})):(a&&(d=d.append("select",a)),this.httpClient.get(i+"get-all-orders-of-user-by-admin",{params:d}))}getOrderDetails(e){return this.httpClient.get(i+"get-order-details/"+e)}getOrderDetailsByOrderId(e){return this.httpClient.get(i+"get-order-details-by-orderId/"+e)}getrequestOrderDetails(e){return this.httpClient.get(i+"get-request-order-details/"+e)}cancelOrderByUser(e){return this.httpClient.put(i+"cancel-order-by-user/"+e,{})}deleteOrderByAdmin(e){return this.httpClient.delete(i+"delete-order-by-admin/"+e)}getAllTransactionByUser(e,a){let r=new g.LE;return e?(r=r.append("pageSize",e.pageSize),r=r.append("page",e.currentPage),a&&(r=r.append("select",a)),this.httpClient.get(i+"get-all-transactions-by-user",{params:r})):(a&&(r=r.append("select",a)),this.httpClient.get(i+"get-all-transactions-by-user",{params:r}))}getAllOrdersByAdmin(e,a,r,d){return this.httpClient.post(i+"get-all-orders-by-admin",{paginate:e,sort:a,filter:r,select:d})}getOrdersBySearch(e,a,r){let d=new g.LE;return d=d.append("q",e),a&&(d=d.append("pageSize",a.pageSize),d=d.append("currentPage",a.currentPage)),this.httpClient.post(i+"get-order-by-search",{filter:r},{params:d})}getSelectedOrderDetails(e){return this.httpClient.post(i+"get-selected-order-details",{selectedIds:e})}getAllOrdersByAdminNoPaginate(){return this.httpClient.get(i+"get-all-orders-by-admin-no-paginate")}changeOrderStatus(e){return this.httpClient.put(i+"change-order-status",e)}getAllTransactionByAdmin(e,a){let r=new g.LE;return e?(r=r.append("pageSize",e.pageSize),r=r.append("page",e.currentPage),a&&(r=r.append("select",a)),this.httpClient.get(i+"get-all-transaction-by-admin",{params:r})):(a&&(r=r.append("select",a)),this.httpClient.get(i+"get-all-transaction-by-admin",{params:r}))}testSslSmsApi(){return this.httpClient.get(i+"sent-test-ssl-message")}updateOrderById(e){return this.httpClient.put(i+"update-order-by-id",e)}updateMultipleOrderById(e){return this.httpClient.post(i+"update-multiple-order-by-id",e)}updateRequestOrderById(e){return this.httpClient.put(i+"update-request-order-by-id",e)}payPayment(e){return this.httpClient.post(i+"pay-payment",e)}sendNotification(e){return this.httpClient.post(i+"confirm-notification",e)}addToOrderTimeline(e,a){return this.httpClient.post(i+"add-to-order-timeline",{data:e,orderId:a})}updateTag(e,a){return this.httpClient.post(i+"update-tag",{orderId:e,tag:a})}setFilterVariable(e){this.filterVariable=e}getFilterVariable(){let e=this.filterVariable;return this.clearFilterVariable(),e}clearFilterVariable(){this.filterVariable=void 0}}return m.\u0275fac=function(e){return new(e||m)(x.LFG(g.eN))},m.\u0275prov=x.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);