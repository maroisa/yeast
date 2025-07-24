import { For } from "solid-js";
import Header from "../components/Header";
import PuisiCard from "../components/PuisiCard"

export default function Puisi(){
    return <>
        <Header color="bg-[#CC0045]" title="Puisi" />

        <main class="overflow-y-auto max-w-7xl m-auto p-4">
            <div class="mb-8">
                <h2 class="text-2xl lg:text-3xl font-bold mb-4">Pilihan Hari Ini</h2>
                <div class="flex gap-4 *:shrink-0 overflow-x-auto scrollbar-none">
                    <For each={[...Array(3).keys()]}>
                        {(item) => 
                        <div class="flex flex-col">
                                <div className="bg-gray-300 aspect-video h-90"></div>
                                <span class="text-2xl font-semibold">Lorem Ipsum dolor</span>
                        </div>}
                    </For>
                </div>
            </div>

            <div>
                <h2 class="mb-4 text-2xl lg:text-3xl font-bold">Terbaru</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                    <For each={[...Array(20).keys()]}>
                        {() => <PuisiCard />}
                    </For>
                </div>
            </div>
        </main>


    </>
}