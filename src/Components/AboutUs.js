import React from "react";
import "./AboutUs.css";
import about1 from "../Assets/about1.jpg"
import about2 from "../Assets/about2.jpg"

export default function AboutUs(){
    return(
        <React.Fragment>
            <div className="backgroundUs">
                <div className="conteinerAbout">
                    <div className="about1">
                        <img src={about1} />
                    </div>  
                    <div className="about2">
                        <img src={about2} />
                    </div>          
                    <div className="aboutus">
                        <h1>About Us</h1>
                        <p>wrapper definimos a propriedade flex, wrapper definimos a propriedade display wrapper definimos a propriedade display: flex;<br/><br/>wrapper definimos a propriedade display: flex; que avisa o navegador que os elementos filhos diretos do . wrapper deverão agir como flexbox. A propriedade align-items centraliza os elementos flex na vertical, wrapper deverão agir como flexbox. A propriedade align-items centraliza os elementos flex na vertical, wrapper deverão agir como flexbox. A propriedade align-items centraliza os elementos flex na vertical.</p>
                        <button>Discover More</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}