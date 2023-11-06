document.getElementById("login-cta").addEventListener("click", () => {
    // Check if the credentials are valid
    // Define the logic to check the database and return the appropriate information
    const login = true;
    if (login) {
      console.log("Voila! logging In User ...");
      // Navigate the user to the login page
      window.location.href = "SDashboard.html";
    }
  });

  
   
  const closed = document.getElementById("closedEye");
  const open = document.getElementById("openEye");
  closedEye.addEventListener("click",function(){
   openEye.classList.toggle("hidden");
   closedEye.classList.toggle("hidden");
   document.getElementById("password").type='text'
  });
  
  const Open = document.getElementById("openEye");
  const Closed = document.getElementById("closedEye");
  openEye.addEventListener("click",function(){
    closedEye.classList.toggle("hidden");
    openEye.classList.toggle("hidden");
    document.getElementById("password").type='password'
  });
  

 