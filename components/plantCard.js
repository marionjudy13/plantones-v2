export default function PlantCard({ name, pantone }) {
    return (
        <>  
            <h1 style={{color: pantone,}}>{pantone}</h1>
            <h2>{name}</h2>
        </>
    )
}