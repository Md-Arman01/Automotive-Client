import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const CardDetails = () => {

    const [cards, setCards] = useState([]);
    const {_id} = useParams()

      useEffect(()=> {
        fetch('https://assignment-10-server-eight-sigma.vercel.app/products')
        .then(res => res.json())
        .then(res => setCards(res))
    },[])
    // console.log(cards)
    const findCard = cards.find(card => card._id === _id)
    const {photoURL, name, brand, description} = findCard || {}
    
  
    return (
        <div>
            <div className="relative flex w-full flex-row rounded-xl gap-10 bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-3/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={photoURL}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex items-center">
          <div>
            <div className="space-y-1">
              <h6 className="mb-3 text-5xl font-rancho bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">
                {name} <span className="text-base">({brand})</span>
              </h6>
              <h4 className="text-base font-semibold">Description: {description}</h4>
              
            </div>

          </div>
        </div>
      </div>
        </div>
    );
};

export default CardDetails;