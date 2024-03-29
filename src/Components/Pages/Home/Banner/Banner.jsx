import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className="relative grid h-[20rem] md:h-[25rem] lg:h-[40rem] w-full flex-col items-end justify-center overflow-hidden bg-clip-border text-center">
        <div className="absolute inset-0 m-0 h-full w-full object-cover overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/SwM9K3H/replicate-prediction-jkzgcnjbpngx7z4zexdkkzqoqa.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="flex justify-center">
        <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
         className="absolute bottom-10 md:bottom-20 lg:bottom-44 p-6 px-6 py-24 md:px-12">
          <h2 className=" block font-rancho text-3xl md:text-5xl lg:text-6xl font-semibold  leading-[1.5] tracking-normal bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text antialiased">
          Discover Automotive Excellence Here
          </h2>
          <h5 className="block  md:text-xl antialiased font-medium leading-snug tracking-normal text-white font-rancho">
          Stunning Design And Powerful Features
          </h5>
        </div>
        </div>
      </div>
      <div className="bg-[#F8F8F8] py-5 px-5 md:px-10 lg:px-0">
        <div className="container mx-auto flex justify-between ">
        <div
        data-aos="zoom-out-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        >
        <img className="w-14 lg:w-40 h-10 lg:h-20" src="https://i.ibb.co/z2mFpXQ/replicate-prediction-wolliyzbqvnguaril6qtvhus4a-removebg-preview.png" alt="" />
            <h1 className="font-rancho text-xl text-center">Sports Car</h1>
        </div>
        <div
        data-aos="zoom-out-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        >
        <img className="w-16 lg:w-24 h-10 lg:h-20 lg:mb-1" src="https://i.ibb.co/Tqtyc8W/replicate-prediction-xuirsbzbrahkrlsol5hzjipiq4-removebg-preview.png" alt="" />
            <h1 className="font-rancho text-xl text-center">Sports Bike</h1>
        </div>
        <div
        data-aos="zoom-out-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        >
        <img className="w-14 lg:w-40 h-10 lg:h-20" src="https://i.ibb.co/R4vqYkr/replicate-prediction-5xfgy2bbivnzyy6kidfztoes2m-removebg-preview.png" alt="" />
            <h1 className="font-rancho text-xl text-center">Naked Car</h1>
        </div>
        <div
        data-aos="zoom-out-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        >
        <img className="w-16 lg:w-24 h-10 lg:h-20 lg:mb-1" src="https://i.ibb.co/Qjc6kQC/replicate-prediction-hgm4ofzbp23nf34y4o2oj5yjvy-removebg-preview.png" alt="" />
            <h1 className="font-rancho text-xl text-center">Naked Bike</h1>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
