"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[5034],{35034:(F,g,l)=>{l.r(g),l.d(g,{AllProductsModule:()=>k});var d=l(69808),c=l(99826),n=l(5e3),_=l(66082),C=l(49727),s=l(93075),p=l(11047),f=l(76042),v=l(82683),P=l(92643),u=l(16114),A=l(24401),h=l(75482),z=l(41894),M=l(55737),Z=l(77484),x=l(73422);function O(e,i){1&e&&(n.TgZ(0,"div",43),n._UZ(1,"img",44),n.TgZ(2,"h4"),n._uU(3,"Shalwar Kameez"),n.qZA()())}function b(e,i){if(1&e&&(n.TgZ(0,"li")(1,"label",45),n._uU(2),n.qZA(),n.TgZ(3,"span"),n._uU(4),n.qZA()()),2&e){const t=i.$implicit;n.xp6(1),n.Q6J("ngModel",t.checked),n.xp6(1),n.hij(" ",t.title," "),n.xp6(2),n.Oqu(t.qty)}}const T=function(e){return["/product-details",e]};function y(e,i){if(1&e&&(n.TgZ(0,"div",46)(1,"div",47)(2,"nz-ribbon",48)(3,"div",49)(4,"a"),n._UZ(5,"img",50),n.qZA()()(),n.TgZ(6,"div",51)(7,"a"),n._uU(8),n.qZA(),n.TgZ(9,"div",52)(10,"div",53),n._uU(11),n.TgZ(12,"span"),n._uU(13),n.qZA()(),n.TgZ(14,"ul")(15,"li"),n._UZ(16,"i",54),n.qZA(),n.TgZ(17,"li"),n._UZ(18,"i",54),n.qZA(),n.TgZ(19,"li"),n._UZ(20,"i",54),n.qZA(),n.TgZ(21,"li"),n._UZ(22,"i",54),n.qZA(),n.TgZ(23,"li"),n._UZ(24,"i",55),n.qZA()()()()()()),2&e){const t=i.$implicit,o=n.oxw();n.xp6(1),n.Q6J("routerLink",n.VKq(6,T,t.slug)),n.xp6(4),n.Q6J("src",o.getThumbnailImage(t),n.LSH)("alt",null==t?null:t.name),n.xp6(3),n.hij(" ",null==t?null:t.name," "),n.xp6(3),n.hij(" ",null==t?null:t.sellingPrice," TK "),n.xp6(2),n.hij(" ",null==t?null:t.comparePrice," TK ")}}let m=(()=>{class e{constructor(t,o,a){this.productService=t,this.msg=o,this.activatedRoute=a,this.products=[],this.smillerCategory=[1],this.disabled=!1,this.slug=null,this.query=null,this.searchQuery=null,this.search=null,this.stockChecklist=[{title:"In Stock",qty:"2000",checked:!0},{title:"Advance Pay",qty:"5000",checked:!1},{title:"Pre Order",qty:"10000",checked:!1}],this.rangeValue=[10,90],this.minRange=this.rangeValue[0],this.maxRange=this.rangeValue[1]}ngOnInit(){this.subRouteOne=this.activatedRoute.paramMap.subscribe(t=>{this.slug=t.get("slug"),this.id=t.get("id"),this.slug&&this.id?this.getAllProducts(this.id):this.getAllProducts()}),this.subAcRoute=this.activatedRoute.queryParams.subscribe(t=>{t&&(this.search=t.search),this.search?(this.searchQuery=this.search.trim(),this.getAllProducts()):this.getAllProducts()}),this.getAllProducts()}getAllProducts(t){this.searchQuery?this.productService.getSearchProduct(this.searchQuery,null,null).subscribe(o=>{this.products=o.data},o=>{this.msg.error(o.message)}):(t&&(this.query={productType:t}),this.productService.getAllProducts(null,this.query,null).subscribe(o=>{this.products=o.data},o=>{this.msg.error(o.message)}))}minRangeChange(t){this.minRange=t[0]}maxRangeChange(t){this.maxRange=t[1]}stockCheck(t){console.log(t)}getThumbnailImage(t){return t?this.productService.getImages(null==t?void 0:t.medias,null==t?void 0:t.images)[0]:"/assets/images/placeholder/test.png"}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(_.M),n.Y36(C.dD),n.Y36(c.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-all-products"]],decls:110,vars:7,consts:[[1,"all_products"],[1,"container"],["nz-row","","nzGutter","16"],["nz-col","","nzXs","24",1,"mb15"],["nz-card-grid","","class","gutterStyle",4,"ngFor","ngForOf"],["nz-col","","nzXs","24","nzMd","5","nzLg","4"],[1,"filter_main"],["nzAccordion",""],["nzHeader","COLOR","nzActive","active"],[1,"filter_single","color"],[2,"background","green"],[2,"background","red"],[2,"background","blue"],[2,"background","yellow"],[2,"background","greenyellow"],[2,"background","blanchedalmond"],[2,"background","lightblue"],[2,"background","lightcoral"],[2,"background","black"],["nzHeader","PRICE","nzActive","active"],[1,"filter_single","price"],["nzRange","",3,"nzStep","ngModel","ngModelChange","nzOnAfterChange"],["nzCompact","",1,"inputvalue"],["type","text","nz-input","","placeholder","Minimum",2,"text-align","center","pointer-events","none",3,"value"],["type","text","disabled","","nz-input","","placeholder","~",1,"demo-input-split",2,"width","50px","border-left","0px","border-right","0px","pointer-events","none","background-color","rgb(255, 255, 255)"],["type","text","nz-input","","placeholder","Maximum",1,"demo-input-right",2,"text-align","center","border-left","0px","border-left","0px","pointer-events","none",3,"value"],["nzHeader","Size","nzActive","active"],[1,"filter_single"],["nz-button",""],["nzHeader","Availability","nzActive","active"],[2,"width","100%",3,"nzOnChange"],[1,"stockselect"],[4,"ngFor","ngForOf"],["nzHeader","Brand","nzActive","active"],["nzHeader","Rating","nzActive","active"],["nzHeader","Main Material","nzActive","active"],["nzHeader","Warranty Type","nzActive","active"],["nzHeader","Trend","nzActive","active"],["nz-col","","nzXs","24","nzMd","19","nzLg","20"],["nzSize","small",1,"product_card"],["nz-col","","nzXs","12"],[1,"entry_filters"],["class","col5","nz-col","","nzXs","12","nzMd","8","nzLg","6",4,"ngFor","ngForOf"],["nz-card-grid","",1,"gutterStyle"],["src","https://static-01.daraz.com.bd/p/5c83cdf3d49be71ede86f99e4ed7a1b4.jpg","alt","category"],["nz-checkbox","","nzValue","A",3,"ngModel"],["nz-col","","nzXs","12","nzMd","8","nzLg","6",1,"col5"],[1,"single-product",3,"routerLink"],["nzText","Big Offer","nzColor","red"],[1,"product-top"],[3,"src","alt"],[1,"product-bottom"],[1,"price_rating"],[1,"price"],[1,"las","la-star"],[1,"las","la-star-half"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"nz-card"),n.YNc(5,O,4,0,"div",4),n.qZA()(),n.TgZ(6,"div",5)(7,"div",6)(8,"nz-collapse",7)(9,"nz-collapse-panel",8)(10,"div",9)(11,"ul")(12,"li"),n._UZ(13,"span",10),n.qZA(),n.TgZ(14,"li"),n._UZ(15,"span",11),n.qZA(),n.TgZ(16,"li"),n._UZ(17,"span",12),n.qZA(),n.TgZ(18,"li"),n._UZ(19,"span",13),n.qZA(),n.TgZ(20,"li"),n._UZ(21,"span",14),n.qZA(),n.TgZ(22,"li"),n._UZ(23,"span",15),n.qZA(),n.TgZ(24,"li"),n._UZ(25,"span",16),n.qZA(),n.TgZ(26,"li"),n._UZ(27,"span",17),n.qZA(),n.TgZ(28,"li"),n._UZ(29,"span",18),n.qZA(),n.TgZ(30,"li"),n._UZ(31,"span",10),n.qZA(),n.TgZ(32,"li"),n._UZ(33,"span",11),n.qZA(),n.TgZ(34,"li"),n._UZ(35,"span",12),n.qZA(),n.TgZ(36,"li"),n._UZ(37,"span",13),n.qZA()()()()(),n.TgZ(38,"nz-collapse",7)(39,"nz-collapse-panel",19)(40,"div",20)(41,"nz-slider",21),n.NdJ("ngModelChange",function(r){return o.rangeValue=r})("ngModelChange",function(r){return o.minRangeChange(r)})("nzOnAfterChange",function(r){return o.maxRangeChange(r)}),n.qZA(),n.TgZ(42,"nz-input-group",22),n._UZ(43,"input",23)(44,"input",24)(45,"input",25),n.qZA()()()(),n.TgZ(46,"nz-collapse",7)(47,"nz-collapse-panel",26)(48,"div",27)(49,"ul")(50,"li")(51,"button",28),n._uU(52,"34"),n.qZA()(),n.TgZ(53,"li")(54,"button",28),n._uU(55,"23"),n.qZA()(),n.TgZ(56,"li")(57,"button",28),n._uU(58,"43"),n.qZA()(),n.TgZ(59,"li")(60,"button",28),n._uU(61,"45"),n.qZA()(),n.TgZ(62,"li")(63,"button",28),n._uU(64,"34"),n.qZA()(),n.TgZ(65,"li")(66,"button",28),n._uU(67,"23"),n.qZA()(),n.TgZ(68,"li")(69,"button",28),n._uU(70,"43"),n.qZA()(),n.TgZ(71,"li")(72,"button",28),n._uU(73,"45"),n.qZA()()()()()(),n.TgZ(74,"nz-collapse",7)(75,"nz-collapse-panel",29)(76,"nz-checkbox-wrapper",30),n.NdJ("nzOnChange",function(r){return o.stockCheck(r)}),n.TgZ(77,"ul",31),n.YNc(78,b,5,3,"li",32),n.qZA()()()(),n.TgZ(79,"nz-collapse",7)(80,"nz-collapse-panel",33)(81,"p"),n._uU(82,"content"),n.qZA()()(),n.TgZ(83,"nz-collapse",7)(84,"nz-collapse-panel",34)(85,"p"),n._uU(86,"content"),n.qZA()()(),n.TgZ(87,"nz-collapse",7)(88,"nz-collapse-panel",35)(89,"p"),n._uU(90,"content"),n.qZA()()(),n.TgZ(91,"nz-collapse",7)(92,"nz-collapse-panel",36)(93,"p"),n._uU(94,"content"),n.qZA()()(),n.TgZ(95,"nz-collapse",7)(96,"nz-collapse-panel",37)(97,"p"),n._uU(98,"content"),n.qZA()()()()(),n.TgZ(99,"div",38)(100,"nz-card",39)(101,"div",2)(102,"div",40)(103,"div",41)(104,"h2"),n._uU(105,"Watch"),n.qZA()()(),n.TgZ(106,"div",40),n._uU(107,"Right"),n.qZA(),n._UZ(108,"nz-divider"),n.YNc(109,y,25,8,"div",42),n.qZA()()()()()()),2&t&&(n.xp6(5),n.Q6J("ngForOf",o.smillerCategory),n.xp6(36),n.Q6J("nzStep",1)("ngModel",o.rangeValue),n.xp6(2),n.s9C("value",o.minRange),n.xp6(2),n.s9C("value",o.maxRange),n.xp6(33),n.Q6J("ngForOf",o.stockChecklist),n.xp6(31),n.Q6J("ngForOf",o.products))},dependencies:[d.sg,c.rH,s.JJ,s.On,p.Zp,p.gB,f.ix,v.w,P.dQ,u.Ie,u.EZ,A.F9,h.Zv,h.yH,z.t3,z.SK,M.g,Z.bd,Z.hC,x.jS],styles:['.mb15[_ngcontent-%COMP%]{margin-bottom:15px!important}.all_products[_ngcontent-%COMP%]{padding:15px 0}.inputvalue[_ngcontent-%COMP%]{display:flex}.filter_single[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{padding-top:30px}.filter_single[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0}.filter_single[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;display:inline-block;margin:0 10px 10px 0}.filter_main[_ngcontent-%COMP%]{border:1px solid #ddd}.filter_main[_ngcontent-%COMP%]   nz-collapse[_ngcontent-%COMP%]{border-radius:0;border:none}.price_rating[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0}.price_rating[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left;list-style:none}.single-product[_ngcontent-%COMP%]{background:#fff;border:1px solid #ffffff;transition:.3s}.single-product[_ngcontent-%COMP%]   .product-bottom[_ngcontent-%COMP%]{padding:0 15px 15px}.single-product[_ngcontent-%COMP%]   .product-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;font-weight:400;line-height:20px;color:#2d2d2d}.product-top[_ngcontent-%COMP%]{padding:10px}.price_rating[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin:20px 0 0}.price_rating[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:20px;color:#db5790;font-weight:500;display:flex;align-items:center}.price_rating[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#00000061;margin:2px 0 0 10px;position:relative}.price_rating[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{position:absolute;content:"";top:50%;left:0;background:#9d9d9d;width:110%;height:1px;transform:translate(-2px,-1px) rotate(0)}.single-product[_ngcontent-%COMP%]:hover{border:1px solid #ffdeed;box-shadow:0 4px 10px #e5e5e5}.categoryList[_ngcontent-%COMP%]{text-align:center}.categoryList[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#656565}.gutterStyle[_ngcontent-%COMP%]{width:8.33%;text-align:center;padding:5px}.product_card[_ngcontent-%COMP%]{height:100%}.filter_single.color[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-radius:100%;border:1px solid #fff;width:32px;height:32px;display:block;cursor:pointer;transition:all .3s ease-in-out}.filter_single.color[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{border:1px solid #da5894;box-shadow:0 5px 12px -4px #000}.stockselect[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center;justify-content:space-between}@media (min-width: 1440px){.col5[_ngcontent-%COMP%]{flex:0 0 20%;max-width:20%}}@media (max-width: 768px){.single-product[_ngcontent-%COMP%]   .product-bottom[_ngcontent-%COMP%]{padding:0 5px 5px}.gutterStyle[_ngcontent-%COMP%]{width:25%}.gutterStyle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:12px;line-height:16px}.price_rating[_ngcontent-%COMP%]{flex-direction:column-reverse}}']}),e})();const U=[{path:"",component:m},{path:":slug/:id",component:m}];let q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[c.Bz.forChild(U),c.Bz]}),e})();var R=l(90898),S=l(27989);let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.ez,q,R.q,s.u5,S.P]}),e})()}}]);