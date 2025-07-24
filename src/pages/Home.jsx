import { createEffect, createSignal, onMount } from "solid-js"

export default function Home(){
    const [pageIndex, setPageIndex] = createSignal(0)

    const bgColor = [
        "bg-white",
        "bg-[var(--bg-yeast-green)]",
    ]

    let mainTitle
    let mainCategory
    let yeastDescription


    function onMainScroll(e){
        let velocity = e.target.scrollTop / e.target.clientHeight
        if (Math.round(velocity) != pageIndex()){
            setPageIndex(Math.round(velocity))
        }
        
        let mainStyle = {}
        let opacity = 0

        if (velocity >= 0.6){
            mainStyle = {
                top: "40%",
                color: "white"
            }
            opacity = 0
            mainCategory.style.visibility = "visible"
        } else {
            mainCategory.style.visibility = "hidden"
            mainStyle.top = "50%"
            mainStyle.color = "black"
            opacity = 1
        }
        
        Object.assign(mainTitle.style, mainStyle)
        yeastDescription.style.opacity = opacity
    }

    return <>
        <div class={`screen overflow-y-scroll transition-colors duration-300 snap-y snap-mandatory ${bgColor[pageIndex()]}`} onScroll={onMainScroll}>
            <div class="snap-center screen">
                <div class="fixed transition-all duration-500 pointer-events-none top-[50%] left-[50%]" style="translate: -50% -50%;" ref={mainTitle}>
                    <div class="text-center">
                        <h1 class="text-4xl font-bold">YEAST</h1>
                        <span ref={yeastDescription}>Young Expression and Stories</span>
                    </div>
                </div>

                <div class="pointer-events-none fixed screen flex justify-center items-center transition-all" style="visibility: hidden; translate: 0 2rem;">
                    <div class="flex gap-10 text-center text-white font-semibold pointer-events-auto" ref={mainCategory}>
                        <a class="p-2 transition-all" href="./desain">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 m-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <span class="text-base font-medium">Desain</span>
                        </a>
                        <a class="p-2 transition-all" href="./musik">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 m-auto">
                                <path fill-rule="evenodd" d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium">Musik</span>
                        </a>
                        <a class="p-2 transition-all" href="./puisi">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 m-auto">
                                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                            </svg>
                            <span class="text-base font-medium">Puisi</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="snap-center screen"></div>
        </div>
    </>
}