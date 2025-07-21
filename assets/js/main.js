const navSelection = document.getElementById("nav-selection")
let pageIndex = 0

refresh()

function scrollPage(event){
    const newPageIndex = Math.round(event.target.scrollTop / window.innerHeight)
    if (pageIndex == newPageIndex){
        return
    }

    pageIndex = newPageIndex
    refresh()
}

function refresh(){
    for (let i = 0; i < navSelection.children.length; i++) {
        const element = navSelection.children[i];
        if (i == pageIndex + 1){
            element.className = "nav-item p-0 opacity-100"
        } else {
            element.className = "nav-item"
        }
    }

    navSelection.children[pageIndex].scrollIntoView({behavior: "smooth"})
}