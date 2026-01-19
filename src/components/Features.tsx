import { Gift, BookOpen, BarChart, Bookmark, Target, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Free Trial",
      description: "Access over 500 questions for free and explore the full potential of our platform",
      icon: Gift,
    },
    {
      title: "Detailed Explanations",
      description: "Understand every answer with clear explanations for both correct and incorrect choices",
      icon: BookOpen,
    },
    {
      title: "Performance Statistics",
      description: "Track your progress with detailed performance analytics and insights",
      icon: BarChart,
    },
    {
      title: "Marked Questions",
      description: "Save questions to review later and focus on areas that matter most",
      icon: Bookmark,
    },
    {
      title: "Targeted Practice",
      description: "Solve only the questions you answered incorrectly for focused improvement",
      icon: Target,
    },
    {
      title: "Study on Two Devices",
      description: "Easily access your question bank on both your phone and iPad, with synchronized progress",
      icon: Smartphone,
    },
  ];

  return (
    <section id="features" className="py-24 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose ReMedy
          </span>
          <h2 className="section-title">Amazing Features</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to ace your medical exams in one powerful platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="feature-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
