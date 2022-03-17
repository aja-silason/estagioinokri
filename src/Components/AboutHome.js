import React from "react";
import "./AboutHome.css";
const about = "https://img.icons8.com/material/45/ffffff/wrench.png";
export default function AboutHome(){
    return(
        <React.Fragment>
            <div className="bodyAboutHome">
                <div className="conteinerAboutHome">
                    <div className="aboutUss">
                        <h1>About Us</h1>
                    </div>

                    <div className="homeAbout">
                        <p>Home</p>
                        <img src={about} />
                        <p>About Us</p>  
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}