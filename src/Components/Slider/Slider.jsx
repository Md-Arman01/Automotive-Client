import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import {Pagination } from 'swiper/modules';

const Slider = ({brand}) => {
  const {image_1, image_2, image_3} = brand || {}

    
    return (
      <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><img src={image_1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image_2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image_3} alt="" /></SwiperSlide>
    </Swiper>
    );
};
Slider.propTypes ={
  brand: PropTypes.object.isRequired,
}

export default Slider;