"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[9019],{69019:(Z,b,s)=>{s.r(b),s.d(b,{EditOrderModule:()=>et});var g=s(69808),l=s(99826),O=s(31913),d=s(94813),P=s(78372),m=s(71884),y=s(63900),i=s(60515),t=s(5e3),r=s(93075),p=s(85314),f=s(50072),w=s(71188),z=s(61293),A=s(48966),E=s(57267),U=s(68132),q=s(66082),I=s(87501),R=s(47423),S=s(25245),M=s(67322),F=s(77531),N=s(74107),D=s(90508);const Q=["searchInput"],j=["searchForm"];function B(a,u){1&a&&(t.TgZ(0,"div",56),t._UZ(1,"div",57)(2,"div",58)(3,"div",59)(4,"div",60)(5,"div",61)(6,"div",62)(7,"div",63)(8,"div",64)(9,"div",65)(10,"div",66)(11,"div",67)(12,"div",68),t.qZA())}function L(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"li",69),t.NdJ("click",function(){const c=t.CHM(e).$implicit,h=t.oxw();return t.KtG(h.onSelectItem(c))}),t._UZ(1,"img",70),t.TgZ(2,"div",71)(3,"h3"),t._uU(4),t.qZA()(),t.TgZ(5,"div",72)(6,"h5"),t._uU(7),t.qZA(),t._UZ(8,"p",73),t.qZA()()}if(2&a){const e=u.$implicit;t.xp6(1),t.Q6J("src",e.images&&e.images.length>0?e.images[0]:"/assets/images/placeholder/test.png",t.LSH)("alt",null==e?null:e.productName),t.xp6(3),t.Oqu(null==e?null:e.name),t.xp6(3),t.hij("\u09f3",e.sellingPrice,"")}}function J(a,u){if(1&a&&(t.TgZ(0,"div",74)(1,"h3"),t._uU(2),t.qZA()()),2&a){const e=u.$implicit;t.xp6(2),t.Oqu(e)}}function V(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"mat-option",93),t.NdJ("click",function(){const c=t.CHM(e).index,h=t.oxw().index,C=t.oxw(),_=C.$implicit,x=C.index,v=t.oxw();return t.KtG(v.onSelectVariant(_.sku,null==_||null==_.product?null:_.product.variants[h],x,h,c))}),t._uU(1),t.qZA()}if(2&a){const e=u.$implicit;t.Q6J("value",u.index),t.xp6(1),t.Oqu(e)}}function Y(a,u){if(1&a&&(t.TgZ(0,"div",89)(1,"div",90)(2,"mat-form-field",23)(3,"mat-label"),t._uU(4,"Select "),t.qZA(),t.TgZ(5,"mat-select",91),t.YNc(6,V,2,2,"mat-option",92),t.qZA()()()()),2&a){const e=u.index,n=t.oxw(),o=n.index,c=n.$implicit,h=t.oxw();t.xp6(5),t.Q6J("value",h.clickActive[o][e]),t.xp6(1),t.Q6J("ngForOf",h.getOptions(null==c||null==c.product?null:c.product.options[e]))}}function G(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"div",94),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().index,c=t.oxw();return t.KtG(c.removeProduct(o))}),t.TgZ(1,"mat-icon"),t._uU(2,"delete_forever"),t.qZA()()}}function H(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"div",75)(1,"div",76)(2,"div",77)(3,"div",78),t._UZ(4,"img",79),t.qZA(),t.TgZ(5,"div",80)(6,"h3"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA()()()(),t.YNc(10,Y,7,2,"div",81),t.TgZ(11,"div",82)(12,"span"),t._uU(13),t.qZA()(),t.TgZ(14,"div",82)(15,"span"),t._uU(16),t.qZA()(),t.TgZ(17,"div",83)(18,"h3"),t._uU(19),t.qZA()(),t.TgZ(20,"div",84)(21,"div",85)(22,"button",86),t.NdJ("click",function(){const c=t.CHM(e).index,h=t.oxw();return t.KtG(h.decrementQty(c))}),t._uU(23,"-"),t.qZA(),t.TgZ(24,"h2"),t._uU(25),t.qZA(),t.TgZ(26,"button",86),t.NdJ("click",function(){const c=t.CHM(e).index,h=t.oxw();return t.KtG(h.incrementQty(c))}),t._uU(27,"+"),t.qZA()()(),t.TgZ(28,"div",87)(29,"span"),t._uU(30),t.qZA()(),t.YNc(31,G,3,0,"div",88),t.qZA()}if(2&a){const e=u.$implicit,n=t.oxw();t.xp6(4),t.Q6J("src",null!=e&&e.product?n.setThumbnailImage(e.product):"/assets/images/placeholder/test.png",t.LSH),t.xp6(3),t.Oqu(null==e||null==e.product?null:e.product.name),t.xp6(2),t.hij("SKU: ",null==e||null==e.product?null:e.product.sku,""),t.xp6(1),t.Q6J("ngForOf",null==e||null==e.product?null:e.product.variants),t.xp6(3),t.Oqu(null==e?null:e.product.vendor),t.xp6(3),t.hij("",null==e?null:e.price," "),t.xp6(3),t.Oqu(null==e?null:e.tax),t.xp6(6),t.Oqu(e.quantity),t.xp6(5),t.hij("",n.getAmount(e),"tk"),t.xp6(1),t.Q6J("ngIf",e.delete)}}const K=function(a){return["../../","order-details",a]},$=[{path:":id",component:(()=>{class a{constructor(e,n,o,c,h,C,_,x,v,k,nt,it){this.fb=e,this.uiService=n,this.spinner=o,this.activatedRoute=c,this.storageService=h,this.reloadService=C,this.dialog=_,this.utilsService=x,this.router=v,this.orderService=k,this.productService=nt,this.adminService=it,this.overlay=!1,this.isFocused=!1,this.isOpen=!1,this.isLoading=!1,this.query=null,this.searchProducts=[],this.id=null,this.clickActive=[[]],this.products=[],this.holdProducts=[],this.isPermited=!0}ngOnInit(){this.subRouteOne=this.activatedRoute.paramMap.subscribe(e=>{this.id=e.get("id"),this.id&&this.getOrderDetailsById()}),this.initFormModule(),this.getAdminData()}initFormModule(){this.dataForm=this.fb.group({statusNote:[null]})}getAdminData(){this.adminService.getAdminShortData().subscribe(e=>{this.admin=e.data,console.log("admin",this.admin)})}getOrderDetailsById(){this.orderService.getOrderDetails(this.id).subscribe(e=>{this.order=e.data,this.orderAnother=e.data,console.log("edit order details",this.order),this.products=this.order.orderedItems,this.products.forEach(n=>{n.product.variantFormArray.forEach(o=>{n.sku===o.variantSku&&(n.maxQuantity=n.quantity+o.variantQuantity,n.oldQuantity=n.quantity)})}),this.holdProducts=[...this.products],this.patchVariant()},e=>{console.log(e)})}getAmount(e){return Math.round((null==e?void 0:e.price)*(null==e?void 0:e.quantity)+e.tax*(null==e?void 0:e.quantity))}setThumbnailImage(e){return this.productService.getImages(e.medias,e.images)[0]}getOptions(e){return e.split(",")}getVariantInfo(e){}patchVariant(){for(let e=0;e<this.order.orderedItems.length;e++){this.clickActive[e]=[];let n=this.order.orderedItems[e].sku.split("-");console.log("patch variat fun",n[1]);for(let o=0;o<n[1].length;o++)this.clickActive[e][o]=Number(n[1][o]);console.log("this.clickActive",this.clickActive)}}onSelectItem(e){console.log("Selected Product Data",e);let n={orderType:"regular",price:e.sellingPrice,product:{images:e.images,medias:e.medias,name:e.name,options:e.options,sellingPrice:e.sellingPrice,sku:e.sku,slug:e.slug,status:e.status,variantDataArray:e.variantDataArray,variantFormArray:e.variantFormArray,variants:e.variants,vendor:e.vendor,_id:e._id},quantity:0,maxQuantity:0,sku:e.sku,status:0,tax:0,delete:!0,variantStatus:!1};console.log("Selected Product product",n),this.products.push(n),this.clickActive.push([]),this.handleCloseAndClear()}getVariantQuantity(e,n){return console.log("this is tax",e),1==n.variantContinueSelling?(e.maxQuantity=n.variantQuantity>0?n.variantQuantity:Number.MAX_VALUE,[1,e.maxQuantity]):(e.maxQuantity=n.variantQuantity,[n.variantQuantity>0?1:0,e.maxQuantity])}calculateTax(e,n){var o;return e.product.hasTax?null!==(o=e.product)&&void 0!==o&&o.hasVariant?Math.round(e.variant[0].variantPrice*e.product.tax/100)*n:Math.round(e.product.sellingPrice*e.product.tax/100)*n:0}onSelectVariant(e,n,o,c,h){this.clickActive[o][c]=h,this.setSku();let C=this.products[o].sku,x=this.products[o].product.variantFormArray.filter(function(k){return k.variantSku===C});console.log(" this.products variant[0]",this.products[o].product),this.products[o].price=x[0].variantPrice;const v=this.getVariantQuantity(this.products,x[0]);this.products[o].quantity=v[0],this.products[o].maxQuantity=v[1],this.products[o].tax=Math.round(50*x[0].variantPrice/100)*this.products[o].quantity,this.products[o].variantStockStatus=0!=this.products[o].quantity,this.products[o].variantStatus=!0}removeProduct(e){let o=this.products;o.splice(e,1),this.products=o}setSku(){for(let e=0;e<this.products.length;e++){let n=this.products[e].product.sku+"-";for(let o=0;o<this.clickActive[e].length;o++)n+=this.clickActive[e][o];this.products[e].sku=n}}onSubmit(){if(this.products.forEach(e=>{!1===e.variantStatus?(this.isPermited=!1,this.uiService.warn("Please select a variant")):!1===e.variantStockStatus?(this.isPermited=!1,this.uiService.warn("Stock out, please select another variant/product")):this.isPermited=!0}),this.isPermited){console.log("_-------------------------"),this.setSku(),this.order.orderedItems=this.products;let o={status:O.i.EDIT,title:"EDITED",message:this.dataForm.value.statusNote,addedBy:this.admin.name,date:new Date};this.order.orderStatusTimeline.push(o),this.orderService.updateOrderById(this.order).subscribe(c=>{this.uiService.success(c.message),this.getOrderDetailsById()},c=>{console.log(c)})}else console.log("from else")}incrementQty(e){const n=this.products[e];n.quantity===n.maxQuantity?this.uiService.warn("Maximum Quantity is selected"):this.products[e].quantity+=1}decrementQty(e){1!==this.products[e].quantity?this.products[e].quantity-=1:this.uiService.warn("Minimum Quantity is selected")}handleCloseAndClear(){this.isOpen?(this.isOpen=!1,this.overlay=!1,this.searchProducts=[],this.isFocused=!1):this.isFocused=!1}onClickSearchArea(e){e.stopPropagation()}handleFocus(e){this.searchInput.nativeElement.focus(),!this.isFocused&&(this.searchProducts.length>0&&this.setPanelState(e),this.isFocused=!0)}setPanelState(e){e&&e.stopPropagation(),this.isOpen=!1,this.handleOpen()}handleOpen(){this.isOpen||this.isOpen&&!this.isLoading||this.searchProducts.length>0&&(this.isOpen=!0,this.overlay=!0)}ngAfterViewInit(){this.searchForm.valueChanges.pipe((0,d.j)("searchTerm"),(0,P.b)(200),(0,m.x)(),(0,y.w)(n=>(this.query=n.trim(),""===this.query||null===this.query?(this.overlay=!1,this.searchProducts=[],this.query=null,i.E):this.productService.getSearchProduct(this.query,{currentPage:"1",pageSize:"10"},{productVisibility:!0})))).subscribe(n=>{this.isLoading=!1,this.searchProducts=n.data,this.searchProducts.length>0&&(this.isOpen=!0,this.overlay=!0)},()=>{this.isLoading=!1})}calculateSubTotal(){let e=0;for(let n=0;n<this.products.length;n++)e+=this.getAmount(this.products[n]);return e}getDeliveryFee(){return 0}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(r.qu),t.Y36(p.F),t.Y36(f.t2),t.Y36(l.gz),t.Y36(w.V),t.Y36(z.f),t.Y36(A.uw),t.Y36(E.F),t.Y36(l.F0),t.Y36(U.p),t.Y36(q.M),t.Y36(I.l))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-edit-order"]],viewQuery:function(e,n){if(1&e&&(t.Gf(Q,5),t.Gf(j,5)),2&e){let o;t.iGM(o=t.CRH())&&(n.searchInput=o.first),t.iGM(o=t.CRH())&&(n.searchForm=o.first)}},decls:124,vars:16,consts:[[1,"create-order-header"],[1,"create-order-header-left"],[1,"create-order-header-right"],["mat-dialog-close","",1,"fa-solid","fa-xmark",3,"routerLink"],[1,"eidt_order_body"],[1,"edit_order_content"],[1,"edit_order_left"],[1,"edit_order_left_content"],[1,"edit_order_right"],[1,"edit_person_image"],["src","/assets/images/avatar/user-cmnt.png","alt",""],[1,"edit_order_search"],[1,"serarch_left"],[1,"search_inside_div",3,"click"],[1,"form-field"],["searchForm","ngForm"],["id","searchInput","type","text","placeholder","Search in caremebd...","name","searchTerm","autocomplete","off","ngModel","","required","",1,"form-inp",3,"focus"],["searchInput",""],["class","sk-fading-circle",4,"ngIf"],[1,"search_add_button"],["id","auto-suggestion",1,"auto-complete-box",2,"width","400px",3,"ngClass"],["class","list-view",3,"click",4,"ngFor","ngForOf"],[1,"dropdown_right"],["appearance","outline"],["value","option1"],["value","option2"],["value","option3"],[1,"order-table-main"],[1,"table"],[1,"table-head"],[1,"table-row"],[1,"table-heading","id"],["class","table-heading date",4,"ngFor","ngForOf"],[1,"table-heading","item"],[1,"table-heading","amount"],[1,"table-heading","pay-status"],[1,"table-body"],["class","table-row second",4,"ngFor","ngForOf"],[1,"custom_notes_field"],[1,"custom_note"],[3,"formGroup"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","statusNote"],[1,"invoice_total"],[1,"all_invoice_field"],[1,"invoice_total_main","subtotal"],[1,"invoice_total_main"],[1,"total_horizontal_line"],[1,"total"],[1,"paid"],[1,"paid_taka"],[1,"due"],[1,"due_taka"],[1,"invoice_buttons"],[1,"save_print_button"],["mat-stroked-button","","type","button",3,"click"],[1,"sk-fading-circle"],[1,"sk-circle1","sk-circle"],[1,"sk-circle2","sk-circle"],[1,"sk-circle3","sk-circle"],[1,"sk-circle4","sk-circle"],[1,"sk-circle5","sk-circle"],[1,"sk-circle6","sk-circle"],[1,"sk-circle7","sk-circle"],[1,"sk-circle8","sk-circle"],[1,"sk-circle9","sk-circle"],[1,"sk-circle10","sk-circle"],[1,"sk-circle11","sk-circle"],[1,"sk-circle12","sk-circle"],[1,"list-view",3,"click"],[1,"img-thumb",3,"src","alt"],[1,"desc"],[1,"price"],[1,"discount"],[1,"table-heading","date"],[1,"table-row","second"],[1,"table-data","id"],[1,"product"],[1,"product-img"],["alt","item.product.name",3,"src"],[1,"product-info"],["class","table-data date",4,"ngFor","ngForOf"],[1,"table-data","item"],[1,"table-data","amount"],[1,"table-data","pay-status"],[1,"table-input","qty-input"],[1,"inc",3,"click"],[1,"table-data","order-status"],["class","table-data order-status delete",3,"click",4,"ngIf"],[1,"table-data","date"],[1,"small_widht_select"],[3,"value"],[3,"value","click",4,"ngFor","ngForOf"],[3,"value","click"],[1,"table-data","order-status","delete",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"Edit Order"),t.qZA()(),t.TgZ(4,"div",2)(5,"span"),t._UZ(6,"i",3),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"h3"),t._uU(12,"Name"),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA()(),t.TgZ(15,"div",7)(16,"h3"),t._uU(17,"Phone"),t.qZA(),t.TgZ(18,"p"),t._uU(19),t.qZA()(),t.TgZ(20,"div",7)(21,"h3"),t._uU(22,"Adress"),t.qZA(),t.TgZ(23,"p"),t._uU(24),t.qZA()()(),t.TgZ(25,"div",8)(26,"div",9),t._UZ(27,"img",10),t.qZA()()(),t.TgZ(28,"div",11)(29,"div",12)(30,"div",13),t.NdJ("click",function(c){return n.onClickSearchArea(c)}),t.TgZ(31,"mat-icon"),t._uU(32,"search"),t.qZA(),t.TgZ(33,"div")(34,"form",14,15)(36,"input",16,17),t.NdJ("focus",function(c){return n.handleFocus(c)}),t.qZA(),t.YNc(38,B,13,0,"div",18),t.qZA()(),t.TgZ(39,"div",19)(40,"button")(41,"span"),t._uU(42,"+"),t.qZA(),t._uU(43,"Add"),t.qZA()()(),t.TgZ(44,"ul",20),t.YNc(45,L,9,4,"li",21),t.qZA()(),t.TgZ(46,"div",22)(47,"h3"),t._uU(48,"Delivery Method:"),t.qZA(),t.TgZ(49,"mat-form-field",23)(50,"mat-label"),t._uU(51,"Choose an option"),t.qZA(),t.TgZ(52,"mat-select")(53,"mat-option",24),t._uU(54,"Option 1"),t.qZA(),t.TgZ(55,"mat-option",25),t._uU(56,"Option 2 "),t.qZA(),t.TgZ(57,"mat-option",26),t._uU(58,"Option 3"),t.qZA()()()()(),t.TgZ(59,"div",27)(60,"div",28)(61,"div",29)(62,"div",30)(63,"div",31)(64,"h3"),t._uU(65,"Item name"),t.qZA()(),t.YNc(66,J,3,1,"div",32),t.TgZ(67,"div",33)(68,"h3"),t._uU(69,"Vendor"),t.qZA()(),t.TgZ(70,"div",33)(71,"h3"),t._uU(72,"Price"),t.qZA()(),t.TgZ(73,"div",34)(74,"h3"),t._uU(75,"Tax"),t.qZA()(),t.TgZ(76,"div",35)(77,"h3"),t._uU(78,"Quantity"),t.qZA()(),t.TgZ(79,"div",35)(80,"h3"),t._uU(81,"Total Price"),t.qZA()()()()(),t.TgZ(82,"div",36),t.YNc(83,H,32,10,"div",37),t.qZA()()(),t.TgZ(84,"div",38)(85,"div",39)(86,"h1"),t._uU(87,"Reason for edit:"),t.qZA(),t.TgZ(88,"form",40)(89,"mat-form-field",41),t._UZ(90,"textarea",42),t.qZA()()(),t.TgZ(91,"div",43)(92,"div",44)(93,"div",45)(94,"p"),t._uU(95,"Subtotal:"),t.qZA(),t.TgZ(96,"p"),t._uU(97),t.qZA()(),t.TgZ(98,"div",46)(99,"p"),t._uU(100,"Delivery Fee:"),t.qZA(),t.TgZ(101,"p"),t._uU(102),t.qZA()(),t._UZ(103,"div",47),t.TgZ(104,"div",48)(105,"p"),t._uU(106,"Total(BDT):"),t.qZA(),t.TgZ(107,"p"),t._uU(108),t.qZA()(),t.TgZ(109,"div",49)(110,"p"),t._uU(111,"Paid(BDT):"),t.qZA(),t.TgZ(112,"p",50),t._uU(113,"0tk"),t.qZA()(),t._UZ(114,"div",47),t.TgZ(115,"div",51)(116,"p"),t._uU(117,"Due(BDT):"),t.qZA(),t.TgZ(118,"p",52),t._uU(119),t.qZA()()()()(),t.TgZ(120,"div",53)(121,"div",54)(122,"button",55),t.NdJ("click",function(){return n.onSubmit()}),t._uU(123,"Save"),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("routerLink",t.VKq(14,K,n.order._id)),t.xp6(8),t.hij(": ",null==n.order?null:n.order.name,""),t.xp6(5),t.hij(": ",null==n.order?null:n.order.phoneNo,""),t.xp6(5),t.hij(": ",null==n.order?null:n.order.shippingAddress,""),t.xp6(14),t.Q6J("ngIf",n.isLoading),t.xp6(6),t.Q6J("ngClass",n.searchProducts.length>0&&n.isOpen?"active":""),t.xp6(1),t.Q6J("ngForOf",n.searchProducts),t.xp6(21),t.Q6J("ngForOf",null==n.products[0]||null==n.products[0].product?null:n.products[0].product.variants),t.xp6(17),t.Q6J("ngForOf",n.products),t.xp6(5),t.Q6J("formGroup",n.dataForm),t.xp6(9),t.hij("",n.calculateSubTotal(),"tk"),t.xp6(5),t.hij("",120," TK"),t.xp6(6),t.hij("",n.calculateSubTotal()+120,"tK"),t.xp6(11),t.hij("",n.calculateSubTotal()+120,"tk"))},dependencies:[g.mk,g.sg,g.O5,l.rH,R.lW,S.Hw,M.KE,M.hX,F.Nt,A.ZT,N.gD,D.ey,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u,r.On,r.F],styles:[".create-order-header[_ngcontent-%COMP%]{display:block;padding:20px;box-sizing:border-box;border-bottom:2px solid #dddddd;display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%}.create-order-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#131523;margin:0;font-family:Roboto,sans-serif;font-weight:600;font-size:20px;font-style:normal;box-sizing:border-box}.create-order-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f10;font-size:30px;display:inline-block;padding:6px;box-sizing:border-box;font-family:Roboto,sans-serif;font-weight:600}.eidt_order_body[_ngcontent-%COMP%]{padding:20px}.edit_order_content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.edit_order_content[_ngcontent-%COMP%]   .edit_order_left[_ngcontent-%COMP%]   .edit_order_left_content[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start;padding-bottom:10px}.edit_order_content[_ngcontent-%COMP%]   .edit_order_left[_ngcontent-%COMP%]   .edit_order_left_content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:60px;line-height:18px;color:#131523;margin:0;font-family:Roboto,sans-serif;font-weight:500;font-size:16px;font-style:normal;box-sizing:border-box}.edit_order_content[_ngcontent-%COMP%]   .edit_order_left[_ngcontent-%COMP%]   .edit_order_left_content[_ngcontent-%COMP%]   P[_ngcontent-%COMP%]{width:300px;color:#131523;margin:0;font-family:Roboto,sans-serif;font-weight:400;font-size:15px;font-style:normal;box-sizing:border-box}.edit_order_content[_ngcontent-%COMP%]   .edit_order_right[_ngcontent-%COMP%]   .edit_person_image[_ngcontent-%COMP%]{width:80px;height:80px;display:flex;align-items:center;justify-content:center}.edit_order_content[_ngcontent-%COMP%]   .edit_order_right[_ngcontent-%COMP%]   .edit_person_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.edit_order_search[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.edit_order_search[_ngcontent-%COMP%]   .search_inside_div[_ngcontent-%COMP%]{display:grid;align-items:center;border:1px solid #dddddd;grid-template-columns:40px 320px 100px;border-radius:5px;padding-left:10px}.edit_order_search[_ngcontent-%COMP%]   .search_inside_div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;background-color:#f6f9fd}.edit_order_search[_ngcontent-%COMP%]   .search_inside_div[_ngcontent-%COMP%]   .search_add_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:5px;border:none;border-radius:0 5px 5px 0;background-color:#0561da;color:#fff;font-size:16px;box-sizing:border-box;font-family:Roboto,sans-serif;display:flex;align-items:center;justify-content:center}.edit_order_search[_ngcontent-%COMP%]   .search_inside_div[_ngcontent-%COMP%]   .search_add_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px}.edit_order_search[_ngcontent-%COMP%]   .search_inside_div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.edit_order_search[_ngcontent-%COMP%]   ul#auto-suggestion[_ngcontent-%COMP%]{width:400px;height:500px;overflow:auto;position:absolute;z-index:1000}.edit_order_search[_ngcontent-%COMP%]   .dropdown_right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#131523;margin:0;font-family:Roboto,sans-serif;font-weight:600;font-size:15px;font-style:normal;box-sizing:border-box}.product[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;justify-content:flex-start;gap:10px;text-align:center}.product-img[_ngcontent-%COMP%]{display:block}.product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:10px}.product-info[_ngcontent-%COMP%]{display:block;text-align:left}.product-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000;font-family:Roboto,sans-serif;font-weight:600;font-style:normal;font-size:18px;display:block;margin-bottom:5px!important;display:-webkit-box;-webkit-box-orient:vertical;max-height:70px;overflow:hidden;-webkit-line-clamp:2}.product-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#000;font-family:Roboto,sans-serif;font-weight:500;font-size:14px;display:flex;align-items:center;gap:5px;margin-bottom:2px!important}.product-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block!important}.product-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:30px}.product-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;font-family:Roboto,sans-serif;font-weight:500;font-size:14px;display:block;margin-bottom:2px!important}  .small_widht_select .mat-form-field{width:90px;height:45px}.main_table[_ngcontent-%COMP%]{width:100%;overflow:auto}.main_table[_ngcontent-%COMP%]   .main_table_header[_ngcontent-%COMP%], .main_table[_ngcontent-%COMP%]   .main_table_body[_ngcontent-%COMP%]{display:grid;grid-template-columns:400px 160px 150px 150px 150px 150px 150px 180px 60px;padding:15px;align-items:center;justify-content:space-between}.main_table[_ngcontent-%COMP%]   .main_table_header[_ngcontent-%COMP%]   .item_name[_ngcontent-%COMP%], .main_table[_ngcontent-%COMP%]   .main_table_body[_ngcontent-%COMP%]   .item_name[_ngcontent-%COMP%]{padding-left:20px}.main_table[_ngcontent-%COMP%]   .main_table_header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000;font-family:Roboto,sans-serif;font-weight:600;font-size:14px;display:flex;align-items:center;gap:5px;margin-bottom:2px!important;border-top:2px solid #dddddd;border-bottom:2px solid #dddddd;padding:10px 0}.main_table[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#f10;font-size:25px}  .custom_note .mat-form-field-appearance-outline .mat-form-field-flex{width:400px}  .invoice_total_main .mat-form-field-appearance-outline .mat-form-field-flex{width:80px}  .invoice_total_main .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:0}  .invoice_total_main .mat-form-field{height:40px}.custom_notes_field[_ngcontent-%COMP%]{padding:40px 0}.custom_note[_ngcontent-%COMP%]{padding-left:30px}.custom_note[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#131523;font-family:Roboto,sans-serif;font-style:normal;display:block;font-size:18px;font-weight:600;line-height:35px;padding-bottom:20px}.invoice_total[_ngcontent-%COMP%]{padding-right:60px;box-sizing:border-box}.custom_notes_field[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 450px}.invoice_total_main[_ngcontent-%COMP%], .total[_ngcontent-%COMP%], .paid[_ngcontent-%COMP%], .due[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:5px 0;box-sizing:border-box}.all_invoice_field[_ngcontent-%COMP%]{padding:20px;border:1px solid #dddddd;border-radius:5px;box-shadow:0 1px 14px -10px #000}.subtotal[_ngcontent-%COMP%]{padding:0 0 10px;box-sizing:border-box}.subtotal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#131523;font-family:Roboto,sans-serif;font-style:normal;font-size:14px;font-weight:600}.invoice_total_main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#131523;font-family:Roboto,sans-serif;font-style:normal;font-size:14px;font-weight:500}.total_horizontal_line[_ngcontent-%COMP%]{border-bottom:2px solid #dddddd;padding-top:10px;box-sizing:border-box}.total[_ngcontent-%COMP%]{padding-top:20px;box-sizing:border-box}.total[_ngcontent-%COMP%]   P[_ngcontent-%COMP%]{color:#131523;font-family:Roboto,sans-serif;font-style:normal;font-size:14px;font-weight:600}.paid[_ngcontent-%COMP%]   .paid_taka[_ngcontent-%COMP%]{color:#07a901;font-family:Roboto,sans-serif;font-style:normal;font-size:14px;font-weight:600}.due[_ngcontent-%COMP%]   .due_taka[_ngcontent-%COMP%]{color:#ebbc00;font-family:Roboto,sans-serif;font-style:normal;font-size:14px;font-weight:600}.shipped_checkbox[_ngcontent-%COMP%]{text-align:right;font-size:14px;padding-top:30px;box-sizing:border-box}  .shipped_checkbox .mat-checkbox-layout .mat-checkbox-label{font-size:12px;font-family:Roboto,sans-serif}.invoice_buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:end;grid-column-gap:20px;column-gap:20px;padding:20px 60px 20px 0}  .save_print_button .mat-stroked-button:not([class*=mat-elevation-z]),   .save_print_button .mat-flat-button:not([class*=mat-elevation-z]){background-color:#0058ff;color:#fff}.qty-input[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding:0 15px}.table-input[_ngcontent-%COMP%]   button.inc[_ngcontent-%COMP%]{padding:0 8px;background-color:#f0dfdf;border-radius:4px;border:none}.table-data[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:0 5px;box-sizing:border-box}.list-view[_ngcontent-%COMP%]{min-height:75px;padding:10px 15px;display:flex!important;flex-direction:row;align-items:center;gap:16px;background-color:#e2e2e2;margin-top:10px;box-sizing:border-box;box-shadow:2px 3px 5px #ddd;border-radius:5px;cursor:pointer!important}.list-view[_ngcontent-%COMP%]   .img-thumb[_ngcontent-%COMP%]{width:55px;height:55px}.list-view[_ngcontent-%COMP%]   .img-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:scale-down}.list-view[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{flex:1;line-height:1}.list-view[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;font-family:Roboto,sans-serif}.list-view[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-family:Roboto,sans-serif}.list-view[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;float:right;font-size:16px}.list-view[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:red;font-size:13px;margin-right:10px}.qty-input[_ngcontent-%COMP%]{display:flex}.increment[_ngcontent-%COMP%]{display:flex;flex-direction:column}.increment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:10px}.inc[_ngcontent-%COMP%]{font-size:20px;margin:5px 2px 2px;border-radius:50%;cursor:pointer}.order-table-area[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box;padding:20px 0 10px;border-radius:10px;box-shadow:0 2px 4px #0000001a,0 -1px 2px #0000001a;background-color:#fff;margin-bottom:30px}.order-table-area-header[_ngcontent-%COMP%]{padding:10px 20px 20px;box-sizing:border-box;border-bottom:1px solid #0058ff}.order-table-main[_ngcontent-%COMP%]{width:100%;overflow-x:auto;scroll-behavior:smooth}.table[_ngcontent-%COMP%]{display:block;width:100%}.table-head[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box}.table-head[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{box-shadow:none;margin-bottom:5px}.table-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:0 15px;box-sizing:border-box;min-width:995px;margin-bottom:10px}.table-row.second[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:0 15px;box-sizing:border-box;min-width:995px;height:100px;margin-bottom:10px}.table-row[_ngcontent-%COMP%]:last-child{margin:0}.table-heading.id[_ngcontent-%COMP%]{display:block;width:100%;min-width:300px;height:60px;display:flex;align-items:center;justify-content:center;text-align:center;padding:15px 0;box-sizing:border-box}.table-heading[_ngcontent-%COMP%]{display:block;width:100%;min-width:105px;height:60px;display:flex;align-items:center;justify-content:center;text-align:center;padding:15px 0;box-sizing:border-box}.table-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#131523;font-family:Roboto,sans-serif;font-weight:700;font-size:16px;line-height:20px;font-style:normal;display:block}.table-data.id[_ngcontent-%COMP%]{width:100%;min-width:300px;height:70px;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;padding:10px 0;box-sizing:border-box}.table-data.order-status.delete[_ngcontent-%COMP%]{color:#ff1e00}.table-data[_ngcontent-%COMP%]{width:100%;min-width:105px;height:70px;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;padding:10px 0;box-sizing:border-box}.table-data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000;font-family:Roboto,sans-serif;font-size:14px;font-weight:600;font-style:normal;display:block;margin:0!important;line-height:20px}.table-data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:#0058ff;font-family:Roboto,sans-serif;font-weight:600;font-size:15px;line-height:20px;text-decoration:underline;cursor:pointer}.table-data.status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none;border:none;background-color:#22d500;padding:3px 15px;color:#fff;font-family:Roboto,sans-serif;font-weight:500;font-style:normal;font-size:13px;border-radius:20px}.table-data.vendor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#ff9292;color:#131523;font-family:Roboto,sans-serif;font-weight:500;font-size:14px;padding:3px 13px;box-sizing:border-box;border-radius:20px;outline:none;border:none}.table-data.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px;text-decoration:none}.table-data.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#d8d8d8;font-size:18px}.table-data.pay-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#e0e0df;color:#131523;font-family:Roboto,sans-serif;font-weight:500;font-size:14px;display:block;min-width:40px;padding:3px 13px;box-sizing:border-box;border-radius:5px;outline:none;border:none}.table-data.note[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:#000;font-size:17px;font-style:normal}.pay-status[_ngcontent-%COMP%], .order-status[_ngcontent-%COMP%], .date[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]{min-width:130px}.fa-circle[_ngcontent-%COMP%]{font-size:20px;color:#0058ff}.fa-moon[_ngcontent-%COMP%]{font-size:20px;color:#0058ff;transform:rotate(15deg)}.check[_ngcontent-%COMP%]{min-width:40px;width:40px;max-width:40px}.indicator[_ngcontent-%COMP%]{display:block;width:100%;margin:40px 0 30px}.indicator[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;text-align:center;display:flex;align-items:center;justify-content:center;gap:15px}.indicator[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#0058ff;color:#fff;width:35px;height:35px;outline:none;border:1px solid #0058ff;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:17px}  .mat-check .mat-checkbox-inner-container-no-side-margin{background-color:#d7e7ff}  .mat-check .mat-checkbox-frame{border-color:#b0ceff}  .mat-check.mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#0058ff}  .mat-check.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element{background-color:#0058ff}"]}),a})()}];let W=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[l.Bz.forChild($),l.Bz]}),a})();var X=s(90898),T=s(24586),tt=s(83626);let et=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.ez,W,X.q,T.D,M.lN,r.u5,T.D,tt.P]}),a})()},31913:(Z,b,s)=>{s.d(b,{i:()=>g});var g=(()=>{return(l=g||(g={}))[l.PENDING=0]="PENDING",l[l.CANCEL=1]="CANCEL",l[l.CONFIRM=2]="CONFIRM",l[l.PARTIAL_SHIPPING=3]="PARTIAL_SHIPPING",l[l.SHIPPING=4]="SHIPPING",l[l.DELIVERED=5]="DELIVERED",l[l.RETURNING=6]="RETURNING",l[l.RETURNED=7]="RETURNED",l[l.PARTIAL_RETURNED=8]="PARTIAL_RETURNED",l[l.REFUND=9]="REFUND",l[l.EDIT=10]="EDIT",g;var l})()},68132:(Z,b,s)=>{s.d(b,{p:()=>P});var g=s(40520),l=s(92340),O=s(5e3);const d=l.N.apiBaseLink+"/api/order/";let P=(()=>{class m{constructor(i){this.httpClient=i}editOrder(i){return this.httpClient.post(d+"edit-order",i)}placeOrder(i){return this.httpClient.post(d+"place-order",i)}updateOrder(i){return this.httpClient.post(d+"update-order",i)}placeOrderRequest(i){return this.httpClient.post(d+"place-order-request",i)}placeTempOrder(i){return this.httpClient.post(d+"place-temp-order",i)}updateOrderSessionKey(i,t){return this.httpClient.post(d+"update-session-key/"+i+"/"+t,{})}getAllOrdersByUser(i,t,r,p){let f=new g.LE;return f=f.append("q",i),f=f.append("status",p),t&&(f=f.append("pageSize",t.pageSize),f=f.append("currentPage",t.currentPage)),this.httpClient.get(d+"get-all-orders-by-user",{params:f})}getAllOrdersByUserId(i){return this.httpClient.get(d+"get-all-orders-by-userId/"+i)}getAllCanceledOrdersByUser(i,t,r){return this.httpClient.get(d+"get-all-canceled-orders-by-user")}getAllOrdersByUserOrderId(i,t){let r=new g.LE;return i&&(console.log("param id ",i),r=r.append("id",i)),t&&(r=r.append("select",t)),this.httpClient.get(d+"get-orders-by-user-orderId",{params:r})}getAllOrdersofyUserByAdmin(i,t,r){let p=new g.LE;return r&&(p=p.append("userId",r)),i?(p=p.append("pageSize",i.pageSize),p=p.append("page",i.currentPage),t&&(p=p.append("select",t)),this.httpClient.get(d+"get-all-orders-of-user-by-admin",{params:p})):(t&&(p=p.append("select",t)),this.httpClient.get(d+"get-all-orders-of-user-by-admin",{params:p}))}getOrderDetails(i){return this.httpClient.get(d+"get-order-details/"+i)}getOrderDetailsByOrderId(i){return this.httpClient.get(d+"get-order-details-by-orderId/"+i)}getrequestOrderDetails(i){return this.httpClient.get(d+"get-request-order-details/"+i)}cancelOrderByUser(i){return this.httpClient.put(d+"cancel-order-by-user/"+i,{})}deleteOrderByAdmin(i){return this.httpClient.delete(d+"delete-order-by-admin/"+i)}getAllTransactionByUser(i,t){let r=new g.LE;return i?(r=r.append("pageSize",i.pageSize),r=r.append("page",i.currentPage),t&&(r=r.append("select",t)),this.httpClient.get(d+"get-all-transactions-by-user",{params:r})):(t&&(r=r.append("select",t)),this.httpClient.get(d+"get-all-transactions-by-user",{params:r}))}getAllOrdersByAdmin(i,t,r,p){return this.httpClient.post(d+"get-all-orders-by-admin",{paginate:i,sort:t,filter:r,select:p})}getOrdersBySearch(i,t,r){let p=new g.LE;return p=p.append("q",i),t&&(p=p.append("pageSize",t.pageSize),p=p.append("currentPage",t.currentPage)),this.httpClient.post(d+"get-order-by-search",{filter:r},{params:p})}getSelectedOrderDetails(i){return this.httpClient.post(d+"get-selected-order-details",{selectedIds:i})}getAllOrdersBySku(i){return this.httpClient.get(d+"get-all-orders-by-sku/"+i)}changeOrderStatus(i){return this.httpClient.put(d+"change-order-status",i)}getAllTransactionByAdmin(i,t){let r=new g.LE;return i?(r=r.append("pageSize",i.pageSize),r=r.append("page",i.currentPage),t&&(r=r.append("select",t)),this.httpClient.get(d+"get-all-transaction-by-admin",{params:r})):(t&&(r=r.append("select",t)),this.httpClient.get(d+"get-all-transaction-by-admin",{params:r}))}testSslSmsApi(){return this.httpClient.get(d+"sent-test-ssl-message")}updateOrderById(i){return this.httpClient.put(d+"update-order-by-id",i)}updateMultipleOrderById(i){return this.httpClient.post(d+"update-multiple-order-by-id",i)}updateRequestOrderById(i){return this.httpClient.put(d+"update-request-order-by-id",i)}payPayment(i){return this.httpClient.post(d+"pay-payment",i)}sendNotification(i){return this.httpClient.post(d+"confirm-notification",i)}addToOrderTimeline(i,t){return this.httpClient.post(d+"add-to-order-timeline",{data:i,orderId:t})}updateTag(i,t){return this.httpClient.post(d+"update-tag",{orderId:i,tag:t})}setFilterVariable(i){this.filterVariable=i}getFilterVariable(){let i=this.filterVariable;return this.clearFilterVariable(),i}clearFilterVariable(){this.filterVariable=void 0}}return m.\u0275fac=function(i){return new(i||m)(O.LFG(g.eN))},m.\u0275prov=O.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);