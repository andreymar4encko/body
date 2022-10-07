(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r,i,s,l,a,c,d,u,f,p,m,h,v,y,g,b,w,S;v=document.querySelector(".hidden-small"),y=document.querySelector(".menu-button"),g=y.offsetHeight,b=document.querySelector(".popup-menu"),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.target.closest('[href^="#"]');if(n&&!n.matches('[href="#close"]')){var o,r=n.getAttribute("href").substring(1),i=document.getElementById(r).offsetTop,s=window.pageYOffset,l=function e(){o=requestAnimationFrame(e),s<i-15-t?(s+=15,document.documentElement.scrollTop=s):s>i+15-t?(s-=15,document.documentElement.scrollTop=s):cancelAnimationFrame(o)};requestAnimationFrame(l)}},S=function(e){e.preventDefault();var t=e.target;(t.closest(".close-menu-btn")||t.matches('[href^="#"]'))&&(b.removeAttribute("style"),window.innerWidth<=768?w(e,g):w(e))},y.addEventListener("click",(function(e){e.target.matches("img")&&(b.style.display="flex",b.addEventListener("click",S))})),v.addEventListener("click",S),(h=document.querySelector(".club-select")).addEventListener("click",(function(){h.querySelector("ul").hasAttribute("style")?h.querySelector("ul").removeAttribute("style"):h.querySelector("ul").style.display="block"})),f=document.querySelector(".head-main .right"),p=document.getElementById("free_visit_form"),m=document.getElementById("callback_form"),f.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".open-popup")?p.style.display="block":t.matches(".callback-btn")&&(m.style.display="block")})),document.body.addEventListener("click",(function(e){var t=e.target;(t.matches(".overlay")||t.closest(".close-form")||t.matches(".close-btn"))&&t.closest(".popup").removeAttribute("style")})),window.onload=(a=function(e){var t=e.target;t.value=t.value.replace(/[^а-яё\s]/gi,""),t.value.length<2?t.style.border="5px solid #FF0000":t.removeAttribute("style")},c=function(e){var t=e.target;t.value.length<2?(t.value="",t.removeAttribute("style")):t.value=t.value.split(/\s+/).map((function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).join(" ").trim()},d=function(e){var t=e.target;t.value=t.value.replace(/[^\+\d]/g,""),t.value.length>12?t.value=t.value.substring(0,12):"+"===t.value.charAt(0)&&"7"===t.value.charAt(1)||(t.value="+7")},u=function(e){var t=e.target;t.value=t.value.replace(/^[\+]{1,}/g,"+").replace(/[\+]{1,}$/g,"")},void document.body.addEventListener("click",(function(e){var t=e.target;t.matches('[placeholder="Ваше имя..."]')?(t.addEventListener("input",a),t.addEventListener("blur",c)):t.matches('[placeholder*="Ваш номер"]')&&(t.addEventListener("input",d),t.addEventListener("blur",u))}))),l=document.createElement("div"),document.body.addEventListener("submit",(function(e){e.preventDefault();var t=e.target;t.closest(".popup")&&(t.querySelector('input[type="checkbox"]').checked?function(e){var t=e.innerHTML;l.style.cssText="font-size: 2rem; color: #ffffff;",l.textContent="Загрузка...",e.appendChild(l);var n=new FormData(e);e.reset();var o={};n.forEach((function(e,t){o[t]=e}));var r=function(t){e.style.cssText="padding-top: 25%; font-size: 2rem; color: #ffffff;",e.textContent=t},i=function(){setTimeout((function(){e.removeAttribute("style"),e.innerHTML=t,e.closest(".popup").removeAttribute("style")}),5e3)};(function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(o).then((function(t){if(200!==t.status)throw new Error("Status network not 200");e.closest(".popup")&&(r("Спасибо! Мы скоро с Вами свяжемся!"),i())})).catch((function(t){e.closest(".popup")&&(r("Что-то пошло не так..."),i()),console.error(t)}))}(t):(l.style.cssText="padding-top: 5px; color: #FF0000;",l.textContent="Необходимо подтвердить согласие на персональных обработку данных",t.appendChild(l),setTimeout((function(){return l.remove()}),2e3)))})),function(){var e=document.createElement("div"),t=function(t){t.closest("#card_order")?e.style.cssText="font-size: 2rem; color: #000000;":e.style.cssText="font-size: 2rem; color: #ffffff;",t.appendChild(e),e.textContent="Загрузка...";var n=new FormData(t);t.reset();var o={};n.forEach((function(e,t){o[t]=e})),setTimeout((function(){return e.remove()}),1e3),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(o).then((function(e){if(200!==e.status)throw new Error("Status network not 200");document.getElementById("thanks").style.display="block"})).catch((function(e){document.getElementById("thanks").style.display="block",document.querySelector("#thanks .form-content h4").textContent="Ошибка",document.querySelector("#thanks .form-content p").textContent="Что-то пошло не так...",console.error(e)}))};document.body.addEventListener("submit",(function(n){if(n.preventDefault(),!n.target.closest(".popup")){var o=n.target;if(o.querySelector('input[type="checkbox"]'))o.querySelector('input[type="checkbox"]').checked?t(o):(e.style.cssText="padding-top: 5px; color: #FF0000;",e.textContent="Необходимо подтвердить согласие на персональных обработку данных",o.appendChild(e),setTimeout((function(){return e.remove()}),2e3));else if(o.querySelectorAll('input[type="radio"]')){var r=o.querySelectorAll('input[type="radio"]');(r[0].checked||r[1].checked)&&t(o)}}}))}(),(s=document.querySelector(".fixed-gift"))&&s.addEventListener("click",(function(){document.getElementById("gift").style.display="block",s.remove()})),function(){var e=document.querySelector(".top-menu"),t=document.querySelector(".fixed-gift"),n=e.offsetHeight+10,o=e.offsetTop;t&&window.addEventListener("scroll",(function(){window.pageYOffset>=o&&window.innerWidth<=768?(t.style.top=n+"px",e.style.position="fixed"):(e.removeAttribute("style"),t.removeAttribute("style"))}))}(),function(){var e=document.querySelector("header").offsetHeight,t=document.getElementById("totop");t.style.display="none",window.addEventListener("scroll",(function(){window.pageYOffset>e?t.style.display="block":t.style.display="none"}));var n=function e(){window.pageYOffset>0&&(window.scrollBy(0,-15),setTimeout(e,1))};t.addEventListener("click",(function(e){e.preventDefault(),n()}))}(),document.querySelector(".footer-top .left").addEventListener("click",(function(e){e.target.matches('[href^="#"]')&&(e.preventDefault(),function(e){var t,n=e.target.closest('[href^="#"]').getAttribute("href").substring(1),o=document.getElementById(n).offsetTop,r=window.pageYOffset;requestAnimationFrame((function e(){t=requestAnimationFrame(e),r>o?(r-=15,document.documentElement.scrollTop=r):cancelAnimationFrame(t)}))}(e))})),function(){var t=document.getElementById("price-total");if(t){var n=document.getElementById("card_order"),o=document.querySelector(".time"),r=document.querySelector('label[for^="m"]').textContent,i=document.querySelector('input[name="club-name"]').value,s=document.querySelector('input[name="code"]'),l=function(n,o){fetch("./".concat(n,".html")).then((function(e){return e.text()})).then((function(n){var r,i=function(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){a=!0,s=e},f:function(){try{l||null==o.return||o.return()}finally{if(a)throw s}}}}((new DOMParser).parseFromString(n,"text/html").querySelectorAll('label[for^="t"]'));try{for(i.s();!(r=i.n()).done;){var l=r.value,a=l.querySelector(".solo").textContent,c=/[соло]/i.test(a);if(l.querySelector(".long").textContent===o&&c){var d=l.querySelector(".cost").textContent,u=parseInt(d);if("ТЕЛО2020"===s.value){var f=parseInt(d)/100*30;t.textContent=u-Math.ceil(f)}else t.textContent=u}}}catch(e){i.e(e)}finally{i.f()}}))},a=i,c=r;l(a,c),n.addEventListener("change",(function(e){var t=e.target;t.matches('input[name="club-name"]')&&(a=t.value),l(a,c)})),o.addEventListener("click",(function(e){var t=e.target;t.matches('label[for^="m"]')&&(c=t.textContent),l(a,c)}))}}(),r=document.querySelectorAll(".main-slider .slide"),i=0,setInterval((function(){r[i].style.display="none",++i>=r.length&&(i=0),r[i].style.display="flex"}),3e3),function(){var e;(e=document.createElement("style")).id="slider-style",e.textContent="\n      .slide-item {\n        display: none;\n      }\n      .slide-active {\n        display: block;\n      }\n    ",document.head.appendChild(e);for(var t=document.querySelector(".gallery-slider"),n=document.querySelectorAll(".gallery-slider .slide"),o=document.querySelector(".slider-dots-wrapper"),r=0;r<n.length;r++)n[r].classList.add("slide-item"),0===r&&n[r].classList.add("slide-active");var i=document.createElement("ul");i.className="slider-dots",i.style.cssText="position: relative; bottom: 50px;",o.append(i);for(var s=document.querySelector(".slider-dots"),l=0;l<n.length;l++){var a=document.createElement("li"),c=document.createElement("button");c.classList.add("dotBtn"),a.classList.add("dot"),0===l&&a.classList.add("slick-active"),s.append(a),a.append(c)}var d,u=t.querySelectorAll(".dot"),f=0,p=function(e,t,n){e[t].classList.remove(n)},m=function(e,t,n){e[t].classList.add(n)},h=function(){p(n,f,"slide-active"),p(u,f,"slick-active"),++f>=n.length&&(f=0),m(n,f,"slide-active"),m(u,f,"slick-active")},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;d=setInterval(h,e)};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;p(n,f,"slide-active"),p(u,f,"slick-active"),t.matches("#arrow-right")?f++:t.matches("#arrow-left")?f--:t.closest(".dot")&&u.forEach((function(e,n){e===t.closest(".dot")&&(f=n)})),f>=n.length&&(f=0),f<0&&(f=n.length-1),m(n,f,"slide-active"),m(u,f,"slick-active")})),t.addEventListener("mouseover",(function(e){(e.target.closest(".slider-arrow")||e.target.closest(".dot"))&&clearTimeout(d)})),t.addEventListener("mouseout",(function(e){(e.target.closest(".slider-arrow")||e.target.closest(".dot"))&&v()})),v(1500)}(),new(function(){function e(t){var n=t.main,o=t.wrap,r=t.next,i=t.prev,s=t.infinity,l=void 0!==s&&s,a=t.position,c=void 0===a?0:a,d=t.slidesToShow,u=void 0===d?3:d,f=t.responsive,p=void 0===f?[]:f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n&&o||console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=u,this.options={position:c,infinity:l,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=p}var r,i;return r=e,(i=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.next&&this.prev||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var e,n=function(e,n){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=t(e))){o&&(e=o);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){a=!0,s=e},f:function(){try{l||null==o.return||o.return()}finally{if(a)throw s}}}}(this.slides);try{for(n.s();!(e=n.n()).done;)e.value.classList.add("glo-slider__item")}catch(e){n.e(e)}finally{n.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent="\n        .glo-slider {\n          overflow: hidden;\n        }\n        .glo-slider__wrap {\n          display: flex;\n          transition: transform 0.5s;\n          will-change: transform;\n          margin-bottom: 30px !important;\n        }\n        .glo-slider__item {\n          align-items: center;\n          justify-content: center;\n          flex: 0 0 ".concat(this.options.widthSlide,"%;\n          margin: auto 0 !important;\n        }\n        .slider-arrow {\n          position: relative;\n          top: 75px;\n          margin-top: -18px;\n          z-index: 100;\n          cursor: pointer\n        }\n        .slider-arrow span {\n          display: block;\n          width: 36px;\n          height: 37px;\n          background-color: #f4c71b;\n          border-radius: 50%;\n          text-align: center;\n          padding-top: 11px\n        }\n        #services #arrow-right{\n          position: absolute;\n          left: 97%;\n        }\n        @media only screen and (max-width: 1000px) {\n          #services #arrow-right{\n            left: 95%;\n          }\n        }\n      "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.id="sliderCarousel",e.textContent="\n        .glo-slider__prev, .glo-slider__next {\n          margin: 0 10px;\n          border: 15px solid transparent;\n          background: transparent;\n        }\n        .glo-slider__next {\n          border-left-color: #19b5fe\n        }\n        .glo-slider__prev {\n          border-right-color: #19b5fe\n        }\n        .glo-slider__prev:hover,\n        .glo-slider__next:hover,\n        .glo-slider__prev:focus,\n        .glo-slider__next:focus {\n          background: transparent;\n          outline: transparent;\n        }\n      ",document.head.appendChild(e)}},{key:"responseInit",value:function(){var e,o=this,r=this.slidesToShow,i=this.responsive.map((function(e){return e.breakpoint})),s=Math.max.apply(Math,function(e){if(Array.isArray(e))return n(e)}(e=i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=function(){o.options.widthSlide=Math.floor(100/o.slidesToShow),o.addStyle()},a=function(){var e=document.documentElement.clientWidth;if(e<s)for(var t=0;t<i.length;t++)e<i[t]&&(o.slidesToShow=o.responsive[t].slidesToShow,l());else o.slidesToShow=r,l()};a(),window.addEventListener("resize",a)}}])&&o(r.prototype,i),e}())({main:"#services .wrapper",wrap:".services-slider",next:"#services #arrow-right",prev:"#services #arrow-left",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()})();