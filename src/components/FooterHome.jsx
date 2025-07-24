import {
    Mail,
    Phone,
    MapPin,
    Twitter,
    Instagram,
    Youtube,
  } from "lucide-react";
  
  export default function Footer() {
    return (
      <footer
        id="contact"
        className="py-7 px-6 bg-gradient-to-b from-[#182a40] via-[#0c141f] to-black text-white"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left: Social Media */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex gap-6 mt-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-blue-400 hover:text-blue-500 transition transform hover:scale-110"
              >
                <Twitter size={30} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-pink-400 hover:text-pink-500 transition transform hover:scale-110"
              >
                <Instagram size={30} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-red-500 hover:text-red-600 transition transform hover:scale-110"
              >
                <Youtube size={30} />
              </a>
            </div>
          </div>
  
          {/* Right: Contact Info */}
          <div className="space-y-5 text-gray-300 text-base leading-relaxed">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 mt-1 text-blue-400" />
              <span>info@eunoiainnovations.com</span>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 mt-1 text-green-400" />
              <span>+91 9573730767</span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1 text-red-400" />
              <address className="not-italic">
                1-5-1042/1, First Floor, PSV PRIDE, HMT Colony Rd, Old Alwal,
                <br />
                Alwal, Secunderabad, Telangana 500010
              </address>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Eunoia Innovations. All rights reserved.
          <br />
          <span className="text-xs text-gray-500">
            Designed & Developed by <a href="https://imkkrish.web.app/" className="text-blue-400 hover:underline">Krish Kumar</a>
          </span>
        </div>
      </footer>
    );
  }
  