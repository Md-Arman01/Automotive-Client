import PropTypes from "prop-types";
import { Link} from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { _id, brand_name, brand_image } = brand || {};



  return (
    
      <Link to={`/brandDetails/${_id}`}>
        <div className="bg-base-100 shadow-xl rounded-lg py-10 hover:-translate-y-3.5 hover:transition-transform hover:cursor-pointer">
          <img className="w-72 h-52 mx-auto" src={brand_image} alt="" />
          <h1 className="text-center mt-5 font-rancho text-4xl bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">
            {brand_name}
          </h1>
        </div>
      </Link>
      
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default BrandCard;
