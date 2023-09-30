let nav = document.querySelector(".nav-items");
let openBtn = document.querySelector("#openSpan");
let closeBtn = document.querySelector(".closeicon")
let hero = document.querySelector(".hero-section-body")

openBtn.addEventListener("click", () => {
    nav.style.left = "0"
})
closeBtn.addEventListener("click", () => {
    nav.style.left = "-300px"
})
hero.addEventListener("click", () => {
    if (nav.style.left = "0") {
        nav.style.left = "-300px"
        hero.style.filter = "(Blur)"
    }
})