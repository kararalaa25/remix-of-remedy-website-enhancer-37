import { Check, CreditCard, Smartphone, QrCode } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      title: "Qbank (All branches) + Library",
      price: "50,000",
      featured: true,
      features: [
        "All Qbank branches included",
        "Full Remedy Library access",
        "Detailed explanations",
        "Performance statistics",
        "Group discussion access",
      ],
    },
    {
      title: "Qbank (All branches)",
      price: "30,000",
      featured: false,
      features: [
        "All Qbank branches included",
        "Detailed explanations",
        "Performance statistics",
        "Group discussion access",
      ],
    },
    {
      title: "Library",
      price: "25,000",
      featured: false,
      features: [
        "Full Remedy Library access",
        "Comprehensive study materials",
        "Use on 2 devices",
      ],
    },
    {
      title: "Qbank (2 branches)",
      price: "20,000",
      featured: false,
      features: [
        "Choose any 2 branches",
        "Detailed explanations",
        "Performance statistics",
      ],
    },
    {
      title: "Qbank (1 branch)",
      price: "12,000",
      featured: false,
      features: [
        "Choose any 1 branch",
        "Detailed explanations",
        "Performance statistics",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-24 px-4 overflow-hidden">
      {/* Teal/cyan gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(176,72%,30%)] via-[hsl(176,72%,42%)] to-[hsl(180,60%,50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(176,72%,60%,0.3),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-accent-foreground font-bold text-lg px-8 py-3 rounded-full shadow-lg mb-6">
            أسعار الاشتراك
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Subscription Prices
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your study needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                plan.featured
                  ? "bg-white shadow-2xl ring-2 ring-accent scale-[1.02]"
                  : "bg-white/95 shadow-xl"
              }`}
            >
              {plan.featured && (
                <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  Best Value
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {plan.title}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl md:text-4xl font-extrabold text-primary">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm font-medium">
                  IQD
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90 shadow-md"
                    : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 md:p-12 mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Payment Methods
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* QiCard */}
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">QiCard</h4>
              <p className="text-white/70 text-sm mb-4">Send payment to:</p>
              <div className="bg-white/10 rounded-lg px-4 py-3 inline-block">
                <span className="text-accent font-mono text-lg font-bold tracking-wider">
                  9448865833
                </span>
              </div>
            </div>

            {/* Zain Cash */}
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Zain Cash</h4>
              <p className="text-white/70 text-sm mb-4">Send payment to:</p>
              <div className="bg-white/10 rounded-lg px-4 py-3 inline-block mb-6">
                <span className="text-accent font-mono text-lg font-bold tracking-wider">
                  07772149000
                </span>
              </div>
              {/* QR Code Placeholder */}
              <div className="mx-auto w-40 h-40 bg-white rounded-xl flex flex-col items-center justify-center shadow-md">
                <QrCode className="w-16 h-16 text-muted-foreground mb-2" />
                <span className="text-xs text-muted-foreground font-medium">
                  Scan to Pay
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Download now for free
          </h3>
          <p className="text-white/70 mb-8">
            Start your journey with 2000+ free questions today
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
                className="h-14 mx-auto"
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
                className="h-14 mx-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
