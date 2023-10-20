
const AboutUs = () => {
  return (
    <div className=" mb-7 lg:mb-20">
      <div className="lg:flex">
        <div className="bg-[#393651]">
          <img
            className="lg:w-[610px] mx-auto"
            src="https://i.ibb.co/BBx6fhf/replicate-prediction-hakusjrbjpqhcarfrxhdidg5cy-removebg-preview.png"
            alt=""
          />
        </div>
        <div
          className="py-10 md:py-[120px] px-10 md:px-[96px] bg-[#393651] flex-1">
          <div>
            <p className="text-white text-lg font-semibold mb-3">
              Automotive
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-rancho font-semibold bg-gradient-to-t from-[#fa0844] to-[#fa6d63] text-transparent bg-clip-text mb-5">
              ABOUT US
            </h1>
            <div className="flex items-center gap-8 h-28 md:h-36">
              <p className="border border-[#8DD0D3] h-28 md:h-36"></p>

              <div>
                <p className="w-72 text-white text-lg md:text-xl">
                  “The automotive industry is a encompasses the design and marketing of vehicles, including cars and more…”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AboutUs;
