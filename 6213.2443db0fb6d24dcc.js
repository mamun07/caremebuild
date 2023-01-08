"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[6213],{66213:(j,u,i)=>{i.r(u),i.d(u,{ConversionRateModule:()=>Y});var f=i(69808),t=i(5e3),d=i(99826),p=i(50072),h=i(61293),b=i(66082),P=i(57267),v=i(85314);const O=function(n){return["add-conversion-rate",n]};function M(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",20)(2,"h3"),t._uU(3,"01"),t.qZA()(),t.TgZ(4,"div",21)(5,"button"),t._uU(6),t.qZA()(),t.TgZ(7,"div",22)(8,"h3"),t._uU(9),t.qZA()(),t.TgZ(10,"div",23)(11,"button"),t._uU(12),t.qZA()(),t.TgZ(13,"div",24)(14,"button",7),t._UZ(15,"i",25),t.qZA(),t.TgZ(16,"button",26),t.NdJ("click",function(){const c=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.onDelete(null==c?null:c._id))}),t._UZ(17,"i",27),t.qZA()()()}if(2&n){const e=r.$implicit;t.xp6(6),t.Oqu(null==e?null:e.websiteName),t.xp6(3),t.Oqu(null==e?null:e.url),t.xp6(3),t.hij("",null==e?null:e.rate," BDT"),t.xp6(2),t.Q6J("routerLink",t.VKq(4,O,e._id))}}const _=function(){return["add-conversion-rate"]};let y=(()=>{class n{constructor(e,o,s,c,l,m,I){this.activatedRoute=e,this.spinner=o,this.reloadService=s,this.productService=c,this.router=l,this.utilsService=m,this.uiService=I,this.conversionRate=[],this.holdPrevData=[],this.overlay=!1,this.isOpen=!1,this.isFocused=!1,this.isLoading=!1,this.isSelect=!1,this.query=null,this.currentPage=1,this.totalProducts=0,this.productsPerPage=6,this.totalProductsStore=0,this.sortQuery={createdAt:-1},this.activeSort=null}ngOnInit(){this.getAllConversionRate(),this.reloadService.refreshConversionRate$.subscribe(()=>{this.getAllConversionRate()})}onDelete(e){this.spinner.show(),this.productService.deleteConversionRateById(e).subscribe(o=>{this.uiService.success(o.message),this.spinner.hide(),this.reloadService.needRefreshConversionRate$()},o=>{this.spinner.hide(),console.log(o)})}onPageChanged(e){this.router.navigate([],{queryParams:{page:e}})}getAllConversionRate(){this.spinner.show(),this.productsPerPage.toString(),this.currentPage.toString(),this.subConversionRate=this.productService.getAllConversionRate().subscribe(s=>{this.conversionRate=s.data,this.totalProducts=s.count,this.totalProductsStore=s.count,this.spinner.hide()},s=>{this.spinner.hide(),console.log(s)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.gz),t.Y36(p.t2),t.Y36(h.f),t.Y36(b.M),t.Y36(d.F0),t.Y36(P.F),t.Y36(v.F))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-conversion-rate"]],decls:34,vars:3,consts:[[1,"vendor-header"],[1,"vendor-header-main"],[1,"title"],[1,"vendor-search"],[1,"fa","fa-search"],["type","text","placeholder","Search"],[1,"vendor-create-btn"],[3,"routerLink"],[1,"vendor-main"],[1,"vendor-table-area"],[1,"vendor-table"],[1,"table-head"],[1,"table-row"],[1,"table-heading","serial"],[1,"table-heading","name"],[1,"table-heading","contact"],[1,"table-heading","allow"],[1,"table-heading","edit"],[1,"table-body"],["class","table-row",4,"ngFor","ngForOf"],[1,"table-data","serial"],[1,"table-data","name"],[1,"table-data","contact"],[1,"table-data","allow"],[1,"table-data","edit"],[1,"fa","fa-edit"],["type","button",3,"click"],[1,"fa","fa-trash"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Conversion Rate"),t.qZA()(),t.TgZ(5,"div",3)(6,"button"),t._UZ(7,"i",4),t.qZA(),t._UZ(8,"input",5),t.qZA(),t.TgZ(9,"div",6)(10,"button",7),t._uU(11,"Add Conversion Rate"),t.qZA()()()(),t.TgZ(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12)(17,"div",13)(18,"h3"),t._uU(19,"SI"),t.qZA()(),t.TgZ(20,"div",14)(21,"h3"),t._uU(22,"Website Name"),t.qZA()(),t.TgZ(23,"div",15)(24,"h3"),t._uU(25,"Website Domain"),t.qZA()(),t.TgZ(26,"div",16)(27,"h3"),t._uU(28,"Rate"),t.qZA()(),t.TgZ(29,"div",17)(30,"h3"),t._uU(31,"Actions"),t.qZA()()()(),t.TgZ(32,"div",18),t.YNc(33,M,18,6,"div",19),t.qZA()()()()),2&e&&(t.xp6(10),t.Q6J("routerLink",t.DdM(2,_)),t.xp6(23),t.Q6J("ngForOf",o.conversionRate))},dependencies:[f.sg,d.rH],styles:[".vendor-header[_ngcontent-%COMP%]{display:block;margin-top:40px;margin-bottom:40px}.vendor-header-main[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 3fr 2fr;grid-template-rows:auto;grid-gap:20px;width:100%}.title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#131523;font-family:Poppins,sans-serif;font-weight:600;font-style:normal;font-size:24px;line-height:30px;margin:0}.vendor-search[_ngcontent-%COMP%]{max-width:400px;width:100%;display:flex;align-items:center;justify-content:center}@media (max-width: 720px){.vendor-header-main[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.vendor-search[_ngcontent-%COMP%]{grid-row-start:2;grid-column-start:1;grid-column-end:-1}}@media (max-width: 450px){.vendor-header-main[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}.vendor-create-btn[_ngcontent-%COMP%]{justify-content:flex-start!important}}.vendor-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#d3dff8;width:45px;height:45px;display:flex;align-items:center;justify-content:center;outline:none;border:1px solid #d3dff8;color:#6672fb;border-radius:5px 0 0 5px}.vendor-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;width:100%;outline:none;border:1px solid #eff3fb;background-color:#eff3fb;height:45px;padding:0 10px;box-sizing:border-box;font-family:Roboto,sans-serif;font-size:15px;border-radius:0 5px 5px 0}.vendor-create-btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.vendor-create-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#0058ff;border:1px solid #0058ff;color:#fff;font-family:Poppins,sans-serif;font-weight:500;font-size:16px;padding:7px 15px;box-sizing:border-box;border-radius:5px;transition:all .3s linear}.vendor-main[_ngcontent-%COMP%]{display:block;background-color:#fff;box-shadow:0 2px 4px #0000001a,0 -1px 2px #0000001a;border-radius:10px;margin-bottom:40px;padding:25px 0 0;box-sizing:border-box}.vendor-table-area[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box;overflow-x:auto;padding-bottom:30px}.table-head[_ngcontent-%COMP%]{display:block}.table-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding:0 25px;box-sizing:border-box;width:100%;min-width:1220px}.table-heading[_ngcontent-%COMP%]{height:60px;display:flex;align-items:center;justify-content:center;text-align:center;width:100%;border-bottom:1px solid #eee}.table-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:Roboto,sans-serif;font-weight:600;font-size:18px;display:block;color:#131523;font-style:normal}.table-data[_ngcontent-%COMP%]{min-height:120px;display:flex;align-items:center;justify-content:center;text-align:center;width:100%;border-bottom:1px solid #eee}.table-data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:600;font-size:16px;display:block;color:#131523;font-style:normal;margin:0}.table-data.name[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#ff9292;color:#131523;font-family:Roboto,sans-serif;font-weight:500;font-size:16px;padding:5px 15px;box-sizing:border-box;border-radius:30px;outline:none;border:none}.table-data.address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:600;font-size:15px;display:block;color:#131523;font-style:normal;margin:0}.table-data.payment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .table-data.allow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .table-data.stock[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none;border:none;background-color:#22d500;padding:4px 20px;color:#fff;font-family:Roboto,sans-serif;font-weight:500;font-style:normal;font-size:16px;border-radius:20px}.table-data.edit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none;background-color:#fff;border:none;color:#0058ff;font-size:20px;display:block;padding:3px 7px;box-sizing:border-box}.edit[_ngcontent-%COMP%], .serial[_ngcontent-%COMP%]{width:50px;min-width:50px}.address[_ngcontent-%COMP%]{min-width:300px}.name[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%], .payment[_ngcontent-%COMP%], .stock[_ngcontent-%COMP%], .allow[_ngcontent-%COMP%]{min-width:150px;width:100%}button[_ngcontent-%COMP%]{display:inline-block}  .form-field.mat-form-field .mat-form-field-label{color:#74777e;font-family:Roboto,sans-serif}  .form-field .mat-form-field-appearance-outline .mat-form-field-outline{color:#0058ff}  .form-field.mat-form-field-appearance-outline .mat-form-field-outline{color:#3b7eff!important}  .form-field.mat-form-field.mat-focused .mat-form-field-label{color:#90b6ff!important}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{color:#989eaf;font-family:Roboto,sans-serif;font-size:16px}[_ngcontent-%COMP%]::placeholder{color:#989eaf}  .mat-check .mat-checkbox-inner-container-no-side-margin{background-color:#d7e7ff}  .mat-check .mat-checkbox-frame{border-color:#b0ceff}  .mat-check.mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#0058ff}  .mat-check.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element{background-color:#0058ff}"]}),n})();var a=i(93075),g=i(67322),x=i(77531),w=i(74107),R=i(90508);function Z(n,r){if(1&n&&(t.TgZ(0,"mat-option",20),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.s9C("value",e.websiteName),t.xp6(1),t.Oqu(e.websiteName)}}function k(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"This field is required"),t.qZA())}function A(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"This field is required"),t.qZA())}function T(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"This field is required"),t.qZA())}const S=function(){return["/","admin/conversion-rate"]};let C=(()=>{class n{constructor(e,o,s,c,l,m){this.uiService=e,this.spinner=o,this.productService=s,this.router=c,this.activatedRoute=l,this.reloadService=m,this.websiteName=new a.NI("",[a.kI.required]),this.url=new a.NI("",[a.kI.required]),this.rate=new a.NI("",[a.kI.required]),this.id=null,this.demoData=[{websiteName:"Amazon",url:"www.amazon.com"},{websiteName:"Aliexpress",url:"www.aliexpress.com"},{websiteName:"Flipkart",url:"www.flipkart.com"}]}ngOnInit(){this.subRouteOne=this.activatedRoute.paramMap.subscribe(e=>{this.id=e.get("id"),this.id&&this.getSingleConversionRateById()}),this.dataForm=new a.cw({websiteName:this.websiteName,url:this.url,rate:this.rate})}onSubmit(){if(this.dataForm.invalid)return void this.uiService.wrong("Invalid Input field!");this.spinner.show();const e=this.dataForm.value;if(this.id){const o=Object.assign(Object.assign({},this.dataForm.value),{_id:this.id});this.editConversionRate(o)}this.id||this.addConversionRate(e)}getSingleConversionRateById(){this.subDataOne=this.productService.getSingleConversionRateById(this.id).subscribe(e=>{this.conversionRate=e.data,this.conversionRate&&this.dataForm.patchValue({websiteName:this.conversionRate.websiteName,url:this.conversionRate.url,rate:this.conversionRate.rate})},e=>{console.log(e)})}addConversionRate(e){this.productService.addConversionRate(e).subscribe(o=>{this.uiService.success(o.message),this.spinner.hide(),this.router.navigate(["admin/conversion-rate"])},o=>{this.spinner.hide(),this.uiService.warn(o.message)})}editConversionRate(e){this.productService.editConversionRate(e).subscribe(o=>{this.uiService.success(o.message),this.spinner.hide(),this.router.navigate(["admin/conversion-rate"])},o=>{this.spinner.hide(),this.uiService.warn(o.message)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(v.F),t.Y36(p.t2),t.Y36(b.M),t.Y36(d.F0),t.Y36(d.gz),t.Y36(h.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-conversion-rate"]],decls:51,vars:4,consts:[[1,"create-vendor"],[1,"create-vendor-main"],[3,"formGroup","ngSubmit"],[1,"create-vendor-header"],[1,"create-vendor-body"],[1,"input-area"],[1,"input-info"],[1,"input-info-left"],[1,"input-info-right"],[1,"form-input"],[1,"field"],["appearance","outline",1,"form-field"],["formControlName","websiteName","placeholder","Vendor"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["type","text","formControlName","url","matInput","","placeholder","Enter your Website Url"],["type","text","formControlName","rate","matInput","","placeholder","Enter your Website Url"],[1,"create-vendor-btn"],["type","button",3,"routerLink"],[1,"save-active"],[3,"value"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(3,"div",3)(4,"h2"),t._uU(5,"Add Conversion Rate"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7)(10,"h3"),t._uU(11,"Website Name:"),t.qZA()(),t.TgZ(12,"div",8)(13,"div",9)(14,"div",10)(15,"mat-form-field",11)(16,"mat-select",12),t.YNc(17,Z,2,2,"mat-option",13),t.qZA(),t.YNc(18,k,2,0,"mat-error",14),t.qZA()()()()(),t.TgZ(19,"div",6)(20,"div",7)(21,"h3"),t._uU(22,"Website Url:"),t.qZA()(),t.TgZ(23,"div",8)(24,"div",9)(25,"div",10)(26,"mat-form-field",11)(27,"mat-label"),t._uU(28,"Website Url"),t.qZA(),t._UZ(29,"input",15),t.YNc(30,A,2,0,"mat-error",14),t.qZA()()()()()(),t.TgZ(31,"div",6)(32,"div",7)(33,"h3"),t._uU(34,"Rate:"),t.qZA()(),t.TgZ(35,"div",8)(36,"div",9)(37,"div",10)(38,"mat-form-field",11)(39,"mat-label"),t._uU(40,"Rate"),t.qZA(),t._UZ(41,"input",16),t.YNc(42,T,2,0,"mat-error",14),t.qZA()()()()()(),t.TgZ(43,"div",17)(44,"ul")(45,"li")(46,"button",18),t._uU(47,"Cancel"),t.qZA()(),t.TgZ(48,"li")(49,"button",19),t._uU(50,"Save"),t.qZA()()()()()()()),2&e&&(t.xp6(2),t.Q6J("formGroup",o.dataForm),t.xp6(15),t.Q6J("ngForOf",o.demoData),t.xp6(29),t.Q6J("routerLink",t.DdM(3,S)))},dependencies:[f.sg,f.O5,d.rH,g.TO,g.KE,g.hX,x.Nt,w.gD,R.ey,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],styles:[".create-vendor[_ngcontent-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center;padding:80px 20px 30px;box-sizing:border-box}.create-vendor-main[_ngcontent-%COMP%]{display:block;max-width:600px;width:100%;margin:auto;background-color:#fff;border-radius:15px}.create-vendor-header[_ngcontent-%COMP%]{display:block;padding:30px 40px;box-sizing:border-box;border-bottom:1px solid #6c9eff}.create-vendor-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#131523;margin:0;font-family:Roboto,sans-serif;font-weight:600;font-size:24px;font-style:normal;box-sizing:border-box}.create-vendor-body[_ngcontent-%COMP%]{display:block;padding:30px 40px;box-sizing:border-box}@media (max-width: 450px){.create-vendor-header[_ngcontent-%COMP%], .create-vendor-body[_ngcontent-%COMP%]{padding:25px 20px}}.input-area[_ngcontent-%COMP%]{display:block;margin-bottom:20px}.input-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;gap:20px}.input-info-left[_ngcontent-%COMP%]{max-width:150px;width:100%}.input-info-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#131523;font-family:Roboto,sans-serif;font-weight:500;font-size:16px;display:block;margin:0}.input-info-right[_ngcontent-%COMP%]{width:100%}.check-box-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;gap:20px;margin-bottom:30px}.check-box-info-left[_ngcontent-%COMP%]{display:block;max-width:150px;width:100%}.check-box-info-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#131523;font-family:Roboto,sans-serif;font-weight:500;font-size:16px;display:block;margin:0}.check-box-info-right[_ngcontent-%COMP%]{display:block}.check-box-info-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.check-box-info-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin-right:20px}.check-box-info-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin:0}.check-box-info-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{color:#545d7a;font-family:Roboto,sans-serif;font-weight:500;font-size:15px;display:block}.create-vendor-btn[_ngcontent-%COMP%]{display:block;margin-top:50px}.create-vendor-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;text-align:center}.create-vendor-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin-right:20px}.create-vendor-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin:0}.create-vendor-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;color:#0058ff;width:100%;font-size:17px;border:2px solid #0058ff;border-radius:5px;padding:8px 20px;box-sizing:border-box;font-family:Roboto,sans-serif;font-weight:500;transition:all .3s linear}.create-vendor-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .save-active[_ngcontent-%COMP%]{color:#fff!important;background-color:#0058ff!important}@media (max-width: 540px){.input-info[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:10px 0px}}@media (max-width: 450px){.check-box-info[_ngcontent-%COMP%]{flex-direction:column;gap:10px 0px;align-items:flex-start}}.form-field[_ngcontent-%COMP%]{display:block;width:100%;min-width:0px}"]}),n})();const z=[{path:"",component:y},{path:"add-conversion-rate",component:C},{path:"add-conversion-rate/:id",component:C}];let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(z),d.Bz]}),n})();var N=i(90898),q=i(47423),F=i(25245);let Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[f.ez,U,N.q,a.u5,a.UX,d.Bz,g.lN,x.c,q.ot,F.Ps,p.ef]}),n})()}}]);