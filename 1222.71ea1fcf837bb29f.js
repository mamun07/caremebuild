"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[1222],{61222:(P,C,a)=>{a.r(C),a.d(C,{CategoryMenuModule:()=>te});var u=a(69808),s=a(99826),d=(()=>{return(t=d||(d={})).MATERIAL="MAT_ICON",t.FONT_AWESOME="FONT_AWESOME_ICON",d;var t})(),f=a(15293),e=a(5e3),M=a(57267),g=a(85314),l=a(54655),y=a(92280),v=a(98914),b=a(48966),m=a(50072),O=a(47423),_=a(67322),T=a(77531),A=a(74107),S=a(90508),p=a(93075),Z=a(23322);const w=["inputElement"],N=["inputIconName"],I=["inputIconType"],U=["matSelectCat"],J=["matSelectSubCat"];function F(t,r){if(1&t&&(e.TgZ(0,"mat-option",24),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.Q6J("value",n.value),e.xp6(1),e.hij(" ",n.viewValue," ")}}function R(t,r){if(1&t&&(e.TgZ(0,"mat-option",24),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",n.name," ")}}function k(t,r){if(1&t&&(e.TgZ(0,"mat-option",24)(1,"span"),e._uU(2),e.qZA()()),2&t){const n=r.$implicit;e.Q6J("value",n),e.xp6(2),e.Oqu(n.name)}}function q(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"div",25)(1,"button",26),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.openConfirmDialog())}),e._uU(2),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(2),e.hij(" ",n.id?"Update Menu":"Save Menu"," ")}}let x=(()=>{class t{constructor(n,o,i,c,h,oe,ie,re){this.utilsService=n,this.uiService=o,this.categoryService=i,this.subCategoryService=c,this.menuService=h,this.dialog=oe,this.activatedRoute=ie,this.spinner=re,this.priority=null,this.iconType=null,this.iconName=null,this.catName=null,this.categoryMenu=null,this.id=null,this.storedCategoryMenu=null,this.brands=[],this.categories=[],this.subCategories=[],this.iconTypes=[{value:d.MATERIAL,viewValue:"Material Icon"},{value:d.FONT_AWESOME,viewValue:"Font Awesome Icon"}]}ngOnInit(){this.getAllCategory(),this.subAcRoute=this.activatedRoute.paramMap.subscribe(n=>{this.id=n.get("id"),this.id&&this.getCategoryMenuById()})}openConfirmDialog(){this.priority?this.dialog.open(f.$,{maxWidth:"400px",data:{title:"Confirm Save",message:"Are you sure you want save this menu?"}}).afterClosed().subscribe(o=>{o&&(this.id?this.updateCategoryMenu():this.addNewCategoryMenu())}):this.uiService.wrong("Priority is required")}onSelectCategory(n){this.categoryMenu={id:n.value._id,name:n.value.name,slug:n.value.slug,hasChild:[],priority:this.priority},this.getSubCategoryByCategoryId(n.value._id)}onSelectSubCat(n){this.categoryMenu.hasChild=n.value.map(o=>({id:o._id,name:o.name,slug:o.slug,hasChild:[],priority:null}))}onSelectSubCatBrand(n,o){this.categoryMenu.hasChild[o].hasChild=n.value.map(i=>({id:i._id,name:i.brandName,slug:i.brandSlug,hasChild:[],priority:null}))}priorityChangeFn(n){null===this.categoryMenu?this.categoryMenu={id:null,name:null,slug:null,hasChild:[],priority:n}:this.categoryMenu.priority=n}getAllCategory(){this.subCategorySer=this.categoryService.getAllCategory().subscribe(n=>{this.categories=n.data},n=>{console.log(n)})}getSubCategoryByCategoryId(n){this.subSubCatService=this.subCategoryService.getSubCategoryByCategoryId(n).subscribe(o=>{this.subCategories=o.data,this.id&&(this.matSelectSubCat.value=this.subCategories.filter(i=>0!==this.categoryMenu.hasChild.filter(c=>c.id===i._id).length))},o=>{console.log(o)})}addNewCategoryMenu(){this.spinner.show();const n={priority:this.priority,iconType:this.iconType,iconName:this.iconName},o=Object.assign(Object.assign({},this.categoryMenu),n);this.subMenuService=this.menuService.addNewCategoryMenu(o).subscribe(i=>{this.uiService.success(i.message),this.categoryMenu=null,this.subCategories=[],this.priority=null,this.spinner.hide()},i=>{console.log(i),this.spinner.hide()})}updateCategoryMenu(){this.spinner.show();const n={priority:this.priority,iconType:this.iconType,iconName:this.iconName},o=Object.assign(Object.assign(Object.assign({},this.categoryMenu),n),{_id:this.id});this.subMenuServiceOne=this.menuService.updateCategoryMenu(o).subscribe(i=>{this.uiService.success(i.message),this.spinner.hide()},i=>{console.log(i),this.spinner.hide()})}getCategoryMenuById(){this.spinner.show(),this.subMenuServiceTwo=this.menuService.getCategoryMenuById(this.id).subscribe(n=>{this.storedCategoryMenu=n.data,this.categoryMenu=this.storedCategoryMenu,this.iconType=n.data.iconType,this.iconName=n.data.iconName,this.catName=n.data.name,this.getSubCategoryByCategoryId(this.categoryMenu.id),this.storedCategoryMenu&&this.setData(),this.spinner.hide()},n=>{console.log(n),this.spinner.hide()})}setData(){this.priority=this.storedCategoryMenu.priority,this.matSelectCat.value=this.categories.find(n=>n._id===this.storedCategoryMenu.id)}getBrand(n){return this.id?this.brands.filter(o=>0!==n.filter(i=>i.id===o._id).length):null}ngOnDestroy(){this.subAcRoute&&this.subAcRoute.unsubscribe(),this.subCategorySer&&this.subCategorySer.unsubscribe(),this.subSubCatService&&this.subSubCatService.unsubscribe(),this.subBrandService&&this.subBrandService.unsubscribe(),this.subMenuService&&this.subMenuService.unsubscribe(),this.subMenuServiceOne&&this.subMenuServiceOne.unsubscribe(),this.subMenuServiceTwo&&this.subMenuServiceTwo.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(M.F),e.Y36(g.F),e.Y36(l.H),e.Y36(y.Q),e.Y36(v.h),e.Y36(b.uw),e.Y36(s.gz),e.Y36(m.t2))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-category-menu"]],viewQuery:function(n,o){if(1&n&&(e.Gf(w,5),e.Gf(N,5),e.Gf(I,5),e.Gf(U,5),e.Gf(J,5)),2&n){let i;e.iGM(i=e.CRH())&&(o.inputElement=i.first),e.iGM(i=e.CRH())&&(o.inputIconName=i.first),e.iGM(i=e.CRH())&&(o.inputIconType=i.first),e.iGM(i=e.CRH())&&(o.matSelectCat=i.first),e.iGM(i=e.CRH())&&(o.matSelectSubCat=i.first)}},decls:53,vars:9,consts:[[1,"container-fluid"],[1,"header"],[1,"link"],["href","https://fonts.google.com/icons","target","_blank"],["href","https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free","target","_blank"],[1,"required-area"],["appearance","outline",1,"mat-form-field"],["matInput","","placeholder","Enter priority number","type","number",3,"ngModel","ngModelChange"],["inputPriority",""],["placeholder","Select Icon Type",3,"ngModel","ngModelChange"],["inputIconType",""],[3,"value",4,"ngFor","ngForOf"],["appearance","outline","fxHide","",1,"mat-form-field",3,"fxShow"],["matInput","","placeholder","Enter icon name",3,"ngModel","ngModelChange"],["inputIconName",""],[1,"main-top"],[1,"px-1"],["placeholder","Select category",3,"selectionChange"],["matSelectCat",""],["required","","multiple","",3,"selectionChange"],["matSelectSubCat",""],["class","action-view",4,"ngIf"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],[3,"value"],[1,"action-view"],["mat-raised-button","","color","primary",1,"btn-round",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Add New Category Menu"),e.qZA(),e.TgZ(4,"div",2)(5,"p")(6,"a",3),e._uU(7,"Material Icon"),e.qZA()(),e.TgZ(8,"p")(9,"a",4),e._uU(10,"Font Awesome Icon"),e.qZA()()()(),e.TgZ(11,"div",5)(12,"mat-form-field",6)(13,"mat-label"),e._uU(14,"Priority Number"),e.qZA(),e.TgZ(15,"input",7,8),e.NdJ("ngModelChange",function(c){return o.priority=c})("ngModelChange",function(c){return o.priorityChangeFn(c)}),e.qZA(),e.TgZ(17,"mat-error"),e._uU(18,"This field is required"),e.qZA()(),e.TgZ(19,"mat-form-field",6)(20,"mat-label"),e._uU(21,"Icon Type"),e.qZA(),e.TgZ(22,"mat-select",9,10),e.NdJ("ngModelChange",function(c){return o.iconType=c}),e.YNc(24,F,2,2,"mat-option",11),e.qZA()(),e.TgZ(25,"mat-form-field",12)(26,"mat-label"),e._uU(27,"Icon Name"),e.qZA(),e.TgZ(28,"input",13,14),e.NdJ("ngModelChange",function(c){return o.iconName=c}),e.qZA()()(),e.TgZ(30,"div",15)(31,"div",16)(32,"mat-form-field",6)(33,"mat-label"),e._uU(34,"Category"),e.qZA(),e.TgZ(35,"mat-select",17,18),e.NdJ("selectionChange",function(c){return o.onSelectCategory(c)}),e.YNc(37,R,2,2,"mat-option",11),e.qZA(),e.TgZ(38,"mat-error"),e._uU(39,"Category is required"),e.qZA()()(),e.TgZ(40,"div",16)(41,"mat-form-field",6)(42,"mat-label"),e._uU(43,"Sub Category"),e.qZA(),e.TgZ(44,"mat-select",19,20),e.NdJ("selectionChange",function(c){return o.onSelectSubCat(c)}),e.YNc(46,k,3,2,"mat-option",11),e.qZA(),e.TgZ(47,"mat-error"),e._uU(48,"SubCategory is required"),e.qZA()()()(),e.YNc(49,q,3,1,"div",21),e.qZA(),e.TgZ(50,"ngx-spinner",22)(51,"p",23),e._uU(52," Loading... "),e.qZA()()),2&n&&(e.xp6(15),e.Q6J("ngModel",o.priority),e.xp6(7),e.Q6J("ngModel",o.iconType),e.xp6(2),e.Q6J("ngForOf",o.iconTypes),e.xp6(1),e.Q6J("fxShow",o.iconType),e.xp6(3),e.Q6J("ngModel",o.iconName),e.xp6(9),e.Q6J("ngForOf",o.categories),e.xp6(9),e.Q6J("ngForOf",o.subCategories),e.xp6(3),e.Q6J("ngIf",o.categoryMenu),e.xp6(1),e.Q6J("fullScreen",!0))},dependencies:[u.sg,u.O5,O.lW,_.TO,_.KE,_.hX,T.Nt,A.gD,S.ey,p.Fj,p.wV,p.JJ,m.Ro,p.On,Z.b8],styles:[".container-fluid[_ngcontent-%COMP%]{width:95%;max-width:1050px;margin:25px auto}.header[_ngcontent-%COMP%]{padding:10px 0}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-family:Roboto,sans-serif;color:#333;font-weight:600;text-align:center}.header[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{text-align:center}.header[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.5}.header[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:#367bff;font-size:16px;font-weight:600;transition:.3s all linear}.header[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline;color:#1059e0}.required-area[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;border-bottom:1px solid #e6e6e6}.required-area[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%;padding:0 6px}.main-top[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;margin-top:16px}.main-top[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:380px}.sub-cat-list[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:20px;margin-top:30px}.sub-cat-list[_ngcontent-%COMP%]   .m-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;padding-bottom:10px}.sub-cat-list[_ngcontent-%COMP%]   .m-card[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}.action-view[_ngcontent-%COMP%]{text-align:center;margin-top:18px}.action-view[_ngcontent-%COMP%]   .btn-round[_ngcontent-%COMP%]{padding:5px 35px;border-radius:35px!important}"]}),t})();var D=a(61293),E=a(25245);const Q=function(t,r,n){return["/search-result",t,r,n]};function Y(t,r){if(1&t&&(e.TgZ(0,"a",5),e._uU(1),e.TgZ(2,"span"),e._UZ(3,"i",7),e.qZA()()),2&t){const n=r.$implicit,o=e.oxw().$implicit,i=e.oxw();e.Q6J("routerLink",e.kEZ(2,Q,null==i.parentCategory?null:i.parentCategory.slug,o.slug,n.slug)),e.xp6(1),e.hij(" ",n.name," ")}}const B=function(t,r){return["/search-result",t,r]};function z(t,r){if(1&t&&(e.TgZ(0,"div",3)(1,"div",4)(2,"a",5),e._uU(3),e.qZA(),e.TgZ(4,"ul")(5,"li"),e.YNc(6,Y,4,6,"a",6),e.qZA()()()()),2&t){const n=r.$implicit,o=e.oxw();e.xp6(2),e.Q6J("routerLink",e.WLB(3,B,null==o.parentCategory?null:o.parentCategory.slug,n.slug)),e.xp6(1),e.Oqu(n.name),e.xp6(3),e.Q6J("ngForOf",n.hasChild)}}let j=(()=>{class t{constructor(){this.parentCategory=null,this.data=[]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-menu-hover-content"]],inputs:{parentCategory:"parentCategory",data:"data"},decls:3,vars:1,consts:[["id","sub-mega-menu"],[1,"hover-menu-main"],["class","hover-menu-colum",4,"ngFor","ngForOf"],[1,"hover-menu-colum"],[1,"hover-menu-details"],["target","_blank",3,"routerLink"],["target","_blank",3,"routerLink",4,"ngFor","ngForOf"],[1,"fa","fa-angle-right"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,z,7,6,"div",2),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngForOf",o.data))},dependencies:[u.sg,s.yS],styles:[".hover-menu-main[_ngcontent-%COMP%]{background-color:#fff;padding:25px 30px;box-sizing:border-box;display:grid;grid-template-columns:repeat(2,49%);grid-template-rows:auto;grid-gap:20px}.hover-menu-colum[_ngcontent-%COMP%]{display:block;border-right:1px solid #eee;padding-right:15px}.hover-menu-colum[_ngcontent-%COMP%]:nth-child(2), .hover-menu-colum[_ngcontent-%COMP%]:nth-child(4), .hover-menu-colum[_ngcontent-%COMP%]:nth-child(6), .hover-menu-colum[_ngcontent-%COMP%]:nth-child(8), .hover-menu-colum[_ngcontent-%COMP%]:nth-child(10), .hover-menu-colum[_ngcontent-%COMP%]:nth-child(12){border:none}.hover-menu-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#be0101;font-weight:500;font-style:normal;font-family:Poppins,sans-serif;font-size:15px;display:block;margin-bottom:6px;transition:all .3s linear;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hover-menu-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.hover-menu-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;display:block}.hover-menu-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:7px;min-width:100%}.hover-menu-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-style:normal;color:#757575;font-weight:400;font-size:14px;display:block;cursor:pointer;transition:all .3s linear}.hover-menu-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:13px;font-weight:500;position:relative;top:1px;left:4px}.hover-menu-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#be0101;text-decoration:underline;transform:translate(3px)}@media (max-width: 1000px){.hover-menu-main[_ngcontent-%COMP%]{grid-template-columns:repeat(2,49%)!important}}"]}),t})(),L=(()=>{class t{transform(n,o){if(Array.isArray(n))return n.sort((i,c)=>i[o]<c[o]?-1:i[o]>c[o]?1:0),n.reverse()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"sort",type:t,pure:!0}),t})();function H(t,r){if(1&t&&(e.TgZ(0,"div",18),e._UZ(1,"app-menu-hover-content",19),e.qZA()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("parentCategory",n)("data",n.hasChild)}}const $=function(t){return["edit-category-menu",t]};function W(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"li")(1,"div",12)(2,"button",13)(3,"mat-icon"),e._uU(4,"edit"),e.qZA()(),e.TgZ(5,"button",14),e.NdJ("click",function(){const c=e.CHM(n).$implicit,h=e.oxw();return e.KtG(h.openConfirmDialog(c._id))}),e.TgZ(6,"mat-icon"),e._uU(7,"delete"),e.qZA()()(),e.TgZ(8,"a",15),e._uU(9),e.TgZ(10,"span",16),e._uU(11),e.qZA()(),e.TgZ(12,"mat-icon"),e._uU(13,"arrow_right"),e.qZA(),e.YNc(14,H,2,2,"div",17),e.qZA()}if(2&t){const n=r.$implicit;e.xp6(2),e.Q6J("routerLink",e.VKq(4,$,n._id)),e.xp6(7),e.hij("",n.name," "),e.xp6(2),e.hij("(",n.priority,")"),e.xp6(3),e.Q6J("ngIf",n.hasChild.length>0)}}const G=function(){return["add-category-menu"]},K=[{path:"",component:(()=>{class t{constructor(n,o,i,c,h){this.menuService=n,this.reloadService=o,this.dialog=i,this.uiService=c,this.spinner=h,this.categoryMenus=[]}ngOnInit(){this.reloadService.refreshCategoryMenu$.subscribe(()=>{this.getAllCategoryMenu()}),this.getAllCategoryMenu()}openConfirmDialog(n){this.dialog.open(f.$,{maxWidth:"400px",data:{title:"Confirm Delete",message:"Are you sure you want delete this category?"}}).afterClosed().subscribe(i=>{i&&this.deleteCategoryMenuById(n)})}getAllCategoryMenu(){this.spinner.show(),this.menuService.getAllCategoryMenu().subscribe(n=>{this.categoryMenus=n.data,this.spinner.hide()},n=>{this.spinner.hide(),console.log(n)})}deleteCategoryMenuById(n){this.spinner.show(),this.menuService.deleteCategoryMenuById(n).subscribe(o=>{this.uiService.success(o.message),this.reloadService.needRefreshCategoryMenu$(),this.spinner.hide()},o=>{console.log(o),this.spinner.hide()})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(v.h),e.Y36(D.f),e.Y36(b.uw),e.Y36(g.F),e.Y36(m.t2))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-category-menu"]],decls:19,vars:7,consts:[[1,"top-action"],["mat-raised-button","","color","primary",3,"routerLink"],[1,"header"],[1,"center-square"],[1,"view-area"],[1,"container"],[1,"cat-list-viewer","no-select"],[1,"hover-menu","bg-color"],[1,"main-menu"],[4,"ngFor","ngForOf"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],[1,"action"],["mat-icon-button","",3,"routerLink"],["mat-icon-button","",3,"click"],["href","javascript:"],[2,"font-size","10px","color","#ffffff"],["class","sub-mega-menu",4,"ngIf"],[1,"sub-mega-menu"],[3,"parentCategory","data"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"button",1)(2,"mat-icon"),e._uU(3,"add"),e.qZA(),e._uU(4," Add New Category Menu "),e.qZA()(),e.TgZ(5,"div",2)(6,"h2"),e._uU(7,"Category Menu List"),e.qZA()(),e._UZ(8,"hr",3),e.TgZ(9,"div",4)(10,"div",5)(11,"div",6)(12,"nav",7)(13,"ul",8),e.YNc(14,W,15,6,"li",9),e.ALo(15,"sort"),e.qZA()()()()(),e.TgZ(16,"ngx-spinner",10)(17,"p",11),e._uU(18,"Loading..."),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("routerLink",e.DdM(6,G)),e.xp6(13),e.Q6J("ngForOf",e.xi3(15,3,o.categoryMenus,"priority")),e.xp6(2),e.Q6J("fullScreen",!0))},dependencies:[u.sg,u.O5,s.rH,O.lW,E.Hw,m.Ro,j,L],styles:['.hover-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{min-width:260px;z-index:50}.hover-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.hover-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.hover-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.hover-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .hover-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px}.hover-menu[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;position:relative}.main-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{height:55px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid rgba(255,255,255,.3294117647);cursor:pointer}.hover-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-size:15px;font-weight:400;cursor:pointer;font-family:Roboto,sans-serif}.main-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover{background:#E11010}.hover-menu[_ngcontent-%COMP%]   .super-sub-menu[_ngcontent-%COMP%]{top:0;right:0;transform:translate(100%)}.clearfix[_ngcontent-%COMP%]:after{content:"";display:block;clear:both}.sub-mega-menu[_ngcontent-%COMP%]{display:none;transition:all .3s linear;background-color:#fff;border:1px solid #e2e2e2;box-shadow:0 2px 11px 3px #0000001a;-moz-box-shadow:0px 2px 11px 3px rgba(0,0,0,.1);-webkit-box-shadow:0px 2px 11px 3px rgba(0,0,0,.1);width:300px;overflow-y:auto;box-sizing:border-box;position:absolute;top:0;left:100%}.sub-mega-menu[_ngcontent-%COMP%]::-webkit-scrollbar{display:block;width:10px;background-color:#fff}.sub-mega-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track{display:block;background-color:#fff}.sub-mega-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:gray;border-radius:20px;height:30px}.hover-menu[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover   .sub-mega-menu[_ngcontent-%COMP%]{display:block}@media (min-width: 960px) and (max-width: 1300px){.main-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{height:45px;padding:0 17px}}.top-action[_ngcontent-%COMP%]{text-align:right;margin-top:16px;padding-right:16px}.top-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-family:Roboto,sans-serif}.view-area[_ngcontent-%COMP%]{width:100%;margin-top:20px;position:fixed;z-index:99;margin-bottom:30px}.view-area[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;width:100%;max-width:1480px;margin:0 auto;height:auto;display:flex;justify-content:space-between;align-items:center;padding:16px 20px}.hover-menu[_ngcontent-%COMP%]{width:350px}.hover-menu.bg-color[_ngcontent-%COMP%]{background:#BE0101}']}),t})()},{path:"add-category-menu",component:x},{path:"edit-category-menu/:id",component:x}];let X=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(K),s.Bz]}),t})();var V=a(90898),ee=a(24586),ne=a(42155);let te=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,X,V.q,p.UX,p.u5,ee.D,m.ef,ne.o9]}),t})()},15293:(P,C,a)=>{a.d(C,{$:()=>f});var u=a(48966),s=a(5e3),d=a(47423);let f=(()=>{class e{constructor(g,l){this.dialogRef=g,this.data=l}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}}return e.\u0275fac=function(g){return new(g||e)(s.Y36(u.so),s.Y36(u.WI))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-confirm-dialog"]],decls:12,vars:2,consts:[[1,"dialog-container"],[1,"confirm-dialog-area"],[1,"info"],[1,"actions-around"],["mat-raised-button","","color","warn","type","button",1,"btn-round",3,"click"],["mat-raised-button","","color","primary","type","button",1,"btn-round",3,"click"]],template:function(g,l){1&g&&(s.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),s._uU(4),s.qZA(),s.TgZ(5,"p"),s._uU(6),s.qZA()(),s.TgZ(7,"div",3)(8,"button",4),s.NdJ("click",function(){return l.onDismiss()}),s._uU(9," Cancel "),s.qZA(),s.TgZ(10,"button",5),s.NdJ("click",function(){return l.onConfirm()}),s._uU(11," Confirm "),s.qZA()()()()),2&g&&(s.xp6(4),s.Oqu(null==l.data?null:l.data.title),s.xp6(2),s.Oqu(null==l.data?null:l.data.message))},dependencies:[d.lW],styles:[".dialog-container[_ngcontent-%COMP%]{width:350px}.btn-round[_ngcontent-%COMP%]{margin:auto;width:150px;padding:5px;font-size:16px;border-radius:50px}.actions-around[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;margin-top:25px}.actions-around[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}@media only screen and (max-device-width: 599px){.dialog-container[_ngcontent-%COMP%]{width:95%;margin:0 auto}.btn-round[_ngcontent-%COMP%]{margin:auto;width:130px;padding:5px;font-size:14.5px;border-radius:50px}.btn-round[_ngcontent-%COMP%]:first-child{margin-right:10px}}"]}),e})()}}]);