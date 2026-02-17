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

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init("JTZKA13zDXGBOUQil"); // Replace with your public key from EmailJS
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(""); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await emailjs.send(
        "service_7px0r2l", // Replace with your service ID
        "template_9w5t6rq", // Replace with your template ID
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
    <section id="contact" className="py-20 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-6">Get In <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span></h2>
        <p className="text-slate-400 text-center mb-16 text-lg">Have a question or want to work together? Let's connect!</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-700/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-600/50 border border-slate-500/50 text-white py-3 px-4 rounded-lg focus:border-cyan-400 focus:outline-none transition duration-300 placeholder-slate-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-600/50 border border-slate-500/50 text-white py-3 px-4 rounded-lg focus:border-cyan-400 focus:outline-none transition duration-300 placeholder-slate-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-slate-600/50 border border-slate-500/50 text-white py-3 px-4 rounded-lg focus:border-cyan-400 focus:outline-none transition duration-300 resize-none placeholder-slate-400"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-linear-to-r from-purple-500 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/30 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-300 py-3 px-4 rounded-lg text-center">
                  ✗ {error}
                </div>
              )}

              {submitted && (
                <div className="bg-green-500/20 border border-green-500/50 text-green-300 py-3 px-4 rounded-lg text-center">
                  ✓ Message sent successfully!
                </div>
              )}
            </form>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700/30 backdrop-blur-xl p-6 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 hover:bg-slate-700/50 transition duration-300 block group"
              >
                <div className="text-3xl mb-3">{method.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition duration-300">{method.title}</h3>
                <p className="text-slate-400">{method.value}</p>
              </a>
            ))}

            <div className="bg-linear-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl p-6 rounded-2xl border border-slate-600/30">
              <h3 className="font-bold mb-3 bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Quick Response</h3>
              <p className="text-slate-300 text-sm">
                I aim to respond to all inquiries within 24 hours. For urgent matters, please reach out via LinkedIn or Twitter.
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center bg-linear-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl p-8 rounded-2xl border border-slate-600/30">
          <p className="text-slate-300 mb-6">
            Whether you have a project in mind, want to collaborate, or just want to say hello - I'm always happy to connect!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://github.com/Lakshika04" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline font-semibold">
              GitHub
            </a>
            <span className="text-slate-600">•</span>
            <a href="https://www.linkedin.com/in/lakshika-bourai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline font-semibold">
              LinkedIn
            </a>
            <span className="text-slate-600">•</span>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline font-semibold">
              Twitter
            </a>
            <span className="text-slate-600">•</span>
            <a href="mailto:lakshikabourai@gmail.com" className="text-cyan-400 hover:text-cyan-300 hover:underline font-semibold">
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-slate-700 text-center text-slate-500">
        <p>© 2024 Lakshika Bourai. All rights reserved. | Built with React + Tailwind CSS</p>
      </div>
    </section>
  );
};

export default Contact;
