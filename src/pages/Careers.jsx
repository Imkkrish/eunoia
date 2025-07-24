import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterHome";
export default function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    salary: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thanks for your interest! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      designation: "",
      salary: "",
      message: "",
    });
  };
    return (
      <div >
        <Navbar />
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white flex flex-col md:flex-row items-center justify-center px-6 md:px-24 py-20 gap-12">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
            Join <span className="text-blue-700">Eunoia Innovations</span>
          </h1>
          <p className="text-lg text-gray-700">
          We are not just shaping the future; we are redefining it through purpose-driven innovation and an unwavering commitment to sustainability. As leaders in cutting-edge marine technology, we harness the power of innovation to address some of the world’s most urgent environmental challenges.
            Join us on our mission to revolutionize marine exploration and conservation efforts worldwide. Whether you’re a seasoned professional or a passionate fresh graduate eager to make a difference, we offer exciting career opportunities designed to empower you to unleash your potential and drive meaningful change.
          </p>
          <p className="text-gray-600 italic">
            Fill out the form to apply for exciting career opportunities with us.
          </p>
        </div>
  
        {/* Right form */}
        <form
          action="https://formsubmit.co/3a879d7e98046a249daef329c5ebc5d8"
          method="POST"
          className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-lg"
        >
          {/* Optional hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
  
          <h2 className="text-2xl font-semibold mb-6 text-blue-900">
            Apply Now
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Name</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Your full name"
                className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
  
            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
  
            {/* Phone */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Phone +91</label>
              <input
                name="phone"
                type="tel"
                required
                placeholder="9876543210"
                className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
  
            {/* Designation */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">
                Interested Designation
              </label>
              <input
                name="designation"
                type="text"
                required
                placeholder="e.g., Marine Engineer"
                className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
  
            {/* Salary */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">
                Expected Salary (₹)
              </label>
              <input
                name="salary"
                type="text"
                required
                placeholder="e.g., 6 LPA"
                className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
  
            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us about yourself..."
                className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              />
            </div>
          </div>
  
          <button
            type="submit"
            className="mt-8 w-full bg-blue-700 text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition"
          >
            Submit Application
          </button>
        </form>
        </div>
        <Footer />
      </div>
    );
  }
  