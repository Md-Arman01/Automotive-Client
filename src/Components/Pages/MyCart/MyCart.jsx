import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-10-server-eight-sigma.vercel.app/myCart/${email}`)
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  console.log(cards);

  return (
    <div className="grid grid-cols-2 gap-5 container mx-auto my-20">
      {cards.map((card) => (
        <div key={card._id}>
          
          <div>
      <div className="relative flex w-full h-80 flex-row rounded-xl gap-10  bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-3/5  m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={card.photoURL}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex items-center">
          <div>
            <div className="space-y-1">
              <h6 className="mb-3 text-3xl font-rancho bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">
                Name: {card.name}
              </h6>
              <h4 className="text-base font-semibold">Brand: {card.brand}</h4>
              <p className="text-base font-semibold">Price: {card.price} $</p>
            </div>

            <div className="flex  gap-3 mt-10">
              
              <button className="bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent text-white font-rancho mx-auto normal-case block select-none rounded-lg py-1 px-6 text-center align-middle  text-2xl shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:cursor-pointer hover:shadow-[#FFA828]/40 active:opacity-[0.85] hover:translate-y-1 hover:transition-transform disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
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
  );
};

export default MyCart;
