import React from "react";
import "./NavBar.css";

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
                        <li>About Us</li>
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