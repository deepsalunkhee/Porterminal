"use client";
import React, { useEffect, useState } from "react";
import Terminal from "./components/terminal/page";

export default function Home(): JSX.Element {
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  //check if fullscreen is closed
  useEffect(() => {
    const exitHandler = () => {
      if (!document.fullscreenElement) {
        setFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", exitHandler);
  }, []);

  const Enter = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }

    setFullscreen(true);
  };

  return (
    <div>
      {fullscreen ? (
        <div className="min-h-screen bg-black text-slate-50">
         <Terminal/>
        </div>
      ) : (
        <div className="min-h-screen bg-black text-slate-50 flex flex-col justify-center items-center">
            <video src={require('../../public/Matrix.mp4')}
            autoPlay
            loop
            muted
            className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-60"
            />
          <h1  className="z-10 font-bold"
           style={{fontSize: "3rem"}}
          >Matrix Loaded</h1>
          <button className="z-10 bg-green-500 text-white px-4 py-2 rounded" onClick={Enter}>Enter</button>
        </div>
      )}
    </div>
  );
}
