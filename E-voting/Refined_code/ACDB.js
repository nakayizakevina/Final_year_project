const menu=document.getElementById("menu2");
const items=document.getElementById("item2");
menu.addEventListener("click",function(){
  items.classList.toggle("hidden");
});

const logOut1 = document.getElementById("logout1");
logOut1.addEventListener("click",function(){
 window.location.href = 'index.html'
});

const logOut2 = document.getElementById("logout2");
logOut2.addEventListener("click",function(){
 window.location.href = 'index.html'
});