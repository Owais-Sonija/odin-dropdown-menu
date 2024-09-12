// Getting element
const dropBtn = document.querySelector(".btn");
const menuEle = document.querySelector(".dropdown-menu");




// Creating function
function showMenu() {
    menuEle.classList.remove("-translate-y-4")
  menuEle.classList.toggle("hidden")
    
}

// Calling function

dropBtn.addEventListener("click", showMenu)