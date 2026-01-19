import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Medical professional studying"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Trusted by Medical Students
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-text text-white mb-6">
            We Make{" "}
            <span className="text-accent">Medical Exams</span>{" "}
            Easy to Conquer
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            ReMedy is your trusted companion for mastering medical exams and building 
            confidence for your journey in medicine. Review. Retain. Succeed.
          </p>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-block transition-transform duration-200 hover:scale-105"
              aria-label="Download on the App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12 md:h-14"
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
                className="h-12 md:h-14"
              />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/70 text-sm">Free Questions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-white/70 text-sm">Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/70 text-sm">Study Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
