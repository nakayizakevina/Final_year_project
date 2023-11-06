const Menu = document.getElementById("menu1");
      const items = document.getElementById("mobile1");
      Menu.addEventListener("click",function()
      {
        items.classList.toggle("hidden");
      }
      
      );
      
      const data = fetch('./data/results.json').then((response)=>{
        return response.json()
      }).then((results) =>{
        const result = document.getElementById("results")
        results.forEach((result,index) => {
          const resultHtml = `
          <div class="w-3/2 bg-Grey-100 rounded-lg flex flex-row gap-2 md:w-full md:mx-4 md:flex md:justify-center  md:items-center lg:w-11/12 lg:h-fit lg:py-4 lg:flex lg:flex-row">
            
            
            </div> `
        })
      })

    const logOut1 = document.getElementById("logout1");
    logOut1.addEventListener("click",function(){
    window.location.href = 'index.html'
    });

    const logOut2 = document.getElementById("logout2");
    logOut2.addEventListener("click",function(){
     window.location.href = 'index.html'
    });

 