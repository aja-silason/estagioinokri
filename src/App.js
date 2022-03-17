import { BrowserRouter, BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import FindUs from "./Components/FindUs";
import Parceiros from "./Components/Parceiros";
import Cards from "./Components/Cards";
import History from "./Components/History";
import AboutUs from "./Components/AboutUs";
import AboutHome from "./Components/AboutHome";
import Rotas from "./Routes/Rotes";

/* Pages */
import PageAboutUs from "./Pages/PageAboutUs";


function App() {
  return (
    <React.Fragment>
      
      <BrowserRouter>
            <Routes>
                <Route exact path="/pageaboutus" element={<PageAboutUs/>} />
            </Routes>
      </BrowserRouter>

      <NavBar />
        <AboutHome />
        <AboutUs />
        <History />
        <Cards />
        <Parceiros />
        <FindUs />
      <Footer />
    </React.Fragment>
  );
}

export default App;
