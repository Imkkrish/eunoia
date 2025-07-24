import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
// --- Helper: SVG Icons for better UI ---
const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


// --- Enhanced Card Data ---
// Added imageUrl and a category for more visual flair.
const cards = [
  {
    id: 1,
    title: "Groundbreaking AI Research Published",
    category: "TECHNOLOGY",
    snippet: "Our latest paper on generative models has been published in a top-tier journal.",
    content: "Full detailed content of News A. This could be a long paragraph explaining the full news or article. Our research team has made a significant breakthrough in generative AI, developing a model that can produce highly realistic and coherent text and images with unprecedented efficiency. This work is expected to have wide-ranging applications across various industries.",
    imageUrl: "https://placehold.co/600x400/3B82F6/FFFFFF?text=AI+Research",
  },
  {
    id: 2,
    title: "Eunoia Innovations Goes Carbon Neutral",
    category: "CORPORATE",
    snippet: "We're proud to announce our commitment to a sustainable future.",
    content: "Full detailed content of News B goes here with deeper explanation. As part of our ongoing commitment to environmental responsibility, Eunoia Innovations has successfully offset its entire carbon footprint for the past fiscal year. We have invested in renewable energy projects and implemented new, sustainable practices across all our operations.",
    imageUrl: "https://placehold.co/600x400/10B981/FFFFFF?text=Sustainability",
  },
  {
    id: 3,
    title: "Annual Tech Summit 2025 Announced",
    category: "EVENT",
    snippet: "Join us for our biggest event of the year, featuring industry leaders and experts.",
    content: "Full detailed content of News C about the event and its relevance. Mark your calendars! The Eunoia Tech Summit 2025 will take place from October 15-17. This year's theme is 'Innovating for Tomorrow,' and we have an exciting lineup of speakers, workshops, and networking opportunities planned. Registration opens next month.",
    imageUrl: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=Tech+Summit",
  },
  {
    id: 4,
    title: "New Partnership with QuantumLeap Inc.",
    category: "BUSINESS",
    snippet: "We're excited to collaborate with a leader in quantum computing.",
    content: "Full detailed content of News D involving schedule and participants. Eunoia Innovations is thrilled to announce a strategic partnership with QuantumLeap Inc. This collaboration will leverage our AI expertise with their cutting-edge quantum computing hardware to tackle some of the world's most complex problems.",
    imageUrl: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Partnership",
  },
  {
    id: 5,
    title: "Version 3.0 of 'Synapse' Platform Launched",
    category: "PRODUCT",
    snippet: "Our flagship AI development platform gets a major upgrade.",
    content: "Full detailed content of News E. More details on updates and launch. We have officially launched Synapse 3.0, a complete overhaul of our AI development platform. The new version features a redesigned user interface, powerful new tools for model training and deployment, and a 40% performance improvement over the previous version.",
    imageUrl: "https://placehold.co/600x400/EC4899/FFFFFF?text=Synapse+3.0",
  },
];

// --- Main App Component ---
export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Function to go to the next card
  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  // Function to go to the previous card
  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Set up the automatic rotation interval
  useEffect(() => {
    if (!isPaused && !selectedCard) {
      intervalRef.current = setInterval(nextCard, 4000); // Slower rotation for better readability
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, selectedCard]);

  // Close popup if clicked outside content
  const onOverlayClick = (e) => {
    if (e.target.id === "popupOverlay") {
      setSelectedCard(null);
    }
  };

  const anglePerCard = 360 / cards.length;
  const rotation = activeIndex * anglePerCard;
  const radius = 400; // This is the 'translateZ' value

  return (
    <>
      <div className="min-h-screen bg-gray-100 font-sans text-gray-800 overflow-x-hidden">
        <div className="absolute top-0 left-0  z-0"></div>
        <div className="relative z-10">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center pt-16 pb-12">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                News & <span className="text-blue-600">Events</span>
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Stay updated with the latest from Eunoia Innovations.
              </p>
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="carousel-scene">
                <div
                  className="carousel-ring"
                  style={{ transform: `rotateY(-${rotation}deg)` }}
                >
                  {cards.map((card, index) => {
                    const rotateY = index * anglePerCard;
                    const isActive = index === activeIndex;
                    return (
                      <div
                        key={card.id}
                        className={`carousel-card ${isActive ? 'is-active' : ''}`}
                        style={{ transform: `rotateY(${rotateY}deg) translateZ(${radius}px)` }}
                      >
                        <div
                          className="h-full w-full rounded-2xl bg-white/40 backdrop-blur-lg ps-2 pe-2 pt-2 pb-2 flex flex-col justify-between cursor-pointer border border-white/50 transition-all duration-300 hover:shadow-blue-200"
                          onClick={() => setSelectedCard(card)}
                        >
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{card.category}</p>
                                <h2 className="text-xl font-bold mt-2 text-gray-900">{card.title}</h2>
                                <p className="text-sm mt-2 text-gray-700">{card.snippet}</p>
                            </div>
                            <span className="mt-4 text-sm font-semibold text-blue-700 hover:text-blue-800 self-start">
                                Read More &rarr;
                            </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Carousel Navigation Buttons */}
              <div className="absolute inset-x-0 -bottom-12 flex justify-center items-center space-x-4">
                  <button onClick={prevCard} className="p-2 rounded-full bg-white/60 backdrop-blur-sm shadow-lg hover:bg-white transition-colors">
                      <ChevronLeftIcon />
                  </button>
                  <div className="flex space-x-2">
                      {cards.map((_, index) => (
                          <button key={index} onClick={() => setActiveIndex(index)} className={`w-2 h-2 rounded-full ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-400'} transition-colors`}></button>
                      ))}
                  </div>
                  <button onClick={nextCard} className="p-2 rounded-full bg-white/60 backdrop-blur-sm shadow-lg hover:bg-white transition-colors">
                      <ChevronRightIcon />
                  </button>
              </div>
            </div>
          </main>

          {/* Enhanced Popup Modal */}
          {selectedCard && (
            <div
              id="popupOverlay"
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
              onClick={onOverlayClick}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-auto border border-gray-200 transform animate-scale-in relative overflow-hidden">
                <img src={selectedCard.imageUrl} alt={selectedCard.title} className="w-full h-64 object-cover" />
                <div className="p-8">
                    <p className="text-sm font-bold uppercase tracking-widest text-blue-600">{selectedCard.category}</p>
                    <h2 className="text-3xl font-bold my-2 text-gray-900">{selectedCard.title}</h2>
                    <p className="text-gray-600 leading-relaxed mt-4">{selectedCard.content}</p>
                </div>
                <button
                  className="absolute top-4 right-4 text-gray-500 bg-white/50 rounded-full p-2 hover:bg-white hover:text-gray-900 transition-all duration-200"
                  onClick={() => setSelectedCard(null)}
                  aria-label="Close popup"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
          )}
          
          {/* Add some vertical space before the footer */}
          <div className="h-24"></div> 
          <Footer />
        </div>
      </div>

    </>
  );
}
