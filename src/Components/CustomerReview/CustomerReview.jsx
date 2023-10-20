/* eslint-disable react/no-unescaped-entities */

import Marquee from "react-fast-marquee";
import MarqueeCard from "../MarqueeCard/MarqueeCard";



const CustomerReview = () => {
  return (
    <div className="my-5 lg:my-20">
      <h1 className="text-center font-rancho text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text">
        CUSTOMERS REVIEWS
      </h1>
      <p className="text-center mt-2 lg:mt-5 text-[10px] lg:text-xs">
        Thank you : If you love our theme, don't forget to rate it
      </p>
      <div className="flex justify-center mt-3">
        <div className="rating lg:rating-lg">
          <input
            type="radio"
            name="rating-8"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-8"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-8"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-8"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-8"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
      <Marquee className="flex  gap-5 my-5 lg:my-10" pauseOnHover={true}>
        <MarqueeCard></MarqueeCard>
      </Marquee>
    </div>
  );
};

export default CustomerReview;
