const Menu = document.getElementById("menu");
      const items = document.getElementById("mobile-nav");
      Menu.addEventListener("click", function () {
        items.classList.toggle("hidden");
      });

      const vote = document.getElementById("login-cta")
      vote.addEventListener("click", function(){
        window.location.href = 'vote.html'
      });

      const Logout = document.getElementById("logout1")
     Logout.addEventListener("click", function(){
       window.location.href ='index.html';
     });

     const mobileLogout = document.getElementById("logout2")
     mobileLogout.addEventListener("click",function(){
     window.location.href = 'index.html';
     });