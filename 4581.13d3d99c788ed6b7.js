"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[4581],{84581:(y,S,i)=>{i.r(S),i.d(S,{AllCustomersModule:()=>nt});var f=i(90898),O=i(69808),c=i(93075),x=i(60515),h=i(94813),C=i(78372),A=i(71884),P=i(63900),m=i(12943),z=i(80574),r=i(53609),l=i(60063),t=i(5e3),u=i(10280),g=i(99826),I=i(50072),Z=i(61293),k=i(57267),w=i(73071),F=i(5944),N=i(49727),E=i(77531),b=i(63640),J=i(11047),L=i(76042),R=i(82683),G=i(92643),M=i(90868),T=i(64219),U=i(63677),D=i(92905),_=i(50939),H=i(98706),B=i(77484);const Q=["searchForm"],K=["searchInput"],$=["export"],q=["matCheckbox"],Y=function(a){return["../../","customer",a]};function V(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td",23),t.NdJ("nzCheckedChange",function(n){const d=t.CHM(e).$implicit,v=t.oxw(2);return t.KtG(v.onItemChecked(d._id,n))}),t.qZA(),t.TgZ(2,"td",24),t._UZ(3,"img",25),t.qZA(),t.TgZ(4,"td",26)(5,"a"),t._uU(6),t.qZA(),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td",27)(11,"span"),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"button",28),t.NdJ("click",function(){const o=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.showEditCustomer(o))}),t._UZ(17,"i",29),t.qZA(),t.TgZ(18,"button",28),t.NdJ("click",function(){const o=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.onDelete(o._id))}),t._UZ(19,"i",30),t.qZA()()()}if(2&a){const e=p.$implicit,s=t.oxw(2);t.xp6(1),t.Q6J("nzChecked",s.setOfCheckedId.has(e.id)),t.xp6(2),t.Q6J("nzSrc",null!=e&&e.profileImg?null==e?null:e.profileImg:"/assets/images/placeholder/test.png"),t.xp6(1),t.Q6J("routerLink",t.VKq(10,Y,e._id)),t.xp6(2),t.Oqu(null==e?null:e.fullName),t.xp6(1),t.hij(" +",null==e?null:e.phoneNo," "),t.xp6(2),t.Oqu(null!=e&&e.checkouts?e.checkouts.length:"0"),t.xp6(2),t.Tol(1===(null==e?null:e.status)?"active":"block"),t.xp6(1),t.hij(" ",1===(null==e?null:e.status)?"Active":"Block",""),t.xp6(2),t.Oqu(null==e?null:e.address)}}function W(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"nz-tab",7),t.NdJ("nzClick",function(){const o=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.tabChange(o))}),t.TgZ(1,"div",8)(2,"form",9,10)(4,"input",11,12),t.NdJ("focus",function(n){t.CHM(e);const o=t.oxw();return t.KtG(o.handleFocus(n))}),t.qZA()(),t.TgZ(6,"ul")(7,"li")(8,"nz-range-picker",13),t.NdJ("ngModelChange",function(n){t.CHM(e);const o=t.oxw();return t.KtG(o.date=n)})("ngModelChange",function(n){t.CHM(e);const o=t.oxw();return t.KtG(o.onChange(n))}),t.qZA()(),t.TgZ(9,"li")(10,"button",14),t._uU(11," Sort "),t._UZ(12,"i",15),t.qZA(),t.TgZ(13,"nz-dropdown-menu",null,16)(15,"ul",17)(16,"li",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({checkouts:-1},1))}),t._uU(17,"Total Orders (High to low)"),t.qZA(),t.TgZ(18,"li",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({checkouts:1},2))}),t._uU(19,"Total Orders (Low to High)"),t.qZA(),t.TgZ(20,"li",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({createdAt:1},3))}),t._uU(21,"Joining Date (Oldest First)"),t.qZA(),t.TgZ(22,"li",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({createdAt:-1},4))}),t._uU(23,"Joining Date (Newest First)"),t.qZA()()()()()(),t.TgZ(24,"nz-table",19,20),t.NdJ("nzCurrentPageDataChange",function(n){t.CHM(e);const o=t.oxw();return t.KtG(o.onCurrentPageDataChange(n))}),t.TgZ(26,"thead")(27,"tr")(28,"th",21),t.NdJ("nzCheckedChange",function(n){t.CHM(e);const o=t.oxw();return t.KtG(o.checked=n)})("nzCheckedChange",function(n){t.CHM(e);const o=t.oxw();return t.KtG(o.onAllChecked(n))}),t.qZA(),t.TgZ(29,"th"),t._uU(30,"Image"),t.qZA(),t.TgZ(31,"th"),t._uU(32,"Customer Name"),t.qZA(),t.TgZ(33,"th"),t._uU(34,"Order"),t.qZA(),t.TgZ(35,"th"),t._uU(36,"Status"),t.qZA(),t.TgZ(37,"th"),t._uU(38,"Location"),t.qZA(),t.TgZ(39,"th"),t._uU(40,"Action"),t.qZA()()(),t.TgZ(41,"tbody"),t.YNc(42,V,20,12,"tr",22),t.qZA()()()}if(2&a){const e=p.$implicit,s=t.MAs(14),n=t.oxw();t.Q6J("nzTitle",e),t.xp6(8),t.Q6J("ngModel",n.date),t.xp6(2),t.Q6J("nzDropdownMenu",s),t.xp6(14),t.Q6J("nzData",n.customers),t.xp6(4),t.Q6J("nzChecked",n.checked)("nzIndeterminate",n.indeterminate),t.xp6(14),t.Q6J("ngForOf",n.customers)}}function j(a,p){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"form",31),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onSubmit())}),t.TgZ(2,"div")(3,"label"),t._uU(4,"Name"),t.qZA(),t._UZ(5,"input",32),t.qZA(),t.TgZ(6,"div")(7,"label"),t._uU(8,"Username"),t.qZA(),t._UZ(9,"input",33),t.qZA(),t.TgZ(10,"div")(11,"label"),t._uU(12,"Phone No"),t.qZA(),t._UZ(13,"input",34),t.qZA()(),t.BQk()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.dataForm)}}const X=[{path:"",component:(()=>{class a{constructor(e,s,n,o,d,v,rt,it,ot,at){this.adminDataService=e,this.activatedRoute=s,this.spinner=n,this.reloadService=o,this.router=d,this.utilsService=v,this.userService=rt,this.userDataService=it,this.msg=ot,this.fb=at,this.date=null,this.tabs=["All","Active","Block"],this.overlay=!1,this.isOpen=!1,this.isFocused=!1,this.isLoading=!1,this.isSelect=!1,this.query=null,this.customers=[],this.searchProducts=[],this.filter=null,this.users=[],this.today=new Date,this.dataFormDateRange=new c.cw({start:new c.NI,end:new c.NI}),this.productsPerPage=20,this.currentPage=1,this.totalUsers=0,this.sortQuery={createdAt:-1},this.activeSort=null,this.searchUsers=[],this.selectedIds=[],this.checked=!1,this.indeterminate=!1,this.listOfCurrentPageData=[],this.listOfData=[],this.setOfCheckedId=new Set,this.showCustomer=!1}ngOnInit(){this.listOfData=new Array(1).fill(0).map((e,s)=>({id:s,name:`Name ${s}`,order:s,totalspent:s,status:`Active ${s}`,location:`London, Park Lane no. ${s}`})),this.subAcRoute=this.activatedRoute.queryParams.subscribe(e=>{this.currentPage=e&&e.page?e.page:1,this.searchUsers.length||this.getAllUsers()}),this.reloadService.refreshUser$.subscribe(()=>{this.getAllUsers()})}sortData(e,s){this.sortQuery=e,this.activeSort=s,this.getAllUsers()}onPageChanged(e){this.router.navigate([],{queryParams:{page:e}})}getAllUsers(){this.spinner.show();const e={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};this.subCustomer=this.adminDataService.getAllCustomers(e,this.sortQuery,this.filter).subscribe(s=>{this.customers=s.data,this.customers&&this.customers.length&&(this.customers.forEach((n,o)=>{const d=this.selectedIds.findIndex(v=>v===n._id);this.customers[o].select=-1!==d}),this.checkSelectionData(),this.holdPrevData=s.data,this.holdPrevData=s.data,this.totalUsers=s.count),this.spinner.hide()},s=>{this.spinner.hide(),console.log(s)})}getFilteredUser(){const e={pageSize:this.productsPerPage.toString(),currentPage:"1"};console.log(this.sortQuery),console.log(this.filter),this.adminDataService.getAllCustomers(e,this.sortQuery,this.filter).subscribe(s=>{this.customers=s.data},s=>{console.log(s)})}endChangeRegDateRange(e){if(e.value){const o={createdAt:{$gte:this.utilsService.getDateString(this.dataFormDateRange.value.start),$lte:this.utilsService.getDateString(this.dataFormDateRange.value.end)}};this.filter[0]=(this.filter.findIndex(v=>v.hasOwnProperty("dateString")),o),this.currentPage>1?this.router.navigate([],{queryParams:{page:1}}):this.getFilteredUser()}}onCheckChange(e,s,n){if(e)this.selectedIds.push(n);else{const o=this.selectedIds.findIndex(d=>d===n);this.selectedIds.splice(o,1)}}onAllSelectChange(e){const s=this.customers.map(n=>n._id);e.checked?(this.selectedIds=this.utilsService.mergeArrayString(this.selectedIds,s),this.customers.forEach(n=>{n.select=!0})):s.forEach(n=>{this.customers.find(d=>d._id===n).select=!1;const o=this.selectedIds.findIndex(d=>d===n);this.selectedIds.splice(o,1)})}checkSelectionData(){let e=!0;this.customers.forEach(s=>{s.select||(e=!1)}),this.matCheckbox.checked=e}ngAfterViewInit(){this.searchForm.valueChanges.pipe((0,h.j)("searchTerm"),(0,C.b)(200),(0,A.x)(),(0,P.w)(s=>(this.query=s.trim(),""===this.query||null===this.query?(this.overlay=!1,this.searchUsers=[],this.query=null,this.getAllUsers(),x.E):(this.isLoading=!0,console.log(s),this.userDataService.getSearchUsers(s,{currentPage:"1",pageSize:"10"},{productVisibility:!0}))))).subscribe(s=>{this.isLoading=!1,this.customers=s.data},()=>{this.isLoading=!1})}onClickHeader(){this.handleCloseOnly()}onClickSearchArea(e){e.stopPropagation()}handleOverlay(){this.overlay=!1,this.isOpen=!1,this.isFocused=!1}handleFocus(e){this.searchInput.nativeElement.focus(),!this.isFocused&&(this.searchUsers.length>0&&this.setPanelState(e),this.isFocused=!0)}setPanelState(e){e&&e.stopPropagation(),this.isOpen=!1,this.handleOpen()}handleOpen(){this.isOpen||this.isOpen&&!this.isLoading||this.searchUsers.length>0&&(this.isOpen=!0,this.overlay=!0)}handleOutsideClick(){!this.isOpen||(this.isOpen=!1,this.overlay=!1,this.isFocused=!1)}handleCloseOnly(){this.isOpen?(this.isOpen=!1,this.overlay=!1,this.isFocused=!1):this.isFocused=!1}handleCloseAndClear(){this.isOpen?(this.isOpen=!1,this.overlay=!1,this.searchUsers=[],this.isFocused=!1):this.isFocused=!1}onSelectItem(e){this.handleCloseAndClear()}exportPopUpShow(){this.exportOrder.exportPOpUpShow()}exportToExcel(e){e.selectedAmount===m.t.ALL_ORDERS?this.adminDataService.getAllCustomers(null).subscribe(s=>{this.exportData(s.data,e.SelectedType)},s=>{console.log(s)}):e.selectedAmount===m.t.CURRENT_PAGE?this.exportData(this.customers,e.SelectedType):e.selectedAmount===m.t.SELECTED?this.adminDataService.getSelectedUserDetails(this.selectedIds).subscribe(s=>{this.exportData(s.data,e.SelectedType)},s=>{console.log(s)}):e.selectedAmount===m.t.BY_SEARCH_RESULT&&this.exportData(this.customers,e.SelectedType)}exportData(e,s){this.spinner.show();const n=this.utilsService.getDateString(new Date),o=z.P6.json_to_sheet(e),d=z.P6.book_new();z.P6.book_append_sheet(d,o,"customers"),z.NC(d,"2"===s?`Customers${n}.csv`:`Customers${n}.xlsx`),this.spinner.hide()}onChange(e){this.filter={createdAt:{$gte:e[0],$lte:e[1]}},console.log(this.filter),this.getFilteredUser()}getWeek(e){console.log("week: ",e.map(r.Z))}updateCheckedSet(e,s){s?this.setOfCheckedId.add(e):this.setOfCheckedId.delete(e)}onItemChecked(e,s){this.updateCheckedSet(e,s),this.refreshCheckedStatus()}onAllChecked(e){this.listOfCurrentPageData.forEach(s=>this.updateCheckedSet(s.id,e)),this.refreshCheckedStatus()}onCurrentPageDataChange(e){this.listOfCurrentPageData=e,this.refreshCheckedStatus()}refreshCheckedStatus(){this.checked=this.listOfCurrentPageData.every(e=>this.setOfCheckedId.has(e.id)),this.indeterminate=this.listOfCurrentPageData.some(e=>this.setOfCheckedId.has(e.id))&&!this.checked}onDelete(e){this.userService.deleteUser(e).subscribe(s=>{this.msg.success(s.message),this.reloadService.needRefreshUser$()},s=>{console.log(s.message)})}initModule(){this.dataForm=this.fb.group({fullName:[null,c.kI.required],phoneNo:[null,c.kI.required],username:[null,c.kI.required]})}tabChange(e){let s=null;"Active"===e?(s=l.J.ACTIVE,this.filter={status:s}):"Block"===e?(s=l.J.BLOCK,this.filter={status:s}):(s=null,this.filter=null),this.getFilteredUser()}viewCustomer(){this.showCustomer=!0,this.id=null,this.initModule()}showEditCustomer(e){this.id=e._id,this.initModule(),this.dataForm.patchValue(e),this.showCustomer=!0}cancel(){this.id=null,this.showCustomer=!1}onSubmit(){let e={fullName:this.dataForm.value.fullName,phoneNo:this.dataForm.value.phoneNo,username:this.dataForm.value.username,status:l.J.ACTIVE,isPhoneVerified:!0,registrationType:"customerCare",isEmailVerified:!1,hasAccess:!0,points:0,redeemedPoints:0,earnedPoints:0,totalReturn:0,totalReturnAmount:0,registrationAt:this.getDate()};if(this.dataForm.invalid)this.msg.create("warning","Please input the required fields");else if(this.id){let s=Object.assign(Object.assign({},e),{_id:this.id});this.editUser(s)}else this.addUser(e)}editUser(e){this.userDataService.editUser(e).subscribe(s=>{this.msg.success(s.message),this.showCustomer=!1,this.reloadService.needRefreshUser$()},s=>{this.msg.error(s.message)})}addUser(e){this.userDataService.addUser(e).subscribe(s=>{this.msg.success(s.message),this.showCustomer=!1,this.reloadService.needRefreshUser$()},s=>{this.msg.error(s.message)})}getDate(){var e=new Date;let s=e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1),n=e.getDate()+1>9?e.getDate()+1:"0"+(e.getDate()+1);return e.getFullYear()+"-"+s+"-"+n}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(u.O),t.Y36(g.gz),t.Y36(I.t2),t.Y36(Z.f),t.Y36(g.F0),t.Y36(k.F),t.Y36(w.K),t.Y36(F.M),t.Y36(N.dD),t.Y36(c.qu))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-all-customers"]],viewQuery:function(e,s){if(1&e&&(t.Gf(Q,5),t.Gf(K,5),t.Gf($,5),t.Gf(q,5)),2&e){let n;t.iGM(n=t.CRH())&&(s.searchForm=n.first),t.iGM(n=t.CRH())&&(s.searchInput=n.first),t.iGM(n=t.CRH())&&(s.exportOrder=n.first),t.iGM(n=t.CRH())&&(s.matCheckbox=n.first)}},decls:12,vars:2,consts:[[1,"page-header"],[1,"header-action"],[1,"create_btn",3,"click"],[1,"table-samary"],[3,"nzTitle","nzClick",4,"ngFor","ngForOf"],["nzTitle","Add Customer",3,"nzVisible","nzOnCancel","nzOnOk","nzVisibleChange"],[4,"nzModalContent"],[3,"nzTitle","nzClick"],[1,"table-filter-area"],[1,"search-form"],["searchForm","ngForm"],["nz-input","","nzSize","large","placeholder","Search in customers...","name","searchTerm","autocomplete","off","ngModel","","required","",3,"focus"],["searchInput",""],[3,"ngModel","ngModelChange"],["nz-dropdown","",3,"nzDropdownMenu"],[1,"fa","fa-caret-down"],["menu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click"],["nzShowSizeChanger","",3,"nzData","nzCurrentPageDataChange"],["rowSelectionTable",""],[2,"width","50px",3,"nzChecked","nzIndeterminate","nzCheckedChange"],[4,"ngFor","ngForOf"],[3,"nzChecked","nzCheckedChange"],[2,"width","50px","cursor","pointer"],["nz-image","",3,"nzSrc"],[1,"customer_info",3,"routerLink"],[1,"customer_status"],["nz-button","",3,"click"],[1,"las","la-lg","la-edit"],[1,"las","la-lg","la-trash"],[3,"formGroup","ngSubmit"],["nz-input","","type","text","formControlName","fullName","matInput","","placeholder","Enter collection name","required",""],["nz-input","","type","text","formControlName","username","matInput","","placeholder","Enter collection name","required",""],["nz-input","","type","text","formControlName","phoneNo","matInput","","placeholder","Enter collection name","required",""]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"All Customer"),t.qZA(),t.TgZ(3,"div",1)(4,"button",2),t.NdJ("click",function(){return s.viewCustomer()}),t._uU(5,"Add Customer"),t.qZA()()(),t.TgZ(6,"div",3)(7,"nz-card")(8,"nz-tabset"),t.YNc(9,W,43,7,"nz-tab",4),t.qZA()()(),t.TgZ(10,"nz-modal",5),t.NdJ("nzOnCancel",function(){return s.cancel()})("nzOnOk",function(){return s.onSubmit()})("nzVisibleChange",function(o){return s.showCustomer=o}),t.YNc(11,j,14,1,"ng-container",6),t.qZA()),2&e&&(t.xp6(9),t.Q6J("ngForOf",s.tabs),t.xp6(1),t.Q6J("nzVisible",s.showCustomer))},dependencies:[O.sg,g.rH,E.Nt,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.sg,c.u,c.On,c.F,b.du,b.Hf,J.Zp,L.ix,R.w,G.dQ,M.xH,M.xw,T.wO,T.r9,U.cm,U.RR,D.uw,D.wS,_.N8,_.Uo,_._C,_.h7,_.Om,_.p0,_.$Z,_.g6,H.Ie,B.bd],styles:[".page-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:30px 0 15px}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]{display:flex;align-items:center}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:transparent;margin-left:25px}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]   .create_btn[_ngcontent-%COMP%]{background:#1b75bb;color:#fff;border:1px solid #1b75bb;padding:10px 20px;transition:.3s;border-radius:3px}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]   .create_btn[_ngcontent-%COMP%]:hover{background:#8bc53f;border:1px solid #8bc53f}.table-samary[_ngcontent-%COMP%]{margin-bottom:30px}.table-filter-area[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}.table-filter-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:50%}.table-filter-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0}.table-filter-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left;list-style:none;border:1px solid #ddd}.table-filter-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:none;padding:10px 20px}.table-filter-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   nz-range-picker[_ngcontent-%COMP%]{padding:9px 20px}.customer_status[_ngcontent-%COMP%]{color:green}.customer_status[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]{color:red}.customer_info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#00f}.customer_info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),a})()}];let tt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.Bz.forChild(X),g.Bz]}),a})();var et=i(19966),st=i(83626);let nt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[O.ez,et.JX,tt,f.q,c.u5,st.P]}),a})()},5944:(y,S,i)=>{i.d(S,{M:()=>P});var f=i(40520),O=i(92340),c=i(88493),x=i(5e3);const h=O.N.apiBaseLink+"/api/user/",C=O.N.apiBaseLink+"/api/cart/",A=O.N.apiBaseLink+"/api/wishlist/";let P=(()=>{class m{constructor(r){this.httpClient=r}getLoggedInUserInfo(r){if(r){let l=new f.LE;return l=l.append("select",r),this.httpClient.get(h+"logged-in-user-data",{params:l})}return this.httpClient.get(h+"logged-in-user-data")}editLoginUserInfo(r){return this.httpClient.put(h+"edit-logged-in-user-data",r)}editAddress(r){return this.httpClient.put(h+"edit-address",r)}addCartProductToLocalStorage(r){const l=JSON.parse(localStorage.getItem(c.w.cartsProduct));let t;null===l?(t=[],t.push(r)):(t=l,-1===t.findIndex(g=>g._id===r._id)&&t.push(r)),localStorage.setItem(c.w.cartsProduct,JSON.stringify(t))}getCartProductFromLocalStorage(){const r=localStorage.getItem(c.w.cartsProduct);return null===r?[]:JSON.parse(r)}deleteCartProductFromLocalStorage(r){const t=JSON.parse(localStorage.getItem(c.w.cartsProduct)).filter(u=>u._id!==r);localStorage.setItem(c.w.cartsProduct,JSON.stringify(t))}getAllAddress(r,l){let t=new f.LE;return r?(t=t.append("pageSize",r.pageSize),t=t.append("page",r.currentPage),l&&(t=t.append("select",l)),this.httpClient.get(h+"get-addresses",{params:t})):(l&&(t=t.append("select",l)),this.httpClient.get(h+"get-addresses",{params:t}))}addToAddress(r){return this.httpClient.post(h+"add-address",r)}deleteAddress(r){return this.httpClient.delete(h+"delete-address-by-id/"+r)}getUsersBySearch(r,l,t){let u=new f.LE;return u=u.append("q",r),l&&(u=u.append("pageSize",l.pageSize),u=u.append("currentPage",l.currentPage)),this.httpClient.post(h+"get-users-by-search",{filter:t},{params:u})}addItemToUserCart(r){return console.log(r),this.httpClient.post(C+"add-to-cart",r)}addSingleItemToCart(r){return this.httpClient.post(C+"add-to-cart",r)}getCartItemList(){return this.httpClient.get(C+"get-cart-items-by-user")}incrementCartQuantity(r){return this.httpClient.post(C+"increment-cart-item-quantity",{cartId:r})}decrementCartQuantity(r){return this.httpClient.post(C+"decrement-cart-item-quantity",{cartId:r})}removeCartItem(r){return this.httpClient.delete(C+"remove-cart-item/"+r)}countCartItem(){return this.httpClient.get(C+"cart-item-count")}getCartStatusOnBook(r){return this.httpClient.get(C+"get-status-book-on-cart/"+r)}getCustomerLists(r,l,t){let u=new f.LE;return t&&(u=u.append("select",t)),this.httpClient.post(h+"get-all-user-lists",{paginate:r,filter:l},{params:u})}getUserByUserID(r){return this.httpClient.get(h+"get-user-by-user-id/"+r)}editUserAccess(r,l){return this.httpClient.put(h+"edit-user-access/"+r,l)}getSearchUsers(r,l,t){let g=new f.LE;return g=g.append("q",r),g=g.append("pageSize",l.pageSize),g=g.append("currentPage",l.currentPage),this.httpClient.post(h+"get-users-by-search",{filter:t},{params:g})}addSingleItemToWishlist(r){return this.httpClient.post(A+"add-to-wishlist",r)}getWishlistItemByUser(){return this.httpClient.get(A+"get-wishlist-items-by-user")}checkStatusInWishlistWithBookId(r){return this.httpClient.get(A+"get-status-of-product-in-wishlist/"+r)}getBooksFromWishlist(){return this.httpClient.get(A+"get-all-product-from-wishlist")}removeWishlistById(r){return this.httpClient.delete(A+"delete-wishlist-by-id/"+r)}addUser(r){return this.httpClient.post(h+"add-user",r)}editUser(r){return this.httpClient.put(h+"edit-user",r)}}return m.\u0275fac=function(r){return new(r||m)(x.LFG(f.eN))},m.\u0275prov=x.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);