import { Gift, BookOpen, BarChart, Bookmark, Smartphone, Users, ShieldCheck, Library } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Qbank",
      description: "Designed for Wizary exam with more than 5000 questions to help you prepare thoroughly",
      icon: BookOpen,
    },
    {
      title: "Library",
      description: "A library that contains only high yield information required for Wizary exam",
      icon: Library,
    },
    {
      title: "Free Trial",
      description: "Access over 2000 questions for free and explore the full potential of our platform",
      icon: Gift,
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
      title: "Use on Two Devices",
      description: "Can be used by 2 devices - access your question bank on both your phone and iPad with synchronized progress",
      icon: Smartphone,
    },
    {
      title: "Group Discussion",
      description: "Group discussion for Remedy subscribers - connect and collaborate with fellow medical students",
      icon: Users,
    },
    {
      title: "Trusted Medical Content",
      description: "AI was not used to write any medical information within Remedy. All content is from trusted medical references. AI is used only for technical and operational purposes",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="features" className="py-24 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose Remedy
          </span>
          <h2 className="section-title">Amazing Features</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to ace your medical exams in one powerful platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="feature-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
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
