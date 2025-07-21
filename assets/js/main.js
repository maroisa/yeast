const navSelection = document.getElementById("nav-selection")

let pageIndex = 0

function scrollPage(event){
    const newPageIndex = Math.round(event.target.scrollTop / window.innerHeight)
    if (pageIndex == newPageIndex){
        return
    }

    pageIndex = newPageIndex
    refresh()
}

function refresh(){
    navSelection.children[pageIndex].scrollIntoView({behavior: "smooth"})
}