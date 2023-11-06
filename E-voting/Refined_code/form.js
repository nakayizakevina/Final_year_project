console.log(window)
      const Menu = document.getElementById("menu");
      const list = document.getElementById("mobile-nav");
      Menu.addEventListener("click", function () {
        list.classList.toggle("hidden");
      });

      const btn = document.getElementById("apply");
      const pop = document.getElementById("confirm");
      btn.addEventListener("click",function(){
        pop.classList.toggle("hidden");
      });

      document.getElementById("cancel").addEventListener("click",function(){
      const disappear =document.getElementById("confirm");
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

  /*  window.addEventListener('click', (event) =>  {
      console.log(event.target)
      mobileNav = document.getElementById("mobile-nav")
      console.log()

      
    })*/

    
    



  