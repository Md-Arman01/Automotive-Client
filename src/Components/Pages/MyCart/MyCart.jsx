import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { ImCancelCircle } from 'react-icons/im';
import Footer from "../../Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const email = user.email;
  useEffect(() => {
    fetch(`https://assignment-10-server-eight-sigma.vercel.app/myCart/${email}`)
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleDelete = (id)=>{
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-eight-sigma.vercel.app/myCart/${id}`,{
             method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            const remainingCard  = cards.filter(card => card._id !== id) 
            setCards(remainingCard)
            Swal.fire(
              'Deleted!',
              'Your card has been deleted.',
              'success'
            )
          }
        })
      }
    })
    
  }
  return (
    <div
    data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="500"
    className="overflow-x-clip"
    >
      
      {
        cards.length > 0 ?
        <div>
          <h1 className="mt-5 lg:mt-10 text-center font-rancho text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">
        My Added Carts : {cards.length}
      </h1>
        
        <div className="grid  lg:grid-cols-2 gap-5 container mx-auto my-5 lg:my-20 min-h-screen px-5 lg:px-0 ">
          {cards.map((card) => (
            <div key={card._id}>
              
              <div>
          <div className="relative flex flex-col md:flex-row rounded-xl gap-3 lg:gap-10 p-7 md:p-0 lg:h-80 w-full   bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="rounded-lg relative md:w-3/5  m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0  bg-clip-border">
              <img
                src={card.photoURL}
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex items-center ">
              <div>
                <div className="space-y-1">
                  <h6 className="mb-1 lg:mb-3 text-3xl font-rancho bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">
                    Name: {card.name}
                  </h6>
                  <h4 className="text-base font-semibold">Brand: {card.brand}</h4>
                  <p className="text-base font-semibold">Price: {card.price} $</p>
                </div>
    
                <div className="flex gap-3 mt-4 lg:mt-5">
                  
                  <button onClick={()=> handleDelete(card._id)} className="bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent text-white font-rancho  normal-case block select-none rounded-lg py-1 px-6 text-center align-middle  text-2xl shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:cursor-pointer hover:shadow-[#FFA828]/40 active:opacity-[0.85] hover:translate-y-1 hover:transition-transform disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Delete
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
          ))}
        </div>
        </div>
        :
        <div className="flex flex-col items-center justify-center h-screen gap-5">
              <h1 className="font-rancho text-3xl md:text-4xl lg:text-6xl bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">Cart Not Found</h1>
              <ImCancelCircle className="text-3xl md:text-4xl lg:text-5xl text-[#fa0844cc]"></ImCancelCircle>
            </div>

      }
      <Footer></Footer>
    </div>
  );
};

export default MyCart;
