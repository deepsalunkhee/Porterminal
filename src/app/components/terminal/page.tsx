"use client";

import React, { useEffect, useState } from "react";
import Hacker from "../hacker/page";
import Typer from "react-natural-typing-effect";
import CustomTypingOptions from "react-natural-typing-effect";
import Menue from "../Menue/page";

const Terminal = () => {

    const [message2, setMessage2] = useState<boolean>(false);
    const [message3, setMessage3] = useState<boolean>(false);
    const [message4, setMessage4] = useState<boolean>(false);

    const delay2sec: any = (setMessage: any, time: any) => {
        setTimeout(() => {
            setMessage(true);
            console.log("2 sec delay");
        }, time);
    };

    return (
        <>
            <div className="flex flex-row">
                <Hacker />
                <span className="text-yellow-400">
                    <Typer
                        text="Welcome master to the matrix"
                        customTypingOptions={{ ms: 50, pow: 1 ,mode:"blackGreenTerminal"}} // Slower speed with less variation
                    />
                </span>
            </div>
            {delay2sec(setMessage2, 2000)}
            {message2 &&
                <div >
                    <div className="flex flex-row">
                        <Hacker />
                        <span className="text-yellow-400">
                            <Typer
                                text="Mining Data about Deep Salunkhe ..."
                                customTypingOptions={{ ms: 50, pow: 1,mode:"blackGreenTerminal" }} // Slower speed with less variation
                            />
                        </span>

                    </div>

                    {delay2sec(setMessage3, 2000)}
                    {message3 &&
                        <span className="text-yellow-400 text-wrap">
                            <Typer
                                text="####################################"
                                customTypingOptions={{ ms: 50, pow: 1.6,mode:"blackGreenTerminal"}} // Slower speed with less variation
                            />
                        </span >


                    }
                    {delay2sec(setMessage4, 9500)}
                    {message4 &&
                      <div>
                        <span className="text-yellow-400">
                            <Typer
                                text="Data Mined Successfully"
                                customTypingOptions={{ ms: 50, pow: 0.2 ,mode:"blackGreenTerminal"}} // Slower speed with less variation
                            />
                        </span>
                        <Menue/>
                        </div>
                     
                    }




                </div>
            }
        </>
    );
};

export default Terminal;
