"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[9231],{39231:(Z,l,t)=>{t.r(l),t.d(l,{AdminAuthModule:()=>O});var g=t(77446),f=t(69808),o=t(93075),n=t(5e3),h=t(85314),v=t(87501),x=t(22313),d=t(50072),u=t(99826),r=t(67322),c=t(77531),p=t(25245),C=t(77484);let b=(()=>{class e{constructor(i,a,s,P){this.uiService=i,this.adminService=a,this.meta=s,this.spinner=P,this.username=new o.NI("",[o.kI.required]),this.password=new o.NI("",[o.kI.required]),this.visibility=!1,this.date=new Date,this.googleNoIndex()}ngOnInit(){this.loginForm=new o.cw({username:this.username,password:this.password})}visibilityChange(){this.visibility=!this.visibility}onLogin(){if(this.loginForm.invalid)return void this.uiService.wrong("Invalid Input field!");this.spinner.show();const i=this.loginForm.value.username.trim().toLowerCase();this.adminService.adminLogin({username:i,password:this.loginForm.value.password})}googleNoIndex(){this.meta.updateTag({name:"robots",content:"noindex"}),this.meta.updateTag({name:"googlebot",content:"noindex"})}}return e.\u0275fac=function(i){return new(i||e)(n.Y36(h.F),n.Y36(v.l),n.Y36(x.h_),n.Y36(d.t2))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-admin-auth"]],decls:30,vars:4,consts:[[1,"login_page"],[1,"login_card"],["src","/assets/brand/logo-white.svg","alt","Fortune Tech"],[1,"login-form",3,"formGroup","ngSubmit"],[1,"mat-data-input-field"],["type","text","formControlName","username","matInput","","placeholder","Enter your username..."],["matSuffix",""],["formControlName","password","matInput","","placeholder","Enter your password...",3,"type"],["matSuffix","",3,"click"],[1,"submit-area"],["type","submit"],["routerLink","/reset-password"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"]],template:function(i,a){1&i&&(n.TgZ(0,"div",0)(1,"nz-card",1),n._UZ(2,"img",2),n.TgZ(3,"form",3),n.NdJ("ngSubmit",function(){return a.onLogin()}),n.TgZ(4,"mat-form-field",4)(5,"mat-label"),n._uU(6,"Username or Email Address"),n.qZA(),n._UZ(7,"input",5),n.TgZ(8,"mat-icon",6),n._uU(9,"person"),n.qZA(),n.TgZ(10,"mat-error"),n._uU(11,"This field is required"),n.qZA()(),n.TgZ(12,"mat-form-field",4)(13,"mat-label"),n._uU(14,"Password"),n.qZA(),n._UZ(15,"input",7),n.TgZ(16,"mat-icon",8),n.NdJ("click",function(){return a.visibilityChange()}),n._uU(17),n.qZA(),n.TgZ(18,"mat-error"),n._uU(19,"This field is required"),n.qZA()(),n.TgZ(20,"div",9)(21,"mat-checkbox"),n._uU(22,"Remember me"),n.qZA(),n.TgZ(23,"button",10),n._uU(24,"Login"),n.qZA()(),n.TgZ(25,"a",11),n._uU(26,"Lost your password?"),n.qZA()()()(),n.TgZ(27,"ngx-spinner",12)(28,"p",13),n._uU(29,"Loading..."),n.qZA()()),2&i&&(n.xp6(3),n.Q6J("formGroup",a.loginForm),n.xp6(12),n.Q6J("type",a.visibility?"text":"password"),n.xp6(2),n.Oqu(a.visibility?"visibility_off":"visibility"),n.xp6(10),n.Q6J("fullScreen",!0))},dependencies:[u.yS,r.TO,r.KE,r.hX,r.R9,c.Nt,g.oG,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,p.Hw,d.Ro,C.bd],styles:[".login_page[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh}.login_page[_ngcontent-%COMP%]   .login_card[_ngcontent-%COMP%]{width:400px;padding:35px;border-radius:10px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 60px #0000001f;text-align:center}.login_page[_ngcontent-%COMP%]   .login_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;margin-bottom:40px}.login-form[_ngcontent-%COMP%]{width:100%;font-size:14px}.login-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-top:20px;text-decoration:none;color:#a8a8a8;text-align:left}.login-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.submit-area[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin:10px 0}.submit-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:5px 20px;background:#1b75bb;border:1px solid #1b75bb;color:#fff;transition:.3s;border-radius:3px}.submit-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#63af00;border:1px solid #63af00}.mat-data-input-field[_ngcontent-%COMP%]{width:100%;align-items:flex-end!important;background:#fff}.mat-label[_ngcontent-%COMP%], .mat-icon[_ngcontent-%COMP%]{color:#4e4e4e}.mat-error[_ngcontent-%COMP%]{opacity:.8}@media (max-width: 500px){.login_page[_ngcontent-%COMP%]   .login_card[_ngcontent-%COMP%]{width:350px;padding:20px}.login_page[_ngcontent-%COMP%]   .login_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;margin-bottom:30px}}"]}),e})();var A=t(47423),y=t(96120);const M=[{path:"",component:b}];let O=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[f.ez,u.Bz.forChild(M),r.lN,c.c,A.ot,g.p9,o.UX,p.Ps,d.ef,y.P]}),e})()}}]);