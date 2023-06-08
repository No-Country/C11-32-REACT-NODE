import Popup from "@/components/PopUp/PopUp";
import React, { useState } from "react";
import { hero } from "@/assets";

const Hero: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePlayDemoClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="px-4 py-6 md:px-6 lg:px-16 xl:px-32 flex flex-col items-center">
      <div className="flex flex-col items-center md:flex-row">
        <img src="img/Decore.png" className="absolute right-0 top-0" alt="" />
        <div className="flex flex-col items-center pt-0 md:flex-row md:pt-10">
          <div className="md:w-[450px]">
            <div className="grid gap-4">
              <div className="grid gap-4">
                <span className="z-10 text-2xl font-bold text-redText">
                  Unlock your potential with the best
                </span>
                <span className="z-50 text-4xl font-bold text-purpleText md:text-6xl">
                  Become more confident, speak English, and meet new people!
                </span>
              </div>
              <div className="z-10">
                <span className="text-lightPurpleText" onClick={handlePlayDemoClick}>
                  the best way to Practice Speaking in English and other
                  languages Online in a real-life setting..
                </span>
               
              </div>
              <div className="z-10 mt-4 flex items-center space-x-4 md:mt-8 md:space-x-6">
                
                <div className="flex items-center space-x-2">
                  <div
                    className="rounded-full bg-buttonColor p-2 text-textWhite"
                    onClick={handlePlayDemoClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lightPurpleText" onClick={handlePlayDemoClick}>
                      Play Demo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-30 z-10 md:ml-10 md:mt-0 md:w-[600px]">
            <img src={hero} className="w-full" alt="" />
          </div>
        </div>
      </div>
      {showPopup && <Popup handleClose={handleClosePopup} />}
    </div>
  );
};

export default Hero;
