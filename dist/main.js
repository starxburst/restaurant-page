(()=>{"use strict";const e=function(){const e=document.getElementById("container"),t=function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("img");return t.textContent="Taste around town in November with a whole month of indulgences and the trendiest tasting experiences. Meet masters of wines in our on-air programmes with special tasting kits delivered to your door and embark on a new self-guided wine tasting journey with our e-pass. Let your taste buds wander as you soak up the glamour of restaurant celebrations in this Culinary Capital of Asia! There’s so much more to check out.",n.setAttribute("src","./img/home1.jpg"),n.setAttribute("id","home-image1"),e.classList.add("image-container"),t.classList.add("centered"),e.appendChild(n),e.appendChild(t),e}(),n=function(){const e=document.createElement("div");let t=function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("pre");return t.textContent="-Address-",n.textContent="International Commerce Centre, 1 Austin Road West\n\nPhone:\n+85222632263\nEmail:\nstarxburst@gmail.com\n",n.classList.add("card-description"),e.classList.add("information-card"),e.appendChild(t),e.appendChild(n),e}(),n=function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("pre");return t.textContent="-Hours-",n.textContent="Monday:\n11:00 a.m. - 11:45 p.m.\n\nWed,Thurs,Fri,Sat,Sun:\n10:00 a.m. - 01:00 a.m.\n",n.classList.add("card-description"),e.classList.add("information-card"),e.appendChild(t),e.appendChild(n),e}();return e.classList.add("information-card-container"),e.appendChild(t),e.appendChild(n),e}();e.appendChild(t),e.appendChild(n)},t=[{name:"Tiradito Rosita",src:"./img/food1.webp"},{name:"Pork Schnitzel with Warm Potato Salad",src:"./img/food2.webp"},{name:"Stuffed Pork Loin",src:"./img/food3.webp"},{name:"Battered Onion Rings",src:"./img/food4.webp"},{name:"Fish & Chips, Mushy Peas and Tartare Sauce",src:"./img/food5.webp"},{name:"Soups and Stews for Autumn",src:"./img/food6.webp"}];const n=function(){const e=document.getElementById("container"),n=function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("img");return t.textContent="While staying at our Absolute Resorts & Hotels in Phuket, you will be spoilt for choice when it comes to innovative dining concepts to suit all appetites. Whether it’s stellar Thai food, Italian classics or a variety of fresh and light meals, we have you covered. While staying at Absolute Bangla Suites or Absolute Twin Sands Resort & Spa, make sure to drop into one of our three outstanding restaurants and try our signature dishes, sure to satisfy all of your cravings !",n.setAttribute("src","./img/menu1.jpg"),n.setAttribute("id","menu-image1"),e.classList.add("image-container"),t.classList.add("centered"),e.appendChild(n),e.appendChild(t),e}(),a=function(){const e=document.createElement("div");return e.classList.add("food-card-container"),t.forEach((t=>{e.appendChild(function(e,t){const n=document.createElement("div"),a=document.createElement("img"),o=document.createElement("h1"),i=document.createElement("div");return n.classList.add("food-card"),i.classList.add("food-card-name-container"),o.textContent=e,o.classList.add("food-name"),a.setAttribute("src",t),a.classList.add("food-image"),i.appendChild(o),n.appendChild(i),n.appendChild(a),n}(t.name,t.src))})),e}(),o=function(){const e=document.createElement("hr");return e.classList.add("fancy-line"),e}();e.appendChild(n),e.appendChild(o),e.appendChild(a)},a=[{name:"Home",id:"home"},{name:"Menu",id:"menu"},{name:"Contact us",id:"contact"}];function o(t){const a=document.getElementById("container");"home"==t.target.getAttribute("id")&&(a.innerHTML="",e(),console.log("home")),"menu"==t.target.getAttribute("id")&&(console.log("menu"),a.innerHTML="",n())}console.log("Hello"),function(){const e=document.createElement("div");e.classList.add("tab-panel"),e.setAttribute("id","tabgroup"),document.getElementById("content").appendChild(e),a.forEach((e=>{const t=document.createElement("button");t.classList.add("tab-button"),t.setAttribute("id",e.id),t.textContent=e.name,t.addEventListener("click",o),document.getElementById("tabgroup").appendChild(t)}))}();const i=document.createElement("div"),d=document.getElementById("content");i.setAttribute("id","container"),d.appendChild(i),e()})();