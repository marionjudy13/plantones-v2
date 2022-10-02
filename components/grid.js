export default function Grid({props}) {
    return (
        <div>
            <main>
                {props.length > 0 && (
                <ul class="px-5 grid gap-4 grid-cols-3 grid-rows-3">
                    {props.map((plant) => (
                    <li 
                        key={plant._id} 
                        class="flex justify-center border-solid border-2 border-black h-24 align-middle">
                        <span>{plant?.commonName}</span>
                    </li>
                    ))}
                </ul>
                )}
            </main>
        </div>
    )
}