import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import SinglePage from "./pages/SinglePage/SinglePage";
import MainHeader from "./components/Header/MainHeader";
import MainFooter from "./components/Footer/MainFooter";
import ScrollToTop from "./components/ScrollToTop";
import AboutHalaAir from "./pages/AboutHalaAir/AboutHalaAir";
import AboutUsTest from "./components/CargoPage/AboutUsTest";
import Destinations from "./pages/Destination/Destinations";
import Cargo from "./pages/Cargo/Cargo";

function App() {
  const [language, setLanguage] = useState("english");
  return (
    <>
      <div className="App">
        <ScrollToTop>
        <MainHeader setLanguage={setLanguage} language={language} />
        <Routes>
          <Route path="/home" element={<Home language={language} />} />
          <Route path="/corporate" element={<Contact language={language} />}  />
          <Route path="/about-hala-air" element={<AboutHalaAir language={language} />}  />
          <Route path="/single" element={<SinglePage language={language} />}  />
          <Route path="/destination" element={<Destinations language={language} />}  />
          <Route path="/cargo" element={<Cargo language={language} />}  />
        </Routes>
        <MainFooter language={language} />
        </ScrollToTop>
      </div>
    </>
  );
}
export default App;
