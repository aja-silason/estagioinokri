import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Rotes from "../Routes/Rotes";

export default function NavBar(){
    return (
        <React.Fragment>
            <div className="menu">
                <div>
                    <h1>Carbon</h1>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>
                            <Link to="/pageaboutus">About Us</Link>
                        </li>
                        <li>Service</li>
                        <li>Contact Us</li>
                        <li>Page</li>
                    </ul>
                </div>
                <div>
                    <button>Get An Appointment</button>
                </div>
            </div>
        </React.Fragment>
    )
}