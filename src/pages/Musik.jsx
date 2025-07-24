import { For } from "solid-js"
import Header from "../components/Header"
import MusikCard from "../components/MusikCard"

export default function Musik(){
    return <>
        <Header color="#0045CC" title="Musik" />
        
        <main class="overflow-y-auto max-w-7xl m-auto">
            <div>
                <h2 class="text-2xl mx-4 mt-4">Trending</h2>
                <div class="flex gap-4 lg:gap-10 *:shrink-0 p-4 overflow-x-auto scrollbar-none">
                    <For each={[...Array(10).keys()]}>
                        {() => <MusikCard />}
                    </For>
                </div>
            </div>

            <div>
                <h2 class="text-2xl mx-4 mt-4">Terbaru</h2>
                <div class="flex gap-4 lg:gap-10 *:shrink-0 p-4 overflow-x-auto scrollbar-none">
                    <For each={[...Array(10).keys()]}>
                        {() => <MusikCard />}
                    </For>
                </div>
            </div>

            <div>
                <h2 class="text-2xl mx-4 mt-4">Artist Trending</h2>
                <div class="flex gap-4 lg:gap-10 *:shrink-0 p-4 overflow-x-auto scrollbar-none">
                    <For each={[...Array(10).keys()]}>
                        {() => <MusikCard rounded={true} />}
                    </For>
                </div>
            </div>
        </main>

    </>
}