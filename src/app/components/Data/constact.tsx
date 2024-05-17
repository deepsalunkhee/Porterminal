import Typer from "react-natural-typing-effect";
import Hacker from "../hacker/page";
import React, { useState } from "react";
import Menue from "../Menue/page";

const Contacts = () => {
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
                        text="Extracting contact information.."
                        customTypingOptions={{ ms: 50, pow: 1, mode: "blackGreenTerminal" }} // Slower speed with less variation
                    />
                </div>
            </div>
            {delaysec(setMessage1, 2000)}
            {message1 && 
                <div>
                    <div>
                        <span className="text-blue-500">Email:</span>
                        deepsalunkhee@gmail.com
                    </div>
                    <div>
                        <span className="text-blue-500">Phone:</span>
                        9022682334
                    </div>
                    <div>
                        <span className="text-blue-500">Github:</span>
                        <a href="github.com/deepsalunkee">github.com/deepsalunkee</a>
                    </div>
                    <div>
                        <span className="text-blue-500">LinkedIn:</span>
                        <a href="https://www.linkedin.com/in/deep-salunkhe-917931225/">https://www.linkedin.com/in/deep-salunkhe-917931225/</a>
                    </div>
                    <div>
                        <span className="text-blue-500">LinkTree:</span>
                        <a href="https://linktr.ee/deepsalunkhee">https://linktr.ee/deepsalunkhee</a>
                    </div>
                    <div>
                        <span className="text-blue-500">Twitter(X):</span>
                        <a href="https://x.com/DeepSalunkhee">https://x.com/DeepSalunkhee</a>
                    </div>
                    <Menue/>

                    </div>
            }
            
        </div>
    )
}

export default Contacts;