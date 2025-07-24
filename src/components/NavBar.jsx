import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "Products & Services",
    path: "#",
    subMenu: [
      { name: "Aquascanner USV", path: "/brochure/usv" },
      { name: "Aqua Skimmer (ASV)", path: "/brochure/asv" },
    ],
  },
  { name: "About Us", path: "/about" },
  { name: "News & Events", path: "/news-events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Careers", path: "/careers" },
  { name: "Contact Us", path: "/contact" },
];

export default function SimpleNavbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
  }, [isMobileOpen]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 text-gray-700">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-28 h-auto" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium select-none relative">
            {navLinks.map(({ name, path, subMenu }) => (
              <li key={name} className="relative group">
                <div className="flex items-center gap-1">
                  <Link
                    to={path}
                    className={`transition-colors duration-300 ${
                      location.pathname === path
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {name}
                  </Link>
                  {subMenu && <ChevronDown className="w-4 h-4 text-gray-600" />}
                </div>

                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-blue-700 transition-all duration-300 ${
                    location.pathname === path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />

                {/* Dropdown Menu */}
                {subMenu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {subMenu.map(({ name, path }) => (
                      <li key={name}>
                        <Link
                          to={path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMobileOpen(false)}
          className="absolute top-4 right-4 text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col p-6 space-y-4 mt-10">
          {navLinks.map(({ name, path, subMenu }) => (
            <div key={name}>
              <div className="flex justify-between items-center">
                <Link
                  to={path}
                  onClick={() => {
                    if (!subMenu) setIsMobileOpen(false);
                  }}
                  className={`text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 ${
                    location.pathname === path ? "text-blue-700" : ""
                  }`}
                >
                  {name}
                </Link>
                {subMenu && (
                  <button
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === name ? null : name))
                    }
                    className="text-gray-600"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )}
              </div>

              {subMenu && openDropdown === name && (
                <div className="ml-4 mt-2 space-y-2">
                  {subMenu.map(({ name, path }) => (
                    <Link
                      key={name}
                      to={path}
                      onClick={() => setIsMobileOpen(false)}
                      className="block text-sm text-gray-600 hover:text-blue-600"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}