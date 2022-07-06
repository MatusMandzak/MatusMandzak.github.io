const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0)
})
let menu = document.querySelector("#menu-icon")
let navList = document.querySelector(".navlist")
menu.onclick = () => {
    menu.classList.toggle('fa-x')
    navList.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('fa-x')
    navList.classList.remove('active')
}