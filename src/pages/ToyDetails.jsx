import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toy = useLoaderData()[0];
    console.log(toy);
    return (
        <div>
            
        </div>
    );
};

export default ToyDetails;