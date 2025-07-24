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
      className="py-7 px-8 bg-gradient-to-b from-[#182a40] via-[#0c141f] to-black text-white"
    >
      <div className="max-w-7xl mx-auto  flex flex-col-reverse md:grid md:grid-cols-2 gap-16">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl font-extrabold mb-2">You can find us at</h2>
          <div className="space-y-6 text-gray-300 text-base leading-relaxed">
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

          {/* Social Links */}
          <div className="flex gap-8 mt-8">
            <a
              href="#"
              aria-label="Twitter"
              className="text-blue-400 hover:text-blue-500 transition transform hover:scale-110"
            >
              <Twitter size={28} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-pink-400 hover:text-pink-500 transition transform hover:scale-110"
            >
              <Instagram size={28} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-red-500 hover:text-red-600 transition transform hover:scale-110"
            >
              <Youtube size={28} />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h2 className="text-3xl font-extrabold mb-6">Let's get in touch</h2>
          <form
            action="https://formsubmit.co/3a879d7e98046a249daef329c5ebc5d8"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:5173/"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name *"
                className="bg-gray-900 text-white placeholder-gray-400 px-5 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
              />
              <input
                type="text"
                name="phone"
                required
                placeholder="Phone *"
                className="bg-gray-900 text-white placeholder-gray-400 px-5 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
              />
            </div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address *"
              className="w-full bg-gray-900 text-white placeholder-gray-400 px-5 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message *"
              rows="5"
              className="w-full bg-gray-900 text-white placeholder-gray-400 px-5 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition resize-none"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl text-white font-semibold py-3 px-8 rounded-full transition transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
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
