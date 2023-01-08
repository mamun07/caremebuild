"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[3180],{21532:(y,M,a)=>{a.d(M,{s:()=>z});var f=a(99826),r=a(15293),t=a(5e3),n=a(48966),d=a(88211),b=a(85314),c=a(61293),g=a(50072),o=a(69808),O=a(47423),D=a(25245);const I=function(h){return["edit-thana",h]};function Z(h,C){if(1&h){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"button",10),t.NdJ("click",function(){const v=t.CHM(e).$implicit,A=t.oxw();return t.KtG(A.openConfirmDialog(v._id))}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA()(),t.TgZ(7,"button",11)(8,"mat-icon"),t._uU(9,"edit"),t.qZA()()()()}if(2&h){const e=C.$implicit;t.xp6(1),t.uIk("data-label","Thana Name"),t.xp6(1),t.Oqu(e.name),t.xp6(1),t.uIk("data-label","Actions"),t.xp6(4),t.Q6J("routerLink",t.VKq(4,I,e._id))}}const L=function(){return["add-thana"]};let U=(()=>{class h{constructor(e,l,T,v,A){this.dialog=e,this.thanaService=l,this.uiService=T,this.reloadService=v,this.spinner=A,this.thana=[]}ngOnInit(){this.reloadService.refreshThana$.subscribe(()=>{this.getAllThana()}),this.getAllThana()}openConfirmDialog(e){this.dialog.open(r.$,{maxWidth:"400px",data:{title:"Confirm Delete",message:"Are you sure you want delete this category?"}}).afterClosed().subscribe(T=>{T&&this.deleteThanaByThanaId(e)})}getAllThana(){this.spinner.show(),this.thanaService.getAllThana().subscribe(e=>{console.log(e),this.spinner.hide(),this.thana=e.data},e=>{this.spinner.hide(),console.log(e)})}deleteThanaByThanaId(e){this.spinner.show(),this.thanaService.deleteThanaByThanaId(e).subscribe(l=>{this.uiService.success(l.message),this.reloadService.needRefreshThana$(),this.spinner.hide()},l=>{console.log(l),this.spinner.hide()})}}return h.\u0275fac=function(e){return new(e||h)(t.Y36(n.uw),t.Y36(d.g),t.Y36(b.F),t.Y36(c.f),t.Y36(g.t2))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-thana"]],decls:21,vars:6,consts:[[1,"top-action"],["mat-raised-button","","color","primary",3,"routerLink"],[1,"header"],[1,"center-square"],[1,"table-container"],[1,"table-head"],["scope","col"],[4,"ngFor","ngForOf"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],["mat-mini-fab","","color","warn",2,"margin-right","5px",3,"click"],["mat-mini-fab","",3,"routerLink"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0)(1,"button",1)(2,"mat-icon"),t._uU(3,"add"),t.qZA(),t._uU(4," Add New thana "),t.qZA()(),t.TgZ(5,"div",2)(6,"h2"),t._uU(7,"Thana List"),t.qZA()(),t._UZ(8,"hr",3),t.TgZ(9,"div",4)(10,"table")(11,"thead")(12,"tr",5)(13,"th",6),t._uU(14),t.qZA(),t.TgZ(15,"th",6),t._uU(16),t.qZA()()(),t.YNc(17,Z,10,6,"tr",7),t.qZA()(),t.TgZ(18,"ngx-spinner",8)(19,"p",9),t._uU(20," Loading... "),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(5,L)),t.xp6(13),t.Oqu("Thana Name"),t.xp6(2),t.Oqu("Actions"),t.xp6(1),t.Q6J("ngForOf",l.thana),t.xp6(1),t.Q6J("fullScreen",!0))},dependencies:[o.sg,f.rH,O.lW,D.Hw,g.Ro],styles:[".table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed;font-size:16px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;height:75px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:24px;margin:.5em 0 .75em;font-weight:700}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#f8f8f8;border:1px solid #ddd;padding:.35em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.625em;text-align:center;word-wrap:anywhere}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;background-color:#2d2d2d;color:#dbe9ff}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:100%;height:45px;border:none;outline:none;font-size:16px;font-weight:700;padding:0 15px;box-sizing:border-box;overflow:hidden;background:#b9d8fb}@media screen and (min-width: 670px) and (max-width: 850px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Roboto,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}@media screen and (max-width: 600px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Roboto,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}.top-action[_ngcontent-%COMP%]{text-align:right;margin-top:16px;padding-right:16px}.top-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-family:Roboto,sans-serif}"]}),h})();var m=a(93075),R=a(57267),B=a(71188),p=a(78482),s=a(51836),i=a(67322),u=a(77531),P=a(74107),_=a(90508),x=a(20773);const E=["templateForm"];function S(h,C){1&h&&t._UZ(0,"mat-spinner",15)}function k(h,C){if(1&h){const e=t.EpF();t.TgZ(0,"mat-option",16),t.NdJ("click",function(){const v=t.CHM(e).$implicit,A=t.oxw();return t.KtG(A.getAllCityByZilaId(v._id))}),t._uU(1),t.qZA()}if(2&h){const e=C.$implicit;t.Q6J("value",e._id),t.xp6(1),t.hij(" ",e.name," ")}}function F(h,C){if(1&h&&(t.TgZ(0,"mat-option",17),t._uU(1),t.qZA()),2&h){const e=C.$implicit;t.Q6J("value",e._id),t.xp6(1),t.hij(" ",e.name," ")}}let w=(()=>{class h{constructor(e,l,T,v,A,W,Y,K,V){this.fb=e,this.activatedRoute=l,this.uiService=T,this.thanaService=v,this.utilsService=A,this.storageService=W,this.spinner=Y,this.cityService=K,this.zilaService=V,this.autoSlug=!0,this.isLoading=!1,this.zila=[]}ngOnInit(){this.dataForm=this.fb.group({name:[null,m.kI.required],cityname:[null,m.kI.required],zilaname:[null,m.kI.required]}),this.getAllZila(),this.activatedRoute.paramMap.subscribe(e=>{this.id=e.get("id"),this.id&&this.getThanaByThanaId()})}onSubmit(){if(this.dataForm.invalid)this.uiService.warn("Please complete all the required fields");else if(this.thana){const e=Object.assign(Object.assign({},this.dataForm.value),{_id:this.thana._id});this.editThanaData(e)}else this.addThana(this.dataForm.value)}onHoldInputData(){var e;this.storageService.storeInputData(null===(e=this.dataForm)||void 0===e?void 0:e.value,"THANA_INPUT")}addThana(e){this.spinner.show(),this.thanaService.addThana(e).subscribe(l=>{this.uiService.success(l.message),this.templateForm.resetForm(),this.spinner.hide()},l=>{console.log(l),this.spinner.hide()})}getThanaByThanaId(){this.spinner.show(),this.thanaService.getThanaByThanaId(this.id).subscribe(e=>{e.data&&(this.thana=e.data,this.getAllCityByZilaId(this.thana.zilaname),this.thana&&this.dataForm.patchValue(this.thana),this.spinner.hide())},e=>{console.log(e),this.spinner.hide()})}editThanaData(e){this.spinner.show(),this.thanaService.editThanaData(e).subscribe(l=>{this.uiService.success(l.message),this.storageService.removeSessionData("thana_INPUT"),this.spinner.hide()},l=>{console.log(l),this.spinner.hide()})}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}getAllZila(){this.spinner.show(),this.zilaService.getAllZila().subscribe(e=>{this.spinner.hide(),this.zila=e.data},e=>{this.spinner.hide(),console.log(e)})}getAllCityByZilaId(e){this.spinner.show(),this.cityService.getAllCityByZilaId(e).subscribe(l=>{this.spinner.hide(),this.city=l.data,this.dataForm.patchValue({city:this.thana.cityname})},l=>{this.spinner.hide(),console.log(l)})}}return h.\u0275fac=function(e){return new(e||h)(t.Y36(m.qu),t.Y36(f.gz),t.Y36(b.F),t.Y36(d.g),t.Y36(R.F),t.Y36(B.V),t.Y36(g.t2),t.Y36(p.Z),t.Y36(s.V))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-add-thana"]],viewQuery:function(e,l){if(1&e&&t.Gf(E,5),2&e){let T;t.iGM(T=t.CRH())&&(l.templateForm=T.first)}},decls:28,vars:6,consts:[[2,"position","relative"],["style","position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: auto",4,"ngIf"],[1,"header-dialog"],["mat-dialog-title",""],["autocomplete","off","fxLayout","column","fxLayoutAlign","space-around center",3,"formGroup","ngSubmit"],["templateForm","ngForm"],["appearance","outline"],["formControlName","zilaname"],[3,"value","click",4,"ngFor","ngForOf"],["formControlName","cityname"],[3,"value",4,"ngFor","ngForOf"],["formControlName","name","matInput","","placeholder","Enter Thana Name","required",""],["mat-raised-button","","color","primary","type","submit"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],[2,"position","absolute","left","0","top","0","right","0","bottom","0","margin","auto"],[3,"value","click"],[3,"value"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0),t.YNc(1,S,1,0,"mat-spinner",1),t.TgZ(2,"div",2)(3,"h1",3),t._uU(4,"Thana"),t.qZA()(),t.TgZ(5,"form",4,5),t.NdJ("ngSubmit",function(){return l.onSubmit()}),t.TgZ(7,"mat-form-field",6)(8,"mat-label"),t._uU(9,"Select Zila"),t.qZA(),t.TgZ(10,"mat-select",7),t.YNc(11,k,2,2,"mat-option",8),t.qZA()(),t.TgZ(12,"mat-form-field",6)(13,"mat-label"),t._uU(14,"Select City"),t.qZA(),t.TgZ(15,"mat-select",9),t.YNc(16,F,2,2,"mat-option",10),t.qZA()(),t.TgZ(17,"mat-form-field",6)(18,"mat-label"),t._uU(19,"Thana Name"),t.qZA(),t._UZ(20,"input",11),t.TgZ(21,"mat-error"),t._uU(22,"This field is required"),t.qZA()(),t.TgZ(23,"button",12),t._uU(24),t.qZA()()(),t.TgZ(25,"ngx-spinner",13)(26,"p",14),t._uU(27," Loading... "),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngIf",l.isLoading),t.xp6(4),t.Q6J("formGroup",l.dataForm),t.xp6(6),t.Q6J("ngForOf",l.zila),t.xp6(5),t.Q6J("ngForOf",l.city),t.xp6(8),t.Oqu(l.thana?"Edit thana":"Add thana"),t.xp6(1),t.Q6J("fullScreen",!0))},dependencies:[o.sg,o.O5,O.lW,i.TO,i.KE,i.hX,u.Nt,n.uh,P.gD,_.ey,m._Y,m.Fj,m.JJ,m.JL,m.Q7,m.sg,m.u,g.Ro,x.Ou],styles:[".header-dialog[_ngcontent-%COMP%]{margin:10px 0;width:100%;display:flex;align-items:center;justify-content:center;gap:15px}form[_ngcontent-%COMP%]{width:450px;margin:20px auto}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}"]}),h})();const N=[{path:"",component:U},{path:"add-thana",component:w},{path:"edit-thana/:id",component:w}];let z=(()=>{class h{}return h.\u0275fac=function(e){return new(e||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[f.Bz.forChild(N),f.Bz]}),h})()},78482:(y,M,a)=>{a.d(M,{Z:()=>b});var f=a(92340),r=a(5e3),t=a(40520),n=a(99826);const d=f.N.apiBaseLink+"/api/city/";let b=(()=>{class c{constructor(o,O){this.httpClient=o,this.router=O}addCity(o){return this.httpClient.post(d+"add-city",o)}getAllCity(){return this.httpClient.get(d+"get-all-city")}getCityByCitytId(o){return this.httpClient.get(d+"get-city-by-city-id/"+o)}getAllCityByZilaId(o){return this.httpClient.get(d+"get-city-by-zila-id/"+o)}getCityCount(o){return this.httpClient.get(d+"get-city-count/"+o)}editCityData(o){return this.httpClient.put(d+"edit-city-by-city",o)}deleteCityByCityId(o){return this.httpClient.delete(d+"delete-city-by-id/"+o)}}return c.\u0275fac=function(o){return new(o||c)(r.LFG(t.eN),r.LFG(n.F0))},c.\u0275prov=r.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},88211:(y,M,a)=>{a.d(M,{g:()=>b});var f=a(92340),r=a(5e3),t=a(40520),n=a(99826);const d=f.N.apiBaseLink+"/api/thana/";let b=(()=>{class c{constructor(o,O){this.httpClient=o,this.router=O}addThana(o){return this.httpClient.post(d+"add-thana",o)}getAllThana(){return this.httpClient.get(d+"get-all-thana")}getThanaByThanaId(o){return this.httpClient.get(d+"get-thana-by-thana-id/"+o)}getAllThanasByCityId(o){return this.httpClient.get(d+"get-all-thanas-by-city-id/"+o)}getAllThanasByZilaId(o){return this.httpClient.get(d+"get-all-thanas-by-zila-id/"+o)}getThanaCount(o){return this.httpClient.get(d+"get-thanas-count/"+o)}editThanaData(o){return this.httpClient.put(d+"edit-thana-by-thana",o)}deleteThanaByThanaId(o){return this.httpClient.delete(d+"delete-thana-by-id/"+o)}}return c.\u0275fac=function(o){return new(o||c)(r.LFG(t.eN),r.LFG(n.F0))},c.\u0275prov=r.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},51836:(y,M,a)=>{a.d(M,{V:()=>b});var f=a(92340),r=a(5e3),t=a(40520),n=a(99826);const d=f.N.apiBaseLink+"/api/zila/";let b=(()=>{class c{constructor(o,O){this.httpClient=o,this.router=O}addZila(o){return this.httpClient.post(d+"add-zila",o)}getAllZila(){return this.httpClient.get(d+"get-all-zila")}getZilaByzilaId(o){return this.httpClient.get(d+"get-zila-by-zila-id/"+o)}editZilaData(o){return this.httpClient.put(d+"edit-zila-by-zila",o)}deleteZilaByZilaId(o){return this.httpClient.delete(d+"delete-zila-by-id/"+o)}}return c.\u0275fac=function(o){return new(o||c)(r.LFG(t.eN),r.LFG(n.F0))},c.\u0275prov=r.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},15293:(y,M,a)=>{a.d(M,{$:()=>n});var f=a(48966),r=a(5e3),t=a(47423);let n=(()=>{class d{constructor(c,g){this.dialogRef=c,this.data=g}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}}return d.\u0275fac=function(c){return new(c||d)(r.Y36(f.so),r.Y36(f.WI))},d.\u0275cmp=r.Xpm({type:d,selectors:[["app-confirm-dialog"]],decls:12,vars:2,consts:[[1,"dialog-container"],[1,"confirm-dialog-area"],[1,"info"],[1,"actions-around"],["mat-raised-button","","color","warn","type","button",1,"btn-round",3,"click"],["mat-raised-button","","color","primary","type","button",1,"btn-round",3,"click"]],template:function(c,g){1&c&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),r._uU(4),r.qZA(),r.TgZ(5,"p"),r._uU(6),r.qZA()(),r.TgZ(7,"div",3)(8,"button",4),r.NdJ("click",function(){return g.onDismiss()}),r._uU(9," Cancel "),r.qZA(),r.TgZ(10,"button",5),r.NdJ("click",function(){return g.onConfirm()}),r._uU(11," Confirm "),r.qZA()()()()),2&c&&(r.xp6(4),r.Oqu(null==g.data?null:g.data.title),r.xp6(2),r.Oqu(null==g.data?null:g.data.message))},dependencies:[t.lW],styles:[".dialog-container[_ngcontent-%COMP%]{width:350px}.btn-round[_ngcontent-%COMP%]{margin:auto;width:150px;padding:5px;font-size:16px;border-radius:50px}.actions-around[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;margin-top:25px}.actions-around[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}@media only screen and (max-device-width: 599px){.dialog-container[_ngcontent-%COMP%]{width:95%;margin:0 auto}.btn-round[_ngcontent-%COMP%]{margin:auto;width:130px;padding:5px;font-size:14.5px;border-radius:50px}.btn-round[_ngcontent-%COMP%]:first-child{margin-right:10px}}"]}),d})()},20773:(y,M,a)=>{a.d(M,{Cq:()=>R,Ou:()=>m});var f=a(63191),r=a(70925),t=a(69808),n=a(5e3),d=a(90508),b=a(50727),c=a(46469);function g(p,s){if(1&p&&(n.O4$(),n._UZ(0,"circle",4)),2&p){const i=n.oxw(),u=n.MAs(1);n.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+i._spinnerAnimationLabel)("stroke-dashoffset",i._getStrokeDashOffset(),"px")("stroke-dasharray",i._getStrokeCircumference(),"px")("stroke-width",i._getCircleStrokeWidth(),"%")("transform-origin",i._getCircleTransformOrigin(u)),n.uIk("r",i._getCircleRadius())}}function o(p,s){if(1&p&&(n.O4$(),n._UZ(0,"circle",4)),2&p){const i=n.oxw(),u=n.MAs(1);n.Udp("stroke-dashoffset",i._getStrokeDashOffset(),"px")("stroke-dasharray",i._getStrokeCircumference(),"px")("stroke-width",i._getCircleStrokeWidth(),"%")("transform-origin",i._getCircleTransformOrigin(u)),n.uIk("r",i._getCircleRadius())}}const I=(0,d.pj)(class{constructor(p){this._elementRef=p}},"primary"),Z=new n.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function L(){return{diameter:100}}});class m extends I{constructor(s,i,u,P,_,x,E,S){super(s),this._document=u,this._diameter=100,this._value=0,this._resizeSubscription=b.w0.EMPTY,this.mode="determinate";const k=m._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),k.has(u.head)||k.set(u.head,new Set([100])),this._noopAnimations="NoopAnimations"===P&&!!_&&!_._forceAnimations,"mat-spinner"===s.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),_&&(_.color&&(this.color=this.defaultColor=_.color),_.diameter&&(this.diameter=_.diameter),_.strokeWidth&&(this.strokeWidth=_.strokeWidth)),i.isBrowser&&i.SAFARI&&E&&x&&S&&(this._resizeSubscription=E.change(150).subscribe(()=>{"indeterminate"===this.mode&&S.run(()=>x.markForCheck())}))}get diameter(){return this._diameter}set diameter(s){this._diameter=(0,f.su)(s),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(s){this._strokeWidth=(0,f.su)(s)}get value(){return"determinate"===this.mode?this._value:0}set value(s){this._value=Math.max(0,Math.min(100,(0,f.su)(s)))}ngOnInit(){const s=this._elementRef.nativeElement;this._styleRoot=(0,r.kV)(s)||this._document.head,this._attachStyleNode(),s.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const s=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${s} ${s}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(s){var i;const u=50*(null!==(i=s.currentScale)&&void 0!==i?i:1);return`${u}% ${u}%`}_attachStyleNode(){const s=this._styleRoot,i=this._diameter,u=m._diameters;let P=u.get(s);if(!P||!P.has(i)){const _=this._document.createElement("style");_.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),_.textContent=this._getAnimationText(),s.appendChild(_),P||(P=new Set,u.set(s,P)),P.add(i)}}_getAnimationText(){const s=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*s).replace(/END_VALUE/g,""+.2*s).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}m._diameters=new WeakMap,m.\u0275fac=function(s){return new(s||m)(n.Y36(n.SBq),n.Y36(r.t4),n.Y36(t.K0,8),n.Y36(n.QbO,8),n.Y36(Z),n.Y36(n.sBO),n.Y36(c.rL),n.Y36(n.R0b))},m.\u0275cmp=n.Xpm({type:m,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(s,i){2&s&&(n.uIk("aria-valuemin","determinate"===i.mode?0:null)("aria-valuemax","determinate"===i.mode?100:null)("aria-valuenow","determinate"===i.mode?i.value:null)("mode",i.mode),n.Udp("width",i.diameter,"px")("height",i.diameter,"px"),n.ekj("_mat-animation-noopable",i._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[n.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(s,i){1&s&&(n.O4$(),n.TgZ(0,"svg",0,1),n.YNc(2,g,1,11,"circle",2),n.YNc(3,o,1,9,"circle",3),n.qZA()),2&s&&(n.Udp("width",i.diameter,"px")("height",i.diameter,"px"),n.Q6J("ngSwitch","indeterminate"===i.mode),n.uIk("viewBox",i._getViewBox()),n.xp6(2),n.Q6J("ngSwitchCase",!0),n.xp6(1),n.Q6J("ngSwitchCase",!1))},dependencies:[t.RF,t.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],encapsulation:2,changeDetection:0});let R=(()=>{class p{}return p.\u0275fac=function(i){return new(i||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[d.BQ,t.ez,d.BQ]}),p})()}}]);