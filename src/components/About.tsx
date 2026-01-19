import { Lightbulb, Eye, Target } from "lucide-react";

const About = () => {
  const sections = [
    {
      title: "Our Mission",
      content: "At ReMedy, our mission is to guide and support medical students and professionals from medical school through residency. The name ReMedy comes from (Re) and (Medy), which stands for Review Medicine—reflecting our commitment to helping you review the most crucial medical knowledge.",
      icon: Lightbulb,
    },
    {
      title: "Our Vision",
      content: "Our vision is to be more than just a question bank. We aim to be a trusted partner in your medical journey, providing resources that will help you not only pass your exams but also grow into confident, capable healthcare professionals.",
      icon: Eye,
    },
    {
      title: "Our Goal",
      content: "Right now, our goal is to offer a question bank that focuses on the key topics for the Wizary exam. We've carefully selected important content from trusted sources, and we depend on the official blueprint to ensure we focus on the most important topics.",
      icon: Target,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            About Us
          </span>
          <h2 className="section-title">About ReMedy</h2>
          <p className="section-subtitle mx-auto">
            Your trusted partner in medical education excellence
          </p>
        </div>

        {/* About Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {sections.map((section, index) => (
            <div 
              key={section.title} 
              className="about-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <section.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {section.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
