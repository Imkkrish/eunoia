import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterHome";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (Mocked)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
    <div className="min-h-screen bg-blue-50 py-20 px-2 md:px-16">
        <Navbar />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-800 mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-8">
          Have a question, suggestion, or collaboration idea? We'd love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Your full name"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="your@email.com"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Subject of your message"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      </div>
        <Footer />
    </div>
  );
}
