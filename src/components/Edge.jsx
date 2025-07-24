import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const edgeItems = [
  {
    title: "Innovative Technology",
    desc: "We leverage state-of-the-art robotics and AI to revolutionize marine exploration and sustainability.",
  },
  {
    title: "Sustainability Focus",
    desc: "Committed to protecting aquatic ecosystems by designing eco-friendly, autonomous marine solutions.",
  },
  {
    title: "Expert Team",
    desc: "Our multidisciplinary team combines expertise in marine biology, robotics, and data science.",
  },
];

const testimonials = [
  {
    name: "Dr. Riya Sharma",
    title: "AI Researcher, NIT Delhi",
    quote:
      "This solution stands out for its commitment to fairness and explainability. Truly responsible AI in action.",
  },
  {
    name: "Arjun Verma",
    title: "Founder, AquaTech India",
    quote:
      "Their USV integration saved us hours in manual data collection. Efficient, ethical, and innovative!",
  },
];

const partners = [
  { name: "Wash Innovation Hub", logo: "/partners/WIH.png" },
  { name: "Atal Incubation Center", logo: "/partners/AIC.png" },
  { name: "FMA", logo: "/partners/FMA.png" },
  { name: "AMRUT", logo: "/partners/AMRUT.png" },
];

export default function Edge() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="impact"
      className="py-24 px-6 sm:px-8 bg-gradient-to-b from-[#385c7f] via-[#27425f] to-[#182a40] text-white"
    >
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Why Choose Us */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 tracking-tight drop-shadow-lg">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {edgeItems.map((item, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center h-[320px] max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 tracking-tight drop-shadow-md">
            What People Say
          </h2>
          <div className="relative h-[260px] max-w-2xl mx-auto overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={index}
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -60, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="p-6 sm:p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 text-blue-100 shadow-lg absolute inset-0 flex flex-col justify-between"
              >
                <p className="italic text-lg sm:text-xl leading-relaxed mb-4">
                  “{testimonials[index].quote}”
                </p>
                <footer className="text-right font-medium text-blue-300">
                  {testimonials[index].name} —{" "}
                  <span className="text-sm font-normal">{testimonials[index].title}</span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>

        {/* Partners */}
        <div className="text-center max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold mb-10 tracking-wide drop-shadow-sm">
    Our Partnerships & Associations
  </h2>
  <div className="flex flex-wrap justify-center gap-6 items-center">
    {partners.map((partner, i) => (
      <div
        key={i}
        className=" p-3 sm:p-4 "
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-20 sm:h-40 object-contain mx-auto"
          title={partner.name}
        />
      </div>
    ))}
  </div>
</div>




        {/* CTA */}
        <div className="text-center pt-10">
          <p className="text-blue-200 mb-5 text-lg">
            Want to meet the minds behind this?
          </p>
          <a
            href="/about"
            className="inline-block px-8 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-md hover:bg-blue-100 transition"
          >
            Meet the Team
          </a>
        </div>
      </div>
    </section>
  );
}
