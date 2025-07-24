export default function NavigationButton(){
    return <div class="fixed top-0 screen pointer-events-none">
        <div class="relative left-0 sm:w-fit w-full md:left-16 top-16 flex flex-col pointer-events-auto">
            <a href="../desain" class="content-center h-16 px-6 bg-gray-600 active:bg-gray-700">
                Desain
            </a>
            <a href="../musik" class="content-center h-16 px-6 bg-gray-600 active:bg-gray-700">
                Musik
            </a>
            <a href="../puisi" class="content-center h-16 px-6 bg-gray-600 active:bg-gray-700">
                Puisi
            </a>
        </div>
    </div>
}