const nav = document.querySelector(".nav")//返回第一个匹配的htmlElement对象
window.addEventListener("scroll",fixNav)

function fixNav(){
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active")
    }
}