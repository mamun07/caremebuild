"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[8862],{38862:(F,M,l)=>{l.r(M),l.d(M,{StockModule:()=>mt});var C=l(24586),x=l(69808),b=l(99826),s=l(93075),O=l(60515),g=l(12943),_=l(80574),r=l(29343),u=l(94813),d=l(78372),h=l(71884),f=l(63900),U=l(37623),t=l(5e3),q=l(50072),R=l(61293),N=l(66082),k=l(57267),E=l(85314),v=l(92181),J=l(77446),Z=l(63640),Y=l(11047),I=l(76042),H=l(82683),L=l(92643),A=l(90868),D=l(64219),S=l(63677),w=l(92905),y=l(50939),G=l(98706),$=l(77484),K=l(68132),z=l(79814);function Q(a,p){if(1&a&&(t.TgZ(0,"mat-radio-button",14),t._uU(1),t.qZA()),2&a){const e=p.$implicit;t.Q6J("value",e.value),t.xp6(1),t.Oqu(null==e?null:e.viewValue)}}function B(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div")(4,"h3"),t._uU(5,"Export Products"),t.qZA()(),t.TgZ(6,"div")(7,"span",4),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.exportPOpUpHide())}),t._UZ(8,"i",5),t.qZA()()(),t.TgZ(9,"div",6)(10,"div",7)(11,"h3"),t._uU(12,"Export"),t.qZA(),t.TgZ(13,"mat-radio-group",8),t.NdJ("ngModelChange",function(n){t.CHM(e);const i=t.oxw();return t.KtG(i.selectedAmount=n)}),t.YNc(14,Q,2,2,"mat-radio-button",9),t.qZA()(),t.TgZ(15,"div",7)(16,"h3"),t._uU(17,"Export as"),t.qZA(),t.TgZ(18,"mat-radio-group",8),t.NdJ("ngModelChange",function(n){t.CHM(e);const i=t.oxw();return t.KtG(i.selectedType=n)}),t.TgZ(19,"mat-radio-button",10),t._uU(20,"CSV for Excel, Numbers, or other spreadsheet programs"),t.qZA(),t.TgZ(21,"mat-radio-button",11),t._uU(22,"Plain CSV file"),t.qZA()()()(),t.TgZ(23,"div",12)(24,"ul")(25,"li")(26,"button",4),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.exportPOpUpHide())}),t._uU(27,"Cancel "),t.qZA()(),t.TgZ(28,"li")(29,"button"),t._uU(30,"Export transaction histories"),t.qZA()(),t.TgZ(31,"li")(32,"button",13),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onExport())}),t._uU(33,"Export Products"),t.qZA()()()()()()}if(2&a){const e=t.oxw();t.xp6(13),t.Q6J("ngModel",e.selectedAmount),t.xp6(1),t.Q6J("ngForOf",e.exportTypes),t.xp6(4),t.Q6J("ngModel",e.selectedType)}}let j=(()=>{class a{constructor(e,o){this.utilsService=e,this.orderService=o,this.export=!1,this.valueChange=new t.vpe,this.exportTypes=[{value:g.t.CURRENT_PAGE,viewValue:"Current Page"},{value:g.t.ALL_ORDERS,viewValue:"All Products"},{value:g.t.SELECTED,viewValue:"Selected Data : "},{value:g.t.BY_SEARCH_RESULT,viewValue:"Results matching your search"},{value:g.t.BY_DATE,viewValue:"By Date"}]}ngOnInit(){}getAllOrders(){this.orderService.getAllOrdersByAdmin().subscribe(e=>{this.orders=e.data})}exportPOpUpHide(){this.export=!1}exportPOpUpShow(){this.export=!0}exportToExcel(){const e=this.utilsService.getDateString(new Date),o=_.P6.json_to_sheet(this.orders),n=_.P6.book_new();_.P6.book_append_sheet(n,o,"products"),_.NC(n,`Products_${e}.xlsx`)}onExport(){this.valueChange.emit({selectedAmount:this.selectedAmount,SelectedType:this.selectedType})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(k.F),t.Y36(K.p))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-export-popup"]],outputs:{valueChange:"valueChange"},decls:1,vars:1,consts:[["class","export-order-area",4,"ngIf"],[1,"export-order-area"],[1,"export-order-main"],[1,"export-order-header"],[3,"click"],[1,"fa-solid","fa-xmark"],[1,"export-order-body"],[1,"export"],[3,"ngModel","ngModelChange"],["class","radio-box",3,"value",4,"ngFor","ngForOf"],["value","1",1,"radio-box"],["value","2",1,"radio-box"],[1,"export-footer-area"],[1,"export-btn-active",3,"click"],[1,"radio-box",3,"value"]],template:function(e,o){1&e&&t.YNc(0,B,34,3,"div",0),2&e&&t.Q6J("ngIf",1==o.export)},dependencies:[x.sg,x.O5,z.VQ,z.U0,s.JJ,s.On],styles:[".export-order-area[_ngcontent-%COMP%]{background-color:#0000004d;position:fixed;height:100vh;overflow-y:auto;top:0;left:0;z-index:1500!important;display:flex;align-items:center;justify-content:center;padding:80px 20px 30px;box-sizing:border-box;width:100%;overflow-x:hidden}.export-order-main[_ngcontent-%COMP%]{display:block;max-width:600px;width:100%;margin:auto;background-color:#fff;border-radius:15px;border:1px solid #0058ff;box-shadow:0 5px 10px #0000004d}.export-order-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;padding:20px;box-sizing:border-box;border-bottom:1px solid #eaebed}.export-order-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#5b5d5d;font-family:Roboto,sans-serif;font-style:normal;display:block;font-size:18px;line-height:25px;font-weight:500}.export-order-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;padding:4px;box-sizing:border-box;color:#5b5d5d;font-family:Roboto,sans-serif;font-size:18px}.export-order-body[_ngcontent-%COMP%]{display:block;padding:20px 15px;box-sizing:border-box}.fa-xmark[_ngcontent-%COMP%]{font-size:30px;cursor:pointer}.export[_ngcontent-%COMP%]{display:block;margin-bottom:20px}.export[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#5b5d5d;font-family:Roboto,sans-serif;font-style:normal;display:block;font-size:19px;line-height:25px;font-weight:500;margin-bottom:20px!important}.export[_ngcontent-%COMP%]   .radio-box[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:15px;color:#5b5d5d;font-family:Roboto,sans-serif;font-weight:400;font-size:16px;font-style:normal}.export[_ngcontent-%COMP%]   .radio-box[_ngcontent-%COMP%]:last-child{margin:0}.export-footer-area[_ngcontent-%COMP%]{display:block;padding:20px;box-sizing:border-box;border-top:1px solid #eaebed}.export-footer-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;text-align:right}.export-footer-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin-right:10px;margin-bottom:15px}.export-footer-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-right:0}.export-footer-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#5b5d5d;font-family:Roboto,sans-serif;font-style:normal;font-weight:500;font-size:15px;display:block;background-color:#fff;outline:none;border:1px solid #eaebed;padding:6px 10px;box-sizing:border-box;border-radius:4px;transition:all .3s linear}.export-footer-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0058ff;border-color:#0058ff;color:#fff}.export-btn-active[_ngcontent-%COMP%]{background-color:#0058ff!important;border-color:#0058ff!important;color:#fff!important}  .radio-box.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#0058ff}  .radio-box.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#0058ff}"]}),a})();const V=["export"],W=["matCheckbox"],X=["searchForm"],tt=["searchInput"];function et(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"li"),t._uU(1),t.TgZ(2,"i",41),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.clearDateFilter())}),t.qZA()()}if(2&a){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.dateRangeFilter?e.dateRangeFilter:e.dateRangeCalFilter," ")}}function nt(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"li"),t._uU(1),t.TgZ(2,"i",41),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.clearSortFilter())}),t.qZA()()}if(2&a){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.sortFilter," ")}}function ot(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"span",1),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.clearAllFilters())}),t._uU(1," Clear All "),t.qZA()}}function rt(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td",35)(2,"mat-checkbox",42),t.NdJ("ngModelChange",function(n){t.CHM(e);const i=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.onCheckChange(n,c.i,null==i?null:i._id))})("ngModelChange",function(n){t.CHM(e);const i=t.oxw().$implicit;return t.KtG(i.select=n)}),t.qZA()(),t.TgZ(3,"td"),t._UZ(4,"img",43),t.qZA(),t.TgZ(5,"td",44)(6,"h2",1),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,i=t.oxw(2);return t.KtG(i.goToDetails(n._id,n.sku))}),t._uU(7),t.ALo(8,"slice"),t.TgZ(9,"a",1),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,i=t.oxw(2);return t.KtG(i.preview(null==n?null:n._id))}),t._UZ(10,"i",45),t.qZA()()(),t.TgZ(11,"td")(12,"span"),t._uU(13),t.qZA()(),t.TgZ(14,"td",46),t._uU(15),t.qZA(),t.TgZ(16,"td",47),t._uU(17),t.qZA(),t.TgZ(18,"td",48),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.qZA()()}if(2&a){const e=t.oxw().$implicit,o=t.oxw(2);t.xp6(2),t.Q6J("ngModel",e.select),t.xp6(2),t.Q6J("nzSrc",o.setThumbnailImage(e)?o.setThumbnailImage(e):"/assets/images/placeholder/test.png")("alt",e.name),t.xp6(3),t.hij(" ",e.name.length>10?t.Dn7(8,11,e.name,0,10)+"...":o.str," "),t.xp6(6),t.Oqu(e.sku),t.xp6(2),t.hij(" ",e.quantity+e.committedQuantity," "),t.xp6(2),t.Oqu(e.committedQuantity),t.xp6(2),t.Oqu(e.quantity),t.xp6(2),t.Oqu(e.costPrice),t.xp6(2),t.Oqu(e.continueSelling?"Yes":"No"),t.xp6(2),t.Oqu(2===e.status?"Yes":"No")}}function it(a,p){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=p.$implicit,o=p.index,n=t.oxw().index,i=t.oxw().$implicit,c=t.oxw(2);t.xp6(1),t.hij(" ",c.getVariantName(n,e,i,o)," ")}}function at(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td",35)(2,"mat-checkbox",42),t.NdJ("ngModelChange",function(n){const c=t.CHM(e).index,m=t.oxw().$implicit,P=t.oxw(2);return t.KtG(P.onCheckChange(n,c,null==m?null:m._id))})("ngModelChange",function(n){t.CHM(e);const i=t.oxw().$implicit;return t.KtG(i.select=n)}),t.qZA()(),t.TgZ(3,"td"),t._UZ(4,"img",43),t.qZA(),t.TgZ(5,"td",44)(6,"h2")(7,"span",1),t.NdJ("click",function(){const i=t.CHM(e).$implicit,c=t.oxw().$implicit,m=t.oxw(2);return t.KtG(m.goToDetails(c._id,i.variantSku))}),t._uU(8),t.ALo(9,"slice"),t.qZA(),t.TgZ(10,"a",1),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,i=t.oxw(2);return t.KtG(i.preview(null==n?null:n._id))}),t._UZ(11,"i",45),t.qZA()(),t.YNc(12,it,2,1,"span",40),t.qZA(),t.TgZ(13,"td")(14,"span"),t._uU(15),t.qZA()(),t.TgZ(16,"td",46),t._uU(17),t.qZA(),t.TgZ(18,"td",47),t._uU(19),t.qZA(),t.TgZ(20,"td",48),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.qZA(),t.TgZ(28,"td")(29,"button",49),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,i=t.oxw(2);return t.KtG(i.showSerials(null==n?null:n.serialNumbers))}),t._uU(30,"View"),t.qZA()()()}if(2&a){const e=p.$implicit,o=t.oxw().$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("ngModel",o.select),t.xp6(2),t.Q6J("nzSrc",n.setThumbnailImage(o,null==e?null:e.variantSku)?n.setThumbnailImage(o,null==e?null:e.variantSku):"/assets/images/placeholder/test.png")("alt",o.name),t.xp6(4),t.hij(" ",o.name.length>10?t.Dn7(9,12,o.name,0,10)+"...":n.str," "),t.xp6(4),t.Q6J("ngForOf",o.variants),t.xp6(3),t.Oqu(null==e?null:e.variantSku),t.xp6(2),t.hij(" ",(null==e?null:e.variantQuantity)+(null==e?null:e.variantCommittedQuantity)," "),t.xp6(2),t.hij(" ",null==e?null:e.variantCommittedQuantity," "),t.xp6(2),t.Oqu(null==e?null:e.variantQuantity),t.xp6(2),t.Oqu(null!=e&&e.variantCostPrice?null==e?null:e.variantCostPrice:0),t.xp6(2),t.Oqu(null!=e&&e.variantContinueSelling?"Yes":"No"),t.xp6(2),t.hij(" ",2===(null==o?null:o.status)&&null!=e&&e.variantDisplay?"Yes":"No"," ")}}function st(a,p){if(1&a&&(t.TgZ(0,"tbody"),t.YNc(1,rt,26,15,"tr",31),t.YNc(2,at,31,16,"tr",40),t.qZA()),2&a){const e=p.$implicit;t.xp6(1),t.Q6J("ngIf",!e.hasVariant),t.xp6(1),t.Q6J("ngForOf",null==e?null:e.variantFormArray)}}const lt=function(){return{boxShadow:"none"}};function ct(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"nz-tab",9),t.NdJ("nzSelect",function(){const i=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.onFilterSelectChange(i))}),t.TgZ(1,"div",10)(2,"form",null,11)(4,"input",12,13),t.NdJ("focus",function(n){t.CHM(e);const i=t.oxw();return t.KtG(i.handleFocus(n))}),t.qZA()(),t.TgZ(6,"ul")(7,"li",14)(8,"button",15),t._uU(9," Set Date "),t._UZ(10,"i",16),t.qZA(),t.TgZ(11,"nz-dropdown-menu",17,18)(13,"div",19)(14,"ul",20)(15,"li",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.todayFilter())}),t._uU(16,"Today"),t.qZA(),t.TgZ(17,"li",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.yesterdayFilter())}),t._uU(18,"Yesterday"),t.qZA(),t.TgZ(19,"li",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.lastWeekFilter())}),t._uU(20,"Last 7 days"),t.qZA(),t.TgZ(21,"li",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.lastThirtyDaysFilter())}),t._uU(22," Last 30 days "),t.qZA(),t.TgZ(23,"li",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.lastThreeMonthFilter())}),t._uU(24," Last 90 days "),t.qZA(),t.TgZ(25,"li",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.lastMonthFilter())}),t._uU(26,"Last month"),t.qZA(),t.TgZ(27,"li",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.lastYearFilter())}),t._uU(28,"Last year"),t.qZA(),t.TgZ(29,"li",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.weekToDateFilter())}),t._uU(30,"Week to date"),t.qZA(),t.TgZ(31,"li",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.monthToDateFilter())}),t._uU(32," Month to date "),t.qZA(),t.TgZ(33,"li",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.yearToDateFilter())}),t._uU(34,"Year to date"),t.qZA()(),t.TgZ(35,"div",22)(36,"nz-card",23)(37,"nz-range-picker",24),t.NdJ("ngModelChange",function(n){t.CHM(e);const i=t.oxw();return t.KtG(i.onDateChange(n[0],n[1]))})("ngModelChange",function(n){t.CHM(e);const i=t.oxw();return t.KtG(i.filterDate=n)}),t.qZA(),t._UZ(38,"br"),t.TgZ(39,"button",25),t._uU(40,"Apply"),t.qZA()()()()()(),t.TgZ(41,"li")(42,"button",26),t._uU(43," Sort "),t._UZ(44,"i",27),t.qZA()(),t.TgZ(45,"mat-menu",null,28)(47,"button",29),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({name:1},1,"Product Title (A-Z)"))}),t._uU(48," Product Title (A-Z) "),t.qZA(),t.TgZ(49,"button",29),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({createdAt:1},2,"Created (Oldest First)"))}),t._uU(50," Created (Oldest First) "),t.qZA(),t.TgZ(51,"button",29),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({quantity:-1},3,"High Inventory"))}),t._uU(52," High Inventory "),t.qZA(),t.TgZ(53,"button",29),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({categoryName:-1},4,"Product Type (A-Z)"))}),t._uU(54," Product Type (A-Z) "),t.qZA(),t.TgZ(55,"button",29),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({vendor:1},5,"Vendor (A-Z)"))}),t._uU(56," Vendor (A-Z) "),t.qZA()()()(),t.TgZ(57,"div",30)(58,"ul"),t.YNc(59,et,3,1,"li",31),t.YNc(60,nt,3,1,"li",31),t.qZA(),t.YNc(61,ot,2,0,"span",32),t.qZA(),t.TgZ(62,"nz-table",33,34)(64,"thead")(65,"tr")(66,"th",35)(67,"mat-checkbox",36,37),t.NdJ("change",function(n){t.CHM(e);const i=t.oxw();return t.KtG(i.onAllSelectChange(n))}),t.qZA()(),t.TgZ(69,"th",38),t._uU(70,"Image"),t.qZA(),t.TgZ(71,"th"),t._uU(72,"Product Details"),t.qZA(),t.TgZ(73,"th",39),t._uU(74,"SKU"),t.qZA(),t.TgZ(75,"th"),t._uU(76,"Instock"),t.qZA(),t.TgZ(77,"th"),t._uU(78,"Committed"),t.qZA(),t.TgZ(79,"th"),t._uU(80,"Available"),t.qZA(),t.TgZ(81,"th"),t._uU(82,"Unit Cost"),t.qZA(),t.TgZ(83,"th"),t._uU(84,"Pre-Order"),t.qZA(),t.TgZ(85,"th"),t._uU(86,"Live"),t.qZA(),t.TgZ(87,"th"),t._uU(88,"Serial"),t.qZA()()(),t.YNc(89,st,3,2,"tbody",40),t.qZA()()}if(2&a){const e=p.$implicit,o=t.MAs(12),n=t.MAs(46),i=t.MAs(63),c=t.oxw();t.Q6J("nzTitle",e),t.xp6(8),t.Q6J("nzDropdownMenu",o),t.xp6(29),t.Q6J("ngModel",c.filterDate)("nzPopupStyle",t.DdM(22,lt))("nzDisabledDate",c.disabledDate),t.xp6(5),t.Q6J("matMenuTriggerFor",n),t.xp6(5),t.ekj("dropdown-active",1===c.activeSort),t.xp6(2),t.ekj("dropdown-active",2===c.activeSort),t.xp6(2),t.ekj("dropdown-active",3===c.activeSort),t.xp6(2),t.ekj("dropdown-active",4===c.activeSort),t.xp6(2),t.ekj("dropdown-active",5===c.activeSort),t.xp6(4),t.Q6J("ngIf",c.dateRangeFilter||c.dateRangeCalFilter),t.xp6(1),t.Q6J("ngIf",c.sortFilter),t.xp6(1),t.Q6J("ngIf",c.sortFilter||c.dateRangeFilter||c.dateRangeCalFilter||c.clearAllFilter),t.xp6(1),t.Q6J("nzData",c.products)("nzLoading",c.isLoading),t.xp6(27),t.Q6J("ngForOf",i.data)}}function dt(a,p){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=p.$implicit;t.xp6(1),t.Oqu(e.serial)}}function ut(a,p){if(1&a&&(t.ynx(0),t.TgZ(1,"div",50),t.YNc(2,dt,2,1,"span",40),t.qZA(),t.BQk()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.serialNumbers)}}const pt=[{path:"",component:(()=>{class a{constructor(e,o,n,i,c,m,P){this.activatedRoute=e,this.spinner=o,this.reloadService=n,this.productService=i,this.router=c,this.utilsService=m,this.uiService=P,this.tabs=["All Stock","Instock","Committed","Available","Low Stock","Pre-Order"],this.status=0,this.currentPage=1,this.productsPerPage=10,this.totalProductsStore=0,this.query=null,this.activeSort=null,this.holdPrevData=[],this.searchProducts=[],this.products=[],this.selectedIds=[],this.overlay=!1,this.isOpen=!1,this.isFocused=!1,this.isLoading=!1,this.isSelect=!1,this.productEnum=r.P,this.productStatus=[{label:"Draft",value:r.P.DRAFT},{label:"Active",value:r.P.ACTIVE}],this.today=new Date,this.dataFormDateRange=new s.cw({start:new s.NI,end:new s.NI}),this.clearAllFilter=!1,this.disabledDate=T=>(0,U.Z)(T,this.today)>0,this.showSerial=!1,this.serialNumbers=[]}ngOnInit(){this.reloadService.refreshProduct$.subscribe(()=>{this.getAllProducts()}),this.getAllProducts()}onRefresh(){var e;null===(e=this.filter)||void 0===e||delete e.createdAt,this.dateRangeCalFilter=null,this.dateRangeFilter=null,this.clearAllFilter=null,this.isLoading=!0,this.getAllProducts()}getAllProducts(){this.spinner.show();const e={currentPage:this.currentPage.toString(),pageSize:this.productsPerPage.toString()};(""===this.filter||null==this.filter)&&(this.filter={hasLink:!1}),this.subProduct=this.productService.getProductsByDynamicSort(e,this.sortQuery,this.filter,"").subscribe(n=>{var i;this.products=n.data,this.totalNumbers=null===(i=this.products)||void 0===i?void 0:i.length,this.products&&this.products.length&&(this.products.forEach((c,m)=>{const P=this.selectedIds.findIndex(T=>T===c._id);this.products[m].select=-1!==P}),this.checkSelectionData(),this.holdPrevData=n.data,this.totalProducts=n.count,this.totalProductsStore=n.count),this.totalProducts=n.count,this.totalProductsStore=n.count,this.spinner.hide(),this.isLoading=!1},n=>{this.spinner.hide(),this.isLoading=!1,console.log(n)})}setThumbnailImage(e,o){if(!o)return this.productService.getImages(e.medias,e.images)[0];{const n=e.variantFormArray;for(let i=0;i<n.length;i++)if(n[i].variantSku===o)return n[i].image}}getImages(e,o){let n=[];if(e&&e.length>0){for(let i=0,c=0;i<e.length;i++)null!==e[i]&&""!==e[i]&&(n.push(e[i]),c++);n=[...n,...o]}else n=o;return n}getVariantName(e,o,n,i){return 0!==i?"/"+n.variantDataArray[e][o]:n.variantDataArray[e][o]}checkSelectionData(){let e=!0;this.products.forEach(o=>{o.select||(e=!1)}),this.matCheckbox.checked=e}exportPopUpShow(){this.exportStock.exportPOpUpShow()}exportToExcel(e){e.selectedAmount===g.t.ALL_STOCK?this.productService.getAllProducts(null).subscribe(o=>{this.exportData(o.data,e.SelectedType)}):e.selectedAmount===g.t.CURRENT_PAGE?this.exportData(this.products,e.SelectedType):e.selectedAmount===g.t.SELECTED?this.productService.getSelectedProductDetails(this.selectedIds).subscribe(o=>{this.exportData(o.data,e.SelectedType)}):e.selectedAmount===g.t.BY_SEARCH_RESULT&&this.exportData(this.searchProducts,e.SelectedType)}exportData(e,o){this.spinner.show();const n=this.utilsService.getDateString(new Date),i=_.P6.json_to_sheet(e),c=_.P6.book_new();_.P6.book_append_sheet(c,i,"STOCK"),_.NC(c,"2"===o?`STOCK${n}.csv`:`STOCK${n}.xlsx`),this.spinner.hide()}onFilterSelectChange(e){switch(this.status=e,e){case"All Stock":delete this.filter;break;case"Instock":case"Available":this.filter={quantity:{$gt:0}};break;case"Committed":this.filter={committedQuantity:{$gt:0}};break;case"Low Stock":this.filter={quantity:{$lte:2}};break;case"Pre-Order":this.filter={continueSelling:!0}}e&&this.getAllProducts()}sortData(e,o,n){this.router.navigate([],{queryParams:{page:1}}),this.sortFilter=n,this.sortQuery=e,this.activeSort=o,this.reloadService.needRefreshRefunds$(),this.getAllProducts()}onAllSelectChange(e){const o=this.products.map(n=>n._id);e.checked?(this.selectedIds=this.utilsService.mergeArrayString(this.selectedIds,o),this.products.forEach(n=>{n.select=!0})):o.forEach(n=>{this.products.find(c=>c._id===n).select=!1;const i=this.selectedIds.findIndex(c=>c===n);this.selectedIds.splice(i,1)})}onPageChanged(e){this.router.navigate([],{queryParams:{page:e}})}onClickSearchArea(e){e.stopPropagation()}handleFocus(e){this.searchInput.nativeElement.focus(),!this.isFocused&&(this.searchProducts.length>0&&this.setPanelState(e),this.isFocused=!0)}setPanelState(e){e&&e.stopPropagation(),this.isOpen=!1,this.handleOpen()}handleOpen(){this.isOpen||this.isOpen&&!this.isLoading||this.searchProducts.length>0&&(this.isOpen=!0,this.overlay=!0)}handleOutsideClick(){!this.isOpen||(this.isOpen=!1,this.overlay=!1,this.isFocused=!1)}handleCloseOnly(){this.isOpen?(this.isOpen=!1,this.overlay=!1,this.isFocused=!1):this.isFocused=!1}handleCloseAndClear(){this.isOpen?(this.isOpen=!1,this.overlay=!1,this.searchProducts=[],this.isFocused=!1):this.isFocused=!1}ngAfterViewInit(){this.searchForm.valueChanges.pipe((0,u.j)("searchTerm"),(0,d.b)(200),(0,h.x)(),(0,f.w)(o=>{const n={currentPage:this.currentPage.toString(),pageSize:this.productsPerPage.toString()};return this.searchQuery=o.trim(),console.log(this.searchQuery),this.searchQuery?(0===this.status?this.filter={hasLink:!1}:(this.filter={status:this.status},this.filter=Object.assign(Object.assign({},this.filter),{hasLink:!1})),this.productService.getSearchProduct(this.searchQuery,n,this.filter)):(this.isLoading=!1,this.searchProducts=[],this.products=this.holdPrevData,this.totalProducts=this.totalProductsStore,this.searchProducts=[],this.searchQuery=null,O.E)})).subscribe(o=>{this.isLoading=!1,this.searchProducts=o.data,this.products=o.data,this.searchProducts.length>0&&(this.isOpen=!0,this.overlay=!0)},()=>{this.isLoading=!1})}goToDetails(e,o){this.router.navigate(["admin/stock/details"],{queryParams:{id:e,sku:o}})}todayFilter(){this.dateRangeCalFilter=null,this.dateRangeFilter="Today",this.startDate=new Date,this.startDate.setHours(0,0,0,0),this.filter=Object.assign(Object.assign({},this.filter),{createdAt:{$gte:this.startDate,$lt:this.today}}),this.reloadService.needRefreshProduct$()}yesterdayFilter(){this.startDate=new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()-1,0,0,0,0),this.endDate=new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()-1,23,59,59,999),this.onDateChange(this.startDate,this.endDate,!0,"Yesterday"),this.reloadService.needRefreshProduct$()}lastWeekFilter(){this.startDate=new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()-7,0,0,0,0),this.endDate=this.today,this.onDateChange(this.startDate,this.endDate,!0,"Last 7 days"),this.reloadService.needRefreshProduct$()}lastThirtyDaysFilter(){this.startDate=new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()-30,0,0,0,0),this.endDate=this.today,this.onDateChange(this.startDate,this.endDate,!0,"Last 30 days"),this.reloadService.needRefreshProduct$()}lastThreeMonthFilter(){this.startDate=new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()-90,0,0,0,0),this.endDate=this.today,this.onDateChange(this.startDate,this.endDate,!0,"Last 90 days"),this.reloadService.needRefreshProduct$()}lastMonthFilter(){const e=new Date(this.today.getFullYear(),this.today.getMonth()-1,1),o=new Date(this.today.getFullYear(),this.today.getMonth(),0,23,59,59,999);this.startDate=e,this.endDate=o,this.onDateChange(this.startDate,this.endDate,!0,"Last month"),this.reloadService.needRefreshProduct$()}lastYearFilter(){const e=new Date((new Date).getFullYear()-1,0,1),o=new Date(e.getFullYear(),0,1),n=new Date(e.getFullYear(),11,31,23,59,59,999);this.startDate=o,this.endDate=n,this.onDateChange(this.startDate,this.endDate,!0,"Last Year"),this.reloadService.needRefreshProduct$()}weekToDateFilter(){this.startDate=new Date,this.startDate.setDate(this.startDate.getDate()-(6==this.startDate.getDay()?7:(this.startDate.getDay()+1)%7)),this.startDate.setHours(0,0,0,0),this.endDate=this.today,this.onDateChange(this.startDate,this.endDate,!0,"Week to date"),this.reloadService.needRefreshProduct$()}monthToDateFilter(){this.startDate=new Date((new Date).getFullYear(),(new Date).getMonth(),1,0,0,0,0),this.endDate=this.today,this.onDateChange(this.startDate,this.endDate,!0,"Month to date"),this.reloadService.needRefreshProduct$()}yearToDateFilter(){this.startDate=new Date((new Date).getFullYear(),0,1,0,0,0,0),this.endDate=this.today,this.onDateChange(this.startDate,this.endDate,!0,"Year to date"),this.reloadService.needRefreshProduct$()}onDateChange(e,o,n,i){const c=this.utilsService.getDateString(e,"DD MMM-YYYY"),m=this.utilsService.getDateString(o,"DD MMM-YYYY");!0===n?(this.dateRangeCalFilter=null,this.dateRangeFilter=i):(this.dateRangeFilter=null,this.dateRangeCalFilter=c+" - "+m),this.filter=Object.assign(Object.assign({},this.filter),o?{createdAt:{$gte:e,$lte:o}}:{createdAt:{$eq:e}}),this.reloadService.needRefreshProduct$()}clearDateFilter(){var e;null===(e=this.filter)||void 0===e||delete e.createdAt,this.dateRangeFilter=null,this.dateRangeCalFilter=null,this.reloadService.needRefreshProduct$()}clearSortFilter(){this.sortQuery=null,this.sortFilter=null,this.router.navigate([],{queryParams:{page:1}}),this.reloadService.needRefreshRefunds$()}clearAllFilters(){this.sortFilter=null,this.sortQuery=null,this.filter=null,this.dateRangeFilter=null,this.dateRangeCalFilter&&(this.dateRangeCalFilter=null),this.clearAllFilter=!1,this.reloadService.needRefreshProduct$()}showSerials(e){this.serialNumbers=e,this.showSerial=!0}handleOk(){this.serialNumbers=[],console.log("Button ok clicked!"),this.showSerial=!1}handleCancel(){this.serialNumbers=[],console.log("Button cancel clicked!"),this.showSerial=!1}preview(e){window.open("product-details/"+e)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(b.gz),t.Y36(q.t2),t.Y36(R.f),t.Y36(N.M),t.Y36(b.F0),t.Y36(k.F),t.Y36(E.F))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-stock"]],viewQuery:function(e,o){if(1&e&&(t.Gf(V,5),t.Gf(W,5),t.Gf(X,5),t.Gf(tt,5)),2&e){let n;t.iGM(n=t.CRH())&&(o.exportStock=n.first),t.iGM(n=t.CRH())&&(o.matCheckbox=n.first),t.iGM(n=t.CRH())&&(o.searchForm=n.first),t.iGM(n=t.CRH())&&(o.searchInput=n.first)}},decls:14,vars:4,consts:[[1,"page-header"],[3,"click"],[1,"table-samary",2,"margin-bottom","30px"],[3,"nzTitle","nzSelect",4,"ngFor","ngForOf"],[1,"export-popup-area"],[3,"valueChange"],["export",""],["nzTitle","Serials",3,"nzVisible","nzVisibleChange","nzOnCancel","nzOnOk"],[4,"nzModalContent"],[3,"nzTitle","nzSelect"],[1,"table-filter-area"],["searchForm","ngForm"],["nz-input","","id","searchInput","type","text","placeholder","Filter Products","name","searchTerm","autocomplete","off","ngModel","","required","",1,"tw",3,"focus"],["searchInput",""],[1,"date_filter"],["nz-button","","nz-dropdown","",3,"nzDropdownMenu"],[1,"las","la-calendar"],[1,"entry_date_main"],["dateMenu","nzDropdownMenu"],[1,"date_main"],["nz-menu","","nzSelectable",""],["nz-menu-item","",3,"click"],[1,"custome_dates"],["nzSize","small"],["nzInline","","nzBorderless","true","nzBackdrop","true",3,"ngModel","nzPopupStyle","nzDisabledDate","ngModelChange"],["nz-button","","nzType","primary"],[3,"matMenuTriggerFor"],[1,"fa","fa-caret-down"],["productSort","matMenu"],["mat-menu-item","",3,"click"],[1,"entry_query_filter"],[4,"ngIf"],[3,"click",4,"ngIf"],["nzSize","small",3,"nzData","nzLoading"],["basicTable",""],[2,"width","50px","text-align","center"],[1,"mat-check",3,"change"],["matCheckbox",""],[2,"width","70px","text-align","center"],[2,"min-width","150px"],[4,"ngFor","ngForOf"],[1,"las","la-times",3,"click"],[1,"mat-check",3,"ngModel","ngModelChange"],["nz-image","",2,"width","50px",3,"nzSrc","alt"],[1,"produc-details"],[1,"fa","fa-eye"],[2,"color","blue"],[2,"color","orange"],[2,"color","green"],["nz-button","","type","button",3,"click"],[1,"serial"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2," All Stock "),t.TgZ(3,"span",1),t.NdJ("click",function(){return o.onRefresh()}),t._UZ(4,"i"),t.qZA()()(),t.TgZ(5,"div",2)(6,"nz-card")(7,"nz-tabset"),t.YNc(8,ct,90,23,"nz-tab",3),t.qZA()()(),t.TgZ(9,"div",4)(10,"app-export-popup",5,6),t.NdJ("valueChange",function(i){return o.exportToExcel(i)}),t.qZA()(),t.TgZ(12,"nz-modal",7),t.NdJ("nzVisibleChange",function(i){return o.showSerial=i})("nzOnCancel",function(){return o.handleCancel()})("nzOnOk",function(){return o.handleOk()}),t.YNc(13,ut,3,1,"ng-container",8),t.qZA()),2&e&&(t.xp6(4),t.Tol(o.isLoading?"fa fa-refresh fa-spin":"fa fa-refresh"),t.xp6(4),t.Q6J("ngForOf",o.tabs),t.xp6(4),t.Q6J("nzVisible",o.showSerial))},dependencies:[x.sg,x.O5,v.VK,v.OP,v.p6,J.oG,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.On,s.F,Z.du,Z.Hf,Y.Zp,I.ix,H.w,L.dQ,A.xH,A.xw,D.wO,D.r9,S.cm,S.RR,S.wA,w.uw,w.wS,y.N8,y.Uo,y._C,y.Om,y.p0,y.$Z,G.Ie,$.bd,j,x.OU],styles:[".page-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:30px 0 15px}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]{display:flex;align-items:center}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:transparent;margin-left:25px}.serial[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.serial[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:15px;border:1px solid black;margin:0 10px 10px 0}.table-filter-area[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}.table-filter-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:50%}.table-filter-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0}.table-filter-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left;list-style:none;border:1px solid #ddd;min-height:45px!important}.table-filter-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:none;padding:10px 20px}.date_main[_ngcontent-%COMP%]{min-width:500px;display:flex}.date_main[_ngcontent-%COMP%]   .custome_dates[_ngcontent-%COMP%]{background:#fff;border-bottom:1px solid #ddd}.date_main[_ngcontent-%COMP%]   .custome_dates[_ngcontent-%COMP%]   nz-card[_ngcontent-%COMP%]{height:100%}.date_main[_ngcontent-%COMP%]   .custome_dates[_ngcontent-%COMP%]   nz-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right}.entry_query_filter[_ngcontent-%COMP%]{margin-bottom:15px}.entry_query_filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;float:left;margin-right:5px;border:1px solid #ddd;padding:2px 10px;font-size:12px;border-radius:25px}.entry_query_filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:5px}.entry_query_filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:red}.entry_query_filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-right:0}.entry_query_filter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-decoration:underline!important;padding:2px 10px;display:inline-block;margin-left:5px;border-radius:3px;transition:all .3s ease-in-out;color:#0c8ff9;cursor:pointer;font-size:12px}.entry_query_filter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{text-decoration:none!important;background:#6bbde8;color:#fff}.produc-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:14px;color:#2d2d2d;display:flex}.produc-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}.produc-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:15px;display:inline-block}.produc-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{visibility:hidden}.produc-details[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-decoration:underline}tr[_ngcontent-%COMP%]:hover   .produc-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{visibility:visible}.variant-name[_ngcontent-%COMP%]{display:flex}.view-product-header-area[_ngcontent-%COMP%]{display:block;width:100%;margin:30px 0 40px;box-sizing:border-box}.view-product-header-main[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:10px}.view-product-header-left[_ngcontent-%COMP%]{display:block}.view-product-header-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#131523;font-family:Roboto,sans-serif;font-weight:600;font-size:25px;line-height:35px;margin:0}.view-product-header-right[_ngcontent-%COMP%]{display:block}.view-product-header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.view-product-header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin-right:20px;color:#000;font-family:Roboto,sans-serif;font-weight:500;font-size:19px}.view-product-header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin:0}.view-product-header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #0058ff;color:#0058ff;font-family:Roboto,sans-serif;font-weight:500;font-size:17px;padding:7px 15px;box-sizing:border-box;border-radius:5px;outline:none;transition:all .3s linear}.view-product-header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .view-product-header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active-btn[_ngcontent-%COMP%]{background-color:#0058ff;color:#fff}@media (max-width: 768px){.view-product-header-main[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.view-product-header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{display:none}.table-filter-area[_ngcontent-%COMP%]{flex-direction:column}.table-filter-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;margin-bottom:10px!important}}"]}),a})()}];let ht=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[b.Bz.forChild(pt),b.Bz]}),a})();var gt=l(90898),_t=l(19966),ft=l(83626);let mt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[x.ez,ht,gt.q,s.u5,_t.JX,C.D,ft.P]}),a})()},68132:(F,M,l)=>{l.d(M,{p:()=>O});var C=l(40520),x=l(92340),b=l(5e3);const s=x.N.apiBaseLink+"/api/order/";let O=(()=>{class g{constructor(r){this.httpClient=r}editOrder(r){return this.httpClient.post(s+"edit-order",r)}placeOrder(r){return this.httpClient.post(s+"place-order",r)}updateOrder(r){return this.httpClient.post(s+"update-order",r)}placeOrderRequest(r){return this.httpClient.post(s+"place-order-request",r)}placeTempOrder(r){return this.httpClient.post(s+"place-temp-order",r)}updateOrderSessionKey(r,u){return this.httpClient.post(s+"update-session-key/"+r+"/"+u,{})}getAllOrdersByUser(r,u,d,h){let f=new C.LE;return f=f.append("q",r),f=f.append("status",h),u&&(f=f.append("pageSize",u.pageSize),f=f.append("currentPage",u.currentPage)),this.httpClient.get(s+"get-all-orders-by-user",{params:f})}getAllOrdersByUserId(r){return this.httpClient.get(s+"get-all-orders-by-userId/"+r)}getAllCanceledOrdersByUser(r,u,d){return this.httpClient.get(s+"get-all-canceled-orders-by-user")}getAllOrdersByUserOrderId(r,u){let d=new C.LE;return r&&(console.log("param id ",r),d=d.append("id",r)),u&&(d=d.append("select",u)),this.httpClient.get(s+"get-orders-by-user-orderId",{params:d})}getAllOrdersofyUserByAdmin(r,u,d){let h=new C.LE;return d&&(h=h.append("userId",d)),r?(h=h.append("pageSize",r.pageSize),h=h.append("page",r.currentPage),u&&(h=h.append("select",u)),this.httpClient.get(s+"get-all-orders-of-user-by-admin",{params:h})):(u&&(h=h.append("select",u)),this.httpClient.get(s+"get-all-orders-of-user-by-admin",{params:h}))}getOrderDetails(r){return this.httpClient.get(s+"get-order-details/"+r)}getOrderDetailsByOrderId(r){return this.httpClient.get(s+"get-order-details-by-orderId/"+r)}getrequestOrderDetails(r){return this.httpClient.get(s+"get-request-order-details/"+r)}cancelOrderByUser(r){return this.httpClient.put(s+"cancel-order-by-user/"+r,{})}deleteOrderByAdmin(r){return this.httpClient.delete(s+"delete-order-by-admin/"+r)}getAllTransactionByUser(r,u){let d=new C.LE;return r?(d=d.append("pageSize",r.pageSize),d=d.append("page",r.currentPage),u&&(d=d.append("select",u)),this.httpClient.get(s+"get-all-transactions-by-user",{params:d})):(u&&(d=d.append("select",u)),this.httpClient.get(s+"get-all-transactions-by-user",{params:d}))}getAllOrdersByAdmin(r,u,d,h){return this.httpClient.post(s+"get-all-orders-by-admin",{paginate:r,sort:u,filter:d,select:h})}getOrdersBySearch(r,u,d){let h=new C.LE;return h=h.append("q",r),u&&(h=h.append("pageSize",u.pageSize),h=h.append("currentPage",u.currentPage)),this.httpClient.post(s+"get-order-by-search",{filter:d},{params:h})}getSelectedOrderDetails(r){return this.httpClient.post(s+"get-selected-order-details",{selectedIds:r})}getAllOrdersBySku(r){return this.httpClient.get(s+"get-all-orders-by-sku/"+r)}changeOrderStatus(r){return this.httpClient.put(s+"change-order-status",r)}getAllTransactionByAdmin(r,u){let d=new C.LE;return r?(d=d.append("pageSize",r.pageSize),d=d.append("page",r.currentPage),u&&(d=d.append("select",u)),this.httpClient.get(s+"get-all-transaction-by-admin",{params:d})):(u&&(d=d.append("select",u)),this.httpClient.get(s+"get-all-transaction-by-admin",{params:d}))}testSslSmsApi(){return this.httpClient.get(s+"sent-test-ssl-message")}updateOrderById(r){return this.httpClient.put(s+"update-order-by-id",r)}updateMultipleOrderById(r){return this.httpClient.post(s+"update-multiple-order-by-id",r)}updateRequestOrderById(r){return this.httpClient.put(s+"update-request-order-by-id",r)}payPayment(r){return this.httpClient.post(s+"pay-payment",r)}sendNotification(r){return this.httpClient.post(s+"confirm-notification",r)}addToOrderTimeline(r,u){return this.httpClient.post(s+"add-to-order-timeline",{data:r,orderId:u})}updateTag(r,u){return this.httpClient.post(s+"update-tag",{orderId:r,tag:u})}setFilterVariable(r){this.filterVariable=r}getFilterVariable(){let r=this.filterVariable;return this.clearFilterVariable(),r}clearFilterVariable(){this.filterVariable=void 0}}return g.\u0275fac=function(r){return new(r||g)(b.LFG(C.eN))},g.\u0275prov=b.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);