import React from "react";
import "./Cards.css"
import dude from "../Assets/dude.jpeg";

export default function Cards(){
    return (
        <React.Fragment>
            <div className="conteinerCards">
            <div className="barraAmarela">
                </div>
                <div className="cards">
                    <div className="cardEsq">
                        <div>
                            <h1>Vision</h1>
                            <p>wrapper definimos a propriedade display: flex; que avisa o navegador que os elementos filhos diretos do . wrapper deverão agir como flexbox. A propriedade align-items centraliza os elementos flex na vertical.</p>
                        </div>
                    </div>
                    <div className="cardCentro">
                        <img src={dude} />
                    </div>
                    <div className="cardDir">
                    <div>
                            <h1>Mission</h1>
                            <p>wrapper definimos a propriedade display: flex; que avisa o navegador que os elementos filhos diretos do . wrapper deverão agir como flexbox. A propriedade align-items centraliza os elementos flex na vertical.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}