const Banner = () => {
  return (
    <div>
      <div className="relative grid h-[40rem] w-full flex-col items-end justify-center overflow-hidden bg-white bg-clip-border text-center">
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/SwM9K3H/replicate-prediction-jkzgcnjbpngx7z4zexdkkzqoqa.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="flex justify-center">
        <div className="absolute bottom-44 p-6 px-6 py-24 md:px-12">
          <h2 className=" block font-rancho text-6xl font-medium  leading-[1.5] tracking-normal bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text antialiased">
          Discover Automotive Excellence Here
          </h2>
          <h5 className="block  text-xl antialiased font-medium leading-snug tracking-normal text-white font-rancho">
          Stunning Design And Powerful Features
          </h5>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
