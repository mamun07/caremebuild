"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[992],{10992:(Z,c,o)=>{o.r(c),o.d(c,{UserRolesModule:()=>y});var g=o(90898),r=o(69808),t=o(5e3),m=o(77446),d=o(67322),p=o(77531),u=o(74107),b=o(90508),s=o(93075);function x(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div")(4,"h3"),t._uU(5,"Invite User"),t.qZA()(),t.TgZ(6,"div")(7,"span",4),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.invitePopUpHide())}),t._UZ(8,"i",5),t.qZA()()(),t.TgZ(9,"div",6)(10,"form",7)(11,"div",8)(12,"h3"),t._uU(13,"Email Address*"),t.qZA(),t.TgZ(14,"div")(15,"mat-form-field",9),t._UZ(16,"input",10),t.qZA()()(),t.TgZ(17,"div",8)(18,"h3"),t._uU(19,"Name*"),t.qZA(),t.TgZ(20,"div")(21,"mat-form-field",9),t._UZ(22,"input",11),t.qZA()()(),t.TgZ(23,"div",12)(24,"div",8)(25,"h3"),t._uU(26,"Role"),t.qZA(),t.TgZ(27,"div")(28,"mat-form-field",9)(29,"mat-label"),t._uU(30,"Select Dropdown"),t.qZA(),t.TgZ(31,"mat-select")(32,"mat-option",13),t._uU(33,"Option"),t.qZA()()()()()(),t.TgZ(34,"div",14)(35,"ul")(36,"li")(37,"button",15)(38,"i"),t._uU(39,"Save"),t.qZA()()(),t.TgZ(40,"li")(41,"button",4),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.editPopUpHide())}),t.TgZ(42,"i"),t._uU(43,"Cancel"),t.qZA()()()()()()()()()}}let h=(()=>{class e{constructor(){this.invite=!1}ngOnInit(){}invitePopUpHide(){this.invite=!1}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-invite-user"]],decls:1,vars:1,consts:[["class","invite-area",4,"ngIf"],[1,"invite-area"],[1,"invite-main"],[1,"header-area"],[3,"click"],[1,"fa","fa-xmark"],[1,"edit-body"],["action","#"],[1,"form-input"],["appearance","outline",1,"form-field"],["type","text","value","","matInput","","placeholder","Enter email address"],["type","text","value","","matInput","","placeholder","name.."],[1,"form-input-area"],["value","option"],[1,"edit-btn"],[1,"save"]],template:function(n,a){1&n&&t.YNc(0,x,44,0,"div",0),2&n&&t.Q6J("ngIf",1==a.invite)},dependencies:[r.O5,d.KE,d.hX,p.Nt,u.gD,b.ey,s._Y,s.JL,s.F],styles:[".invite-area[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100vh;background-color:#00000080;box-sizing:border-box;position:fixed;top:0;left:0;overflow-y:auto;padding:15px}.invite-area[_ngcontent-%COMP%]::-webkit-scrollbar{width:0px}.invite-main[_ngcontent-%COMP%]{max-width:600px;width:100%;margin:70px auto 0;display:block;background-color:#fff;border-radius:7px;border:1px solid #0058ff}.header-area[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #0058ff;padding:15px 20px;box-sizing:border-box}.header-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000;font-family:Roboto,sans-serif;font-size:20px;font-style:normal;font-weight:500;display:block}.header-area[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#707070;font-style:normal;font-size:18px}.edit-body[_ngcontent-%COMP%]{display:block;padding:20px;box-sizing:border-box}.form-input[_ngcontent-%COMP%]{display:block;max-width:280px;width:100%;margin-bottom:10px}.form-input[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000;font-family:Roboto,sans-serif;font-weight:600;font-size:17px;font-style:normal;margin-bottom:6px!important}.form-grid[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;width:100%;gap:0px 10px}@media (max-width: 500px){.form-grid[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;justify-content:flex-start}.form-input[_ngcontent-%COMP%]{max-width:100%}}.edit-btn[_ngcontent-%COMP%]{margin-top:30px}.edit-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;text-align:center}.edit-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin-right:10px}.edit-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin:0}.edit-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#0058ff;font-family:Roboto,sans-serif;font-weight:600;font-size:16px;border:1px solid #0058ff;font-style:normal;padding:7px 15px;box-sizing:border-box;background-color:#fff;border-radius:5px;transition:all .3s linear}.edit-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .edit-btn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]{background-color:#0058ff;color:#fff}.form-field[_ngcontent-%COMP%]{display:block;width:100%;min-width:0px}  .form-field.mat-form-field .mat-form-field-label{color:#74777e;font-family:Roboto,sans-serif}  .form-field mat-select{color:#000;font-family:Roboto,sans-serif}  .form-field .mat-form-field-infix{width:auto;min-width:0px}  .filter .mat-form-field-infix{width:80px}.filter[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{color:#0058ff;font-family:Roboto,sans-serif;font-style:normal;font-size:15px}  .filter .mat-select-arrow{color:#0058ff}  .form-field .mat-form-field-appearance-outline .mat-form-field-outline{color:#a1a5a9}  .form-field.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:#0058ff}  .form-field.mat-form-field.mat-focused .mat-form-field-label{color:#0058ff!important}  .form-field.mat-form-field-appearance-outline .mat-form-field-wrapper{padding-bottom:0}.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{color:#74777e;font-family:Roboto,sans-serif;font-size:16px}[_ngcontent-%COMP%]::placeholder{color:#74777e}  .form-field.mat-form-field-appearance-outline .mat-form-field-outline{color:#0058ff}  .mat-check .mat-checkbox-inner-container-no-side-margin{background-color:#d7e7ff}  .mat-check .mat-checkbox-frame{border-color:#b0ceff}  .mat-check.mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#0058ff}  .mat-check.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element{background-color:#0058ff}"]}),e})();const C=["inviteUser"];function _(e,i){1&e&&(t.TgZ(0,"div",11)(1,"div",21),t._UZ(2,"mat-checkbox",13),t.qZA(),t.TgZ(3,"div",22)(4,"div",23)(5,"div",24),t._UZ(6,"img",25),t.qZA(),t.TgZ(7,"div",26)(8,"h3"),t._uU(9,"Shamim "),t.TgZ(10,"span"),t._uU(11,"(active)"),t.qZA()(),t.TgZ(12,"a",27),t._uU(13,"autanber111@gmail.com"),t.qZA()()()(),t.TgZ(14,"div",28)(15,"h3"),t._uU(16,"Admin"),t.qZA()(),t.TgZ(17,"div",29)(18,"small"),t._UZ(19,"i",30),t.qZA()()())}const M=function(){return[1,2,3,4]};let O=(()=>{class e{constructor(){}ngOnInit(){}invitePOpUpShow(){this.invite.invite=!0}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-user-roles"]],viewQuery:function(n,a){if(1&n&&t.Gf(C,5),2&n){let l;t.iGM(l=t.CRH())&&(a.invite=l.first)}},decls:41,vars:2,consts:[[1,"user-roles-header"],[1,"user-roles-area"],[1,"user-roles-main"],[1,"user-roles-header-data"],[1,"user-roles-header-left"],[1,"user-roles-header-right"],[1,"active-user-right-btn",3,"click"],[1,"fa","fa-caret-down"],[1,"user-table-area"],[1,"table"],[1,"table-head"],[1,"table-row"],[1,"table-heading-checkbox"],[1,"example-margin"],[1,"table-heading","user-info"],[1,"table-heading","roles"],[1,"table-heading","setting"],[1,"table-body"],["class","table-row",4,"ngFor","ngForOf"],[1,"component"],["inviteUser",""],[1,"table_checkbox"],[1,"table-data","user-info"],[1,"user-info-main"],[1,"user-img"],["src","./assets/images/avatar/user-young.jpg","alt",""],[1,"user-text-info"],["href","mailto:autanber111@gmail.com"],[1,"table-data","roles"],[1,"table-data","setting"],[1,"fa-solid","fa-gear"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"User & Roles"),t.qZA()(),t.TgZ(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"ul")(8,"li")(9,"button"),t._uU(10,"All Users"),t.qZA()(),t.TgZ(11,"li")(12,"button"),t._uU(13,"Roles"),t.qZA()()()(),t.TgZ(14,"div",5)(15,"ul")(16,"li")(17,"button",6),t.NdJ("click",function(){return a.invitePOpUpShow()}),t._uU(18,"Invite User"),t.qZA()(),t.TgZ(19,"li")(20,"button"),t._uU(21,"More "),t._UZ(22,"i",7),t.qZA()()()()(),t.TgZ(23,"div",8)(24,"div",9)(25,"div",10)(26,"div",11)(27,"div",12),t._UZ(28,"mat-checkbox",13),t.qZA(),t.TgZ(29,"div",14)(30,"h3"),t._uU(31,"User Details"),t.qZA()(),t.TgZ(32,"div",15)(33,"h3"),t._uU(34,"Roles"),t.qZA()(),t._UZ(35,"div",16),t.qZA()(),t.TgZ(36,"div",17),t.YNc(37,_,20,0,"div",18),t.qZA()()()()(),t.TgZ(38,"div",19),t._UZ(39,"app-invite-user",null,20),t.qZA()),2&n&&(t.xp6(37),t.Q6J("ngForOf",t.DdM(1,M)))},dependencies:[r.sg,m.oG,h],styles:[".table_checkbox[_ngcontent-%COMP%], .table-heading-checkbox[_ngcontent-%COMP%]{padding:0 25px}.user-roles-header[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box;margin:25px 0 30px}.user-roles-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#131523;font-family:Roboto,sans-serif;font-style:normal;font-size:20px;font-weight:700;display:block;line-height:30px;margin:0}.user-roles-area[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box}.user-roles-main[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 2px 4px #0000001a,0 -2px 4px #0000001a;border-radius:7px;display:block;width:100%}.user-roles-header-data[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:18px 20px;box-sizing:border-box;border-bottom:2px solid #7fabff}.user-roles-header-left[_ngcontent-%COMP%]{display:block;flex-basis:50%;width:100%}.user-roles-header-left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;display:flex;align-items:center;justify-content:flex-start;gap:20px}.user-roles-header-left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block}.user-roles-header-left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none;border:none;color:#000;font-family:Roboto,sans-serif;font-weight:600;font-style:normal;font-size:16px;display:block;background-color:transparent}.user-roles-header-right[_ngcontent-%COMP%]{flex-basis:50%;width:100%}.user-roles-header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:15px}.user-roles-header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block}.user-roles-header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;color:#0058ff;font-family:Roboto,sans-serif;font-style:normal;font-weight:500;display:block;border:1px solid #0058ff;font-size:16px;outline:none;padding:5px 15px;box-sizing:border-box;border-radius:4px;display:flex;align-items:center;justify-content:flex-start;gap:5px;transition:all .3s linear}.user-roles-header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .active-user-right-btn[_ngcontent-%COMP%]{background-color:#0058ff!important;color:#fff!important}.user-table-area[_ngcontent-%COMP%]{display:block;width:100%;overflow-x:auto;padding-bottom:20px;margin-bottom:40px}.table[_ngcontent-%COMP%], .table-head[_ngcontent-%COMP%]{display:block;width:100%}.table-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;min-width:560px;gap:10px;border-bottom:2px solid #d9e6ff;padding:15px 20px;box-sizing:border-box}.table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:last-child{border:none}.table-heading[_ngcontent-%COMP%]{display:block;width:100%;min-width:120px}.table-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000;font-family:Roboto,sans-serif;font-weight:600;font-style:normal;font-size:16px;display:block}.table-data[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;min-width:120px;text-align:left;width:100%}.table-data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4f4f4f;font-family:Roboto,sans-serif;font-weight:500;font-style:normal;font-size:17px;display:block;width:100%}.table-data[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#7f7f7f;font-size:25px}.user-info-main[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;gap:15px}.user-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70px;height:70px;border-radius:50%}.roles[_ngcontent-%COMP%]{max-width:200px;min-width:120px;width:100%}.setting[_ngcontent-%COMP%]{max-width:200px;min-width:100px;width:100%}.user-text-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000;display:block;margin-bottom:3px!important;line-height:22px;font-weight:600}.user-text-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3c9700}.user-text-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4f4f4f;font-family:Roboto,sans-serif;font-style:normal;font-size:16px;font-weight:500;display:block;line-height:22px}.user-info[_ngcontent-%COMP%]{min-width:300px!important}@media (max-width: 545px){.user-roles-header-data[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:15px}.user-roles-header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{justify-content:flex-start}}"]}),e})();var f=o(99826);const P=[{path:"",component:O}];let v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.Bz.forChild(P),f.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.ez,v,g.q]}),e})()}}]);