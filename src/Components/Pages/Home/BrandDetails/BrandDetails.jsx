
import { useLoaderData } from "react-router-dom";
import Slider from "../../../Slider/Slider";
import { useEffect, useState } from "react";
import AllBrandsProducts from "../../../AllBrandsProducts/AllBrandsProducts";



const BrandDetails = () => {
    const brands = useLoaderData()
    const {brand_name} = brands || {}
    const [products, setProducts] = useState([]);

      useEffect(()=> {
        fetch(`http://localhost:5000/products/${brand_name}`)
        .then(res => res.json())
        .then(res => setProducts(res))
    },[])
    
  


    return (
        <div>
            <Slider brands={brands}></Slider>
            <div className="grid grid-cols-2 gap-5 container mx-auto my-10">
            {
              products.map(product => <AllBrandsProducts key={product._id} product={product}></AllBrandsProducts>)
            }
            </div>
        </div>
    );
};


export default BrandDetails;