"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[4581],{84581:(y,b,a)=>{a.r(b),a.d(b,{AllCustomersModule:()=>W});var f=a(90898),A=a(69808),d=a(93075),P=a(60515),u=a(94813),C=a(78372),x=a(71884),O=a(63900),p=a(12943),S=a(80574),r=a(53609),t=a(5e3),l=a(10280),c=a(99826),m=a(50072),D=a(61293),U=a(57267),I=a(73071),Z=a(5944),T=a(92181),w=a(11047),M=a(90868),z=a(92905),_=a(50939),F=a(77484);const L=["searchForm"],N=["searchInput"],E=["export"],J=["matCheckbox"];function H(i,g){1&i&&(t.TgZ(0,"span"),t._uU(1,"Active"),t.qZA())}function G(i,g){1&i&&(t.TgZ(0,"span",27),t._uU(1," Block "),t.qZA())}const R=function(i){return["../../","customer",i]};function K(i,g){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td",22),t.NdJ("nzCheckedChange",function(n){const h=t.CHM(e).$implicit,v=t.oxw(2);return t.KtG(v.onItemChecked(h.id,n))}),t.qZA(),t.TgZ(2,"td")(3,"a",23),t._uU(4),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",24),t.YNc(10,H,2,0,"span",25),t.YNc(11,G,2,0,"span",26),t.qZA(),t.TgZ(12,"td"),t._uU(13,"Need Customer Address"),t.qZA()()}if(2&i){const e=g.$implicit,s=t.oxw(2);t.xp6(1),t.Q6J("nzChecked",s.setOfCheckedId.has(e.id)),t.xp6(2),t.Q6J("routerLink",t.VKq(7,R,e._id)),t.xp6(1),t.hij(" ",e.fullName?e.fullName:e.phoneNo," "),t.xp6(2),t.Oqu(null!=e&&e.checkouts?e.checkouts.length:"0"),t.xp6(2),t.hij("",s.totalSpent(s.i)," Tk"),t.xp6(2),t.Q6J("ngIf",0===(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf",1===(null==e?null:e.status))}}function B(i,g){if(1&i){const e=t.EpF();t.TgZ(0,"nz-tab",6)(1,"div",7)(2,"form",8,9)(4,"input",10,11),t.NdJ("focus",function(n){t.CHM(e);const o=t.oxw();return t.KtG(o.handleFocus(n))}),t.qZA()(),t.TgZ(6,"ul")(7,"li")(8,"nz-range-picker",12),t.NdJ("ngModelChange",function(n){t.CHM(e);const o=t.oxw();return t.KtG(o.date=n)})("ngModelChange",function(n){t.CHM(e);const o=t.oxw();return t.KtG(o.onChange(n))}),t.qZA()(),t.TgZ(9,"li")(10,"button",13),t._uU(11," Sort "),t._UZ(12,"i",14),t.qZA(),t.TgZ(13,"mat-menu",null,15)(15,"button",16),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({createdAt:1},1))}),t._uU(16," Last Update (Oldest First) "),t.qZA(),t.TgZ(17,"button",16),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({createdAt:-1},2))}),t._uU(18," Last Update (Newest First) "),t.qZA(),t.TgZ(19,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({createdAt:1},3))}),t._uU(20," Amount Spent (High to low) "),t.qZA(),t.TgZ(21,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({createdAt:1},4))}),t._uU(22," Amount Spent (Low to High) "),t.qZA(),t.TgZ(23,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({checkouts:-1},5))}),t._uU(24," Total Orders (High to low) "),t.qZA(),t.TgZ(25,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({checkouts:1},6))}),t._uU(26," Total Orders (Low to High) "),t.qZA(),t.TgZ(27,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({createdAt:1},5))}),t._uU(28," Last order date (High to low) "),t.qZA(),t.TgZ(29,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({createdAt:1},6))}),t._uU(30," Last order date (Low to High) "),t.qZA(),t.TgZ(31,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({createdAt:1},5))}),t._uU(32," Data Added as a customer (Oldest First) "),t.qZA(),t.TgZ(33,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sortData({createdAt:-1},6))}),t._uU(34," Data Added as a customer (Newest First) "),t.qZA()()()()(),t.TgZ(35,"nz-table",18,19),t.NdJ("nzCurrentPageDataChange",function(n){t.CHM(e);const o=t.oxw();return t.KtG(o.onCurrentPageDataChange(n))}),t.TgZ(37,"thead")(38,"tr")(39,"th",20),t.NdJ("nzCheckedChange",function(n){t.CHM(e);const o=t.oxw();return t.KtG(o.checked=n)})("nzCheckedChange",function(n){t.CHM(e);const o=t.oxw();return t.KtG(o.onAllChecked(n))}),t.qZA(),t.TgZ(40,"th"),t._uU(41,"Customer Name"),t.qZA(),t.TgZ(42,"th"),t._uU(43,"Order"),t.qZA(),t.TgZ(44,"th"),t._uU(45,"Total Spent"),t.qZA(),t.TgZ(46,"th"),t._uU(47,"Status"),t.qZA(),t.TgZ(48,"th"),t._uU(49,"Location"),t.qZA()()(),t.TgZ(50,"tbody"),t.YNc(51,K,14,9,"tr",21),t.qZA()()()}if(2&i){const e=g.$implicit,s=t.MAs(14),n=t.MAs(36),o=t.oxw();t.Q6J("nzTitle",e),t.xp6(8),t.Q6J("ngModel",o.date),t.xp6(2),t.Q6J("matMenuTriggerFor",s),t.xp6(5),t.ekj("dropdown-active",1===o.activeSort),t.xp6(2),t.ekj("dropdown-active",2===o.activeSort),t.xp6(2),t.ekj("dropdown-active",3===o.activeSort),t.xp6(2),t.ekj("dropdown-active",4===o.activeSort),t.xp6(2),t.ekj("dropdown-active",5===o.activeSort),t.xp6(2),t.ekj("dropdown-active",6===o.activeSort),t.xp6(2),t.ekj("dropdown-active",5===o.activeSort),t.xp6(2),t.ekj("dropdown-active",6===o.activeSort),t.xp6(2),t.ekj("dropdown-active",5===o.activeSort),t.xp6(2),t.ekj("dropdown-active",6===o.activeSort),t.xp6(2),t.Q6J("nzData",o.customers),t.xp6(4),t.Q6J("nzChecked",o.checked)("nzIndeterminate",o.indeterminate),t.xp6(12),t.Q6J("ngForOf",n.data)}}const Q=[{path:"",component:(()=>{class i{constructor(e,s,n,o,h,v,k,$){this.adminDataService=e,this.activatedRoute=s,this.spinner=n,this.reloadService=o,this.router=h,this.utilsService=v,this.userService=k,this.userDataService=$,this.date=null,this.tabs=["All Invoice","Overdue","Unpaid","Open","Closed","Paid"],this.overlay=!1,this.isOpen=!1,this.isFocused=!1,this.isLoading=!1,this.isSelect=!1,this.query=null,this.customers=[],this.searchProducts=[],this.filter=[],this.users=[],this.today=new Date,this.dataFormDateRange=new d.cw({start:new d.NI,end:new d.NI}),this.productsPerPage=20,this.currentPage=1,this.totalUsers=0,this.sortQuery={createdAt:-1},this.activeSort=null,this.searchUsers=[],this.selectedIds=[],this.checked=!1,this.indeterminate=!1,this.listOfCurrentPageData=[],this.listOfData=[],this.setOfCheckedId=new Set}ngOnInit(){this.listOfData=new Array(1).fill(0).map((e,s)=>({id:s,name:`Name ${s}`,order:s,totalspent:s,status:`Active ${s}`,location:`London, Park Lane no. ${s}`})),this.subAcRoute=this.activatedRoute.queryParams.subscribe(e=>{this.currentPage=e&&e.page?e.page:1,this.searchUsers.length||this.getAllUsers()}),this.reloadService.refreshProduct$.subscribe(()=>{this.getAllUsers()})}sortData(e,s){this.sortQuery=e,this.activeSort=s,this.getAllUsers()}onPageChanged(e){this.router.navigate([],{queryParams:{page:e}})}getAllUsers(){this.spinner.show();const e=this.filter.length>0?{$and:this.filter}:null,s={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};this.subCustomer=this.adminDataService.getAllCustomers(s,this.sortQuery,e).subscribe(n=>{this.customers=n.data,this.customers&&this.customers.length&&(this.customers.forEach((o,h)=>{const v=this.selectedIds.findIndex(k=>k===o._id);this.customers[h].select=-1!==v}),this.checkSelectionData(),this.holdPrevData=n.data,this.holdPrevData=n.data,this.totalUsers=n.count),this.spinner.hide()},n=>{this.spinner.hide(),console.log(n)})}getFilteredUser(){const e={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};this.adminDataService.getAllCustomers(e,{},this.filter[0]).subscribe(n=>{this.customers=n.data},n=>{console.log(n)})}endChangeRegDateRange(e){if(e.value){const o={createdAt:{$gte:this.utilsService.getDateString(this.dataFormDateRange.value.start),$lte:this.utilsService.getDateString(this.dataFormDateRange.value.end)}};this.filter[0]=(this.filter.findIndex(v=>v.hasOwnProperty("dateString")),o),this.currentPage>1?this.router.navigate([],{queryParams:{page:1}}):this.getFilteredUser()}}onCheckChange(e,s,n){if(e)this.selectedIds.push(n);else{const o=this.selectedIds.findIndex(h=>h===n);this.selectedIds.splice(o,1)}}onAllSelectChange(e){const s=this.customers.map(n=>n._id);e.checked?(this.selectedIds=this.utilsService.mergeArrayString(this.selectedIds,s),this.customers.forEach(n=>{n.select=!0})):s.forEach(n=>{this.customers.find(h=>h._id===n).select=!1;const o=this.selectedIds.findIndex(h=>h===n);this.selectedIds.splice(o,1)})}checkSelectionData(){let e=!0;this.customers.forEach(s=>{s.select||(e=!1)}),this.matCheckbox.checked=e}ngAfterViewInit(){this.searchForm.valueChanges.pipe((0,u.j)("searchTerm"),(0,C.b)(200),(0,x.x)(),(0,O.w)(s=>(this.query=s.trim(),""===this.query||null===this.query?(this.overlay=!1,this.searchUsers=[],this.query=null,this.getAllUsers(),P.E):(this.isLoading=!0,console.log(s),this.userDataService.getSearchUsers(s,{currentPage:"1",pageSize:"10"},{productVisibility:!0}))))).subscribe(s=>{this.isLoading=!1,this.customers=s.data,this.searchUsers=s.data,this.searchUsers.length>0&&(this.isOpen=!0,this.overlay=!0)},()=>{this.isLoading=!1})}onClickHeader(){this.handleCloseOnly()}onClickSearchArea(e){e.stopPropagation()}handleOverlay(){this.overlay=!1,this.isOpen=!1,this.isFocused=!1}handleFocus(e){this.searchInput.nativeElement.focus(),!this.isFocused&&(this.searchUsers.length>0&&this.setPanelState(e),this.isFocused=!0)}setPanelState(e){e&&e.stopPropagation(),this.isOpen=!1,this.handleOpen()}handleOpen(){this.isOpen||this.isOpen&&!this.isLoading||this.searchUsers.length>0&&(this.isOpen=!0,this.overlay=!0)}handleOutsideClick(){!this.isOpen||(this.isOpen=!1,this.overlay=!1,this.isFocused=!1)}handleCloseOnly(){this.isOpen?(this.isOpen=!1,this.overlay=!1,this.isFocused=!1):this.isFocused=!1}handleCloseAndClear(){this.isOpen?(this.isOpen=!1,this.overlay=!1,this.searchUsers=[],this.isFocused=!1):this.isFocused=!1}onSelectItem(e){this.handleCloseAndClear()}totalSpent(e){return 0}exportPopUpShow(){this.exportOrder.exportPOpUpShow()}exportToExcel(e){e.selectedAmount===p.t.ALL_ORDERS?this.adminDataService.getAllCustomers(null).subscribe(s=>{this.exportData(s.data,e.SelectedType)},s=>{console.log(s)}):e.selectedAmount===p.t.CURRENT_PAGE?this.exportData(this.customers,e.SelectedType):e.selectedAmount===p.t.SELECTED?this.adminDataService.getSelectedUserDetails(this.selectedIds).subscribe(s=>{this.exportData(s.data,e.SelectedType)},s=>{console.log(s)}):e.selectedAmount===p.t.BY_SEARCH_RESULT&&this.exportData(this.customers,e.SelectedType)}exportData(e,s){this.spinner.show();const n=this.utilsService.getDateString(new Date),o=S.P6.json_to_sheet(e),h=S.P6.book_new();S.P6.book_append_sheet(h,o,"customers"),S.NC(h,"2"===s?`Customers${n}.csv`:`Customers${n}.xlsx`),this.spinner.hide()}onChange(e){console.log("onChange: ",e)}getWeek(e){console.log("week: ",e.map(r.Z))}updateCheckedSet(e,s){s?this.setOfCheckedId.add(e):this.setOfCheckedId.delete(e)}onItemChecked(e,s){this.updateCheckedSet(e,s),this.refreshCheckedStatus()}onAllChecked(e){this.listOfCurrentPageData.forEach(s=>this.updateCheckedSet(s.id,e)),this.refreshCheckedStatus()}onCurrentPageDataChange(e){this.listOfCurrentPageData=e,this.refreshCheckedStatus()}refreshCheckedStatus(){this.checked=this.listOfCurrentPageData.every(e=>this.setOfCheckedId.has(e.id)),this.indeterminate=this.listOfCurrentPageData.some(e=>this.setOfCheckedId.has(e.id))&&!this.checked}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(l.O),t.Y36(c.gz),t.Y36(m.t2),t.Y36(D.f),t.Y36(c.F0),t.Y36(U.F),t.Y36(I.K),t.Y36(Z.M))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-all-customers"]],viewQuery:function(e,s){if(1&e&&(t.Gf(L,5),t.Gf(N,5),t.Gf(E,5),t.Gf(J,5)),2&e){let n;t.iGM(n=t.CRH())&&(s.searchForm=n.first),t.iGM(n=t.CRH())&&(s.searchInput=n.first),t.iGM(n=t.CRH())&&(s.exportOrder=n.first),t.iGM(n=t.CRH())&&(s.matCheckbox=n.first)}},decls:14,vars:1,consts:[[1,"page-header"],[1,"header-action"],["type","button"],[1,"create_btn"],[1,"table-samary"],[3,"nzTitle",4,"ngFor","ngForOf"],[3,"nzTitle"],[1,"table-filter-area"],[1,"search-form"],["searchForm","ngForm"],["nz-input","","nzSize","large","placeholder","Search in customers...","name","searchTerm","autocomplete","off","ngModel","","required","",3,"focus"],["searchInput",""],[3,"ngModel","ngModelChange"],[3,"matMenuTriggerFor"],[1,"fa","fa-caret-down"],["customerSort","matMenu"],["mat-menu-item","",2,"font-size","14px","height","40px",3,"click"],["mat-menu-item","",2,"font-size","13px","height","40px",3,"click"],["nzShowSizeChanger","",3,"nzData","nzCurrentPageDataChange"],["rowSelectionTable",""],[2,"width","50px",3,"nzChecked","nzIndeterminate","nzCheckedChange"],[4,"ngFor","ngForOf"],[2,"width","50px",3,"nzChecked","nzCheckedChange"],[3,"routerLink"],[1,"customer_status"],[4,"ngIf"],["class","block",4,"ngIf"],[1,"block"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"All Customer"),t.qZA(),t.TgZ(3,"div",1)(4,"button",2),t._uU(5,"Export"),t.qZA(),t.TgZ(6,"button",2),t._uU(7,"Import"),t.qZA(),t.TgZ(8,"button",3),t._uU(9,"Add Customer"),t.qZA()()(),t.TgZ(10,"div",4)(11,"nz-card")(12,"nz-tabset"),t.YNc(13,B,52,27,"nz-tab",5),t.qZA()()()),2&e&&(t.xp6(13),t.Q6J("ngForOf",s.tabs))},dependencies:[A.sg,A.O5,c.yS,T.VK,T.OP,T.p6,d._Y,d.Fj,d.JJ,d.JL,d.Q7,d.On,d.F,w.Zp,M.xH,M.xw,z.uw,z.wS,_.N8,_.Uo,_._C,_.h7,_.Om,_.p0,_.$Z,_.g6,F.bd],styles:[".page-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:30px 0 15px}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]{display:flex;align-items:center}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:transparent;margin-left:25px}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]   .create_btn[_ngcontent-%COMP%]{background:#1b75bb;color:#fff;border:1px solid #1b75bb;padding:10px 20px;transition:.3s;border-radius:3px}.page-header[_ngcontent-%COMP%]   .header-action[_ngcontent-%COMP%]   .create_btn[_ngcontent-%COMP%]:hover{background:#8bc53f;border:1px solid #8bc53f}.table-samary[_ngcontent-%COMP%]{margin-bottom:30px}.table-filter-area[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}.table-filter-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:50%}.table-filter-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0}.table-filter-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left;list-style:none;border:1px solid #ddd}.table-filter-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:none;padding:10px 20px}.table-filter-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   nz-range-picker[_ngcontent-%COMP%]{padding:9px 20px}.customer_status[_ngcontent-%COMP%]{color:green}.customer_status[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]{color:red}"]}),i})()}];let j=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.Bz.forChild(Q),c.Bz]}),i})();var q=a(19966),Y=a(16102);let W=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[A.ez,q.JX,j,f.q,d.u5,Y.P]}),i})()},5944:(y,b,a)=>{a.d(b,{M:()=>O});var f=a(40520),A=a(92340),d=a(88493),P=a(5e3);const u=A.N.apiBaseLink+"/api/user/",C=A.N.apiBaseLink+"/api/cart/",x=A.N.apiBaseLink+"/api/wishlist/";let O=(()=>{class p{constructor(r){this.httpClient=r}getLoggedInUserInfo(r){if(r){let t=new f.LE;return t=t.append("select",r),this.httpClient.get(u+"logged-in-user-data",{params:t})}return this.httpClient.get(u+"logged-in-user-data")}editLoginUserInfo(r){return this.httpClient.put(u+"edit-logged-in-user-data",r)}editAddress(r){return this.httpClient.put(u+"edit-address",r)}addCartProductToLocalStorage(r){const t=JSON.parse(localStorage.getItem(d.w.cartsProduct));let l;null===t?(l=[],l.push(r)):(l=t,-1===l.findIndex(m=>m._id===r._id)&&l.push(r)),localStorage.setItem(d.w.cartsProduct,JSON.stringify(l))}getCartProductFromLocalStorage(){const r=localStorage.getItem(d.w.cartsProduct);return null===r?[]:JSON.parse(r)}deleteCartProductFromLocalStorage(r){const l=JSON.parse(localStorage.getItem(d.w.cartsProduct)).filter(c=>c._id!==r);localStorage.setItem(d.w.cartsProduct,JSON.stringify(l))}getAllAddress(r,t){let l=new f.LE;return r?(l=l.append("pageSize",r.pageSize),l=l.append("page",r.currentPage),t&&(l=l.append("select",t)),this.httpClient.get(u+"get-addresses",{params:l})):(t&&(l=l.append("select",t)),this.httpClient.get(u+"get-addresses",{params:l}))}addToAddress(r){return this.httpClient.post(u+"add-address",r)}deleteAddress(r){return this.httpClient.delete(u+"delete-address-by-id/"+r)}getUsersBySearch(r,t,l){let c=new f.LE;return c=c.append("q",r),t&&(c=c.append("pageSize",t.pageSize),c=c.append("currentPage",t.currentPage)),this.httpClient.post(u+"get-users-by-search",{filter:l},{params:c})}addItemToUserCart(r){return console.log(r),this.httpClient.post(C+"add-to-cart",r)}addSingleItemToCart(r){return this.httpClient.post(C+"add-to-cart",r)}getCartItemList(){return this.httpClient.get(C+"get-cart-items-by-user")}incrementCartQuantity(r){return this.httpClient.post(C+"increment-cart-item-quantity",{cartId:r})}decrementCartQuantity(r){return this.httpClient.post(C+"decrement-cart-item-quantity",{cartId:r})}removeCartItem(r){return this.httpClient.delete(C+"remove-cart-item/"+r)}countCartItem(){return this.httpClient.get(C+"cart-item-count")}getCartStatusOnBook(r){return this.httpClient.get(C+"get-status-book-on-cart/"+r)}getCustomerLists(r,t,l){let c=new f.LE;return l&&(c=c.append("select",l)),this.httpClient.post(u+"get-all-user-lists",{paginate:r,filter:t},{params:c})}getUserByUserID(r){return this.httpClient.get(u+"get-user-by-user-id/"+r)}editUserAccess(r,t){return this.httpClient.put(u+"edit-user-access/"+r,t)}getSearchUsers(r,t,l){let m=new f.LE;return m=m.append("q",r),m=m.append("pageSize",t.pageSize),m=m.append("currentPage",t.currentPage),this.httpClient.post(u+"get-users-by-search",{filter:l},{params:m})}addSingleItemToWishlist(r){return this.httpClient.post(x+"add-to-wishlist",r)}getWishlistItemByUser(){return this.httpClient.get(x+"get-wishlist-items-by-user")}checkStatusInWishlistWithBookId(r){return this.httpClient.get(x+"get-status-of-product-in-wishlist/"+r)}getBooksFromWishlist(){return this.httpClient.get(x+"get-all-product-from-wishlist")}removeWishlistById(r){return this.httpClient.delete(x+"delete-wishlist-by-id/"+r)}}return p.\u0275fac=function(r){return new(r||p)(P.LFG(f.eN))},p.\u0275prov=P.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);