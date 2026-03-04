import { useState } from "react";
import { Instagram, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — integrate with backend later
    console.log("Form submitted:", form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-6 py-24 max-w-7xl mx-auto">
      <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-12">
        Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
          />
          <textarea
            placeholder="Message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
          />
          <button
            type="submit"
            className="self-start border border-foreground px-8 py-3 text-xs font-medium tracking-widest uppercase text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300 mt-2"
          >
            Send
          </button>
        </form>

        {/* Contact info */}
        <div className="flex flex-col justify-end gap-6">
          <a
            href="mailto:hello@etaiberkovich.com"
            className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Mail size={16} />
            hello@etaiberkovich.com
          </a>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Etai Berkovich. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
