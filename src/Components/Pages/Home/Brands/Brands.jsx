import { useEffect, useState } from "react";
import BrandCard from "../BrandCard/BrandCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Brand = () => {
    const [brands , setBrands] = useState([]);
    useEffect(()=> {
        fetch('https://assignment-10-server-eight-sigma.vercel.app/brands')
        .then(res => res.json())
        .then(res => setBrands(res))
    },[])
    return (
        <div className="my-7 lg:my-16">
            <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
             className=" lg:mb-10">
            <h1 className="font-rancho text-3xl md:text-4xl lg:text-5xl font-semibold text-center bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">Our Brand Collections</h1>
            <div className="flex items-center justify-center my-5 gap-5 ">
                <hr className="w-[100px] md:w-[150px] lg:w-[260px]"></hr>
                <img className="w-20 md:w-24" src="https://i.ibb.co/hcNZ5SP/replicate-prediction-ph7o7xjbjcnlexajd3htbk36oe-removebg-preview.png" alt="" />
                <hr className="w-[100px] md:w-[150px] lg:w-[260px]"></hr>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto px-5 lg:px-0">
            {
                brands?.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
            }
            </div>
        </div>
    );
};

export default Brand;