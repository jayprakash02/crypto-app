import React from "react";
import {motion as m} from "framer-motion"
const Trade = () => {
  return (
    <div className="w-full font-poppins  mb-8 ">
      <div className="w-full relative ">
      <video
          autoplay="true"
          loop="true"
          muted="true"
          class=" z-0 w-auto 
            min-w-full  object-cover "
        >
          <source src="./images/video/tradevideo.mp4" />
        </video>
        {/* <img src="./images/designbg1.jpg" /> */}
        <div className=" absolute top-56 left-32 w-full max-w-7xl mx-auto flex justify-center items-center flex-col ">
          <m.h1  initial={{ y:-50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.4,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="text-6xl text-center font-semibold   mb-6">
          Enhanced Trade Standards: <br/>
          One Ozo Sets the Bar Higher for <br/>Exceptional Investment Opportunities
          </m.h1>
          <m.p  initial={{ opacity:0 }}
            whileInView={{
          
             opacity: 1,
            transition:{
             duration: 1.6,
       delay: 0.6,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="text-xl text-center font-medium mb-6">
          One Ozo is committed to raising the bar in trade standards, providing exceptional investment <br/> 
opportunities that surpass industry norms and deliver superior results for investors
          </m.p>
          <m.button   initial={{ opacity:0,scale:0 }}
            whileInView={{
          scale:1,
             opacity: 1,
            transition:{
             duration: 0.8,
       delay: 0.8,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="px-6 py-4 rounded-2xl bg-purple-900 text-xl font-semibold">
            Get Connect
          </m.button>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto text-white flex justify-between space-x-10 items-center mt-44">
        <m.div  initial={{ opacity:0 }}
            whileInView={{
          
             opacity: 1,
            transition:{
             duration: 1.0,
       delay: 0.5,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="max-w-[350px] min-h-[340px] py-6 rounded-xl flex flex-col items-center justify-center text-center bg-neutral-900 px-6">
          <img
            src="./images/safety.png"
            className="bg-green-500 p-4 w-24 rounded-full mb-6"
          />
          <h1 className="text-2xl mb-4 font-bold">Transparency</h1>
          <p className="text-gray-500 text-[16px]">
          One Ozo maintains transparency in all trading activities, providing clear visibility into 
investments and ensuring trust and confidence
          </p>
        </m.div>
        <m.div  initial={{ opacity:0 }}
            whileInView={{
          
             opacity: 1,
            transition:{
             duration: 1.0,
       delay: 0.6,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="max-w-[350px] min-h-[340px] py-6 rounded-xl flex flex-col items-center justify-center text-center bg-neutral-900 px-6">
          <img
            src="./images/safety.png"
            className="bg-green-500 p-4 w-24 rounded-full mb-6"
          />
          <h1 className="text-2xl mb-4 font-bold">Accessibility</h1>
          <p className="text-gray-500 text-[16px]">
          One Ozo offers a user-friendly platform, enabling easy access to trading opportunities, 
empowering investors to seize profitable moments
          </p>
        </m.div>
        <m.div  initial={{ opacity:0 }}
            whileInView={{
          
             opacity: 1,
            transition:{
             duration: 1.0,
       delay: 0.7,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="max-w-[350px] min-h-[340px] py-6 rounded-xl flex flex-col items-center justify-center text-center bg-neutral-900 px-6">
          <img
            src="./images/safety.png"
            className="bg-green-500 p-4 w-24 rounded-full mb-6"
          />
          <h1 className="text-2xl mb-4 font-bold">Reliability</h1>
          <p className="text-gray-500 text-[16px]">
          One Ozo ensures reliable trade execution and dependable performance, backed by robust 
technology infrastructure and expert market analysis
          </p>
        </m.div>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-28 mb-16 flex items-center justify-between min-h-[90vh] ">
        <div className="text-5xl max-w-[250px] font-semibold w-full space-y-6">
          <m.div  initial={{ y:50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.3,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}>
            <h1 className="mb-3">50,000</h1>
            <p className="text-xl text-purple-900">Active Investor Base</p>
          </m.div>

          <m.div  initial={{ y:50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.4,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}>
            <h1 className="mb-3">$500M</h1>
            <p className="text-xl text-purple-900">Investment Capital</p>
          </m.div>
          <m.div  initial={{ y:50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.5,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}>
            <h1 className="mb-3">100</h1>
            <p className="text-xl text-purple-900">Traders Team</p>
          </m.div>
          <m.div  initial={{ y:50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.6,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}>
            <h1 className="mb-3">85%</h1>
            <p className="text-xl text-purple-900">Trade Success Rate</p>
          </m.div>
          <m.div  initial={{ y:50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.6,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}>
            <h1 className="mb-3">97%</h1>
            <p className="text-xl text-purple-900">Investor Satisfaction</p>
          </m.div>
        </div>

        <div className="max-w-[900px] pl-10 w-full min-h-[70vh] relative h-full ">
          <m.div  initial={{ x:50,opacity:0 }}
            whileInView={{
          
             opacity: 1, x:0,
            transition:{
             duration: 0.9,
       delay: 0.8,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="max-w-[500px] min-h-[70vh] z-0 rounded-2xl  w-full ">
              <img src="./images/trade1.jpg"  className="w-full h-full"/>
            </m.div>

          <m.div  initial={{ x:-50,opacity:0 }}
            whileInView={{
          
             opacity: 1, x:0,
            transition:{
             duration: 0.9,
       delay: 0.95,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className=" z-10 absolute top-40 left-72">
            <h1 className="text-4xl font-semibold tracking-wider mb-4 ">
            Impressive Investor Base<br/>
             and Satisfaction Rates: <br/>
             Unveiling One Ozo's Success
            </h1>
            <p className="max-w-[450px] font-medium tracking-wider text-sm w-full">
            One Ozo boasts a substantial number of investors, while maintaining a high percentage of 
satisfied clients. Our experienced team of traders ensures top-notch performance and service
            </p>
          </m.div>
        </div>
      </div>

      <div className="w-full  mb-24  min-h-[150vh] ">
        {/* <img src="./images/security1.jpg" className="opacity-50 " /> */}

        <div className="w-full mt-44">
          <m.h1   initial={{ y:-50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.6,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}  className="text-5xl mb-6 font-bold text-center ">
            Our Services
          </m.h1>
          <m.p   initial={{ y:-50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.75,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}className="text-center max-w-[600px] mx-auto w-full text-xl mb-10 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </m.p>
        </div>
        <div className="w-full max-w-6xl  mx-auto text-white grid grid-cols-3 gap-6">
          <m.div  initial={{opacity:0 }}
            whileInView={{
          
             opacity: 1, 
            transition:{
             duration: 0.7,
       delay: 0.4,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="max-w-[320px] py-6 rounded-xl   bg-neutral-900 px-6">
            <img
              src="./images/safety.png"
              className="bg-green-500 p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold">Proven Trading Strategies
</h1>
            <p className="text-gray-500">
            One Ozo implements tried and tested trading strategies, developed by industry experts, to 
optimize investment performance and generate consistent returns.
            </p>
          </m.div> 
          <m.div  initial={{opacity:0 }}
            whileInView={{
          
             opacity: 1, 
            transition:{
             duration: 0.7,
       delay: 0.5,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}  className="max-w-[320px] py-6 rounded-xl   bg-neutral-900 px-6">
            <img
              src="./images/safety.png"
              className="bg-green-500 p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold"> Advanced Market Analysis</h1>
            <p className="text-gray-500">
            With cutting-edge market analysis tools and techniques, One Ozo stays ahead of market trends, 
enabling informed investment decisions for maximum profitability.
            </p>
          </m.div>
          <m.div  initial={{opacity:0 }}
            whileInView={{
          
             opacity: 1, 
            transition:{
             duration: 0.7,
       delay: 0.6,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}  className="max-w-[320px] py-6 rounded-xl   bg-neutral-900 px-6">
            <img
              src="./images/safety.png"
              className="bg-green-500 p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold"> Risk Management
</h1>
            <p className="text-gray-500">
            One Ozo emphasizes effective risk management strategies to mitigate potential losses, ensuring 
a balanced and secure approach to trading.
            </p>
          </m.div>
          <m.div  initial={{opacity:0 }}
            whileInView={{
          
             opacity: 1, 
            transition:{
             duration: 0.7,
       delay: 0.7,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}  className="max-w-[320px] py-6 rounded-xl   bg-neutral-900 px-6">
            <img
              src="./images/safety.png"
              className="bg-green-500 p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold"> Competitive Trading Fees</h1>
            <p className="text-gray-500">
            One Ozo offers competitive trading fees, enabling investors to maximize their returns by 
reducing costs and expenses associated with trading
            </p>
          </m.div>
          <m.div  initial={{opacity:0 }}
            whileInView={{
          
             opacity: 1, 
            transition:{
             duration: 0.7,
       delay: 0.8,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}  className="max-w-[320px] py-6 rounded-xl   bg-neutral-900 px-6">
            <img
              src="./images/safety.png"
              className="bg-green-500 p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold"> Regulatory Compliance</h1>
            <p className="text-gray-500">
            One Ozo operates in accordance with strict regulatory standards, ensuring legal compliance and 
providing a trustworthy and secure trading environment
            </p>
          </m.div>
          <m.div  initial={{opacity:0 }}
            whileInView={{
          
             opacity: 1, 
            transition:{
             duration: 0.7,
       delay: 0.9,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}  className="max-w-[320px] py-6 rounded-xl   bg-neutral-900 px-6">
            <img
              src="./images/safety.png"
              className="bg-green-500 p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold">
            Continuous Innovation
            </h1>
            <p className="text-gray-500">
            One Ozo is committed to continuous innovation, regularly introducing new features, tools, and 
investment opportunities to enhance the trading experience for investors.
            </p>
          </m.div>
        </div>
      </div>
    
      <div></div>
      
    </div>
  );
};

export default Trade;
