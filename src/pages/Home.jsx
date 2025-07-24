import { useState } from "react";
import Splash from "../components/Splash.jsx";
import Navbar from "../components/NavbarHome.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Products from "../components/Products.jsx";
import Edge from "../components/Edge.jsx";
import Footer from "../components/FooterHome.jsx";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading ? (
        <Splash onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Products />
          <Edge />
          <Footer />
        </>
      )}
    </div>
  );
}
