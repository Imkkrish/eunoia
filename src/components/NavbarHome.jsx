import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    name: "Products & Services",
    path: "#products-and-services",
    subMenu: [
      { name: "Aquascanner USV", path: "/brochure/usv" },
      { name: "Aqua Skimmer (ASV)", path: "/brochure/asv" },
    ],
  },
  { name: "About Us", path: "/about" },
  { name: "News & Events", path: "/news-events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Careers", path: "/careers" },
  { name: "Contact Us", path: "/contact-us" },
];

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
        setMobileMenuOpen(false);
      }

      if (location.pathname === "/") {
        let current = "";
        navItems.forEach(({ name }) => {
          if (name === "About Us" || name === "News & Events") return;
          const id = name.toLowerCase().replace(/\s+/g, "-");
          const section = document.getElementById(id);
          if (section) {
            const top = section.offsetTop - 120;
            const bottom = top + section.offsetHeight;
            if (window.scrollY >= top && window.scrollY < bottom) {
              current = id;
            }
          }
        });
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md transition-transform duration-500 px-6 py-4 text-gray-700
        ${
          showNav
            ? "bg-white/50 backdrop-saturate-150 shadow-lg translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-1">
            <img src="/logo.png" alt="Eunoia Logo" className="w-30 h-auto" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-8 text-sm font-medium select-none relative">
            {navItems.map(({ name, path, subMenu }) => {
              const id = name.toLowerCase().replace(/\s+/g, "-");
              const isActive = activeSection === id;
              const isAbout = name === "About Us";
              const isNews = name === "News & Events";

              return (
                <li key={name} className="relative group">
                  <div className="flex items-center gap-1">
                    {isAbout ? (
                      <Link
                        to="/about"
                        className={`transition-colors duration-300 ${
                          location.pathname === "/about"
                            ? "text-blue-700"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {name}
                      </Link>
                    ) : isNews ? (
                      <Link
                        to="/news-events"
                        className={`transition-colors duration-300 ${
                          location.pathname === "/news-events"
                            ? "text-blue-700"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {name}
                      </Link>
                    ) : subMenu ? (
                      <>
                        <a
                          href={path}
                          className={`transition-colors duration-300 ${
                            isActive
                              ? "text-blue-700"
                              : "text-gray-700 hover:text-blue-600"
                          }`}
                        >
                          {name}
                        </a>
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      </>
                    ) : (
                      <a
                        href={path}
                        className={`transition-colors duration-300 ${
                          isActive
                            ? "text-blue-700"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {name}
                      </a>
                    )}
                  </div>

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-blue-700 transition-all duration-300 ${
                      isActive || location.pathname === path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />

                  {/* Dropdown */}
                  {subMenu && (
                    <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {subMenu.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <div className="md:hidden relative z-60">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 animate-bounce" />
              ) : (
                <Menu className="w-6 h-6 animate-pulse" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-4 right-4 z-60 text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col p-6 space-y-4 z-10 relative mt-10">
          {navItems.map(({ name, path, subMenu }) => {
            const isAbout = name === "About Us";
            const isNews = name === "News & Events";

            return (
              <div key={name}>
                <div className="flex justify-between items-center">
                  {isAbout || isNews ? (
                    <Link
                      to={isAbout ? "/about" : "/news-events"}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
                    >
                      {name}
                    </Link>
                  ) : (
                    <a
                      href={path}
                      onClick={() => {
                        if (!subMenu) setMobileMenuOpen(false);
                      }}
                      className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
                    >
                      {name}
                    </a>
                  )}

                  {subMenu && (
                    <button
                      onClick={() =>
                        setOpenDropdown((prev) => (prev === name ? null : name))
                      }
                    >
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    </button>
                  )}
                </div>

                {subMenu && openDropdown === name && (
                  <div className="ml-4 mt-2 space-y-2">
                    {subMenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
