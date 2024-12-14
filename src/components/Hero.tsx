const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="hero-text mb-6">
          Review. Retain. Succeed.
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          ReMedy is your trusted companion for mastering medical exams and building confidence for your journey in medicine.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-[#40E0D0] text-white px-8 py-3 rounded-full hover:bg-[#3CC7B9] transition-colors duration-200 w-32"
          >
            iOS
          </a>
          <a
            href="#"
            className="bg-[#40E0D0] text-white px-8 py-3 rounded-full hover:bg-[#3CC7B9] transition-colors duration-200 w-32"
          >
            Android
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;