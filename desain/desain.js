const floatingBtn = document.getElementById("floating-btn")


function scrollToLeft() {
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.scrollBy({
        left: -400,
        behavior: "smooth",
    });
}
function scrollToRight() {
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.scrollBy({
        left: 400,
        behavior: "smooth",
    });
}

window.addEventListener("scroll", () => {
    floatingBtn.style.opacity = window.scrollY > window.innerHeight ? "1" : "0"
    floatingBtn.style.scale = window.scrollY > window.innerHeight ? "100%" : "80%"
})

floatingBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    })
})