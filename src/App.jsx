import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import "remixicon/fonts/remixicon.css";

function App() {

  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to('.vi-mask-group', {
      rotate:10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%", 
    })
    .to('.vi-mask-group', {
      scale:10,
      duration:2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity:0,
      onUpdate: function(){
        if(this.progress() >= 0.9){
        document.querySelector(".svg").remove();
        setShowContent(true);
        this.kill();
        }
      }
    });
  });

  useGSAP(() =>{
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function(e){
        const xMove = (e.clientX / window.innerWidth - .5) * 40;
         gsap.to(".main .text",{
          x:`${xMove * 0.5}%`
         })
         gsap.to(".sky",{
          x:xMove,
         })
         gsap.to(".bg",{
          x:xMove * 1.7,
         })
    })
  }, [showContent]);

  return (
   <>
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg1.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (<div className='main w-full  '>
        <div className="landing w-full h-screen bg-black">
          <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
            <div className="logo flex gap-3">
              <div className="lines flex flex-col gap-1">
                <div className="line w-10 h-1 bg-white"></div>
                <div className="line w-8 h-1 bg-white"></div>
                <div className="line w-5 h-1 bg-white"></div>
              </div>
              <h3 className="text-3xl -mt-[8px] leading-none text-white">Rockstar</h3>
            </div>
          </div>
          <div className="imagesdiv relative overflow-hidden w-full h-screen">
            <img className='absolute sky scale-[1.2] top-0 left-0 w-full h-full object-cover' src="./sky1.png" alt="" />
            <img className='absolute bg scale-[1.1] top-0 left-0 w-full h-full object-cover' src="./bg1.png" alt="" />
            
            <div className="text text-white flex flex-col gap-1 absolute top-20 left-1/2 -translate-x-1/2">
            <h1 className="text-9xl leading-none -ml-10">grand</h1>
            <h1 className="text-9xl leading-none ml-30">theft</h1>
            <h1 className="text-9xl leading-none -ml-5">auto</h1>
          </div>
            <img className='absolute character bottom-0 left-1/2 -translate-x-1/2 h-[80vh] ' src="./char.png" alt="" />

          </div>
          <div className="btmbar text-white absolute bottom-0 left-0 w-full px-10 py-10 bg-gradient-to-t from-black to-transparent">
            <div className="flex gap-4 items-center">
              <i className="text-xl ri-arrow-down-line"></i>
              <h3 className="font-[Helvetica-Now-Display]">Scroll Down</h3>
            </div>
            <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50px]" src="./ps5.png" alt="" />
          </div>
        </div>
          {/* <div className="w-full h-screen flex items-center justify-center px-10 bg-black">
            <div className="cntnr w-full h-[80%] bg-red-500">
            <div className="limg w-1/2">
              <img src="" alt="" />
            </div>
            <div className="rg"></div>
            </div>
            
          </div> */}
        </div>)}     
   </>
  )
}

export default App