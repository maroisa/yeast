import { A, useLocation } from "@solidjs/router";
import { onMount } from "solid-js";

export default function NavigationButton({active, setActive}){
    const location = useLocation().pathname;
    // "opacity-100 top-0 visible" : "opacity-0 -top-4 invisible"}
    function onNavigate(event){
        if (event.target.pathname == location){
        }
    }

    return <div class={`fixed screen pointer-events-none transition-all duration-100 ${active() ? "top-0 opacity-100 visible" : "-top-4 opacity-0 invisible"}`} >
        <div class="relative left-0 sm:w-fit w-full md:left-16 top-16 flex flex-col pointer-events-auto">
            <A onClick={onNavigate} href="../desain/" class="content-center h-16 px-6 bg-gray-600 active:bg-gray-700">
                Desain
            </A>
            <A onClick={onNavigate} href="../musik/" class="content-center h-16 px-6 bg-gray-600 active:bg-gray-700">
                Musik
            </A>
            <A onClick={onNavigate} href="../puisi/" class="content-center h-16 px-6 bg-gray-600 active:bg-gray-700">
                Puisi
            </A>
        </div>
    </div>
}