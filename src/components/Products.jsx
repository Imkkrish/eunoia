import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const products = [
  {
    name: "Aqua Skimmer (ASV)",
    tagline: "Your Solution to Cleaner Waters",
    description: `Our cutting-edge maritime robotics technology autonomously removes surface trash, revolutionizing water cleaning efforts and safeguarding aquatic ecosystems. Equipped with sensors, it also monitors water quality in real time.`,
    specs: {
      Dimensions: "1750 x 1425 x 1200",
      Capacity: "75",
      Range: "5",
      Runtime: "6",
    },
    units: {
      Dimensions: "MM",
      Capacity: "Kg",
      Range: "KM",
      Runtime: "– 8 hrs",
    },
    image: "/aqua-skimmer.png",
    brochure:
      "/Aquaskimmer-Brochure.pdf",
  },
  {
    name: "Aquascaner USV",
    tagline: "Professional Hydrographic Survey Vessel",
    description: `Aquascaner USV is a state-of-the-art unmanned surface vessel designed for precision hydrographic surveying, environmental monitoring, and offshore exploration. With a catamaran twin hull, 4G control, and multi-sensor integration, it provides reliable, high-quality data even in harsh marine environments.`,
    specs: {
      Dimensions: "1400 × 975 × 1070",
      Payload: "20",
      Range: "3",
      Runtime: "6",
    },
    units: {
      Dimensions: "mm",
      Payload: "kg",
      Range: "km",
      Runtime: "hrs",
    },
    image: "/usv.png",
    brochure: "/brochure/usv",
  },
];

function useInViewAnimation(ref) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return visible;
}

export default function Products() {
  return (
    <section
        id="products"
        className="py-24 px-8 bg-gradient-to-b from-[#5e90bf] via-[#4b76a1] to-[#385c7f] text-white"
        >

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Our Products
        </h2>

        <div className="flex flex-col gap-24">
          {products.map((product, i) => {
            const containerRef = useRef(null);
            const visible = useInViewAnimation(containerRef);

            return (
              <div
                key={i}
                ref={containerRef}
                className={`flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 transition-all duration-1000 ease-out ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                } ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {/* Text Section */}
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-blue-700 font-medium mb-4">{product.tagline}</p>
                  <p className="text-gray-200 mb-6">{product.description}</p>

                  <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-400">
                    {Object.entries(product.specs).map(([label, value], j) => {
                      const isAnimated = !["Dimensions"].includes(label);
                      return (
                        <li
                          key={j}
                          className={`bg-gray-100 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-all duration-500 ${
                            visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
                          }`}
                          style={{ transitionDelay: `${j * 100}ms` }}
                        >
                          <div className="text-xs font-semibold text-gray-800">{label}</div>
                          <div className="text-lg font-bold text-blue-900">
                            {isAnimated ? (
                              visible ? (
                                <CountUp
                                  end={parseFloat(value)}
                                  duration={1.8}
                                  delay={j * 0.2}
                                  suffix={` ${product.units?.[label] || ""}`}
                                />
                              ) : (
                                `0 ${product.units?.[label] || ""}`
                              )
                            ) : (
                              `${value} ${product.units?.[label] || ""}`
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  {product.brochure && (
                    <a
                      href={product.brochure}
                      rel="noopener noreferrer"
                      className="inline-block mt-6 px-4 py-2 text-sm font-medium bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                    >
                      📄 Download Brochure
                    </a>
                  )}
                </div>

                {/* Image Section */}
                <div
                  className={`md:w-1/2  transition-all duration-1000 ease-out ${
                    visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full p-2 h-auto aspect-video object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
