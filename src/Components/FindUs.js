import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {  } from "@fortawesome/free-solid-svg-icons"


import React from "react"
import "./FindUs.css"

const location = "https://img.icons8.com/material/24/ffffff/marker--v1.png";

const mail = "https://img.icons8.com/material/24/ffffff/gmail--v1.png";

const fone = "https://img.icons8.com/material/24/ffffff/ringer-volume.png"; 

export default function FindUs(){
    return(
        <React.Fragment>
            <div className="conteinerFindUs">
                <div className="lateralEsq">
                    
                </div>
                <div className="lateralDir">
                    <h1>Contact Us</h1>

                    <img src={location}/>
                    <p>Jin Cempaka Wangi No 22, Cakung - Jakarta, ID</p>
                    <img src={mail}/>
                    <p>support@yourdomain.com</p>
                    <img src={fone}/>
                    <p>+1 (800) 123 456 789</p>
                </div>
            </div>
        </React.Fragment>
    )
}