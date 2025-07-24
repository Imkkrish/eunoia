import React from "react";
import { motion } from "framer-motion";
import html2pdf from "html2pdf.js";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
});

const fadeInZoom = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });
const applications = [
  {
    icon: "🌊",
    title: "Hydrographic Surveying",
    desc:
      "Comprehensive bathymetric mapping and underwater terrain analysis for port development, dredging operations, and marine construction projects.",
  },
  {
    icon: "🏭",
    title: "Environmental Monitoring",
    desc:
      "Water quality assessment, pollution monitoring, and environmental impact studies for industrial facilities and coastal areas.",
  },
  {
    icon: "🚢",
    title: "Port & Harbor Management",
    desc:
      "Regular depth surveys, navigation channel monitoring, and infrastructure inspection for safe vessel operations.",
  },
  {
    icon: "🔬",
    title: "Marine Research",
    desc:
      "Scientific data collection, underwater ecosystem studies, and marine biology research applications.",
  },
  {
    icon: "🏗️",
    title: "Offshore Construction",
    desc:
      "Site surveys, foundation inspections, and construction monitoring for offshore wind farms and marine infrastructure.",
  },
  {
    icon: "🛡️",
    title: "Search & Rescue",
    desc:
      "Underwater search operations, emergency response, and marine safety applications in challenging conditions.",
  },
];


export default function AquaScanerUSV() {
    function printBrochure() {
        window.print();
      }
      
      
  return (
    <main
  id="brochure-content"
  style={{
    backgroundColor: "#dbeafe", // Tailwind's blue-100 approximate but in hex
    color: "#1e40af" // Tailwind's blue-900 approx
  }}
  className="min-h-screen py-16 px-6 font-sans"
>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Video Placeholder Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInZoom(0.6)}
          className="max-w-5xl mx-auto"
        >
          
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-blue-300 bg-blue-50 flex items-center justify-center text-blue-300 select-none">
            {/* Placeholder Box */}
            {/* <span className="text-6xl font-bold opacity-40">🎥 Video Here</span> */}
            <img
                    src="/usv.png"
                    alt=""
                    className="w-full p-2 h-auto aspect-video object-cover rounded-xl shadow-lg"
                  />
          </div>
        </motion.section>

        {/* Header */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.9)}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg tracking-tight">
            AQUASCANER USV
          </h1>
          <p className="text-xl font-medium text-blue-700">
            Professional Unmanned Surface Vessel for Hydrographic Surveying
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard
              title="Twin Hull Design"
              description="Superior stability and performance in various water conditions"
              icon="🚤"
            />
            <FeatureCard
              title="Advanced Navigation"
              description="GNSS precision with manual and auto-pilot capabilities"
              icon="🛰️"
            />
            <FeatureCard
              title="Extended Range"
              description="3KM L.O.S control with unlimited 4G connectivity"
              icon="📡"
            />
          </div>
        </motion.header>

        {/* Key Performance Specs */}
        <section className="bg-blue-900 text-white rounded-3xl p-14 max-w-5xl mx-auto shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-14 tracking-wide ">
            Key Performance Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 text-lg gap-14">
            <Counter label="Max Speed" value="5" unit="m/s" delay={0.1} />
            <Counter label="Battery Endurance" value="6" unit="Hours" delay={0.3} />
            <Counter label="Payload Capacity" value="20" unit="kg" delay={0.5} />
            <Counter label="Control Range" value="3" unit="km L.O.S" delay={0.7} />
          </div>
        </section>

        {/* Technical Specs */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.2)}
          className="max-w-7xl mx-auto space-y-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-10 border-b-4 border-blue-500 inline-block pb-2 sticky top-0 w-full bg-[#dbeafe] z-20">
            Technical Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-2">
            <SpecCard
              title="Physical Dimensions"
              specs={[
                ["Length × Width × Height", "1400 × 975 × 1070 mm"],
                ["Hull Design", "Catamaran Twin Hull"],
                ["Material", "Fiber Reinforced Plastics"],
                ["Draught (Unladen)", "320 mm"],
                ["Weight", "45 kg"],
                ["Maximum Payload", "20 kg"],
              ]}
            />
            <SpecCard
              title="Propulsion System"
              specs={[
                ["Propulsion Type", "Underwater Thrusters"],
                ["Direction Control", "Twin Screw Propulsion"],
                ["Maximum Motor Power", "800W (each)"],
                ["Maximum RPM", "8,500 rpm"],
                ["Max Thrust", "7 KgF × 2 Thrusters"],
                ["Maximum Speed", "5 m/s"],
              ]}
            />
            <SpecCard
              title="Power & Battery"
              specs={[
                ["Battery Type", "Li-NMC (Rechargeable)"],
                ["Battery Capacity", "22.2V 100Ah × 2"],
                ["Charger", "220V Fast Charger"],
                ["Endurance", "6 Hours @ 2 m/s"],
                ["Motor Installation", "Quick Release"],
              ]}
            />
            <SpecCard
              title="Control & Communication"
              specs={[
                ["Display Screen", "1100 nit Luminance"],
                ["Internal Storage", "4GB RAM, 64GB Storage"],
                ["Communication", "2.4 GHz / 4G"],
                ["Control Range", "3KM L.O.S / 4G Unlimited"],
                ["Navigation Mode", "Manual or Auto-Pilot"],
              ]}
            />
            <SpecCard
              title="Navigation & Safety"
              specs={[
                ["GNSS System", "High Precision"],
                ["Waterproof Rating", "IP67"],
                ["Navigational Lights", "Red & Green"],
                ["Signal Light", "White/Amber"],
                ["Data Storage", "Local & Remote"],
              ]}
            />
          </div>
        </motion.section>

        {/* ===== Advanced Features ===== */}
        <section className="py-12 md:px-12" id="features">
        <h2 className="text-4xl font-bold text-blue-900 mb-10 border-b-4 border-blue-500 inline-block pb-2 sticky top-0 w-full bg-[#dbeafe] z-20">
            Advanced Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
            {[
            {
                emoji: "🚢",
                title: "Catamaran Design",
                desc: "Twin hull configuration offers superior stability and significantly reduces wave-induced motion, allowing accurate data collection even in rough waters."
            },
            {
                emoji: "🔋",
                title: "Extended Battery Life",
                desc: "Equipped with dual Lithium NMC batteries supporting up to 6 hours of operation. Modular quick-release design simplifies motor maintenance."
            },
            {
                emoji: "📡",
                title: "Dual Communication",
                desc: "Combines standard 4G and backup 2.4GHz RF control to ensure seamless command and data streaming across long-range operations."
            },
            {
                emoji: "🎯",
                title: "Precision Navigation",
                desc: "Utilizes high-accuracy GNSS with auto-pilot and waypoint tracking, enabling hands-free navigation for repetitive or complex survey paths."
            },
            {
                emoji: "💾",
                title: "Multi-Channel Storage",
                desc: "Supports both onboard and remote data logging with multi-channel redundancy for improved reliability and post-processing flexibility."
            },
            {
                emoji: "🌊",
                title: "Marine-Grade Construction",
                desc: "Built with IP67-rated, fiber-reinforced plastic materials to withstand extreme marine environments without compromising performance."
            }
            ].map((feature, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow transition-shadow duration-300"
            >
                <div className="text-5xl flex justify-center  mb-3">{feature.emoji}</div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
            </motion.div>
            ))}
        </div>
        </section>


        {/* Applications */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.8)}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-10 border-b-4 border-blue-500 inline-block pb-2 sticky top-0 w-full bg-[#dbeafe] z-20">
            Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto p-2">
            {applications.map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.07, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 + 0.8, duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-md cursor-pointer flex flex-col"
              >
                <h3 className="text-4xl mb-5">{icon}</h3>
                <h4 className="text-xl font-semibold mb-3 text-blue-900">{title}</h4>
                <p className="text-gray-700 flex-grow leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Download & Share Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.9)}
          className="text-center max-w-4xl mx-auto space-y-8"
          id="download-share"
        >
          <h2 className="text-3xl font-bold text-blue-900">Download & Share</h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Download Button */}
            <button
              onClick={printBrochure}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
            >
              📄 Download Brochure
            </button>

            {/* Share Button (copy to clipboard) */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Page link copied to clipboard!");
              }}
              className="bg-gray-100 hover:bg-gray-200 text-blue-900 px-6 py-3 rounded-full font-semibold shadow transition"
            >
              🔗 Share This Page
            </button>
          </div>
        </motion.section>


        {/* Contact */}
        <motion.section
          id="get-in-touch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(1)}
          className="bg-blue-900 text-white rounded-3xl p-16 text-center max-w-4xl mx-auto shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-6 tracking-wide">Get in Touch</h2>
          <p className="mb-12 text-lg max-w-xl mx-auto font-medium">
            Ready to elevate your surveying with AQUASCANER USV? Reach out to our experts today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 max-w-3xl mx-auto">
            {[
              {
                icon: "📧",
                title: "Sales",
                desc: "Pricing, custom orders, and consultations.",
              },
              {
                icon: "🛠️",
                title: "Support",
                desc: "Installation and operational help.",
              },
              {
                icon: "🎓",
                title: "Training",
                desc: "Operator & technician courses.",
              },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                
                className="bg-blue-700/90 rounded-2xl p-6 cursor-pointer backdrop-blur-md hover:bg-blue-700/100 transition-colors text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 + 1, duration: 0.5 }}
              >
                <h3 className="text-4xl mb-4">{icon}</h3>
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-blue-200 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#"
            className="inline-block bg-gradient-to-r from-pink-600 to-red-700 rounded-full px-14 py-4 font-semibold shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Request a Quote
          </motion.a>
        </motion.section>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, boxShadow: "0 12px 25px rgba(0,0,0,0.15)" }}
      className="bg-white rounded-2xl shadow-md p-7 cursor-pointer flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-5xl mb-5">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}

function SpecCard({ title, specs }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
      className="bg-white rounded-3xl p-8 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-blue-900">{title}</h3>
      {specs.map(([label, value], idx) => (
        <div
          key={idx}
          className="flex justify-between border-b border-blue-200 py-3 last:border-b-0"
        >
          <span className="font-medium text-blue-700">{label}</span>
          <span className="font-semibold text-blue-900">{value}</span>
        </div>
      ))}
    </motion.div>
  );
}

function Counter({ label, value, unit = "", delay = 0 }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = Number(value);
    if (start === end) return;
    let duration = 1500;
    let stepTime = Math.abs(Math.floor(duration / end));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-3xl shadow-lg py-9 px-8 text-center"
    >
      <span className="uppercase tracking-wider font-semibold text-blue-700 text-sm">
        {label}
      </span>
      <div className="text-5xl font-extrabold text-blue-900 mt-2">
        {count} {unit}
      </div>
    </motion.div>
  );
}
