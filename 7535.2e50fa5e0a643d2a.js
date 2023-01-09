"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[7535],{37535:(O,u,a)=>{a.r(u),a.d(u,{OrderTagModule:()=>N});var h=a(69808),m=a(99826),i=a(93075),t=a(5e3),T=a(56719),g=a(49727),p=a(61293),s=a(63640),z=a(11047),v=a(76042),C=a(82683),x=a(92643),c=a(50939),f=a(41894),S=a(77484);function Z(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"button",10),t.NdJ("click",function(){const d=t.CHM(n).$implicit,_=t.oxw();return t.KtG(_.onDelete(d._id))}),t._UZ(5,"i",11),t.qZA(),t.TgZ(6,"button",10),t.NdJ("click",function(){const d=t.CHM(n).$implicit,_=t.oxw();return t.KtG(_.edit(d._id,d))}),t._UZ(7,"i",12),t.qZA()()()}if(2&e){const n=l.$implicit;t.xp6(2),t.Oqu(n.tagname)}}function M(e,l){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"form",17),t.NdJ("ngSubmit",function(){t.CHM(n);const r=t.oxw(2);return t.KtG(r.onSubmit())}),t.TgZ(2,"div",18)(3,"div",19)(4,"nz-form-item")(5,"nz-form-label",20),t._UZ(6,"i",21),t._uU(7," Name "),t.qZA(),t.TgZ(8,"nz-form-control",22)(9,"nz-input-group",23),t._UZ(10,"input",24),t.qZA()()()()()(),t.BQk()}if(2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("formGroup",n.dataForm),t.xp6(4),t.Q6J("nzSpan",24),t.xp6(3),t.Q6J("nzSpan",24)}}function A(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.showTagModal())}),t._UZ(1,"i",14),t._uU(2," Add Tag "),t.qZA(),t.TgZ(3,"nz-modal",15),t.NdJ("nzVisibleChange",function(r){t.CHM(n);const d=t.oxw();return t.KtG(d.isTag=r)})("nzOnCancel",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.tagCancel())})("nzOnOk",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.onSubmit())}),t.YNc(4,M,11,3,"ng-container",16),t.qZA()}if(2&e){const n=t.oxw();t.xp6(3),t.Q6J("nzVisible",n.isTag)}}const b=[{path:"",component:(()=>{class e{constructor(n,o,r,d){this.fb=n,this.tagService=o,this.msg=r,this.reloadService=d,this.isTag=!1,this.tags=[],this.id=null,this.showError=!1}ngOnInit(){this.initModule(),this.getAllTags(),this.reloadService.refreshTags$.subscribe(()=>{this.initModule(),this.getAllTags()})}getAllTags(){this.tagService.getAllTags().subscribe(n=>{this.tags=n.data},n=>{this.msg.error(n.message)})}initModule(){this.dataForm=this.fb.group({tagname:[null,i.kI.required]})}showTagModal(){this.isTag=!0,this.id=null,this.showError=!1}tagCancel(){console.log("Button cancel clicked!"),this.isTag=!1,this.id=null,this.showError=!1}onSubmit(){if(this.dataForm.invalid)return this.msg.error("Please input all the required fields"),void(this.showError=!0);this.showError=!1;let n=this.dataForm.value;console.log(n),this.id?this.onEdit(this.id):this.add(n)}onDelete(n){this.tagService.deleteTag(n).subscribe(o=>{this.msg.success(o.message),this.reloadService.needRefreshTags$()},o=>{console.log(o.message)})}add(n){this.tagService.addTag(n).subscribe(o=>{this.msg.success(o.message),this.reloadService.needRefreshTags$(),this.isTag=!1},o=>{console.log(o.message)})}onEdit(n){const o=Object.assign(Object.assign({},this.dataForm.value),{_id:n});this.tagService.editTag(o).subscribe(r=>{this.msg.success(r.message),this.reloadService.needRefreshTags$(),this.isTag=!1},r=>{console.log(r.message)})}edit(n,o){this.id=n,this.dataForm.patchValue(o),this.isTag=!0}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.qu),t.Y36(T.L),t.Y36(g.dD),t.Y36(p.f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-order-tag"]],decls:21,vars:4,consts:[["nz-row",""],["nz-col","","nzXs","24","nzSm","4"],[1,"customer_setting"],["nz-col","","nzXs","24"],["nzTitle","Customer Types","nzSize","small",1,"customer_tags",3,"nzExtra"],["nz-row","","nzGutter","16"],["nzSize","small",3,"nzData","nzPageSize"],["basicTable",""],[4,"ngFor","ngForOf"],["extraTemplate",""],["nz-button","",3,"click"],[1,"las","la-lg","la-trash"],[1,"las","la-lg","la-edit"],["nz-button","","nzType","dashed",3,"click"],[1,"las","la-lg","la-plus"],["nzTitle","Create New Tag","nzOkText","Assign Badge",3,"nzVisible","nzVisibleChange","nzOnCancel","nzOnOk"],[4,"nzModalContent"],["nz-form","",3,"formGroup","ngSubmit"],["nz-row","","nzGutter","8"],["nz-col","","nzXs","24","nzLg","24"],["nzFor","tagname",3,"nzSpan"],[1,"las","la-lg","la-tags"],[3,"nzSpan"],["nzCompact",""],["nz-input","","placeholder","Tag Name","name","tagname","type","text","id","tagname","formControlName","tagname",2,"width","69%","margin-right","1%"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Order Tags"),t.qZA()()(),t.TgZ(5,"div",3)(6,"nz-card",4)(7,"div",5)(8,"div",3)(9,"nz-table",6,7)(11,"thead")(12,"tr")(13,"th"),t._uU(14,"Tag Name"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Action"),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,Z,8,1,"tr",8),t.qZA()()()()(),t.YNc(19,A,5,1,"ng-template",null,9,t.W1O),t.qZA()()),2&n){const r=t.MAs(20);t.xp6(6),t.Q6J("nzExtra",r),t.xp6(3),t.Q6J("nzData",o.tags)("nzPageSize",10),t.xp6(9),t.Q6J("ngForOf",o.tags)}},dependencies:[h.sg,s.du,s.Hf,z.Zp,z.gB,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,v.ix,C.w,x.dQ,c.N8,c.Uo,c._C,c.Om,c.p0,c.$Z,f.t3,f.SK,S.bd],styles:[".customer_setting[_ngcontent-%COMP%]{padding:15px 0}nz-form-control[_ngcontent-%COMP%]{margin-bottom:15px}"]}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(b),m.Bz]}),e})();var F=a(72408),J=a(90898);let N=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.ez,E,F.P,J.q]}),e})()},56719:(O,u,a)=>{a.d(u,{L:()=>T});var h=a(92340),m=a(5e3),i=a(40520);const t=h.N.apiBaseLink+"/api/orderTag/";let T=(()=>{class g{constructor(s){this.http=s}addTag(s){return this.http.post(t+"add-new-tag",s)}getAllTags(){return this.http.get(t+"get-all-tags")}deleteTag(s){return this.http.delete(t+"delete-tag/"+s)}editTag(s){return this.http.put(t+"edit-tag",{tag:s})}}return g.\u0275fac=function(s){return new(s||g)(m.LFG(i.eN))},g.\u0275prov=m.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);