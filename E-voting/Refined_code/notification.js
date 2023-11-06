const Menu = document.getElementById("menu");
      const items = document.getElementById("mobile-nav");
      Menu.addEventListener("click", function () {
        items.classList.toggle("hidden");
      });

      const data = fetch('./data/notifications.json').then( ( response ) => {
        return response.json()
      }).then(( notifications ) => {
        const notificationsList = document.getElementById("notifications-list")
        notifications.forEach( (notification, index ) => {
          const notificationHtml = `
          <div
              class="bg-Grey-100 flex gap-2 items-center px-2 rounded-lg w-full h-fit md:h-fit md:flex md:flex-row md:justify-between lg:h-28 lg:justify-between"
            >
              <div class="flex gap-4">
                ${
                  notification?.avatarUrl ?
                  `
                  <img src=${notification.avatarUrl} class="h-20 w-20 md:h-24 md:w-24 rounded-full border border-Danger-500"/>
                  `
                  : 
                  `<div class="flex justify-center items-center h-20 w-20 md:h-24 w-24 border border-Danger-500 rounded-full">
                    ${notification.name.split("")[0]}
                  </div>`
                }
                <p class="text-sm lg:text-xl py-6 align-middle md:text-2xl">
                  <span class="font-bold">${notification.name}</span>
                  ${notification.message}
                  <br />
                  ${notification.date}
                </p>
              </div>
              <button  >
                <svg id="options"
                  class="w-8 h-full flex items-center md:w-14 lg:w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </button>
            </div>
          `
          notificationsList.innerHTML += notificationHtml
          return notificationsList
        })

        const parent = document.getElementById("options");
      const icon = document.getElementById("option");
       parent.addEventListener("click",function(){
        icon.classList.toggle("hidden");
      });
      })

    const logOut1 = document.getElementById("logout1");
    logOut1.addEventListener("click",function(){
     window.location.href = 'index.html'
    });

    const logOut2 = document.getElementById("logout2");
    logOut2.addEventListener("click",function(){
     window.location.href = 'index.html'
    });
