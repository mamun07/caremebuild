"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[8117],{57850:(M,P,o)=>{o.d(P,{l:()=>N});var p=o(99826),r=o(93075),m=o(48966),e=o(5e3),f=o(85314),h=o(73071),g=o(20355),l=o(57267),v=o(47423),c=o(67322),O=o(77531),b=o(23322),T=o(63963);let S=(()=>{class s{constructor(t,i,n,a,d,C,_,x){this.fb=t,this.uiService=i,this.userService=n,this.bulkSmsService=a,this.utilsService=d,this.dialogRef=C,this.data=_,this.matDialog=x,this.submitted=!1,this.countDown=0,this.timeInstance=null,this.expireCountDown=0,this.timeInstanceExpire=null,this.otpMatched=!1}ngOnInit(){this.data&&(this.phoneNo=this.data.phoneNo,this.generatedOtpCode=this.data.otpCode,this.registrationData=this.data.registrationData,this.countOtpExpireTime(300),this.countResendTime(60)),this.verificationForm=this.fb.group({code1:["",r.kI.required],code2:["",r.kI.required],code3:["",r.kI.required],code4:["",r.kI.required],code5:["",r.kI.required],code6:["",r.kI.required]})}nextStep(t,i){this.verificationForm.valid&&this.onSubmit();const n=document.getElementById("code"+(i-1)),a=document.getElementById("code"+(i+1));if("Backspace"===t.code&&""===t.target.value){if(n)return void n.focus()}else if(a)return void a.focus()}paste(t){const n=t.clipboardData.getData("text");this.verificationForm.setValue({code1:n.charAt(0),code2:n.charAt(1),code3:n.charAt(2),code4:n.charAt(3),code5:n.charAt(4),code6:n.charAt(5)}),this.onSubmit()}focused(t){2===t&&""===this.verificationForm.controls.code1.value&&document.getElementById("code1").focus(),3===t&&(""===this.verificationForm.controls.code1.value||""===this.verificationForm.controls.code2.value)&&document.getElementById("code2").focus(),4===t&&(""===this.verificationForm.controls.code1.value||""===this.verificationForm.controls.code2.value||""===this.verificationForm.controls.code3.value)&&document.getElementById("code3").focus(),5===t&&(""===this.verificationForm.controls.code1.value||""===this.verificationForm.controls.code2.value||""===this.verificationForm.controls.code3.value||""===this.verificationForm.controls.code4.value)&&document.getElementById("code4").focus(),6===t&&(""===this.verificationForm.controls.code1.value||""===this.verificationForm.controls.code2.value||""===this.verificationForm.controls.code3.value||""===this.verificationForm.controls.code4.value||""===this.verificationForm.controls.code5.value)&&document.getElementById("code5").focus()}onSubmit(){this.submitted=!0,this.verificationForm.invalid||this.verifyOtpCode(this.verificationForm.value.code1+this.verificationForm.value.code2+this.verificationForm.value.code3+this.verificationForm.value.code4+this.verificationForm.value.code5+this.verificationForm.value.code6)}sendSmsBySslAPi(t,i,n){this.bulkSmsService.sendSmsBySslAPi({sms:i,csmsid:n,msisdn:t}).subscribe(d=>{d.success?(this.countOtpExpireTime(300),this.countResendTime(60)):this.uiService.wrong("Something went wrong! Please try again.")},d=>{console.log(d)})}sendLoginCode(){const t="88"+this.phoneNo;this.generatedOtpCode=this.utilsService.getRandomOtpCode6(),this.sendSmsBySslAPi(t,this.generatedOtpCode+" is your OTP (One-Time Password) for Esquire Electronics. OTP will expire in 5 minutes.",t)}resendLoginCode(){clearInterval(this.timeInstance),clearInterval(this.timeInstanceExpire),this.sendLoginCode()}verifyOtpCode(t){this.generatedOtpCode?t===this.generatedOtpCode?(this.dialogRef.close({regProgress:!0}),this.userService.userRegistration(this.registrationData)):this.uiService.wrong("Your OTP code is incorrect!"):(this.dialogRef.close({regProgress:!1}),this.uiService.wrong("Your OTP code is expired! Please try again"))}countResendTime(t){this.timeInstance=setInterval((n=>()=>{this.countDown=n,(n=0===n?0:n-1)<=0&&(clearInterval(this.timeInstance),this.countDown=0)})(t),1e3)}countOtpExpireTime(t){this.timeInstanceExpire=setInterval((n=>()=>{this.expireCountDown=n,(n=0===n?0:n-1)<=0&&(clearInterval(this.timeInstanceExpire),this.expireCountDown=0,this.generatedOtpCode=null)})(t),1e3)}ngOnDestroy(){this.timeInstance&&clearInterval(this.timeInstance),this.timeInstanceExpire&&clearInterval(this.timeInstanceExpire),this.registrationData=null,this.otpMatched=!1}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(r.qu),e.Y36(f.F),e.Y36(h.K),e.Y36(g.D),e.Y36(l.F),e.Y36(m.so),e.Y36(m.WI),e.Y36(m.uw))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-phone-verification-dialog"]],decls:26,vars:6,consts:[[1,"top"],[3,"formGroup"],[1,"code-area"],["appearance","outline",1,"verify-input-field"],["matInput","","type","text","id","code1","formControlName","code1","maxlength","1","autofocus","",3,"keyup","focus","paste"],["matInput","","type","text","id","code2","formControlName","code2","maxlength","1",3,"keyup","focus"],["matInput","","type","text","id","code3","formControlName","code3","maxlength","1",3,"keyup","focus"],["matInput","","type","text","id","code4","formControlName","code4","maxlength","1",3,"keyup","focus"],["matInput","","type","text","id","code5","formControlName","code5","maxlength","1",3,"keyup","focus"],["matInput","","type","text","id","code6","formControlName","code6","maxlength","1",3,"keyup","focus"],[1,"verification-timing-area",3,"fxHide"],[1,"fa","fa-clock"],[1,"action"],["type","button","fxHide","","mat-raised-button","","color","accent",3,"fxShow","click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"p"),e._uU(2,"We have sent a 6 digit OTP to your mobile number. Enter the OTP we will automatically verify this. "),e.qZA()(),e.TgZ(3,"form",1)(4,"div",2)(5,"mat-form-field",3)(6,"input",4),e.NdJ("keyup",function(a){return i.nextStep(a,1)})("focus",function(){return i.focused(1)})("paste",function(a){return i.paste(a)}),e.qZA()(),e.TgZ(7,"mat-form-field",3)(8,"input",5),e.NdJ("keyup",function(a){return i.nextStep(a,2)})("focus",function(){return i.focused(2)}),e.qZA()(),e.TgZ(9,"mat-form-field",3)(10,"input",6),e.NdJ("keyup",function(a){return i.nextStep(a,3)})("focus",function(){return i.focused(3)}),e.qZA()(),e.TgZ(11,"mat-form-field",3)(12,"input",7),e.NdJ("keyup",function(a){return i.nextStep(a,4)})("focus",function(){return i.focused(4)}),e.qZA()(),e.TgZ(13,"mat-form-field",3)(14,"input",8),e.NdJ("keyup",function(a){return i.nextStep(a,5)})("focus",function(){return i.focused(5)}),e.qZA()(),e.TgZ(15,"mat-form-field",3)(16,"input",9),e.NdJ("keyup",function(a){return i.nextStep(a,6)})("focus",function(){return i.focused(6)}),e.qZA()()(),e.TgZ(17,"div",10)(18,"h3")(19,"span"),e._UZ(20,"i",11),e.qZA(),e._uU(21),e.ALo(22,"numMinDigit"),e.qZA()(),e.TgZ(23,"div",12)(24,"button",13),e.NdJ("click",function(){return i.resendLoginCode()}),e._uU(25,"Resent"),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("formGroup",i.verificationForm),e.xp6(14),e.Q6J("fxHide",0===i.countDown),e.xp6(4),e.hij("",e.lcZ(22,4,i.countDown)," seconds"),e.xp6(3),e.Q6J("fxShow",i.countDown<=0))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.nD,r.sg,r.u,v.lW,c.KE,O.Nt,b.b8,T.C],styles:[".top[_ngcontent-%COMP%]{padding:5px 0}.top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}form[_ngcontent-%COMP%]{width:100%}.code-area[_ngcontent-%COMP%]{width:360px;margin:0 auto;display:flex;flex-direction:row;justify-content:space-between}.code-area[_ngcontent-%COMP%]   .verify-input-field[_ngcontent-%COMP%]{flex:1;width:100%;max-width:48px}.code-area[_ngcontent-%COMP%]   .verify-input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{text-align:center!important}.action[_ngcontent-%COMP%]{text-align:center;margin-top:5px}.verification-timing-area[_ngcontent-%COMP%]{display:block;text-align:center}.verification-timing-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#ff4b77;font-family:Roboto,sans-serif;font-style:normal;display:block;font-size:20px;font-weight:500;line-height:30px;text-align:center}.verification-timing-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:8px;font-size:23px;display:inline-block;margin-top:3px}@media only screen and (max-width: 599px){.code-area[_ngcontent-%COMP%]{width:100%}.code-area[_ngcontent-%COMP%]   .verify-input-field[_ngcontent-%COMP%]{max-width:45px}}"]}),s})();var D=o(63112),w=o(60063),y=o(50072),F=o(61293),A=o(25245),I=o(93829);const E=[{path:"",component:(()=>{class s{constructor(t,i,n,a,d,C,_,x,R){this.userService=t,this.uiService=i,this.spinner=n,this.fb=a,this.utilsService=d,this.bulkSmsService=C,this.dialog=_,this.router=x,this.reloadService=R,this.isLoading=!1,this.isHiddenPass=!0,this.isHiddenConPass=!0,this.genders=D.mb,this.mPhoneNumber=null}ngOnInit(){this.spinner.hide(),this.dataForm=this.fb.group({phoneNo:[null,r.kI.required]})}onSubmitForm(){if(this.dataForm.invalid)return this.dataForm.markAllAsTouched(),void this.uiService.warn("Please complete all the required field");if(10===this.dataForm.value.phoneNo.length)this.mPhoneNumber="880"+this.dataForm.value.phoneNo;else{if(11!==this.dataForm.value.phoneNo.length)return this.dataForm.get("phoneNo").setErrors({invalid:!0}),void this.uiService.warn("Please enter a valid 11 digit phone no");this.mPhoneNumber="88"+this.dataForm.value.phoneNo}this.isLoading=!0,this.spinner.show(),this.checkAndGetUserByPhone(this.dataForm.value.phoneNo)}sentSingleBulkSms(t){this.generatedOtpCode=this.utilsService.getRandomOtpCode6(),this.bulkSmsService.sentSingleBulkSms(t,this.generatedOtpCode+" is your OTP (One-Time Password) for CaremeBd. OTP will expire in 5 minutes.").subscribe(n=>{this.isLoading=!1,this.spinner.hide(),n.success?this.openComponentDialog():(this.isLoading=!1,this.spinner.hide(),this.uiService.wrong("Something went wrong! Please try again."))},n=>{this.isLoading=!1,this.uiService.wrong("Something went wrong! Please try again."),console.log(n),this.spinner.hide()})}checkAndGetUserByPhone(t){this.userService.checkAndGetUserByPhone(t).subscribe(i=>{if(i.data)this.isLoading=!1,this.spinner.hide(),this.uiService.warn("This phone no is already registered"),this.dataForm.get("phoneNo").setErrors({invalid:!0}),this.dataForm.get("phoneNo").markAsTouched({onlySelf:!0});else{const a="880"+this.dataForm.value.phoneNo;this.generatedOtpCode=this.utilsService.getRandomOtpCode6(),console.log(this.generatedOtpCode),this.sentSingleBulkSms(a)}},i=>{this.isLoading=!1,this.spinner.hide(),console.log(i)})}openComponentDialog(){this.dialog.open(S,{data:{otpCode:this.generatedOtpCode,phoneNo:this.mPhoneNumber},panelClass:["theme-dialog","dialog-no-radius","small-padding-sm"],width:"95%",maxWidth:"1080px",autoFocus:!1,disableClose:!0}).afterClosed().subscribe(n=>{if(n.regProgress){this.spinner.show();const a={fullName:null,phoneNo:this.mPhoneNumber,email:null,password:null,gender:null,isPhoneVerified:!0,registrationType:"phone",isEmailVerified:!1,hasAccess:!0,username:this.mPhoneNumber,status:w.J.ACTIVE,shippingAddress:null,points:0,redeemedPoints:0,earnedPoints:0,totalReturn:0,totalReturnAmount:0,registrationAt:this.getDate()};this.userService.userRegistration(a,this.router.url)}else console.log("OTP not matched or closed dialog")})}getDate(){var t=new Date;let i=t.getMonth()+1>9?t.getMonth()+1:"0"+(t.getMonth()+1),n=t.getDate()+1>9?t.getDate()+1:"0"+(t.getDate()+1);return t.getFullYear()+"-"+i+"-"+n}ngOnDestroy(){}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(h.K),e.Y36(f.F),e.Y36(y.t2),e.Y36(r.qu),e.Y36(l.F),e.Y36(g.D),e.Y36(m.uw),e.Y36(p.F0),e.Y36(F.f))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-registration"]],decls:30,vars:4,consts:[["id","login"],[1,"container-view"],[1,"head"],[1,"input-area",3,"formGroup","ngSubmit"],[1,"input-field"],["appearance","outline",1,"c-mat-field"],["matPrefix",""],["matInput","","formControlName","phoneNo","type","tel","digitOnly","",3,"minLength","maxLength"],["matSuffix",""],[1,"action"],["mat-raised-button","","type","submit"],[1,"bottom"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"]],template:function(t,i){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2"),e._uU(4,"Enter Your Mobile Number"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"You will receive a one time pin as an SMS"),e.qZA()(),e.TgZ(7,"form",3),e.NdJ("ngSubmit",function(){return i.onSubmitForm()}),e.TgZ(8,"div",4)(9,"mat-form-field",5)(10,"mat-label"),e._uU(11,"Mobile Number"),e.qZA(),e.TgZ(12,"span",6),e._uU(13,"+880 \xa0"),e.qZA(),e._UZ(14,"input",7),e.TgZ(15,"mat-icon",8),e._uU(16,"call"),e.qZA(),e.TgZ(17,"mat-error"),e._uU(18,"Please enter a valid mobile Number"),e.qZA()()(),e.TgZ(19,"div",9)(20,"button",10),e._uU(21," Login With OTP "),e.qZA()()(),e.TgZ(22,"div",11)(23,"p"),e._uU(24,"After Submit Your Mobile Number"),e.qZA(),e.TgZ(25,"h4"),e._uU(26,"Please check your inbox to get otp"),e.qZA()()()(),e.TgZ(27,"ngx-spinner",12)(28,"p",13),e._uU(29," Loading... "),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("formGroup",i.dataForm),e.xp6(7),e.Q6J("minLength",10)("maxLength",11),e.xp6(13),e.Q6J("fullScreen",!0))},dependencies:[v.lW,A.Hw,c.TO,c.KE,c.hX,c.qo,c.R9,O.Nt,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,y.Ro,I.L],styles:["img[_ngcontent-%COMP%]{display:block;width:100%;height:auto}#login[_ngcontent-%COMP%]{width:100%;display:grid;place-items:center;margin-bottom:30px}.container-view[_ngcontent-%COMP%]{width:95%;max-width:1080px;margin:0 auto;background:#FFFFFF;padding:52px 16px;box-sizing:border-box}.top[_ngcontent-%COMP%]{width:100%;text-align:end}.head[_ngcontent-%COMP%]{width:100%;margin:36px 0;text-align:center}.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:#474747;font-size:28px;font-weight:700}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:#aaa;font-size:18px;padding:8px 0}.static-prefix[_ngcontent-%COMP%]{top:-3px!important}.input-area[_ngcontent-%COMP%]{width:100%;margin:10px 0;text-align:center}.input-area[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]{width:100%}.input-area[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   .c-mat-field[_ngcontent-%COMP%]{width:90%;max-width:520px;margin:0 auto}.input-area[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#ef3688;color:#fff;font-family:Roboto,sans-serif;font-weight:600;padding:3px 50px;border-radius:30px}.bottom[_ngcontent-%COMP%]{width:100%;margin:36px 0;text-align:center}.bottom[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:#ea8f90;font-size:20px;font-weight:600}.bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:#494949;font-weight:500;font-size:16px;padding:6px 0}  .c-mat-field .mat-form-field-outline-start{border-radius:28px 0 0 28px!important;min-width:28px!important}  .c-mat-field .mat-form-field-outline-end{border-radius:0 28px 28px 0!important}  .c-mat-field .mat-form-field-prefix{top:-1px!important;padding:0 8px;font-family:Roboto,sans-serif;color:#494949;font-weight:600}@media (max-width: 450px){.container-view[_ngcontent-%COMP%]{padding:40px 16px}.head[_ngcontent-%COMP%]{margin:30px 0}.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:25px}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.bottom[_ngcontent-%COMP%]{width:100%;margin:36px 0;text-align:center}.bottom[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px}.bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px}}  .container-view .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#ef3688}  .container-view .mat-form-field.mat-focused .mat-form-field-label{color:#ef3688}"]}),s})()}];let N=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[p.Bz.forChild(E),p.Bz]}),s})()},98970:(M,P,o)=>{o.d(P,{y:()=>g});var p=o(69808),r=o(93075),m=o(90898),e=o(24586),f=o(23322),h=o(5e3);let g=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[p.ez,r.UX,m.q,e.D,f.aT]}),l})()}}]);