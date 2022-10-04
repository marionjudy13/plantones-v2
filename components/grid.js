export default function Grid({props}) {
    return (
        <div>
            <main>
                {props.length > 0 && (
                <ul class="px-5 grid gap-2 grid-cols-2 sm:px-10 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
                    {props.map((plant) => (
                    <li 
                        key={plant._id} 
                        class="bg-green-500 border-solid border-2 border-black aspect-w-1 aspect-h-1">
                        <p class="flex justify-center items-center text-center text-white">{plant?.commonName}</p>
                    </li>
                    ))}
                </ul>
                )}
            </main>
        </div>
    )
}