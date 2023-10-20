
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";




const CardUpdate = () => {
  const {scroll} = useContext(AuthContext)
    const [cards, setCards] = useState([]);
    const {_id} = useParams()

      useEffect(()=> {
        fetch('https://assignment-10-server-eight-sigma.vercel.app/products')
        .then(res => res.json())
        .then(res =>
          {
            scroll()
            setCards(res)

          })
    },[])
    // console.log(cards)
    const findCard = cards.find(card => card._id === _id)
    const {photoURL, name, type, price, } = findCard || {}

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const updateProduct = {
          photoURL,
          name,
          brand,
          type,
          price,
          rating,
        };
        console.log(updateProduct);
        fetch(
          `https://assignment-10-server-eight-sigma.vercel.app/products/${_id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateProduct),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              form.reset();
              Swal.fire({
                title: "Success!",
                text: "Updated product successfully",
                icon: "success",
                confirmButtonText: "ok",
              });
            }
          });
      };
    
      return (
        <>
        <div className="container mx-auto my-7 lg:my-16 px-5 lg:px-0">
          <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
           className="card flex-1 mb-7 bg-[#fcedf1] border shadow-md p-12 rounded-md overflow-x-clip">
            <div>
              <h1 className="text-[#3D506E] text-3xl lg:text-4xl text-center font-rancho font-semibold mb-3 bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">
                Update Product
              </h1>
              <p className="text-center mx-auto lg:w-[900px] text-[#969494]">
              A product update is a modification or enhancement made to an existing product, often with the goal of improving its features, performance, or user experience.
              </p>
            </div>
    
            <form onSubmit={handleUpdateProduct}>
              <h1 className="text-lg font-medium mb-2">PhotoURL</h1>
              <input
                type="text"
                name="photoURL"
                defaultValue={photoURL}
                required
                placeholder="Enter photoURL"
                className="input input-bordered w-full"
                />
              <div className="grid grid-cols-2 gap-5 my-5">
                <div>
                  <h1 className="text-lg font-medium mb-2">Name</h1>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    required
                    placeholder="Enter Product name"
                    className="input input-bordered w-full"
                    />
                </div>
                <div>
                  <h1 className="text-lg font-medium mb-2">Brand Name</h1>
                  <select name="brand" className="select select-bordered w-full">
                    <option disabled selected>
                    Choice Brand Name?
                    </option>
                    <option>Ford</option>
                    <option>Bmw</option>
                    <option>Mercedes-Benz</option>
                    <option>Tesla</option>
                    <option>Honda</option>
                    <option>Toyota</option>
                  </select>
                </div>
                <div>
                  <h1 className="text-lg font-medium mb-2">Type</h1>
                  <input
                    type="text"
                    name="type"
                    defaultValue={type}
                    required
                    placeholder="Enter Product Type"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-medium mb-2">Price</h1>
                  <input
                    type="text"
                    name="price"
                    defaultValue={price}
                    required
                    placeholder="Enter Product Price"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div>
                  <h1 className=" text-lg font-medium mb-2">Rating</h1>
                  <select name="rating" className="select select-bordered w-full">
                    <option disabled selected>
                    Choice Rating?
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>2.5</option>
                    <option>3</option>
                    <option>3.5</option>
                    <option>4</option>
                    <option>4.5</option>
                    <option>5</option>
                  </select>
                </div>
    
              <input
                className="w-full mt-7 bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent text-white font-rancho mx-auto normal-case block select-none rounded-lg  py-3 px-6 text-center align-middle  text-2xl shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:cursor-pointer hover:shadow-[#FFA828]/40 active:opacity-[0.85] hover:translate-y-1 hover:transition-transform disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                value="Update Product"
                />
            </form>
          </div>
        </div>
        <Footer></Footer>
        </>
      );
};

export default CardUpdate;