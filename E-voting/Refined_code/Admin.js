const Menu = document.getElementById("menu");
      const list = document.getElementById("mobile-nav");
      Menu.addEventListener("click", function () {
        list.classList.toggle("hidden");
      });

      const candidateModal = document.getElementById("candidate-modal");
      const candidate = document.getElementById("candidate");
      candidate.addEventListener("click", function () {
        candidateModal.classList.remove("hidden");
        candidateModal.classList.add("flex");
      });
      

      document.getElementById("cancel").addEventListener("click",function(){
      const disappear = document.getElementById("candidate-modal");
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

    const approve = document.getElementById("btnapprove")
    const success = document.getElementById("success")
    approve.addEventListener("click",function(){
    success.classList.toggle("hidden");
    const Pop = document.getElementById("candidate-modal");
      Pop.classList.toggle("invisible");
    });

    const exit = document.getElementById("exit")
    const Success = document.getElementById("success")
    exit.addEventListener("click",function(){
    Success.classList.toggle("hidden");
   
    });


    const Reject = document.getElementById("btnreject")
    const Rejectionapproved = document.getElementById("reject")
    Reject.addEventListener("click",function(){
    Rejectionapproved.classList.toggle("hidden");
    const Pop = document.getElementById("candidate-modal");
      Pop.classList.toggle("invisible");
    });

    const Exit = document.getElementById("Exit")
    const reJectionApproved = document.getElementById("reject")
    Exit.addEventListener("click",function(){
    reJectionApproved.classList.toggle("invisible");
   
    });
