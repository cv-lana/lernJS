(()=>{"use strict";(e=>{const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds"),r=e=>e<=9?"0"+e:e,a=()=>{const e=(()=>{const e=(new Date("23 july 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),o=Math.floor(e/60%60);return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:o,seconds:t}})(),l=setInterval(a,1e3);t.textContent=r(e.hours),o.textContent=r(e.minutes),n.textContent=r(e.seconds),e.timeRemaining<=0&&(t.textContent="00",o.textContent="00",n.textContent="00",clearInterval(l))};a()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),t.addEventListener("click",(e=>{"A"===e.target.tagName&&o()}))})(),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))})),e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none"))}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n&&t.forEach(((e,r)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(r)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content"));let o,n=document.querySelector(".portfolio-dots"),r=0;const a=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)};for(let t=0;t<e.length;t++){let e=document.createElement("li");e.classList.add("dot"),n.append(e)}const c=document.querySelectorAll(".dot"),s=()=>{a(e,r,"portfolio-item-active"),a(c,r,"dot-active"),r++,r>=e.length&&(r=0),l(e,r,"portfolio-item-active"),l(c,r,"dot-active")},u=(e=3e3)=>{o=setInterval(s,e)};t.addEventListener("click",(t=>{t.preventDefault();let o=t.target;o.matches(".portfolio-btn, .dot")&&(a(e,r,"portfolio-item-active"),a(c,r,"dot-active"),o.matches("#arrow-right")?r++:o.matches("#arrow-left")?r--:o.matches(".dot")&&c.forEach(((e,t)=>{e===o&&(r=t)})),r>=e.length&&(r=0),r<0&&(r=e.length-1),l(e,r,"portfolio-item-active"),l(c,r,"dot-active"))})),t.addEventListener("mouseover",(()=>{(event.target.matches(".portfolio-btn")||event.target.matches(".dot"))&&clearInterval(o)})),t.addEventListener("mouseout",(()=>{(event.target.matches(".portfolio-btn")||event.target.matches(".dot"))&&u()})),u(1500)})(),(()=>{const e=document.querySelector(".calc-block"),t=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),n=document.querySelector(".calc-day"),r=document.querySelector(".calc-count"),a=document.getElementById("total");e.addEventListener("change",(e=>{const l=e.target;(l.matches("select")||l.matches("input"))&&((e=100)=>{let l=0,c=1,s=1;const u=t.options[t.selectedIndex].value,d=+o.value;r.value>1&&(c+=(r.value-1)/10),n.value&&n.value<5?s*=2:n.value&&n.value<10&&(s*=1.5),u&&d&&(l=e*u*d*c*s),a.textContent=l})()}))})(),(()=>{const e="Что то пошло не так...",t="Загрузка...",o="Спасибо! Мы скоро с вами свяжемся",n=document.getElementById("form1"),r=n.querySelectorAll("#form1 input"),a=document.getElementById("form2"),l=a.querySelectorAll("#form2 input"),c=document.getElementById("form3"),s=c.querySelectorAll(".popup-content input"),u=document.createElement("div");u.style.cssText="font-size: 2rem; color: white";const d=e=>fetch("./server.php",{method:"POST",headrs:{"Content-Type":"application/json"},body:JSON.stringify(e)});n.addEventListener("submit",(a=>{a.preventDefault(),n.appendChild(u),u.textContent=t;const l=new FormData(n);let c={};l.forEach(((e,t)=>{c[t]=e})),d(c).then((e=>{if(200!==e.status)throw new Error("status network not 200");u.textContent=o})).catch((t=>{u.textContent=e,console.log(t)})),r.forEach((e=>{a.target&&(e.value="")}))})),a.addEventListener("submit",(n=>{n.preventDefault(),a.appendChild(u),u.textContent=t;const r=new FormData(a);let c={};r.forEach(((e,t)=>{c[t]=e})),d(c).then((e=>{if(200!==e.status)throw new Error("status network not 200");u.textContent=o})).catch((t=>{u.textContent=e,console.log(t)})),l.forEach((e=>{n.target&&(e.value="")}))})),c.addEventListener("submit",(n=>{n.preventDefault(),c.appendChild(u),u.textContent=t;const r=new FormData(c);let a={};r.forEach(((e,t)=>{a[t]=e})),d(a).then((e=>{if(200!==e.status)throw new Error("status network not 200");u.textContent=o})).catch((t=>{u.textContent=e,console.log(t)})),s.forEach((e=>{n.target&&(e.value="")}))}))})(),(()=>{const e=document.querySelectorAll(".command__photo"),t=document.querySelector(".command .row");t.addEventListener("mouseover",(t=>{let o=t.target;e.forEach(((t,n)=>{if(t===o){let t=e[n].getAttribute("src"),r=document.createAttribute("data-src");r.value=t,e[n].setAttributeNode(r),o.src=o.dataset.img,e[n].removeAttribute("data-img")}}))})),t.addEventListener("mouseout",(t=>{let o=t.target;e.forEach(((t,n)=>{if(t===o){let t=e[n].getAttribute("src"),r=document.createAttribute("data-img");r.value=t,e[n].setAttributeNode(r),o.src=o.dataset.src,e[n].removeAttribute("data-src")}}))}))})(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),o=document.querySelector(".calc-day");e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/,"")})),t.addEventListener("input",(()=>{t.value=t.value.replace(/\D/,"")})),o.addEventListener("input",(()=>{o.value=o.value.replace(/\D/,"")}))})(),(()=>{const e=document.querySelectorAll("input[name = user_name]"),t=document.querySelector("input[name = user_message]"),o=document.querySelectorAll("input[name = user_email]"),n=document.querySelectorAll("input[name = user_phone]");let r=/[А-Яа-яЁё ]/g,a=/[А-Яа-яЁё0-9 -\W]/g,l=/[A-Z-!~'_]+@[A-Z-_]+.+.[A-Z]{2,4}/gi,c=/\+?[78]\d{10}/g,s=document.createElement("div");s.style.cssText="font-size: 12px; color: red";const u=e=>{"user_name"===e.name&&(r.test(e.value)&&""!==e.value?(e.value=e.value.match(r).join("").replace(/^[ \s]+|[ \s]+$/g,""),e.value=e.value.replace(/\s+/g," "),e.value=e.value.replace(/( |^)[а-яё]/g,(e=>e.toUpperCase())),e.style.border="none",s.textContent=""):(e.parentNode.append(s),e.style.border="solid red",s.textContent="Недопустимые символы",e.value="")),"user_email"===e.name&&(l.test(e.value)?(e.value=e.value.match(l).join(""),e.style.border="none",s.textContent=""):(e.parentNode.append(s),e.style.border="solid red",s.textContent="Неверный формат e-mail",e.value="")),"user_phone"===e.name&&(c.test(e.value)?(e.value=e.value.match(c).join(""),e.style.border="none",s.textContent=""):(e.parentNode.append(s),e.style.border="solid red",s.textContent="Недопустимые символы",e.value=""))};e.forEach((e=>{e.addEventListener("blur",(()=>{u(e)}))})),o.forEach((e=>{e.addEventListener("blur",(()=>{u(e)}))})),n.forEach((e=>{e.addEventListener("blur",(()=>{u(e)}))})),t.addEventListener("blur",(()=>{a.test(t.value)?(t.value=t.value.match(a).join("").replace(/^[- \s]+|[- \s]+$/g,""),t.value=t.value.replace(/\s+/g," "),t.value=t.value.replace(/-{2,}/g,"-"),t.style.border="none",s.textContent=""):(t.parentNode.append(s),t.style.border="solid red",s.textContent="Недопустимые символы",t.value="")}))})()})();