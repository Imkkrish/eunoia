import { motion } from "framer-motion";
import Lottie from "lottie-react";
import boatAnimation from "../../public/animations/boat-build.json";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-6 text-center overflow-hidden">

      {/* Top half background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#f5fbfe] z-0" />

      {/* Bottom half background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#8ebbe1] z-0" />

      {/* Boat Animation positioned in top half */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Lottie
          animationData={boatAnimation}
          loop
          className="w-full h-full"
          style={{
            transform: "scale(2)", // or adjust scale to 2, 3 etc. as needed
            transformOrigin: "center",
          }}
        />
      </div>


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl z-10"
      >
        <div className="-translate-y-10">
        <h1 className="text-4xl md:text-6xl font-bold ">
          Clean Water, <br /> Clear Future!
        </h1>
        <p className="mt-6 text-lg md:text-xl">
          Harnessing the boundless possibilities of the ocean with cutting-edge
          marine robotics.
        </p>
        <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => {
            document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full text-lg "
        >
          Explore Products
        </button>
        </div>
        </div>
        
      </motion.div>
    </section>
  );
}