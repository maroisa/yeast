function toggleNavigation() {
    const navContainer = document.getElementById("navigation-container")

    let opacity = 0
    let scale = "80%"

    if (navContainer.style.visibility == "hidden"){
        navContainer.style.visibility = "visible"
        opacity = 1
        scale = "100%"
    } else {
        opacity = 0
        scale = "80%"
    }

    navContainer.style.opacity = opacity
    navContainer.firstElementChild.style.scale = scale   
}