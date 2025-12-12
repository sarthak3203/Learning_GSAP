import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);


const ScrollTrigg = () => {// This ref holds the actual DOM element. React sets boxRef.current after render.
  // Many beginners forget to use `.current` when passing it to GSAP or ScrollTrigger.
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.from(boxRef.current, {
      scale: 0,
      opacity: 0,
      rotate: 360,
      scrollTrigger: {
        // trigger expects the actual DOM node, not the ref object
        trigger: boxRef.current,

        // scrub makes the animation linked to scroll progress.
        // subtle: it creates a "timeline scrub" — faster or slower scroll affects animation speed.
        scrub: 1,

        // markers are for debugging. Usually turn them off in production.
        markers: true,

        // start and end are scroll positions
        // "top 80%" means trigger starts when the top of the element reaches 80% of viewport height
        start: "top 80%",
        end: "top 15%",
        // subtle: if start > end accidentally, animation may behave strangely
      },
    });
    // subtle: we don't need to manually kill this animation. useGSAP automatically cleans up when the component unmounts.
  });

  return (
    <>
      <div className="h-screen w-full bg-amber-200" id="page1"> page1</div>
      <div className="h-screen w-full bg-amber-400 flex justify-center items-center" id="page2"> 
        {/* React ref attached here ensures GSAP targets exactly this div */}
        <div ref={boxRef} id="box1" className="w-40 h-40 bg-amber-800"></div>
      </div>
      <div className="h-screen w-full bg-amber-600" id="page3"> page 3</div>
    </>
  );
}

export default ScrollTrigg;
