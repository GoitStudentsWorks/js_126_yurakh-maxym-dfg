import{a as P,R as D,C as N,S,N as M,P as E,A as H,b as h,K as C}from"./assets/vendor-Bzxr1f4C.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function R(e){const t=document.querySelector(".categories-desktop");if(!t)return;const s=[{_id:"all",name:"Всі десерти"},...e].map(({_id:r,name:a},o)=>`
      <label>
        <input
          type="radio"
          name="category"
          value="${r}"
          ${o===0?"checked":""}
        >
        <span class="category-name">
          ${a}
        </span>
      </label>
    `).join("");t.innerHTML=s}const j=new URL("/js_126_yurakh-maxym-dfg/assets/icons-qp2qQD9b.svg",import.meta.url).href;function U(e,t=!1){const n=document.querySelector(".desserts-list"),s=e.map(({_id:r,image:a,category:o,name:c,description:l,price:v})=>`
        <li class="dessert-card">
          <img
          class="dessert-card__image"
            src="${a}"
            alt="${c}"
          >

          <p class="dessert-card__category">${o.name}</p>

          <h3 class="dessert-card__title">${c}</h3>

          <p class="dessert-card__description">${l}</p>

          <div class="dessert-card__block">
            <p class="dessert-card__price">${v} грн</p>
            
            <button
      type="button"
      class="dessert-details-btn"
      data-id="${r}"
      data-modal-open
    >
      <svg class="dessert-details-btn__icon" width="24" height="24">
        <use href="${j}#icon-arrow-outward"></use>
      </svg>
    </button>
          </div>
        </li>
      `).join("");t?n.insertAdjacentHTML("beforeend",s):n.innerHTML=s}function F(e){const t=document.querySelector(".categories-mobile");if(!t)return;const n=`
    <select class="categories-select">
      <option value="all">Всі десерти</option>

      ${e.map(({_id:s,name:r})=>`
            <option value="${s}">
              ${r}
            </option>
          `).join("")}
    </select>
  `;t.innerHTML=n}const m=P.create({baseURL:"https://deserts-store.b.goit.study/api",timeout:1e4});async function K(){const{data:e}=await m.get("/categories");return e}async function W(e={}){const{data:t}=await m.get("/desserts",{params:e});return t}async function Q(e){const{data:t}=await m.get(`/desserts/${e}`);return t}const I=document.querySelector(".loader");function z(){I.classList.remove("is-hidden")}function Y(){I.classList.add("is-hidden")}const d=document.querySelector("[data-modal]"),_=document.querySelector("[data-modal-close]"),f=document.querySelector(".dessert_modal_content"),q=document.querySelector(".dessert-modal__media");let L=null;function G(e){return`
    <img class="modal-image" src="${e.image}" alt="${e.name}">
  `}function J(e){return`
    <h2 class="modal-title">${e.name}</h2>

    <p class="modal-price">${e.price} грн</p>

    <div class="modal-rating">
      <div class="rating-stars" data-rating="${e.rate}"></div>
    </div>

    <p class="modal-description">${e.description}</p>

    <p class="modal-composition">
      <span class="modal-composition-label">Склад</span>: ${e.composition}
    </p>
  `}function X(e){return Math.round(e*2)/2}function Z(){if(!f)return;const e=f.querySelector(".rating-stars");if(!e)return;const t=Number(e.dataset.rating)||0,n=X(t);new D(e,{score:n,readOnly:!0,halfShow:!0,starType:"i",number:5}).init()}function ee(e){!f||!q||(L=e._id??e.id,q.innerHTML=G(e),f.innerHTML=J(e),Z())}function te(){d&&(d.classList.add("is-modal-open"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",x))}function b(){d&&(d.classList.remove("is-modal-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",x))}function x(e){e.key==="Escape"&&b()}function ne(e){e.target===e.currentTarget&&b()}_&&_.addEventListener("click",b);d&&d.addEventListener("click",ne);d&&d.addEventListener("click",se);function se(e){e.target.closest("[data-order-open]")&&L&&(b(),window.dispatchEvent(new CustomEvent("order:open",{detail:{dessertId:L}})))}let y=1,k="all";const T=document.querySelector(".desserts_load-more-btn");async function g(e={},t=!1){z();const n=await W(e);return U(n.desserts,t),Y(),n}function w(e){const t=Math.ceil(e.totalItems/e.limit);T.hidden=y>=t}async function re(){y+=1;const e={page:y,limit:8};k!=="all"&&(e.category=k);const t=await g(e,!0);w(t)}async function ae(){const e=await K();R(e),F(e);const t=await g({limit:8});w(t);const n=document.querySelector(".categories-select");n&&new N(n,{searchEnabled:!1,itemSelectText:"",shouldSort:!1}),document.querySelector(".desserts_categories-container").addEventListener("change",ie),T.addEventListener("click",re),document.querySelector(".desserts-list").addEventListener("click",oe)}function oe(e){const t=e.target.closest(".dessert-details-btn");if(!t)return;const n=t.dataset.id;O(n)}async function ie(e){const t=e.target.value;if(k=t,y=1,t==="all"){const n=await g({limit:8});w(n)}else{const n=await g({category:t,limit:8});w(n)}}async function O(e){const t=await Q(e);ee(t),te()}ae();let p=null;function A(){if(window.innerWidth<768){p&&(p.destroy(!0,!0),p=null);return}p||(p=new S(".about-us .mySwiper",{modules:[M,E],loop:!1,slidesPerView:1,spaceBetween:24,navigation:{nextEl:".swiper-container .swiper-button-next",prevEl:".swiper-container .swiper-button-prev",disabledClass:"swiper-button-disabled"},pagination:{el:".swiper-container .swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:24}}}))}A();window.addEventListener("resize",A);const $=document.querySelector(".accordion-container");$&&new H($,{showMultiple:!1,duration:500});const ce=document.querySelector(".feedback-list"),de=document.querySelector(".feedback-slider"),le=document.querySelector(".feedback-slider .swiper-button-next"),ue=document.querySelector(".feedback-slider .swiper-button-prev"),pe=document.querySelector(".feedback-slider .swiper-pagination");let me=1;const fe=10;function ye(e){return e.map(({rate:t,description:n,author:s})=>`<li class="feedback-card swiper-slide">
    <div class="feedback-card-rating" data-rate=${t}>
   
    </div>
    <div class="feedback-container">
    <p class="feedback-card-description">"${n}"</p>
    <p class="feedback-card-author">${s}</p>
    </div>
        </li>`).join("")}function ge(){document.querySelectorAll(".feedback-card-rating").forEach(t=>{const n=t.getAttribute("data-rate");new D(t,{score:Number(n),readOnly:!0,halfShow:!0,round:{down:.26,up:.76},starType:"i",number:5}).init()})}function we(){new S(de,{modules:[M,E,C],slidesPerView:1,spaceBetween:20,loop:!1,pagination:{el:pe,clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:le,prevEl:ue},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}async function be(){const e="https://deserts-store.b.goit.study/api/",t="feedbacks",n={page:me,limit:fe};try{const{data:s}=await P(`${e}${t}`,{params:n}),r=s.feedbacks||s;ce.innerHTML=ye(r),ge(),we()}catch(s){h.fire({icon:"error",title:"Упс... Щось пішло не так",text:s.message})}}be();const B=document.getElementById("current-year");B&&(B.textContent=new Date().getFullYear());async function ve(e={}){const{data:t}=await m.get("/desserts",{params:{type:"popular",...e}});return t}const u=document.querySelector(".popular-products");if(u){let n=function(a){return a.map(o=>`
        <div class="swiper-slide">
          ${r(o)}
        </div>
      `).join("")},r=function({_id:a,image:o,category:c,name:l,description:v,price:V}){return`
      <div class="dessert-card dessert-card--popular">
        <img class="dessert-card__image" src="${o}" alt="${l}">
        <p class="dessert-card__category">${(c==null?void 0:c.name)??""}</p>
        <h3 class="dessert-card__title">${l}</h3>
        <p class="dessert-card__description">${v}</p>

        <div class="dessert-card__block">
          <p class="dessert-card__price">${V} грн</p>

          <button type="button" class="dessert-details-btn" data-id="${a}">
            <svg class="dessert-details-btn__icon" width="24" height="24">
              <use href="${s}#icon-arrow-outward"></use>
            </svg>
          </button>
        </div>
      </div>
    `};const e=u.querySelector(".popular-products-wrapper");async function t(){const a=await ve({page:1,limit:10});if(!(a!=null&&a.desserts)||a.desserts.length<3){u.style.display="none";return}e.innerHTML=n(a.desserts),new S(u.querySelector(".popular-products-slider"),{modules:[M,E,C],loop:!1,slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0},navigation:{nextEl:u.querySelector(".popular-products-next"),prevEl:u.querySelector(".popular-products-prev"),disabledClass:"swiper-button-disabled"},pagination:{el:u.querySelector(".popular-products-pagination"),clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}}}),e.addEventListener("click",o=>{const c=o.target.closest(".dessert-details-btn");if(!c)return;const l=c.dataset.id;l&&O(l)})}const s=new URL("/js_126_yurakh-maxym-dfg/assets/icons-qp2qQD9b.svg",import.meta.url).href;t().catch(a=>{console.error("Popular products error:",a)})}(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn")};if(!e.openMenuBtn||!e.closeMenuBtn||!e.menu)return;e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",n),e.menuLinks.forEach(r=>{r.addEventListener("click",n)});function t(){e.menu.classList.add("is-menu-open"),document.body.classList.add("no-scroll"),e.openMenuBtn.setAttribute("aria-expanded","true"),document.addEventListener("keydown",s)}function n(){e.menu.classList.remove("is-menu-open"),document.body.classList.remove("no-scroll"),e.openMenuBtn.setAttribute("aria-expanded","false"),document.removeEventListener("keydown",s)}function s(r){r.key==="Escape"&&n()}})();async function he(e){const{data:t}=await m.post("/orders",e);return t}const i={closeModalBtn:document.querySelector("[data-order-close]"),modal:document.querySelector("[data-order]"),form:document.querySelector(".order-form")};if(i.closeModalBtn&&i.modal&&i.form){let e=function(){i.modal.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",t)},t=function(n){n.code==="Escape"&&e()};window.addEventListener("order:open",n=>{const{dessertId:s}=n.detail;i.modal.classList.remove("is-hidden"),document.body.classList.add("modal-open"),i.modal.dataset.dessertId=s,document.addEventListener("keydown",t)}),i.closeModalBtn.addEventListener("click",e),i.modal.addEventListener("click",n=>{n.target===i.modal&&e()}),i.form.addEventListener("submit",async n=>{n.preventDefault();const s=new FormData(n.currentTarget),a=(s.get("phone")||s.get("tel")||"").replace(/\D/g,""),o={dessertId:i.modal.dataset.dessertId,name:s.get("name"),phone:a,comment:s.get("comment")};try{await he(o),h.fire({title:"Успішно!",text:"Ваше замовлення успішно виконане!",icon:"success",confirmButtonColor:"#f19898"}),i.form.reset(),e()}catch(c){console.error(c),h.fire({title:"Помилка замовлення",text:"Щось пішло не так при відправці замовлення. Перевірте, чи правильно вписані дані.",icon:"error",confirmButtonColor:"#080c0c"})}})}
//# sourceMappingURL=index.js.map
