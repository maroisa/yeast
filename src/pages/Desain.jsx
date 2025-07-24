import Header from "../components/Header"
import DesainCategory from "../components/DesainCategory"
import { createSignal, For, onMount } from "solid-js"

export default function Desain(){
    const [floatingActive, setFloatingActive] = createSignal(false)


    onMount(() => {
        window.addEventListener("scroll", () => {
            console.log(window.scrollY > window.innerHeight)
            setFloatingActive(window.scrollY > window.innerHeight)
        })
    })

    return <>
        <Header color="#45CC00" title="Desain">
            <button class="active:bg-black/10 h-full aspect-square p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd"/>
                </svg>
            </button>
        </Header>

        <main>
            <DesainCategory />
            <div class="p-2 md:p-4 grid grid-cols-2 sm:grid-cols-5 gap-2 md:gap-4">
                <For each={[...Array(20).keys()]}>
                    {() => <div class="bg-gray-300 aspect-3/4"></div>}
                </For>
            </div>

        </main>

        <div class="screen fixed top-0 flex justify-end items-end pointer-events-none" >
            <button
                onClick={() => scrollTo({top: 0, behavior: "smooth"})}
                id="floating-btn"
                class={`transition-all duration-50 m-4 p-4 pointer-events-auto rounded-full bg-gray-200 active:bg-gray-300 shadow-lg/25 ${floatingActive() ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto size-6" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                </svg>
            </button>
        </div>
    </>
}