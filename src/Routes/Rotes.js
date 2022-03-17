import { BrowserRouter, BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import PageAboutUs from "../Pages/PageAboutUs";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/pageaboutus" element={<PageAboutUs/>} />
            </Routes>
        </BrowserRouter>
    )
}