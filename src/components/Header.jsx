import { createSignal } from "solid-js";
import NavigationButton from "./NavigationButton";

export default function Header({color, title, children = null}){
    const [navButtonActive, setNavButtonActive] = createSignal(false)

    return <header class={ "w-full text-white sticky top-0 " + color }>
        <div class="text-2xl font-semibold flex items-center h-16">
            <a href="../" class="flex aspect-square h-full p-5">
                <img
                    src="/favicon-white.svg"
                    alt="Yeast Icon" />
            </a>
            
            <button class="active:bg-black/25 h-full px-4" onClick={() => setNavButtonActive(!navButtonActive())}>
                <h1>{title}</h1>
            </button>

            <div class="grow"></div>
            <h1>{children}</h1>
        </div>

        <NavigationButton active={navButtonActive} setActive={setNavButtonActive} />

    </header>
}