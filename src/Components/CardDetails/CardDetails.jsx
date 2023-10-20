import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Footer from "../Footer/Footer";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();



const CardDetails = () => {
    const {user, scroll} = useContext(AuthContext)
    const [cards, setCards] = useState([]);
    const {_id} = useParams()

      useEffect(()=> {
        fetch('https://assignment-10-server-eight-sigma.vercel.app/products')
        .then(res => res.json())
        .then(res =>{
          scroll()
          setCards(res)
        })
    },[])
    const findCard = cards.find(card => card._id === _id)
    const {photoURL, name, brand, price,  description} = findCard || {}
    


    const handleMyCart = ()=> {
      const myCart = {photoURL, name, brand, price, email: user.email}
      fetch(
        `https://assignment-10-server-eight-sigma.vercel.app/myCart`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(myCart),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            Swal.fire({
              title: "Success!",
              text: "Cart added successfully",
              icon: "success",
              confirmButtonText: "ok",
            });
          }
        });
    }
    
  
    return (
      <>
        <div
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
         className="container mx-auto flex items-center lg:h-screen overflow-x-hidden px-5 lg:px-0 my-7 lg:my-0">
            <div className="relative flex flex-col w-full lg:h-[600px] lg:flex-row rounded-xl gap-10 bg-white bg-clip-border text-gray-700 shadow-md px-5 lg:px-0 pb-7 lg:pb-0">
        <div className="relative lg:w-3/5 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={photoURL}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex items-center">
          <div>
            <div className="space-y-1">
              <h6 className="mb-3 text-3xl md:text-4xl lg:text-5xl font-rancho bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">
                {name} <span className="text-base">({brand})</span>
              </h6>
              <h4 className="lg:text-base font-semibold pr-12">{description}</h4>
              
            </div>
              <button onClick={handleMyCart} className=" mt-10 bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent text-white font-rancho mx-auto normal-case block select-none rounded-lg py-1  px-6 text-center align-middle  text-2xl shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:cursor-pointer hover:shadow-[#FFA828]/40 active:opacity-[0.85] hover:translate-y-1 hover:transition-transform disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Add To Card
              </button>

          </div>
        </div>
      </div>
        </div>
        <Footer></Footer>
      </>
    );
};

export default CardDetails;