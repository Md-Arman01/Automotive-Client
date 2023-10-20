
import { useLoaderData } from "react-router-dom";
import Slider from "../../../Slider/Slider";
import { useEffect, useState } from "react";
import AllBrandsProducts from "../../../AllBrandsProducts/AllBrandsProducts";
import { ImCancelCircle } from 'react-icons/im';
import Footer from "../../../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const BrandDetails = () => {
  const {scroll} = useContext(AuthContext)
    const brands = useLoaderData()
    const {brand_name} = brands || {}
    const [products, setProducts] = useState([]);

      useEffect(()=> {
        fetch(`https://assignment-10-server-eight-sigma.vercel.app/products/${brand_name}`)
        .then(res => res.json())
        .then(res => {
          setProducts(res)
          // scroll()
        })
    },[])
    console.log(products)
  


    return (
        <div>
            {
              products.length > 0 ?
              <div>
                <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="500"
                className="overflow-x-clip"
                >
              <Slider brands={brands}></Slider>
                </div>
              <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="500"
               className="my-14 overflow-x-clip">
            <h1 className="font-rancho text-3xl md:text-4xl lg:text-5xl font-semibold text-center bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">Our Product Collections</h1>
            </div>
              <div className="grid  lg:grid-cols-2 gap-5 container mx-auto my-5 lg:my-10 px-5 lg:px-0">
            {
              products.map(product => <AllBrandsProducts key={product._id} product={product}></AllBrandsProducts>)
            }
            </div>
              </div>
            :
            <div className="flex flex-col items-center justify-center h-screen gap-5">
              <h1 className="font-rancho text-3xl md:text-4xl lg:text-6xl">Product Not Found</h1>
              <ImCancelCircle className="text-3xl md:text-4xl lg:text-5xl"></ImCancelCircle>
            </div>
            }
            <Footer></Footer>
        </div>
    );
};


export default BrandDetails;