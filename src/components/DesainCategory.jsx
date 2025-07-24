import { For } from "solid-js"
import DesainCard from "./DesainCard"

export default function DesainCategory(){
    let categoryContainer

    return <div class="flex gap-4 items-center mx-0 md:mx-4">
        <button
            onClick={() => {categoryContainer.scrollBy({left: -600, behavior: "smooth"})}}
            class="hidden md:block bg-gray-200 active:bg-gray-300 h-10 w-10 rounded-full shrink-0">
            &lt;
        </button>
        <div ref={categoryContainer} class="p-4 scrollbar-none overflow-x-auto flex gap-4 grow *:shrink-0">
            <For each={[...Array(10).keys()]}>{(num) => 
                <DesainCard image="/favicon.svg" name="Lorem Ipsum Dolor Sit Amet" />
            }
            </For>
        </div>
        <button
            onClick={() => {categoryContainer.scrollBy({left: 600, behavior: "smooth"})}}
            class="hidden md:block bg-gray-200 active:bg-gray-300 h-10 w-10 rounded-full shrink-0">
            &gt;
        </button>
    </div>
}