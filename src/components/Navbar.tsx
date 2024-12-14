import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/1588d211-7ac9-4330-8fc3-d4e8fd1a2953.png" alt="ReMedy Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold">
              <span style={{ color: "#fcac4d" }}>Re</span>
              <span style={{ color: "#34ccd2" }}>Medy</span>
            </span>
          </Link>
          <div className="flex space-x-8">
            <button onClick={() => scrollToSection('features')} className="nav-link">
              Features
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;