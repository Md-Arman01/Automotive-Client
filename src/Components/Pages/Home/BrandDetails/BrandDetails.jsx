
import { useLoaderData } from "react-router-dom";
import Slider from "../../../Slider/Slider";
import { useEffect, useState } from "react";
import AllBrandsProducts from "../../../AllBrandsProducts/AllBrandsProducts";



const BrandDetails = () => {
    const brands = useLoaderData()
    const {brand_name} = brands || {}
    const [products, setProducts] = useState([]);

      useEffect(()=> {
        fetch('https://assignment-10-server-eight-sigma.vercel.app/products')
        .then(res => res.json())
        .then(res => setProducts(res))
    },[])
    const allBrandProducts = products.filter(product => product.brand === brand_name)
    console.log(brand_name, allBrandProducts)




    return (
        <div>
            <Slider brands={brands}></Slider>
            <div className="grid grid-cols-2 gap-5 container mx-auto my-10">
            {
              allBrandProducts.map(brandProducts => <AllBrandsProducts key={brandProducts._id} brandProducts={brandProducts}></AllBrandsProducts>)
            }
            </div>
        </div>
    );
};


export default BrandDetails;