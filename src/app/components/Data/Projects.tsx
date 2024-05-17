'use client'
import Typer from "react-natural-typing-effect";
import Hacker from "../hacker/page";
import React, { useState } from "react";
import Menue from "../Menue/page";

const Projects = () => {
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
                <div className="text-yellow-400">
                    <Typer
                        text="Extracting Projects Names.."
                        customTypingOptions={{ ms: 50, pow: 1, mode: "blackGreenTerminal" }} // Slower speed with less variation
                    />
                </div>
            </div>
            {delaysec(setMessage1, 2000)}
            {message1 && 
                <div>
                    <div>
                        <span className="text-red-500">Couldent Extract The data... </span>
                        
                    </div>
                    <div>
                        <span className="text-blue-500">Project Linktree obtained :</span>
                        <a href="https://linktr.ee/deepsalunkhee_projects">https://linktr.ee/deepsalunkee</a>
                    </div>
                    <Menue/>
                </div>
            }
        
        </div>
    );
    }
export default Projects;