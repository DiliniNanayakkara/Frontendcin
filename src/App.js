import "./App.css";
import { React, useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home";
import Aboutfoundation from "./components/Pages/Aboutfoundation";
import Ourservices from "./components/Pages/Ourservices";
import Events from "./components/Pages/Events";
import Gallery from "./components/Pages/Gallery";
import Contact from "./components/Pages/Contact";
import Boardofdirections from "./components/Pages/Boardofdirections";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import ErrorPage from "./components/Pages/Errorpage";
import Artistprofile from "./components/Pages/Artistprofile";
import Donate from "./components/Pages/Donate";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);
  return (
    <div>
      <Navbar />

      {loading ? (
        <ScaleLoader
          className="loader d-flex justify-content-center mt-5"
          color={"#F5A623"}
          loading={loading}
          size={80}
        />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutfoundation" element={<Aboutfoundation />} />
            <Route path="/ourservices" element={<Ourservices />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/boardofdirections" element={<Boardofdirections />} />
            <Route path="/artistprofile" element={<Artistprofile />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
