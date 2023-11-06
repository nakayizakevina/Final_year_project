const Menu = document.getElementById("menu1");
const items = document.getElementById("mobile1");
Menu.addEventListener("click",function()
{
  items.classList.toggle("hidden");
}

);

const button = document.getElementById("vote");
const warning = document.getElementById("alert");
button.addEventListener("click", function(){
  warning.classList.toggle("invisible");

});


document.getElementById("Cancel").addEventListener("click", function() {
var popup = document.getElementById("alert");
popup.classList.toggle("invisible");
});

const Confirm = document.getElementById("Confirm");
const success = document.getElementById("success");
Confirm.addEventListener("click",function(){
success.classList.remove("hidden")
success.classList.add("flex")
const Pop = document.getElementById("alert");
Pop.classList.toggle("invisible");
});

const Tick = document.getElementById("tick");
const confirm  = document.getElementById("Confirm");
confirm.addEventListener("click",function(){
Tick.classList.toggle("hidden");

});

/** const confirm2 = document.getElementById("Confirm");
comfirm2.addEventListener("click",function(){
const card = document.getElementById("vote-card");
card.style.backgroundColor = 'bg-Danger-500';  
});
**/



document.getElementById("Cancel").addEventListener("click", function() {
var Tick = document.getElementById("tick");
Tick.classList.toggle("invisible");


});


document.getElementById("exit").addEventListener("click",function(){
const disappear =document.getElementById("success");
disappear.classList.toggle("hidden");


});

const logOut1 = document.getElementById("logout1");
logOut1.addEventListener("click",function(){
window.location.href = 'index.html'
});

const logOut2 = document.getElementById("logout2");
logOut2.addEventListener("click",function(){
window.location.href = 'index.html'
});

