import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/1588d211-7ac9-4330-8fc3-d4e8fd1a2953.png"
              alt="Remedy Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-primary">
              Remedy
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {currentYear} Remedy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
