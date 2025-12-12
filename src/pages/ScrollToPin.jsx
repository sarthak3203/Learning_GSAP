import React from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP)

const ScrollToPin = () => {
    
  const textRef = useRef(null);
  const page=useRef(null);
  const page2 = useRef(null);
  const thankyou=useRef(null);

  useGSAP(()=>{
    gsap.to(textRef.current,{
      x:"-105%",
      scrollTrigger:{
        trigger:page.current,
        start:"top top",
        end:"top -120%",
        scrub:1,
        pin:true
      }
    })

    gsap.from(thankyou.current,{
      y:-30,
      opacity:0,
      delay:1,
      duration:.5,
      scrollTrigger:{
        trigger:page2.current,
        start:"top 55%",
      }

    })

    

  })




  return (
    <>
      <div className="w-full h-screen bg-red-200 flex justify-center items-center text-6xl font-bold text-white"><div>Scroll to see the horizontal and pinning animation</div></div>

      <div ref={page} className="w-full h-screen bg-red-400 overflow-x-hidden ">
        <div ref={textRef} className="text-white font-bold text-[30vw] whitespace-nowrap">
             HI, WELCOME
        </div>
        {/* --whitespace-nowrap keep the text in single line only and dont wrap it and take to next line --overflow-x-auto let us scroll horizontally and keep the page properties like bg-color same even if we scroll horizontally */}
      </div>

      <div ref={page2} className="w-full h-screen bg-red-500 flex justify-center items-center text-7xl font-bold text-white">
        <div ref={thankyou}>Thank You</div>
      </div>
    </>
  );
}

export default ScrollToPin
