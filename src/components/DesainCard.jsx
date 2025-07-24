export default function DesainCard({image, name}){
    return <button class="bg-gray-200 active:bg-gray-300 shadow-lg border border-gray-300 rounded-lg h-full p-2 flex gap-2 items-center w-auto">
        <img src={image} alt="category thumbnail" />
        <span>{name}</span>
    </button>
}