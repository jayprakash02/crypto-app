import React from "react";

const Earning = () => {
  return (
    <div className="w-full font-poppins">
      <div className="w-full text-center space-y-10 my-20 max-w-7xl mx-auto ">
        <h1 className="text-6xl font-bold">Services</h1>
        <p className="max-w-[700px] text-center w-full mx-auto">
          Quis incididunt sunt occaecat irure officia magna Lorem ad ut ipsum.
          commodo occaecat nostrud nisi proident sunt consectetur. Reprehenderit
          laborum labore ullamco sint excepteur incididunt pariatur sint.
        </p>
        <div className="rounded-2xl  bg-neutral-800 p-8 flex items-center justify-between">
          <div className="text-left flex justify-center  items-start space-y-3 flex-col">
            <p className="text-purple-900 text-xl">Services</p>
            <h2 className="text-3xl font-bold">
              We Offering Best of
              <br />
              Variety of Security
            </h2>
          </div>
          <div className="w-1/2 space-y-3 flex justify-center items-start flex-col ">
            <p className="max-w-[200px] w-full border-t-2 border-purple-900"></p>
            <p className="text-justify">
              Irure officia quis id magna minim tempor incididunt ea proident
              anim. Reprehenderit sint nulla sint pariatur incididunt ipsum duis
              Lorem magna.
            </p>
            <button className="px-6 py-3 font-bold bg-purple-900 rounded-md">
              Read more
            </button>
          </div>
        </div>
      

        <div className="w-full flex-col  relative flex pt-16 justify-center  items-center mb-16">
          <img src="./images/package.png"/>
         
         
        </div>
      </div>

      <div className="w-full mt-24 mb-44 relative">
        <img
          src="./images/designbg2.jpg"
          className="w-full max-h-[60vh] opacity-90"
        />

        <div className="flex absolute max-w-5xl w-full top-44 left-64 justify-between items-center">
          <div className="">
            <h2 className="text-3xl font-bold">
              Contact us for deeply
              <br />
              information and services
              <br />
              customize.
            </h2>
          </div>

          <div>
            <button className="px-6 py-3 text-2xl font-bold bg-purple-900 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>
                
    </div>
  );
};

export default Earning;
