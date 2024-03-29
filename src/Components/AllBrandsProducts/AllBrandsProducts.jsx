import PropTypes from "prop-types";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link} from "react-router-dom";

const AllBrandsProducts = ({ product }) => {

  
  const {_id, photoURL, name, brand, type, price, rating } = product || {};

  return (
    <div>
      <div className="relative flex flex-col md:flex-row rounded-xl gap-3 lg:gap-10 p-7 md:p-0 lg:h-80 w-full   bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative md:w-3/5  m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={photoURL}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex items-center">
          <div>
            <div className="space-y-1">
              <h6 className="mb-1 lg:mb-3 text-3xl font-rancho bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">
                Name: {name}
              </h6>
              <h4 className="text-base font-semibold">Brand: {brand}</h4>
              <p className="text-base font-semibold">Type: {type}</p>
              <p className="text-base font-semibold">Price: {price} $</p>
              <p>
                <Rating
                  emptySymbol={
                    <AiOutlineStar className="text-base text-orange-500"></AiOutlineStar>
                  }
                  fullSymbol={
                    <AiFillStar className="text-base text-orange-500"></AiFillStar>
                  }
                  initialRating={rating}
                  readonly
                />
              </p>
            </div>

            <div className="flex  gap-3 mt-4 lg:mt-5 ">
              <Link to={`/cardDetails/${_id}`}>
              <button className="bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent text-white font-rancho mx-auto normal-case block select-none rounded-lg py-1  px-6 text-center align-middle  text-2xl shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:cursor-pointer hover:shadow-[#FFA828]/40 active:opacity-[0.85] hover:translate-y-1 hover:transition-transform disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Details
              </button>
              </Link>
              <Link to={`/cardUpdate/${_id}`}>
              <button className="bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent text-white font-rancho mx-auto normal-case block select-none rounded-lg py-1 px-6 text-center align-middle  text-2xl shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:cursor-pointer hover:shadow-[#FFA828]/40 active:opacity-[0.85] hover:translate-y-1 hover:transition-transform disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Update
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AllBrandsProducts.propTypes = {
  product: PropTypes.object.isRequired,
};

export default AllBrandsProducts;
