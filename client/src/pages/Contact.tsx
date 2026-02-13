import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", details: "" });
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <Navigation />

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-6xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
          LET'S TALK CODE.
        </h2>

        <p className="text-lg mb-16 max-w-2xl">
          I am currently available for freelance work and open to full-time opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <div className="border-4 border-black p-8 bg-gray-50 shadow-brutalist">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                GET IN TOUCH
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-bold text-sm mb-2">EMAIL</p>
                  <p className="text-lg">hello@arham.dev</p>
                </div>

                <div>
                  <p className="font-bold text-sm mb-2">LOCATION</p>
                  <p className="text-lg">🌍 Remote / Anywhere</p>
                </div>

                <div>
                  <p className="font-bold text-sm mb-2">AVAILABILITY</p>
                  <p className="text-lg">✓ Open for Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name/Company */}
            <div>
              <label className="font-bold text-sm mb-2 block">IDENTITY</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name / Company"
                className="w-full border-3 border-black px-4 py-3 font-medium focus:outline-none focus:bg-yellow-100"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-bold text-sm mb-2 block">COORDINATES</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border-3 border-black px-4 py-3 font-medium focus:outline-none focus:bg-yellow-100"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-bold text-sm mb-2 block">TRANSMISSION</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Project Details"
                rows={6}
                className="w-full border-3 border-black px-4 py-3 font-medium focus:outline-none focus:bg-yellow-100"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white border-3 border-blue-600 px-6 py-4 font-bold text-lg shadow-brutalist hover:bg-blue-700 transition"
            >
              TRANSMIT DATA
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white mt-20 border-t-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left: Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                ARHAM.
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Designing for the future with the aesthetics of the past. No cookies, no trackers, just code.
              </p>
            </div>

            {/* Center: Sitemap */}
            <div>
              <h4 className="font-bold mb-4 text-sm">SITEMAP</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/works" className="hover:text-white transition">Works</a></li>
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Right: Social */}
            <div>
              <h4 className="font-bold mb-4 text-sm">SOCIAL</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© 2025 Arham. Built with code and brutalism.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
