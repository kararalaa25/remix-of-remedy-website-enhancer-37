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
            <span className="text-primary">Review Medicine</span>, it's really worth it
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Remedy is your trusted companion for mastering medical exams and building 
            confidence for your journey in medicine. Review. Retain. Succeed.
          </p>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://apps.apple.com/us/app/remedy-platform/id6737006336"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-200 hover:scale-105"
              aria-label="Download on the App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-[48px] md:h-[56px]"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.enigma.remedy&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-200 hover:scale-105"
              aria-label="Get it on Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-[48px] md:h-[56px]"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
