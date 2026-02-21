import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [animateElements, setAnimateElements] = useState(false);

  // Initialize EmailJS on component mount and trigger animations
  useEffect(() => {
    emailjs.init("JTZKA13zDXGBOUQil"); // Replace with your public key from EmailJS
    setAnimateElements(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(""); // Clear error on input change
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await emailjs.send(
        "service_7px0r2l", // Replace with your service ID
        "template_yi7fm79", // Replace with your template ID
        {
          to_email: "lakshikabourai@gmail.com", // Your email
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      console.log("Email sent successfully:", result);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("Email send failed:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: "✉️",
      title: "Email",
      value: "lakshikabourai@gmail.com",
      link: "mailto:lakshikabourai@gmail.com"
    },
    {
      icon: "🔗",
      title: "LinkedIn",
      value: "Lakshika Bourai",
      link: "https://linkedin.com/in/lakshika-bourai"
    },
    {
      icon: "💬",
      title: "Twitter",
      value: "@yourtwitter",
      link: "https://twitter.com/yourprofile"
    }
  ];

  return (
    <section id="contact" className="py-20 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-5xl font-bold text-center mb-16 transition-all duration-700 ${
          animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-glow-pulse">Get In Touch</span>
        </h2>
        <p className={`text-slate-400 text-center mb-12 text-lg transition-all duration-700 delay-100 ${
          animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          Have a question or want to work together? Let's connect!
        </p>

        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-700 delay-200 ${
          animateElements ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}>
          {/* Contact Form */}
          <div className="bg-slate-700/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 group">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className={`transition-all duration-500 ${
                focusedField === "name" ? "scale-102" : ""
              }`}>
                <label className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                  focusedField === "name" ? "text-cyan-400" : "text-slate-300"
                }`}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  required
                  className={`w-full bg-slate-600/50 border border-slate-500/50 text-white py-3 px-4 rounded-lg focus:border-cyan-400 focus:outline-none transition duration-300 placeholder-slate-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.4)] ${
                    focusedField === "name" ? "bg-slate-600/80 border-cyan-400/70" : ""
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div className={`transition-all duration-500 ${
                focusedField === "email" ? "scale-102" : ""
              }`}>
                <label className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                  focusedField === "email" ? "text-cyan-400" : "text-slate-300"
                }`}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  required
                  className={`w-full bg-slate-600/50 border border-slate-500/50 text-white py-3 px-4 rounded-lg focus:border-cyan-400 focus:outline-none transition duration-300 placeholder-slate-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.4)] ${
                    focusedField === "email" ? "bg-slate-600/80 border-cyan-400/70" : ""
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={`transition-all duration-500 ${
                focusedField === "message" ? "scale-102" : ""
              }`}>
                <label className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                  focusedField === "message" ? "text-cyan-400" : "text-slate-300"
                }`}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  required
                  rows="5"
                  className={`w-full bg-slate-600/50 border border-slate-500/50 text-white py-3 px-4 rounded-lg focus:border-cyan-400 focus:outline-none transition duration-300 resize-none placeholder-slate-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.4)] ${
                    focusedField === "message" ? "bg-slate-600/80 border-cyan-400/70" : ""
                  }`}
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-linear-to-r from-purple-500 to-cyan-500 hover:shadow-2xl hover:shadow-purple-500/50 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform disabled:hover:scale-100 relative overflow-hidden group"
              >
                <span className={`inline-block transition duration-300 ${loading ? "opacity-0" : "opacity-100"}`}>
                  Send Message
                </span>
                <span className={`absolute inset-0 flex items-center justify-center transition duration-300 ${loading ? "opacity-100" : "opacity-0"}`}>
                  <span className="inline-block animate-bounce">Sending...</span>
                </span>
              </button>

              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-300 py-3 px-4 rounded-lg text-center animate-success-slide">
                  ✗ {error}
                </div>
              )}

              {submitted && (
                <div className="bg-green-500/20 border border-green-500/50 text-green-300 py-3 px-4 rounded-lg text-center animate-success-slide">
                  ✓ Message sent successfully!
                </div>
              )}
            </form>
          </div>

          {/* Contact Methods */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${
            animateElements ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700/30 backdrop-blur-xl p-6 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300 block group transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  animation: animateElements ? `slideInUp 0.6s ease-out ${idx * 0.1}s both` : "none"
                }}
              >
                <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">{method.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition duration-300">{method.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition duration-300">{method.value}</p>
              </a>
            ))}

            <div className="bg-linear-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl p-6 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 transform hover:scale-105 group"
              style={{
                animationDelay: `${contactMethods.length * 0.1}s`,
                animation: animateElements ? `slideInUp 0.6s ease-out ${contactMethods.length * 0.1}s both` : "none"
              }}
            >
              <h3 className="font-bold mb-3 bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-purple-400 transition duration-300">⚡ Quick Response</h3>
              <p className="text-slate-300 text-sm group-hover:text-slate-200 transition duration-300">
                I aim to respond to all inquiries within 24 hours. For urgent matters, please reach out via LinkedIn or Twitter.
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className={`mt-16 text-center bg-linear-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300 group transform hover:scale-105 ${
          animateElements ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
          style={{
            animation: animateElements ? "scaleIn 0.6s ease-out 0.4s both" : "none"
          }}
        >
          <p className="text-slate-300 mb-6 group-hover:text-slate-200 transition duration-300">
            Whether you have a project in mind, want to collaborate, or just want to say hello - I'm always happy to connect!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://github.com/Lakshika04" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline hover:scale-110 font-semibold transition-transform duration-300 inline-block">
              GitHub
            </a>
            <span className="text-slate-600">•</span>
            <a href="https://www.linkedin.com/in/lakshika-bourai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline hover:scale-110 font-semibold transition-transform duration-300 inline-block">
              LinkedIn
            </a>
            <span className="text-slate-600">•</span>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline hover:scale-110 font-semibold transition-transform duration-300 inline-block">
              Twitter
            </a>
            <span className="text-slate-600">•</span>
            <a href="mailto:lakshikabourai@gmail.com" className="text-cyan-400 hover:text-cyan-300 hover:underline hover:scale-110 font-semibold transition-transform duration-300 inline-block">
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`mt-16 pt-8 border-t border-slate-700 text-center text-slate-500 transition-all duration-700 delay-500 ${
        animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
        <p className="hover:text-slate-400 transition duration-300">© 2024 Lakshika Bourai. All rights reserved. | Built with React + Tailwind CSS</p>
      </div>
    </section>
  );
};

export default Contact;
