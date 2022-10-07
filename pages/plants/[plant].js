import { client } from "@utils/client";
import Layout from "../../components/Layout";

const PlantPage = ({ singlePlant: { commonName } }) => {
    return <Layout>{commonName}</Layout>;
}

export default PlantPage;

export async function getServerSideProps({ params }) {
    const { plant } = params;
    const singlePlant = await client.fetch(
        `*[_type == "plants" && slug.current == $plant][0] {
        commonName,
        dirtReq,
        geoOrigin,
        hexCode,
        lightReq -> {
            lightType,
            lightDescription,
            example
        },
        plantImage,
        scientificName,
        toxicity
    }`, 
    {
        plant
    }
    );

return {
    props: {
        singlePlant
    }
}
}