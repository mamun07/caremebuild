"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[5413],{85413:(x,c,o)=>{o.r(c),o.d(c,{MyReviewsModule:()=>R});var l=o(69808),u=o(99826),t=o(5e3),v=o(29264),g=o(5944),d=o(90868),a=o(50939),m=o(77484);function p(e,s){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"date"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA()()),2&e){const n=s.$implicit;t.xp6(2),t.Oqu(n.rating),t.xp6(2),t.Oqu(n.message),t.xp6(2),t.Oqu(t.xi3(7,5,n.date,"short")),t.xp6(3),t.Oqu(n.sku),t.xp6(2),t.Oqu(n.orderNo)}}function z(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"nz-tab",3),t.NdJ("nzClick",function(){const h=t.CHM(n).$implicit,w=t.oxw();return t.KtG(w.onTabSelect(h))}),t.TgZ(1,"nz-table",4,5)(3,"thead")(4,"tr")(5,"th"),t._uU(6,"Rating"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Reviews"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Date & Time"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"SKU"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Order No"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,p,12,8,"tr",6),t.qZA()()()}if(2&e){const n=s.$implicit,i=t.MAs(2),r=t.oxw();t.Q6J("nzTitle",n),t.xp6(1),t.Q6J("nzData",r.listOfParentData)("nzPageSize",10),t.xp6(15),t.Q6J("ngForOf",i.data)}}function M(e,s){1&e&&t._UZ(0,"input",7)}const Z=[{path:"",component:(()=>{class e{constructor(n,i){this.reviewService=n,this.userDataService=i,this.tabs=["All","To Reviews"],this.listOfParentData=[],this.value=3}ngOnInit(){this.getUserReviews()}getUserReviews(){this.reviewService.getAllByUser().subscribe(n=>{this.listOfParentData=n.data},n=>{console.log(n)})}onTabSelect(n){console.log(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(v.F),t.Y36(g.M))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-my-reviews"]],decls:5,vars:2,consts:[["nzSize","small",3,"nzExtra"],[3,"nzTitle","nzClick",4,"ngFor","ngForOf"],["extraTemplate",""],[3,"nzTitle","nzClick"],[3,"nzData","nzPageSize"],["table",""],[4,"ngFor","ngForOf"],["nz-search","","placeholder","Search by id"]],template:function(n,i){if(1&n&&(t.TgZ(0,"nz-card",0)(1,"nz-tabset"),t.YNc(2,z,17,4,"nz-tab",1),t.qZA()(),t.YNc(3,M,1,0,"ng-template",null,2,t.W1O)),2&n){const r=t.MAs(4);t.Q6J("nzExtra",r),t.xp6(2),t.Q6J("ngForOf",i.tabs)}},dependencies:[l.sg,d.xH,d.xw,a.N8,a.Uo,a._C,a.Om,a.p0,a.$Z,m.bd,l.uU]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(Z),u.Bz]}),e})();var T=o(87238),f=o(47614);let R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,T.AV,y,f.P]}),e})()}}]);