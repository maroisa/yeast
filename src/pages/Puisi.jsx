import { For } from "solid-js";
import Header from "../components/Header";
import PuisiCard from "../components/PuisiCard"

export default function Puisi(){
    return <>
        <Header color="#CC0045" title="Puisi" />

        <main class="overflow-y-auto max-w-7xl m-auto p-4">
            <div class="mb-12">
                <h2 class="mb-4 text-2xl lg:text-3xl">Pilihan Hari Ini</h2>
                <div>
                    <div class="aspect-video bg-gray-300"></div>
                    <h2 class="text-xl md:text-2xl">Lorem Ipsum</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, rem voluptatem. Ea sed voluptates eligendi animi, dicta pariatur hic, quam autem quas veritatis facere laborum ratione, debitis consequuntur molestiae suscipit!</span>
                </div>
            </div>

            <div>
                <h2 class="mb-4 text-2xl lg:text-3xl">Terbaru</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                    <For each={[...Array(20).keys()]}>
                        {() => <PuisiCard />}
                    </For>
                </div>
            </div>
        </main>


    </>
}