
import { useLoaderData } from "react-router-dom";
import Slider from "../../../Slider/Slider";


const BrandDetails = () => {
    const brand = useLoaderData()
    return (
        <div>
            <Slider brand={brand}></Slider>
        </div>
    );
};

export default BrandDetails;