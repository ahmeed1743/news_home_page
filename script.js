let open_menu = document.querySelector(".menu");
let close_menu = document.querySelector(".close");
let nav = document.querySelector(".nav");


open_menu.addEventListener("click" , ()=> {
    nav.classList.toggle("active");
    close_menu.classList.add("active");
})

close_menu.addEventListener("click" , ()=> {
    nav.classList.remove("active");
    close_menu.classList.remove("active");
})