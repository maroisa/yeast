export default function MusikCard({rounded = false}){
    return <div class="w-1/3 max-w-60 aspect-3/4">
        <div class={`bg-gray-300 aspect-square ${rounded ? "rounded-full" : "rounded-md"}`}></div>
        <span class="font-semibold text-sm lg:text-xl block my-2 lg:my-4">Lorem Ipsum Dolor Sit</span>
    </div>
}