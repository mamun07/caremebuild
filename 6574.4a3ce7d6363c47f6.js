"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[6574],{96574:(K,p,r)=>{r.r(p),r.d(p,{HomeModule:()=>I});var g=r(99485),c=r(69808),t=r(5e3),f=r(57255),x=r(98914),h=r(66082),b=r(93377),C=r(17744),_=r(32032),P=r(49727),s=r(99826),M=r(31661),d=r(77484);function O(e,o){if(1&e&&(t.TgZ(0,"div",6),t._UZ(1,"img",7),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("routerLink",null==n||null==n.link?null:n.link.slug)("src",null==n?null:n.desktopImage,t.LSH)}}function y(e,o){1&e&&(t.ynx(0),t.YNc(1,O,2,2,"ng-template",5),t.BQk())}const w=function(e,o){return["all-products",e,o]};function v(e,o){if(1&e&&(t.TgZ(0,"div",12),t._UZ(1,"img",13),t.TgZ(2,"a"),t._uU(3),t.qZA()()),2&e){const n=o.$implicit;t.Q6J("routerLink",t.WLB(3,w,n.slug,n._id)),t.xp6(1),t.Q6J("src",n.logo?n.logo:"/assets/images/placeholder/test.png",t.LSH),t.xp6(2),t.hij("",n.title," ")}}const m=function(){return{padding:0,background:"#fff",border:"none"}};function k(e,o){if(1&e&&(t.TgZ(0,"div",8)(1,"nz-card",9)(2,"div",10)(3,"h2"),t._uU(4,"Featured Categories"),t.qZA(),t.YNc(5,v,4,6,"div",11),t.qZA()()()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("nzBodyStyle",t.DdM(2,m)),t.xp6(4),t.Q6J("ngForOf",n.productTypes)}}function z(e,o){if(1&e&&(t.TgZ(0,"div",15),t._UZ(1,"img",13),t.TgZ(2,"a",16),t._uU(3),t.qZA()()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("src",n.logo?n.logo:"/assets/images/placeholder/test.png",t.LSH),t.xp6(2),t.Oqu(n.name)}}function T(e,o){if(1&e&&(t.TgZ(0,"div",8)(1,"nz-card",9)(2,"div",10)(3,"h2"),t._uU(4,"Featured Brands"),t.qZA(),t.YNc(5,z,4,2,"div",14),t.qZA()()()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("nzBodyStyle",t.DdM(2,m)),t.xp6(4),t.Q6J("ngForOf",n.brands)}}function Y(e,o){if(1&e&&(t.TgZ(0,"div"),t._UZ(1,"app-product-card-one",25),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("data",n)}}const u=function(e){return{color:e}},S=function(e){return["/all-collection",e]};function Z(e,o){if(1&e&&(t.TgZ(0,"div",10)(1,"div")(2,"div",19)(3,"div",20)(4,"h2",21),t._uU(5),t.qZA()(),t.TgZ(6,"a",22),t._uU(7),t._UZ(8,"i",23),t.qZA()(),t.TgZ(9,"div",24),t.YNc(10,Y,2,1,"div",2),t.qZA()()()),2&e){const n=t.oxw().$implicit,i=t.oxw();t.xp6(4),t.Q6J("ngStyle",t.VKq(6,u,null==i.homePageData?null:i.homePageData.collectionTextColor)),t.xp6(1),t.hij(" ",n.sectionName," "),t.xp6(1),t.Q6J("routerLink",t.VKq(8,S,n.link.slug))("ngStyle",t.VKq(10,u,null==i.homePageData?null:i.homePageData.collectionTextColor)),t.xp6(1),t.hij(" ",n.readMoreText," "),t.xp6(3),t.Q6J("ngForOf",n.products)}}const D=function(e,o){return{"background-color":e,color:o}};function F(e,o){if(1&e&&(t.TgZ(0,"div",17),t.YNc(1,Z,11,12,"div",18),t.qZA()),2&e){const n=t.oxw();t.Q6J("ngStyle",t.WLB(2,D,null==n.homePageData?null:n.homePageData.collectionBgColor,null==n.homePageData?null:n.homePageData.collectionTextColor)),t.xp6(1),t.Q6J("ngIf",null!==n.homePageData.homeCollections)}}const A=function(){return{clickable:!0}},H=[{path:"",component:(()=>{class e{constructor(n,i,a,l,V,$,R){this.CarouselCntrlService=n,this.menuService=i,this.productService=a,this.productTypeService=l,this.brandService=V,this.homeDataService=$,this.msg=R,this.category=[],this.productTypes=[],this.brands=[],this.newProducts=[],this.currentPage=1,this.productsPerPage=10,this.today=new Date}ngOnInit(){this.getAllCategoryMenus(),this.getAllFeaturedCategories(),this.getAllBrands(),this.getHomePageData()}ngAfterViewInit(){}getHomePageData(){this.homeDataService.getData().subscribe(n=>{this.homePageData=n.data},n=>{console.log(n.message)})}getAllFeaturedCategories(){this.productTypeService.getAllFeatured().subscribe(n=>{this.productTypes=n.data},n=>{this.msg.error(n.message)})}getAllBrands(){this.brandService.getAllFeatured().subscribe(n=>{this.brands=n.data},n=>{this.msg.error(n.message)})}getAllCategoryMenus(){this.menuService.getAllCategoryMenuNoRepeat().subscribe(n=>{this.category=n.data})}setThumbnailImage(n){return this.productService.getImages(n.medias,n.images)[0]}getDays(n,i){const a=Date.parse(n)-i;return Math.floor(a/864e5)}getHour(n,i){const a=Date.parse(n)-i;return Math.floor(a/36e5%24)}getMinute(n,i){const a=Date.parse(n)-i;return Math.floor(a/1e3/60%60)}getSeconds(n,i){const a=Date.parse(n)-i;return Math.floor(a/1e3%60)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.J),t.Y36(x.h),t.Y36(h.M),t.Y36(b.c),t.Y36(C.c),t.Y36(_.V),t.Y36(P.dD))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:6,vars:10,consts:[[1,"entry_banner"],[1,"mySwiper",3,"spaceBetween","pagination","navigation","loop","autoplay"],[4,"ngFor","ngForOf"],["class","entry-category","style","background: #fff",4,"ngIf"],["class","entry-grid-bg","style","padding: 50px 0",3,"ngStyle",4,"ngFor","ngForOf"],["swiperSlide",""],[1,"banner-single"],["alt","",3,"routerLink","src"],[1,"entry-category",2,"background","#fff"],[3,"nzBodyStyle"],[1,"container"],["nz-card-grid","","class","collections_Grid",3,"routerLink",4,"ngFor","ngForOf"],["nz-card-grid","",1,"collections_Grid",3,"routerLink"],[3,"src"],["nz-card-grid","","class","collections_Grid",4,"ngFor","ngForOf"],["nz-card-grid","",1,"collections_Grid"],[2,"padding-top","2px","text-align","center"],[1,"entry-grid-bg",2,"padding","50px 0",3,"ngStyle"],["class","container",4,"ngIf"],[1,"grid-section-title"],[1,"title-left"],[3,"ngStyle"],[1,"title-right",3,"routerLink","ngStyle"],[1,"las","la-long-arrow-alt-right"],[1,"grid-section-product"],[3,"data"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"swiper",1),t.YNc(2,y,2,0,"ng-container",2),t.qZA()(),t.YNc(3,k,6,3,"div",3),t.YNc(4,T,6,3,"div",3),t.YNc(5,F,2,5,"div",4)),2&n&&(t.xp6(1),t.Q6J("spaceBetween",0)("pagination",t.DdM(9,A))("navigation",!1)("loop",!0)("autoplay",!0),t.xp6(1),t.Q6J("ngForOf",null==i.homePageData?null:i.homePageData.banners),t.xp6(1),t.Q6J("ngIf",null!==i.productTypes),t.xp6(1),t.Q6J("ngIf",null!==i.brands),t.xp6(1),t.Q6J("ngForOf",null==i.homePageData?null:i.homePageData.homeCollections))},dependencies:[c.sg,c.O5,c.PC,s.rH,s.yS,g.nF,g.YC,M.j,d.bd,d.hC],styles:['.carousel .swiper-pagination-bullet-active{background-color:#f53489!important;border-radius:50%;width:8px;height:8px;opacity:1!important}  .carousel .swiper-pagination-bullet{background-color:#c6c6c6;opacity:1}  .swiper-button-next{font-size:20px}  .swiper-button-next,   .swiper-button-prev{background-color:#fff;border:1px solid #525252;display:flex;align-items:center;justify-content:center;width:30px;height:30px;top:50%;z-index:20;border-radius:50%;transition:all .3s linear;visibility:hidden;opacity:0}.mySwiper[_ngcontent-%COMP%]:hover     .swiper-button-next, .mySwiper[_ngcontent-%COMP%]:hover     .swiper-button-prev{visibility:visible;opacity:1}  .swiper-button-next:after,   .swiper-button-prev:after{content:"\\f054";font-size:17px;font-weight:600;font-family:"Font Awesome 5 Free";display:block;color:#525252;transition:all .3s linear}  .swiper-button-prev:after{content:"\\f053"}  .swiper-button-next:hover,   .swiper-button-prev:hover{border-color:#ef3688}  .swiper-button-next:hover:after,   .swiper-button-prev:hover:after{color:#ef3688!important}  .swiper-button-next.swiper-button-disabled,   .swiper-button-prev.swiper-button-disabled{z-index:20;visibility:hidden!important;opacity:0!important;transition:all .3s linear}  .small-carousel .mySwiper{padding:0 30px}  .small-carousel   .swiper-button-next{right:0;width:25px;height:25px;top:60%}  .small-carousel   .swiper-button-prev{left:0;width:25px;height:25px;top:60%}  .carousel .swiper{padding-bottom:50px}  .carousels .swiper{padding:20px 0 50px}  .carousel .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal[_ngcontent-%COMP%], .swiper-pagination-custom[_ngcontent-%COMP%], .swiper-pagination-fraction[_ngcontent-%COMP%]{bottom:0;background:#FFF;width:100%;padding:5px}  .carousel .swiper-slide{padding:5px 4px;box-sizing:border-box}.entry-category[_ngcontent-%COMP%]{padding:50px 0}.entry-category[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px;line-height:38px;font-weight:400;text-transform:uppercase}.entry-category[_ngcontent-%COMP%]   .ant-card-bordered[_ngcontent-%COMP%]{border-color:transparent}.entry-category[_ngcontent-%COMP%]   nz-card-grid[_ngcontent-%COMP%]{padding:0}.entry-category[_ngcontent-%COMP%]   .collections_Grid[_ngcontent-%COMP%]{padding:0;border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2;text-align:center;box-shadow:none;transition:all .3s ease-in-out}.entry-category[_ngcontent-%COMP%]   .collections_Grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:15px}.entry-category[_ngcontent-%COMP%]   .collections_Grid[_ngcontent-%COMP%]:hover{box-shadow:0 10px 10px #0000001c}.entry_banner[_ngcontent-%COMP%], .mySwiper[_ngcontent-%COMP%]{display:block}.collections_Grid[_ngcontent-%COMP%]{width:10%}.collections_Grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.title-left[_ngcontent-%COMP%]{margin-bottom:10px}@media (max-width: 1024px){.collections_Grid[_ngcontent-%COMP%]{width:12.5%}}@media (max-width: 768px){.collections_Grid[_ngcontent-%COMP%]{width:20%}}@media (max-width: 425px){.collections_Grid[_ngcontent-%COMP%]{width:33.33%}}.loader[_ngcontent-%COMP%]{position:relative;width:75px;height:100px}.loader__bar[_ngcontent-%COMP%]{position:absolute;bottom:0;width:10px;height:50%;background:#fff;transform-origin:center bottom;box-shadow:1px 1px #0003}.loader__bar[_ngcontent-%COMP%]:nth-child(1){left:0;transform:scaleY(.2);animation:barUp1 4s infinite}.loader__bar[_ngcontent-%COMP%]:nth-child(2){left:15px;transform:scaleY(.4);animation:barUp2 4s infinite}.loader__bar[_ngcontent-%COMP%]:nth-child(3){left:30px;transform:scaleY(.6);animation:barUp3 4s infinite}.loader__bar[_ngcontent-%COMP%]:nth-child(4){left:45px;transform:scaleY(.8);animation:barUp4 4s infinite}.loader__bar[_ngcontent-%COMP%]:nth-child(5){left:60px;transform:scale(1);animation:barUp5 4s infinite}.loader__ball[_ngcontent-%COMP%]{position:absolute;bottom:10px;left:0;width:10px;height:10px;background:#fff;border-radius:50%;animation:ball 4s infinite}@keyframes ball{0%{transform:translate(0)}5%{transform:translate(8px,-14px)}10%{transform:translate(15px,-10px)}17%{transform:translate(23px,-24px)}20%{transform:translate(30px,-20px)}27%{transform:translate(38px,-34px)}30%{transform:translate(45px,-30px)}37%{transform:translate(53px,-44px)}40%{transform:translate(60px,-40px)}50%{transform:translate(60px)}57%{transform:translate(53px,-14px)}60%{transform:translate(45px,-10px)}67%{transform:translate(37px,-24px)}70%{transform:translate(30px,-20px)}77%{transform:translate(22px,-34px)}80%{transform:translate(15px,-30px)}87%{transform:translate(7px,-44px)}90%{transform:translateY(-40px)}to{transform:translate(0)}}@keyframes barUp1{0%{transform:scaleY(.2)}40%{transform:scaleY(.2)}50%{transform:scale(1)}90%{transform:scale(1)}to{transform:scaleY(.2)}}@keyframes barUp2{0%{transform:scaleY(.4)}40%{transform:scaleY(.4)}50%{transform:scaleY(.8)}90%{transform:scaleY(.8)}to{transform:scaleY(.4)}}@keyframes barUp3{0%{transform:scaleY(.6)}to{transform:scaleY(.6)}}@keyframes barUp4{0%{transform:scaleY(.8)}40%{transform:scaleY(.8)}50%{transform:scaleY(.4)}90%{transform:scaleY(.4)}to{transform:scaleY(.8)}}@keyframes barUp5{0%{transform:scale(1)}40%{transform:scale(1)}50%{transform:scaleY(.2)}90%{transform:scaleY(.2)}to{transform:scale(1)}}.banner-single[_ngcontent-%COMP%]{text-align:center}img[_ngcontent-%COMP%]{max-width:100%;height:auto}.grid-section-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:0}.grid-section-title[_ngcontent-%COMP%]   .title-left[_ngcontent-%COMP%], .grid-section-title[_ngcontent-%COMP%]   .title-right[_ngcontent-%COMP%]{display:flex;align-items:center}.grid-section-title[_ngcontent-%COMP%]   .title-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px;line-height:38px;font-weight:400;text-transform:uppercase}.grid-section-title[_ngcontent-%COMP%]   .title-left[_ngcontent-%COMP%]   .promo-countdown[_ngcontent-%COMP%]{padding-left:10px}.grid-section-title[_ngcontent-%COMP%]   .title-left[_ngcontent-%COMP%]   .promo-countdown[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:orange;margin:0 5px;color:#fff;font-size:14px;display:inline-block;width:30px;height:30px;text-align:center;line-height:30px}.grid-section-title[_ngcontent-%COMP%]   .title-right[_ngcontent-%COMP%]{color:#da5894;font-style:italic}.grid-section-title[_ngcontent-%COMP%]   .title-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin:0 0 0 10px;transition:.3s}.grid-section-title[_ngcontent-%COMP%]   .title-right[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{margin:0 5px;cursor:pointer}.grid-section-product[_ngcontent-%COMP%]{display:grid;grid-template-columns:16.66% 16.66% 16.66% 16.66% 16.66% 16.66%;grid-template-rows:auto;grid-template-areas:"grid";gap:0px}.active-title[_ngcontent-%COMP%]{color:red!important}.categories-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 10px 15px;background-color:#f8f8f8;margin-bottom:10px;box-sizing:border-box}.categories-top-left[_ngcontent-%COMP%]{display:block}.categories-top-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d2923;font-family:Poppins,sans-serif;text-transform:uppercase;font-style:normal;font-weight:700;font-size:18px;line-height:22px}.categories-top-right[_ngcontent-%COMP%]{display:block}.categories-top-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#5d5c5c;font-family:Open Sans,sans-serif;text-transform:capitalize;font-style:normal;font-weight:700;font-size:16px}.categories-top-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#010101}.category-menu[_ngcontent-%COMP%]{background-color:#fff;box-sizing:border-box}.category-menu[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:15px;background:#ddd}.category-menu[_ngcontent-%COMP%]::-webkit-scrollbar{background-color:#fff;width:5px;border-radius:10px}.category-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:0;height:72vh;box-sizing:border-box;padding:10px 0}.category-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar{width:0px}.category-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:15px 20px;box-sizing:border-box;position:relative}.category-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#484848;font-family:Poppins,sans-serif;font-weight:500;font-style:normal;font-size:15.5px;width:100%;transition:all .3s linear;display:flex;align-items:center;justify-content:flex-start;gap:10px}.category-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:22px}.category-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#e9688b;cursor:pointer}.category-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#484848;display:block;box-sizing:border-box;border-radius:5px;font-size:14px;transition:all .3s linear}.category-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#db5791;cursor:pointer}.category-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{background-color:#e9688b;color:#fff}.banner-slide[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box;border-radius:10px}.banner-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80vh;width:100%;box-sizing:border-box}@media (max-width: 1150px){.banner-main[_ngcontent-%COMP%]{grid-template-columns:300px 72%}}@media (max-width: 1050px){.banner-main[_ngcontent-%COMP%]{grid-template-columns:repeat(1,100%)}.banner-area[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:0!important}.banner-slide[_ngcontent-%COMP%]{top:0}.category-menu[_ngcontent-%COMP%]{display:none}.banner-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:80vh;height:auto;min-height:200px;object-fit:cover}}  .banner-slide .swiper{padding-bottom:0}  .banner-slide .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal[_ngcontent-%COMP%], .swiper-pagination-custom[_ngcontent-%COMP%], .swiper-pagination-fraction[_ngcontent-%COMP%]{bottom:20px;background:transparent;width:100%;padding:5px}  .banner-slide .swiper-slide{padding:0;box-sizing:border-box}@media (max-width: 500px){  .banner-slide .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal[_ngcontent-%COMP%], .swiper-pagination-custom[_ngcontent-%COMP%], .swiper-pagination-fraction[_ngcontent-%COMP%]{bottom:10px}}.section1[_ngcontent-%COMP%]{display:block;margin:30px 0 20px}.section1-main[_ngcontent-%COMP%]{display:block;width:100%}.offer-banner[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:50px}.offer-banner-main[_ngcontent-%COMP%]{display:block}.offer-banner-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain}.section2[_ngcontent-%COMP%]{display:block;margin-bottom:50px}.section2-main[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:auto;grid-gap:25px;box-sizing:border-box}.categorys-details[_ngcontent-%COMP%]{display:block;width:100%;position:relative;z-index:10;transition:all .3s linear}.categorys-img[_ngcontent-%COMP%]{overflow:hidden;border-radius:7px}.categorys-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:all .3s linear;max-height:400px;min-height:250px;object-fit:cover}.categorys-details[_ngcontent-%COMP%]:hover   .categorys-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.05);cursor:pointer}.categorys-text-info[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:center;padding:20px;box-sizing:border-box;background-color:#0000004d;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:7px}.categorys-text-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-family:Poppins,sans-serif;font-weight:600;text-transform:uppercase;font-size:20px;font-style:normal;display:block;letter-spacing:1px;transition:all .3s linear}@media (max-width: 768px){.section2-main[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);grid-gap:10px}.categorys-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px;max-height:auto;min-height:auto}.categorys-text-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px;text-align:center}}@media (max-width: 550px){.categorys-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:170px;max-height:auto;min-height:auto}}.categorys-details[_ngcontent-%COMP%]:hover   .categorys-text-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{transform:translateY(-20px);cursor:pointer}.section3[_ngcontent-%COMP%]{display:block;margin-bottom:50px}.section3-main[_ngcontent-%COMP%]{display:block;width:100%}.section4[_ngcontent-%COMP%]{display:block;margin-bottom:50px}.section4-main[_ngcontent-%COMP%]{display:block;width:100%}@media (max-width: 400px){.section1[_ngcontent-%COMP%]{margin-top:0}}.clearfix[_ngcontent-%COMP%]:after{content:"";display:block;clear:both}.sub-mega-menu[_ngcontent-%COMP%]{display:none;transition:all .3s linear;background-color:#fff;border:1px solid #e2e2e2;width:300px;overflow-y:auto;box-sizing:border-box;position:absolute;top:-19px;left:298px;z-index:100}.sub-mega-menu[_ngcontent-%COMP%]::-webkit-scrollbar{display:block;width:6px;background-color:#fff}.sub-mega-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track{display:block;background-color:#fff}.sub-mega-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#eee;height:30px}.category-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .sub-mega-menu[_ngcontent-%COMP%]{display:block;cursor:pointer}@media (max-width: 1000px){.sub-mega-menu[_ngcontent-%COMP%]{width:600px}}@media (max-width: 1440px){.grid-section-product[_ngcontent-%COMP%]{grid-template-columns:20% 20% 20% 20% 20%}}@media (max-width: 1024px){.grid-section-product[_ngcontent-%COMP%]{grid-template-columns:25% 25% 25% 25%}}@media (max-width: 768px){.flash-promo[_ngcontent-%COMP%]{flex-direction:column}.flash-promo[_ngcontent-%COMP%]   .title-left[_ngcontent-%COMP%]{margin-bottom:20px}.grid-section-product[_ngcontent-%COMP%]{grid-template-columns:33.33% 33.33% 33.33%}}@media (max-width: 425px){.grid-section-product[_ngcontent-%COMP%]{grid-template-columns:50% 50%}}']}),e})()}];let J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(H),s.Bz]}),e})();var U=r(90898),B=r(95892);let Q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,s.Bz]}),e})(),j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,s.Bz]}),e})();var G=r(85249),L=r(47614),N=r(24586);let I=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,J,U.q,g.kz,B.l,Q,j,G.A2,L.P,N.D]}),e})()}}]);