"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[2964],{72964:(E,c,s)=>{s.r(c),s.d(c,{CustomTagModule:()=>y});var u=s(69808),r=s(93075),t=s(5e3),p=s(52317),C=s(49727),_=s(61293),d=s(63640),h=s(11047),f=s(76042),v=s(82683),x=s(92643),g=s(50939),T=s(41894),Z=s(77484);function S(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"button",10),t.NdJ("click",function(){const l=t.CHM(n).$implicit,m=t.oxw();return t.KtG(m.onDelete(l._id))}),t._UZ(5,"i",11),t.qZA(),t.TgZ(6,"button",10),t.NdJ("click",function(){const l=t.CHM(n).$implicit,m=t.oxw();return t.KtG(m.edit(l._id,l))}),t._UZ(7,"i",12),t.qZA()()()}if(2&e){const n=i.$implicit;t.xp6(2),t.Oqu(n.tagname)}}function b(e,i){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"form",17),t.NdJ("ngSubmit",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.onSubmit())}),t.TgZ(2,"div",18)(3,"div",19)(4,"nz-form-item")(5,"nz-form-label",20),t._UZ(6,"i",21),t._uU(7," Name "),t.qZA(),t.TgZ(8,"nz-form-control",22)(9,"nz-input-group",23),t._UZ(10,"input",24),t.qZA()()()()()(),t.BQk()}if(2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("formGroup",n.dataForm),t.xp6(4),t.Q6J("nzSpan",24),t.xp6(3),t.Q6J("nzSpan",24)}}function M(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.showTagModal())}),t._UZ(1,"i",14),t._uU(2," Add Tag "),t.qZA(),t.TgZ(3,"nz-modal",15),t.NdJ("nzVisibleChange",function(a){t.CHM(n);const l=t.oxw();return t.KtG(l.isTag=a)})("nzOnCancel",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.tagCancel())})("nzOnOk",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.onSubmit())}),t.YNc(4,b,11,3,"ng-container",16),t.qZA()}if(2&e){const n=t.oxw();t.xp6(3),t.Q6J("nzVisible",n.isTag)}}let A=(()=>{class e{constructor(n,o,a,l){this.fb=n,this.tagService=o,this.msg=a,this.reloadService=l,this.isTag=!1,this.tags=[],this.id=null,this.showError=!1}ngOnInit(){this.initModule(),this.getAllTags(),this.reloadService.refreshTags$.subscribe(()=>{this.initModule(),this.getAllTags()})}getAllTags(){this.tagService.getAllTags().subscribe(n=>{this.tags=n.data},n=>{this.msg.error(n.message)})}initModule(){this.dataForm=this.fb.group({tagname:[null,r.kI.required]})}showTagModal(){this.isTag=!0,this.id=null,this.showError=!1}tagCancel(){console.log("Button cancel clicked!"),this.isTag=!1,this.id=null,this.showError=!1}onSubmit(){if(this.dataForm.invalid)return this.msg.error("Please input all the required fields"),void(this.showError=!0);this.showError=!1;let n=this.dataForm.value;console.log(n),this.id?this.onEdit(this.id):this.add(n)}onDelete(n){this.tagService.deleteTag(n).subscribe(o=>{this.msg.success(o.message),this.reloadService.needRefreshTags$()},o=>{console.log(o.message)})}add(n){this.tagService.addTag(n).subscribe(o=>{this.msg.success(o.message),this.reloadService.needRefreshTags$(),this.isTag=!1},o=>{console.log(o.message)})}onEdit(n){const o=Object.assign(Object.assign({},this.dataForm.value),{_id:n});this.tagService.editTag(o).subscribe(a=>{this.msg.success(a.message),this.reloadService.needRefreshTags$(),this.isTag=!1},a=>{console.log(a.message)})}edit(n,o){this.id=n,this.dataForm.patchValue(o),this.isTag=!0}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.qu),t.Y36(p.W),t.Y36(C.dD),t.Y36(_.f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-custom-tag"]],decls:21,vars:4,consts:[["nz-row",""],["nz-col","","nzXs","24","nzSm","4"],[1,"customer_setting"],["nz-col","","nzXs","24"],["nzTitle","Customer Types","nzSize","small",1,"customer_tags",3,"nzExtra"],["nz-row","","nzGutter","16"],["nzSize","small",3,"nzData","nzPageSize"],["basicTable",""],[4,"ngFor","ngForOf"],["extraTemplate",""],["nz-button","",3,"click"],[1,"las","la-lg","la-trash"],[1,"las","la-lg","la-edit"],["nz-button","","nzType","dashed",3,"click"],[1,"las","la-lg","la-plus"],["nzTitle","Create New Badge","nzOkText","Assign Badge",3,"nzVisible","nzVisibleChange","nzOnCancel","nzOnOk"],[4,"nzModalContent"],["nz-form","",3,"formGroup","ngSubmit"],["nz-row","","nzGutter","8"],["nz-col","","nzXs","24","nzLg","24"],["nzFor","tagname",3,"nzSpan"],[1,"las","la-lg","la-tags"],[3,"nzSpan"],["nzCompact",""],["nz-input","","placeholder","Tag Name","name","tagname","type","text","id","tagname","formControlName","tagname",2,"width","69%","margin-right","1%"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Custom Tags"),t.qZA()()(),t.TgZ(5,"div",3)(6,"nz-card",4)(7,"div",5)(8,"div",3)(9,"nz-table",6,7)(11,"thead")(12,"tr")(13,"th"),t._uU(14,"Tag Name"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Action"),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,S,8,1,"tr",8),t.qZA()()()()(),t.YNc(19,M,5,1,"ng-template",null,9,t.W1O),t.qZA()()),2&n){const a=t.MAs(20);t.xp6(6),t.Q6J("nzExtra",a),t.xp6(3),t.Q6J("nzData",o.tags)("nzPageSize",10),t.xp6(9),t.Q6J("ngForOf",o.tags)}},dependencies:[u.sg,d.du,d.Hf,h.Zp,h.gB,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,f.ix,v.w,x.dQ,g.N8,g.Uo,g._C,g.Om,g.p0,g.$Z,T.t3,T.SK,Z.bd],styles:[".customer_setting[_ngcontent-%COMP%]{padding:15px 0}nz-form-control[_ngcontent-%COMP%]{margin-bottom:15px}"]}),e})();var z=s(99826);const O=[{path:"",component:A}];let F=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[z.Bz.forChild(O),z.Bz]}),e})();var J=s(90898),N=s(27989);let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,F,N.P,J.q]}),e})()}}]);