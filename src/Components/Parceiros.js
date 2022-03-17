import React from "react"
import "./Parceiros.css"

const emp1 = "https://img.icons8.com/material/100/cccccc/day-of-the-dead.png";
const emp2 = "https://img.icons8.com/material/100/cccccc/2k-logo.png";
const emp3 = "https://img.icons8.com/material/100/cccccc/nuke.png";
const emp4 = "https://img.icons8.com/material/100/cccccc/jeep.png";
const emp5 = "https://img.icons8.com/material/100/cccccc/daf.png";

export default function Parceiros(){
    return(
        <React.Fragment>
            <div className="conteinerParceiro">
                <div className="parceirosCima">
                    <h1>Our Achievement</h1>
                    <p>wrapper definimos a propriedade display: flex; que avisa o navegador</p>
                </div>
                <div className="parceirosBaixo">
                    <img src={emp1} />
                    <img src={emp2} />
                    <img src={emp3} />
                    <img src={emp4} />
                    <img src={emp5} />
                </div>
            </div>
        </React.Fragment>
    )
}