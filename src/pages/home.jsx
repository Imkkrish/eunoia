import { useState } from "react";
import Splash from "../components/Splash.jsx";
import Navbar from "../components/Navbarhome";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Edge from "../components/Edge";
import Footer from "../components/Footer";

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
