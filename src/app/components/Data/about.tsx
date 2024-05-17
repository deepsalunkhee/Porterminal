'use client'
import Typer from "react-natural-typing-effect";
import Hacker from "../hacker/page";
import React, { useState } from "react";
import Menue from "../Menue/page";

const About = () => {
    const [message1, setMessage1] = useState<boolean>(false);

    const delaysec: any = (setMessage: any, time: any) => {
        setTimeout(() => {
            setMessage(true);
        }, time);
    };
    return (
        <div>
            <div className="flex flex-row">
                <Hacker />
                <span className="text-yellow-400">
                    <Typer
                        text="Extracting A bout section.."
                        customTypingOptions={{ ms: 50, pow: 1, mode: "blackGreenTerminal" }} // Slower speed with less variation
                    />
                </span>
            </div>
            {delaysec(setMessage1, 1000)}
            {message1 && (
                <div className="flex flex-col">
                    <div>
                        <span className="text-blue-500">Name:</span>
                        Deep Salunkhe
                    </div>
                    <div>
                        <span className="text-blue-500">Age:</span>
                        22
                    </div>
                    <div>
                        <span className="text-blue-500">Education:</span>
                        B.E in Computer Engineerng
                    </div>
                    <div>
                        <span className="text-blue-500">
                            {" "}
                            What he writes about himself (Summarised from Multiple sources):
                        </span>
                        A techentusiat who loves to explore new technologies and learn about
                        them,currently working on Web Dev, Web3 (Etherium and solidity) ,
                        Cloud Computing .
                    </div>

                    <div>
                        <div className="text-blue-500">
                            Technoloies That He has Worked with:
                        </div>
                        <ul className="grid grid-cols-3 gap-4">
                            <li>React</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>SQL</li>
                            <li>Firebase</li>
                            <li>React Native</li>
                            <li>Python</li>
                            <li>Cloud Computing</li>
                            <li>AWS</li>
                            <li>Azure</li>
                            <li>Web3</li>
                            <li>Solidity</li>
                            <li>Docker</li>
                            <li>Git-gitHub</li>
                        </ul>

                    </div>

                    <div>
                        <span className="text-blue-500">Resume</span>
                        <a
                            href="https://deepsalunkhe.tiiny.site/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Click Here
                        </a>
                    </div>
                    <div>
                        <span className="text-blue-500">More About Deep </span>
                        <div>
                            He Has woked as a full stack developer I Intern ar SellerKin,were his
                            tech stack included React,Node,Expres and Firebase,he also integrated
                            stripe and paypal payment gateways during the internship,More detail are
                            available on his resume.
                        </div>
                        <br />
                        <div>
                            He was also part of various commites in his collage including IEEE student
                            brach and Unstop were he was part of Technical and sponsorship team respectively.
                            He has won various compition orgnaized by other commitees in his collage.He was also part
                            of prefinal round of SIH 2024.
                        </div>
                        <br />
                        <div>
                            He is also very consitanst in his accademic and has scored 9.8+ CGPA , He was
                            also the accademic topper in his department for multiple semesters.
                        </div>
                    </div>
                    <Menue />
                </div>
            )}
        </div>
    );
};

export default About;
