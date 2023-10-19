
import { useLoaderData } from "react-router-dom";
import Slider from "../../../Slider/Slider";
import { useEffect, useState } from "react";
import AllBrandsProducts from "../../../AllBrandsProducts/AllBrandsProducts";



const BrandDetails = () => {
    const brands = useLoaderData()
    const {brand_name} = brands || {}
    const [products, setProducts] = useState([]);

      useEffect(()=> {
        fetch(`https://assignment-10-server-eight-sigma.vercel.app/products/${brand_name}`)
        .then(res => res.json())
        .then(res => setProducts(res))
    },[])
    console.log(products)
  


    return (
        <div>
            {
              products.length > 0 ?
              <div>
              <Slider brands={brands}></Slider>
              <div className="grid grid-cols-2 gap-5 container mx-auto my-10">
            {
              products.map(product => <AllBrandsProducts key={product._id} product={product}></AllBrandsProducts>)
            }
            </div>
              </div>
            :
            <h1>No Product Found</h1>


            }
        </div>
    );
};


export default BrandDetails;