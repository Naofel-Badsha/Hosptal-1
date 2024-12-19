

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
menu.onclick = ( )=>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    ThemeToggle.classList.remove("active");
}


//---------Icons------------Container---------Start---------//
let valueDidplays = document.querySelectorAll(".num");
let interval = 5000;

valueDidplays.forEach((valueDidplay) => {
    let startValue = 0;
    let endValue =  parseInt(valueDidplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1; 
        valueDidplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }
    },duration);
});
//---------Icons------------Container---------End---------//



//Theme Toogole-------
let ThemeToggle = document.querySelector(".themeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

ToggleBtn.onclick = () =>{
    ThemeToggle.classList.toggle("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
   
}

document.querySelectorAll(".themeToggle .themeBtn").forEach((btn) =>{
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--green", color);
    document.querySelector(":root").style.setProperty("--font", color);
  }
});
