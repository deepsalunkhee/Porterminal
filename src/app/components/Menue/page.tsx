'use client'
import Typer from "react-natural-typing-effect";
import Hacker from "../hacker/page";
import React, { useState } from "react";
import About from "../Data/about";
import Projects from "../Data/Projects";
import Contacts from "../Data/constact";
import Image from "../Data/image";

const Menue = () => {
  const [message1, setMessage1] = useState<boolean>(false);
  const [image, setImage] = useState<boolean>(false);
  const [about, setAbout] = useState<boolean>(false);
  const [projects, setProjects] = useState<boolean>(false);
  const [contact, setContact] = useState<boolean>(false);
  const [wrongop, setwrongop] = useState<boolean>(false);
  const [option, setOption] = useState<string>("");

  const hanlesubmit = (e: any) => {
    e.preventDefault();
    console.log(option);
    if (option === "1") {
      setAbout(true);
    } else if (option === "2") {
      setProjects(true);
    } else if (option === "3") {
      setContact(true);
    } else if (option === "4") {
      setImage(true);
    } else if (option === "5") {
      // exit the full screen mode

      document.exitFullscreen();
    } else {
      setwrongop(true);
    }
  };

  const delaysec: any = (setMessage: any, time: any) => {
    setTimeout(() => {
      setMessage(true);
      console.log("2 sec delay");
    }, time);
  };
  return (
    <div>
      <div className="flex flex-row">
        <Hacker />
        <div className="text-yellow-400">
          <Typer
            text="Following Data is available"
            customTypingOptions={{ ms: 50, pow: 0, mode: "blackGreenTerminal" }} // Slower speed with less variation
          />
        </div>
      </div>
      <div className="text-yellow-400">1.about</div>
      <div className="text-yellow-400">2.projects</div>
      <div className="text-yellow-400">3.contact</div>
      <div className="text-yellow-400">4.image</div>
      <div className="text-yellow-400">5.exit</div>

      <div className="flex flex-row">
        <Hacker />
        <div className="text-yellow-400">
          <Typer
            text="Pls Enter the number to get the data"
            customTypingOptions={{ ms: 50, pow: 1, mode: "blackGreenTerminal" }} // Slower speed with less variation
          />
        </div>
      </div>
      {delaysec(setMessage1, 2000)}
      {message1 && (
        <div>
          <div className="flex flex-row">
            <span className="text-red-500">Number : </span>
            <form onSubmit={hanlesubmit}>
              <input
                className="text-yellow-400 bg-black"
                type="text"
                id="option"
                name="option"
                value={option}
                onChange={(e: any) => setOption(e.target.value)}
                //on focus dont let the borders appear
                onFocus={(e: any) => (e.target.style.outline = "none")}
                onKeyDown={(e: any) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    //the logic that locks this form once submitted
                    e.target.disabled = true;

                    hanlesubmit(e);
                  }
                }}
              ></input>
            </form>
          </div>
          {about && <About />}
          {projects && <Projects />}
          {contact && <Contacts />}
          {image && <Image />}
          {wrongop && (
            <div>
              <div className="flex flex-row">
                <Hacker />
                <Typer
                  text="Wrong Option"
                  customTypingOptions={{
                    ms: 50,
                    pow: 0,
                    mode: "blackGreenTerminal",
                  }} // Slower speed with less variation
                />
              </div>
              <Menue />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Menue;
