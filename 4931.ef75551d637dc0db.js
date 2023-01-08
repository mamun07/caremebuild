"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[4931],{94931:(b,z,s)=>{s.r(z),s.d(z,{CustomerProfileModule:()=>X});var p=s(90898),u=s(69808),f=s(31913),e=s(5e3),C=s(3294),_=s(5944),T=s(73071),o=s(52317),a=s(68132),l=s(8338),r=s(49727),d=s(99826),g=s(93075),m=s(63640),O=s(11047),A=s(14573),y=s(76042),q=s(82683),x=s(92643),I=s(64219),Z=s(63677),E=s(24401),S=s(78054),U=s(50939),R=s(41894),N=s(98706),B=s(77484),L=s(92124),V=s(6462);function w(c,P){if(1&c&&(e.TgZ(0,"li",14)(1,"div",61)(2,"h4"),e._uU(3),e.qZA(),e.TgZ(4,"h5",48),e._uU(5,"Active"),e.qZA()(),e.TgZ(6,"div",62)(7,"h4"),e._uU(8,"35 Order"),e.qZA(),e.TgZ(9,"h5"),e._uU(10,"15020 TK"),e.qZA()()()),2&c){const i=P.$implicit;e.xp6(3),e.Oqu(i.fullName)}}function k(c,P){if(1&c&&e._UZ(0,"nz-option",63),2&c){const i=P.$implicit;e.Q6J("nzValue",i)("nzLabel",i.tagname)}}function J(c,P){1&c&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2,"Content one"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Content two"),e.qZA(),e.BQk())}function F(c,P){1&c&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2,"Content one"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Content two"),e.qZA(),e.BQk())}const D=function(){return{span:24}},Q=function(){return{span:5}},j=function(){return{span:13}},v=function(){return{span:12}},M=function(){return{span:6}},G=[{path:":id",component:(()=>{class c{constructor(i,n,h,t,H,$,ee,te){this.tagService=i,this.userDataService=n,this.userService=h,this.customTagService=t,this.orderService=H,this.returnService=$,this.msg=ee,this.activatedRoute=te,this.users=[],this.customTags=[],this.tags=[],this.orders=[],this.customerActive=0,this.smsVisible=!1,this.createOrder=!1,this.returnAccepted=0,this.returnPending=0,this.customerHistory=[{name:"Timeline",disabled:!1},{name:"Order",disabled:!1},{name:"Return",disabled:!1},{name:"Refund",disabled:!1}]}ngOnInit(){this.subRouteOne=this.activatedRoute.paramMap.subscribe(i=>{this.id=i.get("id"),this.id&&this.getUserInfo(this.id)}),this.getAllUsers()}getAllUsers(){this.userDataService.getCustomerLists().subscribe(i=>{this.users=i.data},i=>{console.log(i.message)})}getAllCustomTags(){this.customTagService.getAllTags().subscribe(i=>{this.customTags=i.data},i=>{console.log(i.message)})}updateUserCustomTag(i){console.log(i),this.userService.updateTag(this.id,i).subscribe(n=>{this.msg.success(n.message)},n=>{this.msg.error(n.message)})}updateCustomerStatus(i){this.userService.updateStatus(this.id,i).subscribe(n=>{this.msg.success(n.message)},n=>{this.msg.error(n.message)})}getAllTags(){this.tagService.getAllTags().subscribe(i=>{this.tags=i.data,this.setTag(this.user._id,this.tags)},i=>{this.msg.error(i.message)})}getUserInfo(i){this.userDataService.getUserByUserID(i).subscribe(n=>{this.getAllCustomTags(),this.user=n.data,console.log(this.user),this.customerActive=this.user.status,this.setReturnPercentage(this.user),this.getAllOrder(this.user._id)},n=>{this.msg.error(n.message)})}getAllOrder(i){this.orderService.getAllOrdersByUserId(i).subscribe(n=>{this.orders=n.data,this.setOrderData(this.orders),this.getReturnPercentage(),this.getAllTags()},n=>{this.msg.error(n.message)})}setReturnPercentage(i){i?this.returnService.getReturnByUserId(i._id).subscribe(n=>{this.totalReturn=n.data,this.setTotalReturnItem(this.totalReturn)},n=>{console.log(n.message)}):(this.totalReturn=[],this.setTotalReturnItem(this.totalReturn))}setTotalReturnItem(i){this.totalReturnByUser=0;for(let n=0;n<i.length;n++)this.totalReturnByUser+=i[n].products.length;this.getReturnPercentage()}getReturnPercentage(){this.returnPercent=Math.round((this.totalReturnByUser?this.totalReturnByUser:0)/(this.totalOrders?this.totalOrders:0)*100)}setOrderData(i){this.totalOrders=0,this.totalOrderValue=0,this.totalPendingItems=0,this.totalCanceledItems=0,this.totalConfirmedItems=0;for(let n=0;n<i.length;n++){this.totalOrders+=i[n].orderedItems.length,this.totalOrderValue+=i[n].totalAmount;for(let h=0;h<this.orders[n].orderedItems.length;h++)this.orders[n].orderedItems[h].deliveryStatus===f.i.PENDING?this.totalPendingItems+=1:this.orders[n].orderedItems[h].deliveryStatus===f.i.CANCEL?this.totalCanceledItems+=1:(this.orders[n].orderedItems[h].deliveryStatus===f.i.CONFIRM||this.orders[n].orderedItems[h].deliveryStatus===f.i.SHIPPING)&&(this.totalConfirmedItems+=1)}console.log("total orders :",this.totalOrders),console.log("total orders value :",this.totalOrderValue)}setTag(i,n){for(let h=0;h<n.length;h++){let t=n[h];if(1===t.totalorderCondition&&1===t.ordervalueCondition&&1===t.cancelCondition&&1===t.returnCondition){if(this.totalOrders>=t.totalorder&&this.totalOrderValue>=t.ordervalue&&(this.totalCanceledItems>=t.cancel||this.returnPercent>=t.return)){this.assignedTag=t.tagname;break}}else if(1===t.totalorderCondition&&1===t.ordervalueCondition&&1===t.cancelCondition&&2===t.returnCondition){if(this.totalOrders>=t.totalorder&&this.totalOrderValue>=t.ordervalue&&(this.totalCanceledItems>=t.cancel||this.returnPercent<=t.return)){this.assignedTag=t.tagname;break}}else if(1===t.totalorderCondition&&1===t.ordervalueCondition&&2===t.cancelCondition&&1===t.returnCondition){if(this.totalOrders>=t.totalorder&&this.totalOrderValue>=t.ordervalue&&(this.totalCanceledItems<=t.cancel||this.returnPercent>=t.return)){this.assignedTag=t.tagname;break}}else if(1===t.totalorderCondition&&2===t.ordervalueCondition&&1===t.cancelCondition&&1===t.returnCondition){if(this.totalOrders>=t.totalorder&&this.totalOrderValue<=t.ordervalue&&(this.totalCanceledItems>=t.cancel||this.returnPercent>=t.return)){this.assignedTag=t.tagname;break}}else if(2===t.totalorderCondition&&1===t.ordervalueCondition&&1===t.cancelCondition&&1===t.returnCondition){if(this.totalOrders<=t.totalorder&&this.totalOrderValue>=t.ordervalue&&(this.totalCanceledItems>=t.cancel||this.returnPercent>=t.return)){this.assignedTag=t.tagname;break}}else if(1===t.totalorderCondition&&1===t.ordervalueCondition&&2===t.cancelCondition&&2===t.returnCondition){if(this.totalOrders>=t.totalorder&&this.totalOrderValue>=t.ordervalue&&(this.totalCanceledItems<=t.cancel||this.returnPercent<=t.return)){this.assignedTag=t.tagname;break}}else if(1===t.totalorderCondition&&2===t.ordervalueCondition&&1===t.cancelCondition&&2===t.returnCondition){if(this.totalOrders>=t.totalorder&&this.totalOrderValue<=t.ordervalue&&(this.totalCanceledItems>=t.cancel||this.returnPercent<=t.return)){this.assignedTag=t.tagname;break}}else if(1===t.totalorderCondition&&2===t.ordervalueCondition&&2===t.cancelCondition&&1===t.returnCondition){if(this.totalOrders>=t.totalorder&&this.totalOrderValue<=t.ordervalue&&(this.totalCanceledItems<=t.cancel||this.returnPercent>=t.return)){this.assignedTag=t.tagname;break}}else if(2===t.totalorderCondition&&1===t.ordervalueCondition&&2===t.cancelCondition&&1===t.returnCondition){if(this.totalOrders<=t.totalorder&&this.totalOrderValue>=t.ordervalue&&(this.totalCanceledItems<=t.cancel||this.returnPercent>=t.return)){this.assignedTag=t.tagname;break}}else if(2===t.totalorderCondition&&2===t.ordervalueCondition&&1===t.cancelCondition&&1===t.returnCondition){if(this.totalOrders<=t.totalorder&&this.totalOrderValue<=t.ordervalue&&(this.totalCanceledItems>=t.cancel||this.returnPercent>=t.return)){this.assignedTag=t.tagname;break}}else if(2===t.totalorderCondition&&1===t.ordervalueCondition&&1===t.cancelCondition&&2===t.returnCondition){if(this.totalOrders<=t.totalorder&&this.totalOrderValue>=t.ordervalue&&(this.totalCanceledItems>=t.cancel||this.returnPercent<=t.return)){this.assignedTag=t.tagname;break}}else if(1===t.totalorderCondition&&2===t.ordervalueCondition&&2===t.cancelCondition&&2===t.returnCondition){if(this.totalOrders>=t.totalorder&&this.totalOrderValue<=t.ordervalue&&(this.totalCanceledItems<=t.cancel||this.returnPercent<=t.return)){this.assignedTag=t.tagname;break}}else if(2===t.totalorderCondition&&1===t.ordervalueCondition&&2===t.cancelCondition&&2===t.returnCondition){if(this.totalOrders<=t.totalorder&&this.totalOrderValue>=t.ordervalue&&(this.totalCanceledItems<=t.cancel||this.returnPercent<=t.return)){this.assignedTag=t.tagname;break}}else if(2===t.totalorderCondition&&2===t.ordervalueCondition&&1===t.cancelCondition&&2===t.returnCondition){if(this.totalOrders<=t.totalorder&&this.totalOrderValue<=t.ordervalue&&(this.totalCanceledItems>=t.cancel||this.returnPercent<=t.return)){this.assignedTag=t.tagname;break}}else if(2===t.totalorderCondition&&2===t.ordervalueCondition&&2===t.cancelCondition&&1===t.returnCondition){if(this.totalOrders<=t.totalorder&&this.totalOrderValue<=t.ordervalue&&(this.totalCanceledItems<=t.cancel||this.returnPercent>=t.return)){this.assignedTag=t.tagname;break}}else if(2===t.totalorderCondition&&2===t.ordervalueCondition&&2===t.cancelCondition&&2===t.returnCondition&&this.totalOrders<=t.totalorder&&this.totalOrderValue<=t.ordervalue&&(this.totalCanceledItems<=t.cancel||this.returnPercent<=t.return)){this.assignedTag=t.tagname;break}}}changeCustomerStatus(i){0===i&&(this.customerActive=1),1===i&&(this.customerActive=0)}showSmsModal(){this.smsVisible=!0}smsOk(){console.log("Button ok clicked!"),this.smsVisible=!1}smsCancel(){console.log("Button cancel clicked!"),this.smsVisible=!1}orderModal(){this.createOrder=!0}orderOk(){console.log("Button ok clicked!"),this.createOrder=!1}orderCancel(){console.log("Button cancel clicked!"),this.createOrder=!1}}return c.\u0275fac=function(i){return new(i||c)(e.Y36(C.c),e.Y36(_.M),e.Y36(T.K),e.Y36(o.W),e.Y36(a.p),e.Y36(l.x),e.Y36(r.dD),e.Y36(d.gz))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-customer-profile"]],decls:223,vars:57,consts:[[1,"page-header"],[1,"las","la-lg","la-long-arrow-alt-left"],[1,"header-action"],["type","button"],[1,"create_btn"],[1,"table-samary"],["nzSize","small"],[1,"left_navbar"],[1,"inner_nav_header"],[1,"header_action"],["nz-dropdown","",3,"nzDropdownMenu"],[1,"las","la-angle-down"],["statusMenu","nzDropdownMenu"],["nz-menu","","nzSelectable",""],["nz-menu-item",""],["nz-button","","nz-dropdown","","nzPlacement","bottomRight",3,"nzDropdownMenu"],["nz-icon","","nzType","ellipsis"],["actionMenu","nzDropdownMenu"],["nz-input","","placeholder","Basic usage"],["nz-menu","","nzTheme","light","nzMode","inline",1,"refund_list"],["nz-menu-item","",4,"ngFor","ngForOf"],[1,"customer_body_main",2,"background","#fff"],[1,"customer_details_header"],["nzSize","small",1,"customer_details_body"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXs","nzLg"],[1,"customer_thumb"],[3,"nzText","nzColor"],["nz-image","","alt","",3,"nzSrc"],[1,"customer_rank"],[1,"las","la-crown",2,"color","#ff9900"],[3,"ngModel","ngModelChange","click"],[1,"customer_detils"],[2,"padding","0 10px"],[1,"las","la-lg","la-comment",3,"click"],[1,"las","la-lg","la-envelope",3,"click"],[1,"custoemr_type"],["nzSize","small","placeholder","Change Tag",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nz-col","","nzXs","24","nzLg","6"],[1,"customer_points"],["nz-button","","nzType","primary",3,"click"],[1,"las","la-plus"],["nzSize","small",2,"background","#ecfff4"],[1,"dash_header"],[1,"las","la-coins"],[1,"dash_body"],[2,"color","orange"],[2,"color","green"],[2,"color","red"],[3,"nzGutter"],["nz-col","",1,"mb25",3,"nzXs","nzMd"],["nzSize","small","nzHoverable",""],[1,"las","la-box"],[1,"las","la-undo-alt"],[1,"las","la-wallet"],[1,"lar","la-star"],[2,"visibility","hidden"],["nzTitle","Send a Message",3,"nzVisible","nzVisibleChange","nzOnCancel","nzOnOk"],[4,"nzModalContent"],["nzTitle","The first Modal",3,"nzVisible","nzVisibleChange","nzOnCancel","nzOnOk"],[1,"left"],[1,"right"],[3,"nzValue","nzLabel"]],template:function(i,n){if(1&i&&(e.TgZ(0,"div",0)(1,"h2"),e._UZ(2,"i",1),e._uU(3," All Customer"),e.qZA(),e.TgZ(4,"div",2)(5,"button",3),e._uU(6,"Export"),e.qZA(),e.TgZ(7,"button",3),e._uU(8,"Import"),e.qZA(),e.TgZ(9,"button",4),e._uU(10,"Add Customer"),e.qZA()()(),e.TgZ(11,"div",5)(12,"nz-card",6)(13,"nz-layout")(14,"nz-sider",7)(15,"div",8)(16,"div",9)(17,"a",10),e._uU(18," All Customer "),e._UZ(19,"i",11),e.TgZ(20,"nz-dropdown-menu",null,12)(22,"ul",13)(23,"li",14),e._uU(24,"Active"),e.qZA(),e.TgZ(25,"li",14),e._uU(26,"Platinum"),e.qZA(),e.TgZ(27,"li",14),e._uU(28,"Gold"),e.qZA(),e.TgZ(29,"li",14),e._uU(30,"Silver"),e.qZA(),e.TgZ(31,"li",14),e._uU(32,"Bronze"),e.qZA(),e.TgZ(33,"li",14),e._uU(34,"Block"),e.qZA()()()(),e.TgZ(35,"nz-button-group")(36,"button",15),e._UZ(37,"span",16),e.qZA(),e.TgZ(38,"nz-dropdown-menu",null,17)(40,"ul",13)(41,"li",14),e._uU(42,"Delete"),e.qZA(),e.TgZ(43,"li",14),e._uU(44,"Pending"),e.qZA(),e.TgZ(45,"li",14),e._uU(46,"Reject"),e.qZA()()()()(),e._UZ(47,"input",18),e.qZA(),e.TgZ(48,"ul",19),e.YNc(49,w,11,1,"li",20),e.qZA()(),e.TgZ(50,"nz-content",21)(51,"div",22)(52,"h4"),e._uU(53),e.qZA(),e.TgZ(54,"h5"),e._uU(55,"05 Jul 2022 | 11:30 PM"),e.qZA()(),e.TgZ(56,"nz-card",23)(57,"div",24)(58,"div",25)(59,"div",26)(60,"nz-ribbon",27),e._UZ(61,"img",28),e.qZA()(),e.TgZ(62,"div",29)(63,"p"),e._UZ(64,"i",30),e._uU(65),e.qZA(),e.TgZ(66,"nz-switch",31),e.NdJ("ngModelChange",function(){return n.updateCustomerStatus(n.customerActive)})("click",function(){return n.changeCustomerStatus(n.customerActive)})("ngModelChange",function(t){return n.customerActive=t}),e.qZA()()(),e.TgZ(67,"div",25)(68,"div",32)(69,"h3"),e._uU(70,"Customer Details"),e.qZA(),e.TgZ(71,"table")(72,"tbody")(73,"tr")(74,"td"),e._uU(75,"Name"),e.qZA(),e.TgZ(76,"td",33),e._uU(77,":"),e.qZA(),e.TgZ(78,"td"),e._uU(79),e.qZA()(),e.TgZ(80,"tr")(81,"td"),e._uU(82,"Phone No"),e.qZA(),e.TgZ(83,"td",33),e._uU(84,":"),e.qZA(),e.TgZ(85,"td"),e._uU(86),e.TgZ(87,"i",34),e.NdJ("click",function(){return n.showSmsModal()}),e.qZA()()(),e.TgZ(88,"tr")(89,"td"),e._uU(90,"Email"),e.qZA(),e.TgZ(91,"td",33),e._uU(92,":"),e.qZA(),e.TgZ(93,"td"),e._uU(94),e.TgZ(95,"i",35),e.NdJ("click",function(){return n.showSmsModal()}),e.qZA()()(),e.TgZ(96,"tr")(97,"td"),e._uU(98,"Join Date"),e.qZA(),e.TgZ(99,"td",33),e._uU(100,":"),e.qZA(),e.TgZ(101,"td"),e._uU(102),e.ALo(103,"date"),e.qZA()(),e.TgZ(104,"tr")(105,"td"),e._uU(106,"Address"),e.qZA(),e.TgZ(107,"td",33),e._uU(108,":"),e.qZA(),e.TgZ(109,"td"),e._uU(110),e.qZA()(),e.TgZ(111,"tr")(112,"td"),e._uU(113),e.qZA(),e.TgZ(114,"td",33),e._uU(115,":"),e.qZA(),e.TgZ(116,"td",36)(117,"nz-select",37),e.NdJ("ngModelChange",function(t){return n.updateUserCustomTag(t)})("ngModelChange",function(t){return n.user.customTag=t}),e.YNc(118,k,1,2,"nz-option",38),e.qZA()()()()()()(),e.TgZ(119,"div",39)(120,"div",40)(121,"button",41),e.NdJ("click",function(){return n.orderModal()}),e._UZ(122,"i",42),e._uU(123," Create order "),e.qZA(),e.TgZ(124,"nz-card",43)(125,"div",44)(126,"h2"),e._UZ(127,"i",45),e._uU(128," Points"),e.qZA(),e.TgZ(129,"h2"),e._uU(130),e.qZA()(),e.TgZ(131,"div",46)(132,"h5"),e._uU(133,"Lifetime Points "),e.TgZ(134,"span",47),e._uU(135),e.qZA()(),e.TgZ(136,"h5"),e._uU(137,"Use Points "),e.TgZ(138,"span",48),e._uU(139),e.qZA()(),e.TgZ(140,"h5"),e._uU(141,"Pending Points "),e.TgZ(142,"span",49),e._uU(143),e.qZA()()()()()()()(),e.TgZ(144,"nz-row",50)(145,"div",51)(146,"nz-card",52)(147,"div",44)(148,"h2"),e._UZ(149,"i",53),e._uU(150," Order"),e.qZA(),e.TgZ(151,"h1"),e._uU(152),e.qZA()(),e.TgZ(153,"div",46)(154,"h5"),e._uU(155,"Items Pending "),e.TgZ(156,"span",47),e._uU(157),e.qZA()(),e.TgZ(158,"h5"),e._uU(159,"Items Confirmed "),e.TgZ(160,"span",48),e._uU(161),e.qZA()(),e.TgZ(162,"h5"),e._uU(163,"Items Canceled"),e.TgZ(164,"span",49),e._uU(165),e.qZA()(),e.TgZ(166,"h5"),e._uU(167,"Total Value "),e.TgZ(168,"span",48),e._uU(169),e.qZA()()()()(),e.TgZ(170,"div",51)(171,"nz-card",52)(172,"div",44)(173,"h2"),e._UZ(174,"i",54),e._uU(175," Return"),e.qZA(),e.TgZ(176,"h2"),e._uU(177),e.qZA()(),e._UZ(178,"div",46),e.qZA()(),e.TgZ(179,"div",51)(180,"nz-card",52)(181,"div",44)(182,"h2"),e._UZ(183,"i",55),e._uU(184," Refund"),e.qZA(),e.TgZ(185,"h1"),e._uU(186,"6"),e.qZA()(),e.TgZ(187,"div",46)(188,"h5"),e._uU(189,"Pending "),e.TgZ(190,"span",47),e._uU(191,"3"),e.qZA()(),e.TgZ(192,"h5"),e._uU(193,"Accepted "),e.TgZ(194,"span",48),e._uU(195,"2"),e.qZA()(),e.TgZ(196,"h5"),e._uU(197,"Cancelled "),e.TgZ(198,"span",49),e._uU(199,"1"),e.qZA()()()()(),e.TgZ(200,"div",51)(201,"nz-card",52)(202,"div",44)(203,"h2"),e._UZ(204,"i",56),e._uU(205," Reviews"),e.qZA(),e.TgZ(206,"h1"),e._uU(207,"4"),e.qZA()(),e.TgZ(208,"div",46)(209,"h5",57),e._uU(210,"sani vai dont use it"),e.qZA(),e.TgZ(211,"h5"),e._uU(212,"Reviews Done "),e.TgZ(213,"span",48),e._uU(214,"3"),e.qZA()(),e.TgZ(215,"h5"),e._uU(216,"Reviews Pending "),e.TgZ(217,"span",47),e._uU(218,"1"),e.qZA()()()()()()()()()(),e.TgZ(219,"nz-modal",58),e.NdJ("nzVisibleChange",function(t){return n.smsVisible=t})("nzOnCancel",function(){return n.smsCancel()})("nzOnOk",function(){return n.smsOk()}),e.YNc(220,J,5,0,"ng-container",59),e.qZA(),e.TgZ(221,"nz-modal",60),e.NdJ("nzVisibleChange",function(t){return n.createOrder=t})("nzOnCancel",function(){return n.orderCancel()})("nzOnOk",function(){return n.orderOk()}),e.YNc(222,F,5,0,"ng-container",59),e.qZA()),2&i){const h=e.MAs(21),t=e.MAs(39);e.xp6(17),e.Q6J("nzDropdownMenu",h),e.xp6(19),e.Q6J("nzDropdownMenu",t),e.xp6(13),e.Q6J("ngForOf",n.users),e.xp6(4),e.Oqu(null==n.user?null:n.user.fullName),e.xp6(4),e.Q6J("nzGutter",16),e.xp6(1),e.Q6J("nzXs",e.DdM(45,D))("nzLg",e.DdM(46,Q)),e.xp6(2),e.s9C("nzText",1===n.customerActive?"Active":"Block"),e.s9C("nzColor",1===n.customerActive?"green":"red"),e.xp6(1),e.Q6J("nzSrc",null!=n.user&&n.user.profileImg?null==n.user?null:n.user.profileImg:"/assets /images/placeholder/test.png"),e.xp6(4),e.hij(" ",n.assignedTag," "),e.xp6(1),e.Q6J("ngModel",n.customerActive),e.xp6(1),e.Q6J("nzXs",e.DdM(47,D))("nzLg",e.DdM(48,j)),e.xp6(12),e.Oqu(null==n.user?null:n.user.fullName),e.xp6(7),e.hij(" +",null==n.user?null:n.user.phoneNo," "),e.xp6(8),e.hij(" ",null==n.user?null:n.user.email," "),e.xp6(8),e.Oqu(e.lcZ(103,43,null==n.user?null:n.user.createdAt)),e.xp6(8),e.Oqu(null==n.user?null:n.user.address),e.xp6(3),e.hij("Type (",null==n.user||null==n.user.customTag?null:n.user.customTag.tagname,")"),e.xp6(4),e.Q6J("ngModel",n.user.customTag),e.xp6(1),e.Q6J("ngForOf",n.customTags),e.xp6(12),e.Oqu(null==n.user?null:n.user.points),e.xp6(5),e.Oqu(null==n.user?null:n.user.earnedPoints),e.xp6(4),e.Oqu(null==n.user?null:n.user.redeemedPoints),e.xp6(4),e.Oqu((null==n.user?null:n.user.earnedPoints)-(null==n.user?null:n.user.points)-(null==n.user?null:n.user.redeemedPoints)),e.xp6(1),e.Q6J("nzGutter",16),e.xp6(1),e.Q6J("nzXs",e.DdM(49,v))("nzMd",e.DdM(50,M)),e.xp6(7),e.Oqu(n.totalOrders),e.xp6(5),e.Oqu(n.totalPendingItems),e.xp6(4),e.Oqu(n.totalConfirmedItems),e.xp6(4),e.Oqu(n.totalCanceledItems),e.xp6(4),e.hij(" ",n.totalOrderValue," Tk"),e.xp6(1),e.Q6J("nzXs",e.DdM(51,v))("nzMd",e.DdM(52,M)),e.xp6(7),e.hij("",n.returnPercent,"%"),e.xp6(2),e.Q6J("nzXs",e.DdM(53,v))("nzMd",e.DdM(54,M)),e.xp6(21),e.Q6J("nzXs",e.DdM(55,v))("nzMd",e.DdM(56,M)),e.xp6(19),e.Q6J("nzVisible",n.smsVisible),e.xp6(2),e.Q6J("nzVisible",n.createOrder)}},dependencies:[u.sg,g.JJ,g.On,m.du,m.Hf,O.Zp,A.hw,A.OK,A.t7,y.ix,y.fY,q.w,x.dQ,I.wO,I.r9,Z.cm,Z.Ws,Z.RR,Z.wA,E.F9,S.Ip,S.Vq,U.Uo,U.p0,U.$Z,R.t3,R.SK,N.Ie,B.bd,L.Ls,V.i,u.uU],styles:[".mb25[_ngcontent-%COMP%]{margin-bottom:15px!important}.dash_header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px!important}.dash_header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#585858;display:flex;align-items:center}.dash_header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px;margin-right:10px!important}.dash_body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;font-size:14px;line-height:20px;color:#707070}.page-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:30px 0 15px}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]{display:flex;align-items:center}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:transparent;margin-left:25px}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]   .create_btn[_ngcontent-%COMP%]{background:#1b75bb;color:#fff;border:1px solid #1b75bb;padding:10px 20px;transition:.3s;border-radius:3px}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]   .create_btn[_ngcontent-%COMP%]:hover{background:#8bc53f;border:1px solid #8bc53f}.refunt-tab[_ngcontent-%COMP%]{min-height:80vh;margin-bottom:30px}.tab-list[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex-direction:row;min-width:200px;text-align:left;border-bottom:1px solid #ddd;margin-left:-22px;padding:0 0 10px}.tab-list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:14px}.tab-list[_ngcontent-%COMP%]   .status-details[_ngcontent-%COMP%]{text-align:right;font-size:14px}.tab-list[_ngcontent-%COMP%]   .status-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{font-size:12px}.tab-list[_ngcontent-%COMP%]   .status-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:15px}.ant-tabs-nav-list[_ngcontent-%COMP%]{padding:0}.header_action[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.left_navbar[_ngcontent-%COMP%]{background:#fff;border-right:1px solid #ddd;min-width:230px!important}.inner_nav_header[_ngcontent-%COMP%]{padding:10px;border-bottom:1px solid #f0f0f0}.inner_nav_header[_ngcontent-%COMP%]   .header_action[_ngcontent-%COMP%]{margin-bottom:15px}.refund_list[_ngcontent-%COMP%]{padding:0;margin:0}.refund_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;padding:5px 10px!important;justify-content:space-between;align-items:center;text-align:left;border-bottom:1px solid #f0f0f0;height:unset}.refund_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{text-align:right}.refund_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px}.refund_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#1b75bb}.customer_body_main[_ngcontent-%COMP%]{padding:0 15px}.customer_details_header[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:8px 0}.customer_details_header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.customer_details_header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:12px;color:#585858}.customer_details_body[_ngcontent-%COMP%]{margin:15px 0}.customer_thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.customer_rank[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:10px}.customer_rank[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:25px}.customer_detils[_ngcontent-%COMP%]{margin-left:15px}.customer_detils[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:uppercase;margin-bottom:15px!important}.customer_detils[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{color:#585858;line-height:25px}.customer_detils[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{min-width:80px}.customer_points[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;height:100%}.customer_points[_ngcontent-%COMP%]   nz-card[_ngcontent-%COMP%]{width:100%;text-align:center}.customer_points[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.custoemr_type[_ngcontent-%COMP%]   nz-select.ant-select[_ngcontent-%COMP%]{border-color:#fff!important}@media (max-width: 768px){.customer_points[_ngcontent-%COMP%]   nz-card[_ngcontent-%COMP%]{margin:25px 0}.table-samary[_ngcontent-%COMP%]   nz-layout[_ngcontent-%COMP%]{max-height:unset;flex-direction:column}.main-layout[_ngcontent-%COMP%]{flex-direction:column!important}.left_navbar[_ngcontent-%COMP%]{min-width:100%!important;width:100%!important;border:none}.customer_body_main[_ngcontent-%COMP%]{width:100%!important;padding:0}.customer_details_header[_ngcontent-%COMP%]{padding:0}}"]}),c})()}];let W=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[d.Bz.forChild(G),d.Bz]}),c})();var Y=s(32368),K=s(16102);let X=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[u.ez,W,p.q,Y.rP,g.UX,g.u5,K.P]}),c})()},31913:(b,z,s)=>{s.d(z,{i:()=>p});var p=(()=>{return(u=p||(p={}))[u.PENDING=0]="PENDING",u[u.CANCEL=1]="CANCEL",u[u.CONFIRM=2]="CONFIRM",u[u.PARTIAL_SHIPPING=3]="PARTIAL_SHIPPING",u[u.SHIPPING=4]="SHIPPING",u[u.DELIVERED=5]="DELIVERED",u[u.RETURNING=6]="RETURNING",u[u.RETURNED=7]="RETURNED",u[u.PARTIAL_RETURNED=8]="PARTIAL_RETURNED",u[u.REFUND=9]="REFUND",u[u.EDIT=10]="EDIT",p;var u})()},68132:(b,z,s)=>{s.d(z,{p:()=>C});var p=s(40520),u=s(92340),f=s(5e3);const e=u.N.apiBaseLink+"/api/order/";let C=(()=>{class _{constructor(o){this.httpClient=o}editOrder(o){return this.httpClient.post(e+"edit-order",o)}placeOrder(o){return this.httpClient.post(e+"place-order",o)}updateOrder(o){return this.httpClient.post(e+"update-order",o)}placeOrderRequest(o){return this.httpClient.post(e+"place-order-request",o)}placeTempOrder(o){return this.httpClient.post(e+"place-temp-order",o)}updateOrderSessionKey(o,a){return this.httpClient.post(e+"update-session-key/"+o+"/"+a,{})}getAllOrdersByUser(o,a,l,r){let d=new p.LE;return d=d.append("q",o),d=d.append("status",r),a&&(d=d.append("pageSize",a.pageSize),d=d.append("currentPage",a.currentPage)),this.httpClient.get(e+"get-all-orders-by-user",{params:d})}getAllOrdersByUserId(o){return this.httpClient.get(e+"get-all-orders-by-userId/"+o)}getAllCanceledOrdersByUser(o,a,l){return this.httpClient.get(e+"get-all-canceled-orders-by-user")}getAllOrdersByUserOrderId(o,a){let l=new p.LE;return o&&(console.log("param id ",o),l=l.append("id",o)),a&&(l=l.append("select",a)),this.httpClient.get(e+"get-orders-by-user-orderId",{params:l})}getAllOrdersofyUserByAdmin(o,a,l){let r=new p.LE;return l&&(r=r.append("userId",l)),o?(r=r.append("pageSize",o.pageSize),r=r.append("page",o.currentPage),a&&(r=r.append("select",a)),this.httpClient.get(e+"get-all-orders-of-user-by-admin",{params:r})):(a&&(r=r.append("select",a)),this.httpClient.get(e+"get-all-orders-of-user-by-admin",{params:r}))}getOrderDetails(o){return this.httpClient.get(e+"get-order-details/"+o)}getOrderDetailsByOrderId(o){return this.httpClient.get(e+"get-order-details-by-orderId/"+o)}getrequestOrderDetails(o){return this.httpClient.get(e+"get-request-order-details/"+o)}cancelOrderByUser(o){return this.httpClient.put(e+"cancel-order-by-user/"+o,{})}deleteOrderByAdmin(o){return this.httpClient.delete(e+"delete-order-by-admin/"+o)}getAllTransactionByUser(o,a){let l=new p.LE;return o?(l=l.append("pageSize",o.pageSize),l=l.append("page",o.currentPage),a&&(l=l.append("select",a)),this.httpClient.get(e+"get-all-transactions-by-user",{params:l})):(a&&(l=l.append("select",a)),this.httpClient.get(e+"get-all-transactions-by-user",{params:l}))}getAllOrdersByAdmin(o,a,l,r){return this.httpClient.post(e+"get-all-orders-by-admin",{paginate:o,sort:a,filter:l,select:r})}getOrdersBySearch(o,a,l){let r=new p.LE;return r=r.append("q",o),a&&(r=r.append("pageSize",a.pageSize),r=r.append("currentPage",a.currentPage)),this.httpClient.post(e+"get-order-by-search",{filter:l},{params:r})}getSelectedOrderDetails(o){return this.httpClient.post(e+"get-selected-order-details",{selectedIds:o})}getAllOrdersByAdminNoPaginate(){return this.httpClient.get(e+"get-all-orders-by-admin-no-paginate")}changeOrderStatus(o){return this.httpClient.put(e+"change-order-status",o)}getAllTransactionByAdmin(o,a){let l=new p.LE;return o?(l=l.append("pageSize",o.pageSize),l=l.append("page",o.currentPage),a&&(l=l.append("select",a)),this.httpClient.get(e+"get-all-transaction-by-admin",{params:l})):(a&&(l=l.append("select",a)),this.httpClient.get(e+"get-all-transaction-by-admin",{params:l}))}testSslSmsApi(){return this.httpClient.get(e+"sent-test-ssl-message")}updateOrderById(o){return this.httpClient.put(e+"update-order-by-id",o)}updateMultipleOrderById(o){return this.httpClient.post(e+"update-multiple-order-by-id",o)}updateRequestOrderById(o){return this.httpClient.put(e+"update-request-order-by-id",o)}payPayment(o){return this.httpClient.post(e+"pay-payment",o)}sendNotification(o){return this.httpClient.post(e+"confirm-notification",o)}addToOrderTimeline(o,a){return this.httpClient.post(e+"add-to-order-timeline",{data:o,orderId:a})}updateTag(o,a){return this.httpClient.post(e+"update-tag",{orderId:o,tag:a})}setFilterVariable(o){this.filterVariable=o}getFilterVariable(){let o=this.filterVariable;return this.clearFilterVariable(),o}clearFilterVariable(){this.filterVariable=void 0}}return _.\u0275fac=function(o){return new(o||_)(f.LFG(p.eN))},_.\u0275prov=f.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},5944:(b,z,s)=>{s.d(z,{M:()=>o});var p=s(40520),u=s(92340),f=s(88493),e=s(5e3);const C=u.N.apiBaseLink+"/api/user/",_=u.N.apiBaseLink+"/api/cart/",T=u.N.apiBaseLink+"/api/wishlist/";let o=(()=>{class a{constructor(r){this.httpClient=r}getLoggedInUserInfo(r){if(r){let d=new p.LE;return d=d.append("select",r),this.httpClient.get(C+"logged-in-user-data",{params:d})}return this.httpClient.get(C+"logged-in-user-data")}editLoginUserInfo(r){return this.httpClient.put(C+"edit-logged-in-user-data",r)}editAddress(r){return this.httpClient.put(C+"edit-address",r)}addCartProductToLocalStorage(r){const d=JSON.parse(localStorage.getItem(f.w.cartsProduct));let g;null===d?(g=[],g.push(r)):(g=d,-1===g.findIndex(O=>O._id===r._id)&&g.push(r)),localStorage.setItem(f.w.cartsProduct,JSON.stringify(g))}getCartProductFromLocalStorage(){const r=localStorage.getItem(f.w.cartsProduct);return null===r?[]:JSON.parse(r)}deleteCartProductFromLocalStorage(r){const g=JSON.parse(localStorage.getItem(f.w.cartsProduct)).filter(m=>m._id!==r);localStorage.setItem(f.w.cartsProduct,JSON.stringify(g))}getAllAddress(r,d){let g=new p.LE;return r?(g=g.append("pageSize",r.pageSize),g=g.append("page",r.currentPage),d&&(g=g.append("select",d)),this.httpClient.get(C+"get-addresses",{params:g})):(d&&(g=g.append("select",d)),this.httpClient.get(C+"get-addresses",{params:g}))}addToAddress(r){return this.httpClient.post(C+"add-address",r)}deleteAddress(r){return this.httpClient.delete(C+"delete-address-by-id/"+r)}getUsersBySearch(r,d,g){let m=new p.LE;return m=m.append("q",r),d&&(m=m.append("pageSize",d.pageSize),m=m.append("currentPage",d.currentPage)),this.httpClient.post(C+"get-users-by-search",{filter:g},{params:m})}addItemToUserCart(r){return console.log(r),this.httpClient.post(_+"add-to-cart",r)}addSingleItemToCart(r){return this.httpClient.post(_+"add-to-cart",r)}getCartItemList(){return this.httpClient.get(_+"get-cart-items-by-user")}incrementCartQuantity(r){return this.httpClient.post(_+"increment-cart-item-quantity",{cartId:r})}decrementCartQuantity(r){return this.httpClient.post(_+"decrement-cart-item-quantity",{cartId:r})}removeCartItem(r){return this.httpClient.delete(_+"remove-cart-item/"+r)}countCartItem(){return this.httpClient.get(_+"cart-item-count")}getCartStatusOnBook(r){return this.httpClient.get(_+"get-status-book-on-cart/"+r)}getCustomerLists(r,d,g){let m=new p.LE;return g&&(m=m.append("select",g)),this.httpClient.post(C+"get-all-user-lists",{paginate:r,filter:d},{params:m})}getUserByUserID(r){return this.httpClient.get(C+"get-user-by-user-id/"+r)}editUserAccess(r,d){return this.httpClient.put(C+"edit-user-access/"+r,d)}getSearchUsers(r,d,g){let O=new p.LE;return O=O.append("q",r),O=O.append("pageSize",d.pageSize),O=O.append("currentPage",d.currentPage),this.httpClient.post(C+"get-users-by-search",{filter:g},{params:O})}addSingleItemToWishlist(r){return this.httpClient.post(T+"add-to-wishlist",r)}getWishlistItemByUser(){return this.httpClient.get(T+"get-wishlist-items-by-user")}checkStatusInWishlistWithBookId(r){return this.httpClient.get(T+"get-status-of-product-in-wishlist/"+r)}getBooksFromWishlist(){return this.httpClient.get(T+"get-all-product-from-wishlist")}removeWishlistById(r){return this.httpClient.delete(T+"delete-wishlist-by-id/"+r)}}return a.\u0275fac=function(r){return new(r||a)(e.LFG(p.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);