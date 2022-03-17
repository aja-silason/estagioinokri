import React from "react"
import "./Footer.css";

export default function Footer(){
    return (
        <React.Fragment>
        <div className="corfundo">
            <div className="footer">

                    <div className="footerConteiner">
                    
                    <div className="carbon">
                        <h1>Carbon</h1>
                        <p>wrapper definimos a propriedade display: flex; que avisa o navegador que os elementos filhos diretos do . wrapper deverão agir como flexbox. A propriedade align-items centraliza os elementos flex na vertical.</p>
                    </div>

                        <div className="lateral">
                        <div>
                            <h2>Company</h2>
                            <li>About Us</li>
                            <li>History</li>
                            <li>Team</li>
                            <li>Career</li>
                            <li>News & Article</li>
                        </div>

                            <div>
                            <h2>Contact</h2>
                            <li>F.A.Q.</li>
                            <li>Terms & Services</li>
                            <li>Privacy Pollicy</li>
                            <li>Cookie Pollicy</li>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="copyright">&copy; 2022 Carbon</p>
                </div>
            </div>
        </div>

        </React.Fragment>
    )
}