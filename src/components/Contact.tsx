import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Instagram,
      url: "https://www.instagram.com/remedy_iq/",
      label: "Instagram",
      hoverColor: "hover:bg-pink-500",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/remedy-platform-928176334/",
      label: "LinkedIn",
      hoverColor: "hover:bg-blue-600",
    },
    {
      icon: Youtube,
      url: "https://www.youtube.com/@ReMedy-i4t",
      label: "YouTube",
      hoverColor: "hover:bg-red-500",
    },
    {
      icon: Mail,
      url: "mailto:remedyplatform@gmail.com",
      label: "Email",
      hoverColor: "hover:bg-primary",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
          Connect With Us
        </span>
        <h2 className="section-title mb-4">Get in Touch</h2>
        <p className="section-subtitle mx-auto mb-12">
          Have questions? We'd love to hear from you. Reach out through any of our channels.
        </p>

        {/* Social Links */}
        <div className="flex justify-center flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 bg-background px-6 py-4 rounded-xl shadow-md border border-border/50 
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${link.hoverColor} hover:text-white group`}
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              <span className="font-medium text-foreground group-hover:text-white transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Email CTA */}
        <div className="mt-16 p-8 bg-background rounded-2xl shadow-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-2">Ready to Start Your Journey?</h3>
          <p className="text-muted-foreground mb-6">
            Download ReMedy today and take the first step toward exam success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-block transition-transform duration-200 hover:scale-105"
              aria-label="Download on the App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12 mx-auto"
              />
            </a>
            <a
              href="#"
              className="inline-block transition-transform duration-200 hover:scale-105"
              aria-label="Get it on Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12 mx-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
