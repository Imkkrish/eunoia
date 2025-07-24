import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Aquascaner from "./pages/brochure/Aquascaner";
import AboutUs from "./pages/AboutUs";
import NewsEvents from "./pages/NewsEvents";
import Gallery from "./pages/Gallery";
import Career from "./pages/Careers";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <div className="font-sans antialiased">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brochure/usv" element={<Aquascaner />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
