import { Check } from "lucide-react";
import zaincashQr from "@/assets/zaincash-qr.png";
import qicardLogo from "@/assets/qicard-logo.png";
import zaincashLogo from "@/assets/zaincash-logo.png";

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
    "Group discussion access"]

  },
  {
    title: "Qbank (All branches)",
    price: "30,000",
    featured: false,
    features: [
    "All Qbank branches included",
    "Detailed explanations",
    "Performance statistics",
    "Group discussion access"]

  },
  {
    title: "Library",
    price: "25,000",
    featured: false,
    features: [
    "Full Remedy Library access",
    "Comprehensive study materials",
    "Use on 2 devices"]

  },
  {
    title: "Qbank (2 branches)",
    price: "20,000",
    featured: false,
    features: [
    "Choose any 2 branches",
    "Detailed explanations",
    "Performance statistics"]

  },
  {
    title: "Qbank (1 branch)",
    price: "12,000",
    featured: false,
    features: [
    "Choose any 1 branch",
    "Detailed explanations",
    "Performance statistics"]

  }];


  return (
    <section id="pricing" className="relative py-24 px-4 overflow-hidden">
      {/* Teal/cyan gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(176,72%,30%)] via-[hsl(176,72%,42%)] to-[hsl(180,60%,50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(176,72%,60%,0.3),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="text-center mb-16">
          

          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Subscription Prices
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your study needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {plans.map((plan) =>
          <div
            key={plan.title}
            className={`rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col ${
            plan.featured ?
            "bg-white shadow-2xl ring-2 ring-accent scale-[1.02]" :
            "bg-white/95 shadow-xl"}`
            }>
            
              {plan.featured &&
            <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  Best Value
                </span>
            }
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
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) =>
              <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
              )}
              </ul>
              <button
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
              plan.featured ?
              "bg-primary text-primary-foreground hover:opacity-90 shadow-md" :
              "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"}`
              }>
              
                Subscribe Now
              </button>
            </div>
          )}
        </div>

        {/* Payment Methods */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 md:p-12 mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Payment Methods
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* QiCard */}
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <img src={qicardLogo} alt="QiCard" className="w-10 h-10 object-contain" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">QiCard</h4>
              <p className="text-white/70 text-sm mb-4">Send payment to:</p>
              <div className="bg-white/10 rounded-lg px-4 py-3 inline-block">
                <span className="text-foreground font-mono text-lg font-bold tracking-wider">
                  9448865833
                </span>
              </div>
            </div>

            {/* Zain Cash */}
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <img src={zaincashLogo} alt="Zain Cash" className="w-12 h-12 object-contain" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Zain Cash</h4>
              <p className="text-white/70 text-sm mb-4">Send payment to:</p>
              <div className="bg-white/10 rounded-lg px-4 py-3 inline-block mb-6">
                <span className="text-foreground font-mono text-lg font-bold tracking-wider">
                  07772149000
                </span>
              </div>
              {/* QR Code */}
              <div className="mx-auto w-40 h-40 bg-white rounded-xl flex flex-col items-center justify-center shadow-md p-2">
                <img src={zaincashQr} alt="Zain Cash QR Code" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Telegram Activation Notice */}
          <div className="mt-8 bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <p className="text-white text-lg font-semibold mb-2">
              After payment, send your payment proof to us on Telegram to activate your account
            </p>
            <a
              href="https://t.me/Remedy_iq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#229ED9] hover:bg-[#1a8abf] text-white font-bold px-6 py-3 rounded-full transition-colors duration-200 mt-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              @Remedy_iq
            </a>
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
              aria-label="Download on the App Store">
              
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-14 mx-auto" />
              
            </a>
            <a
              href="#"
              className="inline-block transition-transform duration-200 hover:scale-105"
              aria-label="Get it on Google Play">
              
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-14 mx-auto" />
              
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default Pricing;