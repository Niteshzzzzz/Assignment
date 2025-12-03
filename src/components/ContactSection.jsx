import React, { useState } from "react";

function ContactSection({ dark }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section id="contact" className={`w-full py-20 px-6 flex justify-center ${dark ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className={`max-w-3xl w-full p-10 rounded-3xl shadow-xl backdrop-blur-md bg-opacity-60 transition-all duration-300 ${dark ? 'bg-gray-900/60' : 'bg-white/70'}`}>
        <h2 className="text-4xl font-bold text-center mb-6 tracking-wide">Get in Touch</h2>
        <p className="text-center text-lg opacity-80 mb-10">We would love to hear from you!</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-5 py-3 rounded-xl border shadow-sm transition-all duration-200 ${dark ? 'bg-gray-800 border-gray-700 focus:ring-blue-500' : 'bg-white border-gray-300 focus:ring-blue-600'}`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-5 py-3 rounded-xl border shadow-sm transition-all duration-200 ${dark ? 'bg-gray-800 border-gray-700 focus:ring-blue-500' : 'bg-white border-gray-300 focus:ring-blue-600'}`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-5 py-3 rounded-xl border resize-none shadow-sm transition-all duration-200 ${dark ? 'bg-gray-800 border-gray-700 focus:ring-blue-500' : 'bg-white border-gray-300 focus:ring-blue-600'}`}
              placeholder="Write your message..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-[1.03] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;