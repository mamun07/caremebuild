"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[1346],{41346:(k,b,l)=>{l.r(b),l.d(b,{AllticketsModule:()=>X});var p=l(69808),O=l(99826),g=l(93075),t=l(5e3),m=l(71857),_=l(5944),z=l(49727),i=l(68132),o=l(61293),a=l(63640),n=l(11047),d=l(76042),c=l(82683),C=l(92643),f=l(90868),I=l(24401),y=l(78054),M=l(50939),P=l(41894),v=l(77484);function q(s,u){1&s&&t._UZ(0,"nz-badge",14)}const x=function(s){return["details",s]};function D(s,u){if(1&s&&(t.TgZ(0,"tr",12)(1,"td")(2,"div")(3,"h4"),t._uU(4),t.YNc(5,q,1,0,"nz-badge",13),t.qZA(),t.TgZ(6,"h5"),t._uU(7),t.ALo(8,"date"),t.qZA()()(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td")(18,"span"),t._uU(19),t.qZA()()()),2&s){const e=u.$implicit;t.Q6J("routerLink",t.VKq(14,x,null==e?null:e._id)),t.xp6(4),t.hij("",e.ticketId," "),t.xp6(1),t.Q6J("ngIf",!0!==e.read),t.xp6(2),t.Oqu(t.xi3(8,11,e.createdAt,"short")),t.xp6(3),t.Oqu(null==e||null==e.orderNo?null:e.orderNo.orderId),t.xp6(2),t.Oqu(e.productsku),t.xp6(2),t.Oqu(e.issueType),t.xp6(2),t.Oqu(e.message),t.xp6(2),t.Tol(1==e.status?"closebtn":"openbtn"),t.xp6(1),t.Oqu(1==e.status?"Close":"Open")}}function L(s,u){1&s&&t._UZ(0,"nz-badge",14)}function B(s,u){if(1&s&&(t.TgZ(0,"tr",12)(1,"td")(2,"div")(3,"h4"),t._uU(4),t.YNc(5,L,1,0,"nz-badge",13),t.qZA(),t.TgZ(6,"h5"),t._uU(7),t.ALo(8,"date"),t.qZA()()(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td")(18,"span"),t._uU(19),t.qZA()()()),2&s){const e=u.$implicit;t.Q6J("routerLink",t.VKq(14,x,null==e?null:e._id)),t.xp6(4),t.hij("",e.ticketId," "),t.xp6(1),t.Q6J("ngIf",!0!==e.read),t.xp6(2),t.Oqu(t.xi3(8,11,e.createdAt,"short")),t.xp6(3),t.Oqu(e.orderNo.orderId),t.xp6(2),t.Oqu(e.productsku),t.xp6(2),t.Oqu(e.issueType),t.xp6(2),t.Oqu(e.message),t.xp6(2),t.Tol(1==e.status?"closebtn":"openbtn"),t.xp6(1),t.Oqu(1==e.status?"Close":"Open")}}function J(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"input",15),t.NdJ("ngModelChange",function(h){t.CHM(e);const A=t.oxw();return t.KtG(A.value=h)}),t.qZA()}if(2&s){const e=t.oxw();t.Q6J("ngModel",e.value)}}function N(s,u){if(1&s&&t._UZ(0,"nz-option",31),2&s){const e=u.$implicit;t.Q6J("nzValue",e._id)("nzLabel",e.orderId)}}function w(s,u){if(1&s&&t._UZ(0,"nz-option",31),2&s){const e=u.$implicit;t.Q6J("nzValue",e._id)("nzLabel",e.name)}}function E(s,u){if(1&s){const e=t.EpF();t.ynx(0,16),t.TgZ(1,"form",17),t.NdJ("ngSubmit",function(){t.CHM(e);const h=t.oxw();return t.KtG(h.onSubmit())}),t.TgZ(2,"div",18)(3,"table")(4,"tbody")(5,"tr")(6,"nz-select",19),t._UZ(7,"nz-option",20)(8,"nz-option",21)(9,"nz-option",22)(10,"nz-option",23)(11,"nz-option",24)(12,"nz-option",25),t.qZA()(),t.TgZ(13,"tr")(14,"nz-select",26),t.YNc(15,N,1,2,"nz-option",27),t.qZA()(),t.TgZ(16,"tr")(17,"td"),t._uU(18,"Product Skus"),t.qZA(),t.TgZ(19,"td",28),t._uU(20,":"),t.qZA(),t.TgZ(21,"td")(22,"nz-select",29),t.YNc(23,w,1,2,"nz-option",27),t.qZA()()(),t.TgZ(24,"tr")(25,"td"),t._uU(26,"Message"),t.qZA(),t.TgZ(27,"td",28),t._uU(28,":"),t.qZA(),t.TgZ(29,"td"),t._UZ(30,"input",30),t.qZA()()()()()(),t.BQk()}if(2&s){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.dataForm),t.xp6(14),t.Q6J("ngForOf",e.orders),t.xp6(8),t.Q6J("ngForOf",e.orderedItems)}}let F=(()=>{class s{constructor(e,r,h,A,Z,T){this.ticketService=e,this.userDataService=r,this.msg=h,this.orderService=A,this.reloadService=Z,this.fb=T,this.isVisible=!1,this.tickets=[],this.orderedItems=[],this.orders=[]}ngOnInit(){this.getUserInfo(),this.getAllTickets(),this.initModule(),this.reloadService.refreshTickets$.subscribe(()=>{this.getUserInfo(),this.getAllTickets(),this.initModule()})}log(e){console.log(e)}getAllOrders(e){this.orderService.getAllOrdersByUser(null,null,e).subscribe(r=>{this.orders=r.data,console.log(this.orders)},r=>{console.log(r.message)})}getUserInfo(){this.userDataService.getLoggedInUserInfo().subscribe(e=>{this.user=e.data,this.user&&this.getAllOrders(this.user._id)},e=>{this.msg.error(e.message)})}initModule(){this.dataForm=this.fb.group({issueType:[null,g.kI.required],orderNo:[null],productIds:[null],attachments:[null],message:[null],chats:[]})}ticketModal(){this.isVisible=!0}ticketCancle(){this.isVisible=!1}onSubmit(){if(this.dataForm.invalid)return void this.msg.warning("Please Complete All the Fields");const r=Object.assign(Object.assign({},this.dataForm.value),{status:0});this.ticketService.add(r).subscribe(h=>{this.msg.success(h.message)},h=>{this.msg.error(h.message)}),this.isVisible=!1}getAllTickets(){this.ticketService.getAll().subscribe(e=>{this.tickets=e.data,console.log(this.tickets)},e=>{this.msg.error(e.message)})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(m.w),t.Y36(_.M),t.Y36(z.dD),t.Y36(i.p),t.Y36(o.f),t.Y36(g.qu))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-alltickets"]],decls:49,vars:6,consts:[[1,"ticket-create"],["nz-button","",3,"click"],["nzSize","small",1,"ticket-main"],[3,"nzTabBarExtraContent"],["nzTitle","Tickets"],["nzSize","small",3,"nzData"],["fixedTable",""],[3,"routerLink",4,"ngFor","ngForOf"],["nzTitle","Unread",3,"nzSelectChange"],["ticketTemplate",""],["nzTitle","New Adjustment","nzWidth","700px",3,"nzVisible","nzVisibleChange","nzOnCancel","nzOnOk"],["class","new_adjustment",4,"nzModalContent"],[3,"routerLink"],["nzStatus","processing",4,"ngIf"],["nzStatus","processing"],["nz-input","","placeholder","Search here",3,"ngModel","ngModelChange"],[1,"new_adjustment"],["nz-row","",1,"mb25",3,"formGroup","ngSubmit"],["nz-col","","nzXs","24","nzMd","12",1,"mb25"],["formControlName","issueType","nzSize","small"],["nzValue","delivery","nzLabel","Delivery Issue"],["nzValue","product","nzLabel","Product Issue"],["nzValue","payment","nzLabel","Payment Issue"],["nzValue","cashback","nzLabel","Cash Back"],["nzValue","bank_payment","nzLabel","Bank Payment"],["nzValue","cancel_order","nzLabel","Request For Order Cancel"],["formControlName","orderNo","nzSize","small"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[2,"padding","10px"],["formControlName","productIds","nzSize","small"],["formControlName","message","nzSize","small"],[3,"nzValue","nzLabel"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"Ticket"),t.qZA()(),t.TgZ(3,"button",1),t.NdJ("click",function(){return r.ticketModal()}),t._uU(4,"Create Ticket"),t.qZA(),t.TgZ(5,"nz-card",2)(6,"nz-tabset",3)(7,"nz-tab",4)(8,"nz-table",5,6)(10,"thead")(11,"tr")(12,"th"),t._uU(13,"Ticket ID "),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Order Details"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Product SKU"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Issue Type"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Message"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Status"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,D,20,16,"tr",7),t.qZA()()(),t.TgZ(26,"nz-tab",8),t.NdJ("nzSelectChange",function(A){return r.log([A])}),t.TgZ(27,"nz-table",5,6)(29,"thead")(30,"tr")(31,"th"),t._uU(32,"Ticket ID "),t.qZA(),t.TgZ(33,"th"),t._uU(34,"Order Details"),t.qZA(),t.TgZ(35,"th"),t._uU(36,"Product SKU"),t.qZA(),t.TgZ(37,"th"),t._uU(38,"Issue Type"),t.qZA(),t.TgZ(39,"th"),t._uU(40,"Message"),t.qZA(),t.TgZ(41,"th"),t._uU(42,"Status"),t.qZA()()(),t.TgZ(43,"tbody"),t.YNc(44,B,20,16,"tr",7),t.qZA()()()(),t.YNc(45,J,1,1,"ng-template",null,9,t.W1O),t.qZA(),t.TgZ(47,"nz-modal",10),t.NdJ("nzVisibleChange",function(A){return r.isVisible=A})("nzOnCancel",function(){return r.ticketCancle()})("nzOnOk",function(){return r.onSubmit()}),t.YNc(48,E,31,3,"ng-container",11),t.qZA()),2&e){const h=t.MAs(46);t.xp6(6),t.Q6J("nzTabBarExtraContent",h),t.xp6(2),t.Q6J("nzData",r.tickets),t.xp6(17),t.Q6J("ngForOf",r.tickets),t.xp6(2),t.Q6J("nzData",r.tickets),t.xp6(17),t.Q6J("ngForOf",r.tickets),t.xp6(3),t.Q6J("nzVisible",r.isVisible)}},dependencies:[p.sg,p.O5,O.rH,a.du,a.Hf,n.Zp,g._Y,g.Fj,g.JJ,g.JL,g.On,g.sg,g.u,d.ix,c.w,C.dQ,f.xH,f.xw,I.x7,y.Ip,y.Vq,M.N8,M.Uo,M._C,M.Om,M.p0,M.$Z,P.t3,P.SK,v.bd,p.uU],styles:[".ticket-create[_ngcontent-%COMP%]{margin-bottom:30px}.ticket-main[_ngcontent-%COMP%]{padding:0}.ticket-main[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%], .ticket-main[_ngcontent-%COMP%]   .openbtn[_ngcontent-%COMP%]{padding:5px 15px;border-radius:50px}.ticket-main[_ngcontent-%COMP%]   .openbtn[_ngcontent-%COMP%]{background:#ddd}.ticket-main[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%]{background:rgb(11,133,0);color:#fff}.ticket-main[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:pointer}"]}),s})();var V=l(10280),Q=l(76699),S=l(98706);function Y(s,u){if(1&s&&(t.TgZ(0,"div",23)(1,"p"),t._uU(2),t.ALo(3,"date"),t.qZA()()),2&s){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(t.xi3(3,1,null==e?null:e.date,"shortTime"))}}function R(s,u){if(1&s&&(t.TgZ(0,"div",23),t._UZ(1,"nz-avatar",24),t.TgZ(2,"p"),t._uU(3),t.ALo(4,"date"),t.qZA()()),2&s){const e=t.oxw().$implicit,r=t.oxw();t.xp6(1),t.Q6J("nzSrc",null!=r.user&&r.user.profileImg?r.user.profileImg:"../../../../assets/images/placeholder/test.png"),t.xp6(2),t.Oqu(t.xi3(4,2,null==e?null:e.date,"shortTime"))}}function j(s,u){if(1&s&&(t.TgZ(0,"div"),t.YNc(1,Y,4,4,"div",22),t.TgZ(2,"ul")(3,"li"),t._uU(4),t.qZA()(),t.YNc(5,R,5,5,"div",22),t.qZA()),2&s){const e=u.$implicit;t.Tol("Customer"===e.type?"customer":"admin"),t.xp6(1),t.Q6J("ngIf","Admin"===(null==e?null:e.type)),t.xp6(3),t.Oqu(null==e?null:e.msg),t.xp6(1),t.Q6J("ngIf","Customer"===(null==e?null:e.type))}}const U=function(){return{span:24}},K=function(){return{span:18}},W=function(){return{span:6}},$=[{path:"",component:F},{path:"details/:id",component:(()=>{class s{constructor(e,r,h,A,Z,T,tt){this.ticketService=e,this.activatedRoute=r,this.msg=h,this.userDataService=A,this.adminDataService=Z,this.fb=T,this.reloadService=tt,this.date=new Date}ngOnInit(){this.getAdminInfo(),this.subRouteOne=this.activatedRoute.paramMap.subscribe(e=>{this.id=e.get("id"),this.id&&this.getById()}),this.reloadService.refreshTickets$.subscribe(()=>{this.getById(),this.getAdminInfo(),this.initModule()}),this.initModule()}initModule(){this.dataForm=this.fb.group({attachments:[null],msg:[null,g.kI.required]})}getAdminInfo(){this.adminDataService.getLoginAdminInfo().subscribe(e=>{this.admin=e.data},e=>{this.msg.error(e.message)})}getById(){this.ticketService.getById(this.id).subscribe(e=>{this.ticket=e.data,this.markAsRead(this.ticket._id),console.log(this.ticket)},e=>{this.msg.error(e.message)})}addMessageByUser(){if(this.dataForm.invalid)return void this.msg.warning("Please write your messsage first");let e={msg:this.dataForm.value.msg,type:"Admin",adminId:this.admin._id,date:new Date,attachemnts:[]};console.log(e),this.ticketService.addMessage(e,this.ticket._id).subscribe(r=>{this.reloadService.needRefreshTickets$()},r=>{this.msg.error(r.message)})}markAsClose(e){this.ticketService.markAsClose(e).subscribe(r=>{this.msg.success(r.message),this.reloadService.needRefreshTickets$()},r=>{this.msg.error(r.message)})}markAsRead(e){this.ticketService.markAsRead(e).subscribe(r=>{console.log(r.message)},r=>{this.msg.error(r.message)})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(m.w),t.Y36(O.gz),t.Y36(z.dD),t.Y36(_.M),t.Y36(V.O),t.Y36(g.qu),t.Y36(o.f))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-details"]],decls:56,vars:24,consts:[["nz-row",""],["nz-col","","nzSpan","24"],[1,"card_head"],[1,"card_head-info"],["nz-button","","nzType","default",3,"disabled","click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXs","nzMd"],[1,"ticket_details"],[1,"ticket_chat"],["nzSize","small"],[1,"chat_content",3,"scrollTop"],["scrollMe",""],[3,"class",4,"ngFor","ngForOf"],[1,"chat_action",3,"formGroup","ngSubmit"],["nz-input","","placeholder","Enter your message here","nzSize","large","formControlName","msg"],["disabled","true"],[1,"fa-solid","fa-paperclip"],["type","submit",2,"background","none","border","none",3,"disabled"],[1,"fa-solid","fa-paper-plane"],[1,"att_image"],[1,"images"],["nz-image","","nzSrc","https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png","alt",""],["class","chatprof",4,"ngIf"],[1,"chatprof"],["nzSize","small","nzIcon","user",3,"nzSrc"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",1)(3,"nz-card")(4,"div",2)(5,"div",3)(6,"h3"),t._uU(7),t.qZA(),t.TgZ(8,"h5"),t._uU(9),t.ALo(10,"date"),t.qZA()(),t.TgZ(11,"button",4),t.NdJ("click",function(){return r.markAsClose(null==r.ticket?null:r.ticket._id)}),t._uU(12),t.qZA()(),t.TgZ(13,"div",5)(14,"div",6)(15,"div",7)(16,"ul")(17,"li")(18,"h4")(19,"span"),t._uU(20,"Products SKU"),t.qZA(),t._uU(21),t.qZA(),t.TgZ(22,"h4")(23,"span"),t._uU(24,"Order ID"),t.qZA(),t._uU(25),t.qZA(),t.TgZ(26,"h4")(27,"span"),t._uU(28,"Issue Type"),t.qZA(),t._uU(29),t.qZA(),t.TgZ(30,"h4")(31,"span"),t._uU(32,"Message"),t.qZA(),t._uU(33),t.qZA()()()(),t.TgZ(34,"div",8)(35,"nz-card",9)(36,"div",10,11),t.YNc(38,j,6,5,"div",12),t.qZA(),t.TgZ(39,"form",13),t.NdJ("ngSubmit",function(){return r.addMessageByUser()}),t._UZ(40,"input",14),t.TgZ(41,"ul")(42,"li",15),t._UZ(43,"i",16),t.qZA(),t.TgZ(44,"li")(45,"button",17),t._UZ(46,"i",18),t.qZA()()()()()()(),t.TgZ(47,"div",6)(48,"div",19)(49,"h1"),t._uU(50,"Your Attachments"),t.qZA(),t.TgZ(51,"nz-image-group",20),t._UZ(52,"img",21)(53,"img",21)(54,"img",21)(55,"img",21),t.qZA()()()()()()()),2&e){const h=t.MAs(37);t.xp6(7),t.hij("#",null==r.ticket?null:r.ticket.ticketId,""),t.xp6(2),t.Oqu(t.xi3(10,17,null==r.ticket?null:r.ticket.createdAt,"short")),t.xp6(2),t.Q6J("disabled",1===r.ticket.status),t.xp6(1),t.Oqu(1===r.ticket.status?"Closed":"Mark As Close"),t.xp6(1),t.Q6J("nzGutter",16),t.xp6(1),t.Q6J("nzXs",t.DdM(20,U))("nzMd",t.DdM(21,K)),t.xp6(7),t.hij(" : ",null==r.ticket?null:r.ticket.productIds,""),t.xp6(4),t.hij(" : ",null==r.ticket?null:r.ticket.orderNo.orderId,""),t.xp6(4),t.hij(" : ",null==r.ticket?null:r.ticket.issueType," issue"),t.xp6(4),t.hij(" : ",null==r.ticket?null:r.ticket.message," "),t.xp6(3),t.Q6J("scrollTop",h.scrollHeight),t.xp6(2),t.Q6J("ngForOf",null==r.ticket?null:r.ticket.chats),t.xp6(1),t.Q6J("formGroup",r.dataForm),t.xp6(6),t.Q6J("disabled",1===(null==r.ticket?null:r.ticket.status)),t.xp6(2),t.Q6J("nzXs",t.DdM(22,U))("nzMd",t.DdM(23,W))}},dependencies:[p.sg,p.O5,Q.Dz,n.Zp,g._Y,g.Fj,g.JJ,g.JL,g.sg,g.u,d.ix,c.w,C.dQ,P.t3,P.SK,S.Ie,S.I7,v.bd,p.uU],styles:[".card_head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex-direction:row;border-bottom:1px solid #ddd;padding-bottom:15px;margin-bottom:30px}.att_image[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px}@media (max-width: 500px){.att_image[_ngcontent-%COMP%]{margin-top:30px}}.att_image[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{margin-top:20px}.att_image[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 5px 5px 0;display:inline-block;width:45%;cursor:pointer}.ticket_details[_ngcontent-%COMP%]{margin-bottom:30px}.ticket_details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}.ticket_details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{min-width:120px;display:inline-block}.chat_action[_ngcontent-%COMP%]{display:flex;position:relative;align-items:center}.chat_action[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;height:60px}.chat_action[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{position:absolute;right:0;margin:0}.chat_action[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;border-radius:100%;text-align:center;float:left;display:flex;align-items:center;width:40px;height:40px;justify-content:center;background:rgb(245,245,245);margin-right:5px;cursor:pointer;transition:.3s}.chat_action[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.chat_action[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{background:#00662e;color:#eee}.chat_action[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#a32e72;color:#eee}.chat_content[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid #f8f8f8;background:#f8f8f8;margin-bottom:20px;padding:50px;max-height:300px;overflow:scroll}@media (max-width: 500px){.chat_content[_ngcontent-%COMP%]{background:#ffffff;padding:0}}.chat_content[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]{display:flex;justify-content:last baseline;align-items:flex-start;flex-direction:row}.chat_content[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:5px 0 0 10px;border-radius:15px;overflow:hidden}.chat_content[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{max-width:100%;padding:3px 10px;list-style:none;margin-bottom:2px;text-align:left}.chat_content[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .chatprof[_ngcontent-%COMP%]{text-align:center}.chat_content[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .chatprof[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;padding:10px 0 0;color:#626262}.chat_content[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]   .chatprof[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:100%}.chat_content[_ngcontent-%COMP%]   .customer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:flex-start;flex-direction:row}.chat_content[_ngcontent-%COMP%]   .customer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:5px 10px 0 0;border-radius:15px;overflow:hidden}.chat_content[_ngcontent-%COMP%]   .customer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{max-width:100%;padding:3px 10px;list-style:none;margin-bottom:2px;text-align:right}.chat_content[_ngcontent-%COMP%]   .chatprof[_ngcontent-%COMP%]{text-align:center}.chat_content[_ngcontent-%COMP%]   .chatprof[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;padding:10px 0 0;color:#626262}.chat_content[_ngcontent-%COMP%]   .chatprof[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:100%}"]}),s})()}];let G=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[O.Bz.forChild($),O.Bz]}),s})();var H=l(72408);let X=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[p.ez,G,H.P]}),s})()},68132:(k,b,l)=>{l.d(b,{p:()=>m});var p=l(40520),O=l(92340),g=l(5e3);const t=O.N.apiBaseLink+"/api/order/";let m=(()=>{class _{constructor(i){this.httpClient=i}editOrder(i){return this.httpClient.post(t+"edit-order",i)}placeOrder(i){return this.httpClient.post(t+"place-order",i)}updateOrder(i){return this.httpClient.post(t+"update-order",i)}placeOrderRequest(i){return this.httpClient.post(t+"place-order-request",i)}placeTempOrder(i){return this.httpClient.post(t+"place-temp-order",i)}updateOrderSessionKey(i,o){return this.httpClient.post(t+"update-session-key/"+i+"/"+o,{})}getAllOrdersByUser(i,o,a,n){let d=new p.LE;return d=d.append("q",i),d=d.append("status",n),o&&(d=d.append("pageSize",o.pageSize),d=d.append("currentPage",o.currentPage)),this.httpClient.get(t+"get-all-orders-by-user",{params:d})}getAllOrdersByUserId(i){return this.httpClient.get(t+"get-all-orders-by-userId/"+i)}getAllCanceledOrdersByUser(i,o,a){return this.httpClient.get(t+"get-all-canceled-orders-by-user")}getAllOrdersByUserOrderId(i,o){let a=new p.LE;return i&&(console.log("param id ",i),a=a.append("id",i)),o&&(a=a.append("select",o)),this.httpClient.get(t+"get-orders-by-user-orderId",{params:a})}getAllOrdersofyUserByAdmin(i,o,a){let n=new p.LE;return a&&(n=n.append("userId",a)),i?(n=n.append("pageSize",i.pageSize),n=n.append("page",i.currentPage),o&&(n=n.append("select",o)),this.httpClient.get(t+"get-all-orders-of-user-by-admin",{params:n})):(o&&(n=n.append("select",o)),this.httpClient.get(t+"get-all-orders-of-user-by-admin",{params:n}))}getOrderDetails(i){return this.httpClient.get(t+"get-order-details/"+i)}getOrderDetailsByOrderId(i){return this.httpClient.get(t+"get-order-details-by-orderId/"+i)}getrequestOrderDetails(i){return this.httpClient.get(t+"get-request-order-details/"+i)}cancelOrderByUser(i){return this.httpClient.put(t+"cancel-order-by-user/"+i,{})}deleteOrderByAdmin(i){return this.httpClient.delete(t+"delete-order-by-admin/"+i)}getAllTransactionByUser(i,o){let a=new p.LE;return i?(a=a.append("pageSize",i.pageSize),a=a.append("page",i.currentPage),o&&(a=a.append("select",o)),this.httpClient.get(t+"get-all-transactions-by-user",{params:a})):(o&&(a=a.append("select",o)),this.httpClient.get(t+"get-all-transactions-by-user",{params:a}))}getAllOrdersByAdmin(i,o,a,n){return this.httpClient.post(t+"get-all-orders-by-admin",{paginate:i,sort:o,filter:a,select:n})}getOrdersBySearch(i,o,a){let n=new p.LE;return n=n.append("q",i),o&&(n=n.append("pageSize",o.pageSize),n=n.append("currentPage",o.currentPage)),this.httpClient.post(t+"get-order-by-search",{filter:a},{params:n})}getSelectedOrderDetails(i){return this.httpClient.post(t+"get-selected-order-details",{selectedIds:i})}getAllOrdersByAdminNoPaginate(){return this.httpClient.get(t+"get-all-orders-by-admin-no-paginate")}changeOrderStatus(i){return this.httpClient.put(t+"change-order-status",i)}getAllTransactionByAdmin(i,o){let a=new p.LE;return i?(a=a.append("pageSize",i.pageSize),a=a.append("page",i.currentPage),o&&(a=a.append("select",o)),this.httpClient.get(t+"get-all-transaction-by-admin",{params:a})):(o&&(a=a.append("select",o)),this.httpClient.get(t+"get-all-transaction-by-admin",{params:a}))}testSslSmsApi(){return this.httpClient.get(t+"sent-test-ssl-message")}updateOrderById(i){return this.httpClient.put(t+"update-order-by-id",i)}updateMultipleOrderById(i){return this.httpClient.post(t+"update-multiple-order-by-id",i)}updateRequestOrderById(i){return this.httpClient.put(t+"update-request-order-by-id",i)}payPayment(i){return this.httpClient.post(t+"pay-payment",i)}sendNotification(i){return this.httpClient.post(t+"confirm-notification",i)}addToOrderTimeline(i,o){return this.httpClient.post(t+"add-to-order-timeline",{data:i,orderId:o})}updateTag(i,o){return this.httpClient.post(t+"update-tag",{orderId:i,tag:o})}setFilterVariable(i){this.filterVariable=i}getFilterVariable(){let i=this.filterVariable;return this.clearFilterVariable(),i}clearFilterVariable(){this.filterVariable=void 0}}return _.\u0275fac=function(i){return new(i||_)(g.LFG(p.eN))},_.\u0275prov=g.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},5944:(k,b,l)=>{l.d(b,{M:()=>i});var p=l(40520),O=l(92340),g=l(88493),t=l(5e3);const m=O.N.apiBaseLink+"/api/user/",_=O.N.apiBaseLink+"/api/cart/",z=O.N.apiBaseLink+"/api/wishlist/";let i=(()=>{class o{constructor(n){this.httpClient=n}getLoggedInUserInfo(n){if(n){let d=new p.LE;return d=d.append("select",n),this.httpClient.get(m+"logged-in-user-data",{params:d})}return this.httpClient.get(m+"logged-in-user-data")}editLoginUserInfo(n){return this.httpClient.put(m+"edit-logged-in-user-data",n)}editAddress(n){return this.httpClient.put(m+"edit-address",n)}addCartProductToLocalStorage(n){const d=JSON.parse(localStorage.getItem(g.w.cartsProduct));let c;null===d?(c=[],c.push(n)):(c=d,-1===c.findIndex(f=>f._id===n._id)&&c.push(n)),localStorage.setItem(g.w.cartsProduct,JSON.stringify(c))}getCartProductFromLocalStorage(){const n=localStorage.getItem(g.w.cartsProduct);return null===n?[]:JSON.parse(n)}deleteCartProductFromLocalStorage(n){const c=JSON.parse(localStorage.getItem(g.w.cartsProduct)).filter(C=>C._id!==n);localStorage.setItem(g.w.cartsProduct,JSON.stringify(c))}getAllAddress(n,d){let c=new p.LE;return n?(c=c.append("pageSize",n.pageSize),c=c.append("page",n.currentPage),d&&(c=c.append("select",d)),this.httpClient.get(m+"get-addresses",{params:c})):(d&&(c=c.append("select",d)),this.httpClient.get(m+"get-addresses",{params:c}))}addToAddress(n){return this.httpClient.post(m+"add-address",n)}deleteAddress(n){return this.httpClient.delete(m+"delete-address-by-id/"+n)}getUsersBySearch(n,d,c){let C=new p.LE;return C=C.append("q",n),d&&(C=C.append("pageSize",d.pageSize),C=C.append("currentPage",d.currentPage)),this.httpClient.post(m+"get-users-by-search",{filter:c},{params:C})}addItemToUserCart(n){return console.log(n),this.httpClient.post(_+"add-to-cart",n)}addSingleItemToCart(n){return this.httpClient.post(_+"add-to-cart",n)}getCartItemList(){return this.httpClient.get(_+"get-cart-items-by-user")}incrementCartQuantity(n){return this.httpClient.post(_+"increment-cart-item-quantity",{cartId:n})}decrementCartQuantity(n){return this.httpClient.post(_+"decrement-cart-item-quantity",{cartId:n})}removeCartItem(n){return this.httpClient.delete(_+"remove-cart-item/"+n)}countCartItem(){return this.httpClient.get(_+"cart-item-count")}getCartStatusOnBook(n){return this.httpClient.get(_+"get-status-book-on-cart/"+n)}getCustomerLists(n,d,c){let C=new p.LE;return c&&(C=C.append("select",c)),this.httpClient.post(m+"get-all-user-lists",{paginate:n,filter:d},{params:C})}getUserByUserID(n){return this.httpClient.get(m+"get-user-by-user-id/"+n)}editUserAccess(n,d){return this.httpClient.put(m+"edit-user-access/"+n,d)}getSearchUsers(n,d,c){let f=new p.LE;return f=f.append("q",n),f=f.append("pageSize",d.pageSize),f=f.append("currentPage",d.currentPage),this.httpClient.post(m+"get-users-by-search",{filter:c},{params:f})}addSingleItemToWishlist(n){return this.httpClient.post(z+"add-to-wishlist",n)}getWishlistItemByUser(){return this.httpClient.get(z+"get-wishlist-items-by-user")}checkStatusInWishlistWithBookId(n){return this.httpClient.get(z+"get-status-of-product-in-wishlist/"+n)}getBooksFromWishlist(){return this.httpClient.get(z+"get-all-product-from-wishlist")}removeWishlistById(n){return this.httpClient.delete(z+"delete-wishlist-by-id/"+n)}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(p.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);