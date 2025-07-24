import { createSignal, For } from "solid-js"

export default function DesainCategory(){
    const [selectedCategory, setSelectedCategory] = createSignal(0)
    
    const categories = [
        { image: "/favicon.svg", name: "Semua Kategori" },
        { image: "/favicon.svg", name: "Lorem Ipsum Dolor Sit Amet" },
        { image: "/favicon.svg", name: "Lorem Ipsum Dolor Sit Amet" },
        { image: "/favicon.svg", name: "Lorem Ipsum Dolor Sit Amet" },
        { image: "/favicon.svg", name: "Lorem Ipsum Dolor Sit Amet" },
        { image: "/favicon.svg", name: "Lorem Ipsum Dolor Sit Amet" },
        { image: "/favicon.svg", name: "Lorem Ipsum Dolor Sit Amet" },
        { image: "/favicon.svg", name: "Lorem Ipsum Dolor Sit Amet" },
        { image: "/favicon.svg", name: "Lorem Ipsum Dolor Sit Amet" }
    ]

    let categoryContainer
    
    function DesainCard({index, image, name}){
        return <button 
            onClick={() => setSelectedCategory(index)}
            class={`${selectedCategory() == index() ? "border-green-500 bg-white text-green-500" : "border-gray-300 bg-gray-200"}  active:bg-gray-300 shadow-lg border rounded-lg h-full p-2 flex gap-2 items-center w-auto`}>
            <img src={image} alt="category thumbnail" />
            <span>{name}</span>
        </button>
    }

    return <div class="flex gap-4 items-center mx-0 md:mx-4">
        <button
            onClick={() => {categoryContainer.scrollBy({left: -600, behavior: "smooth"})}}
            class="hidden md:block bg-gray-200 active:bg-gray-300 h-10 w-10 rounded-full shrink-0">
            &lt;
        </button>
        <div ref={categoryContainer} class="p-4 scrollbar-none overflow-x-auto flex gap-4 grow *:shrink-0">
            <For each={categories}>{(category, index) => 
                <DesainCard index={index} image={category.image} name={category.name} />
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