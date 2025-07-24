import { A, useLocation } from "@solidjs/router";
import { For, onMount } from "solid-js";

export default function NavigationButton({active, setActive}){
    const routes = [
        { href: "desain", color: "bg-[var(--bg-yeast-green)]" },
        { href: "musik", color: "bg-[var(--bg-yeast-blue)]" },
        { href: "puisi", color: "bg-[var(--bg-yeast-pink)]" }
    ]

    const location = useLocation().pathname;
    function onNavigate(event){
        if (event.target.pathname == location){
            setActive(false)
        }
    }

    return <div class={`fixed screen pointer-events-none transition-all duration-100 ${active() ? "top-0 opacity-100 visible" : "-top-4 opacity-0 invisible"}`} >
        <div class="relative left-0 sm:w-fit w-full md:left-16 top-16 flex flex-col pointer-events-auto">
            <For each={routes}>
                {(route) => <A
                    onClick={onNavigate}
                    href={`../${route.href}/`}
                    class={`content-center h-16 px-6 transition-all duration-50 hover:rounded-lg hover:scale-110 active:rounded-lg active:scale-110 ${route.color}`}>
                    {route.href.charAt(0).toUpperCase() + route.href.slice(1)}
                </A>}
            </For>
        </div>
    </div>
}