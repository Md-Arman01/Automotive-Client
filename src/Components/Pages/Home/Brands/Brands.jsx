import { useEffect, useState } from "react";
import BrandCard from "../BrandCard/BrandCard";


const Brand = () => {
    const [brands , setBrands] = useState([]);
    useEffect(()=> {
        fetch('https://assignment-10-server-eight-sigma.vercel.app/brands')
        .then(res => res.json())
        .then(res => setBrands(res))
    },[])
    return (
        <div className="my-16">
            <div className="mb-10">
            <h1 className="font-rancho text-5xl font-semibold text-center bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">Our Brand Collections</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
            {
                brands?.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
            }
            </div>
        </div>
    );
};

export default Brand;