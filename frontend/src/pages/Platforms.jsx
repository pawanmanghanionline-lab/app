import { Link } from "react-router-dom";
import {
  ArrowRight,
  Package,
  ShoppingCart,
  Users,
  Smartphone,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { mockData } from "../mock";

const Platforms = () => {
  const iconMap = {
    Amazon: Package,
    Flipkart: ShoppingCart,
    Meesho: Users,
    JioMart: Smartphone,
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Master Every Major Marketplace
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Platform-specific expertise to maximize your reach and revenue
              across India’s top e-commerce channels.
            </p>
          </div>
        </div>
      </section>

      {/* PLATFORMS DETAIL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-20">
            {mockData.platforms.map((platform, index) => {
              const Icon = iconMap[platform.name] || Package;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={platform.id}
                  className={`rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all ${
                    isEven ? "bg-white" : "bg-slate-50"
                  }`}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center gap-12 ${
                      !isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* ICON */}
                    <div className="flex-shrink-0">
                      <div className="bg-blue-50 w-20 h-20 rounded-xl flex items-center justify-center">
                        <Icon className="h-10 w-10 text-blue-600" />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                        {platform.name}
                      </h2>

                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {platform.expertise}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                          Our Expertise Includes
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {platform.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-gray-700 text-sm"
                            >
                              <span className="text-blue-600">•</span>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY MULTI-PLATFORM */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Multi-Platform Matters
              </h2>
              <p className="text-lg text-gray-600">
                Don’t put all your eggs in one basket
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
                <div className="text-blue-600 font-bold text-3xl mb-2">3×</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Reach Multiplier
                </h3>
                <p className="text-gray-600 text-sm">
                  Access different customer segments across platforms.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
                <div className="text-blue-600 font-bold text-3xl mb-2">
                  Risk
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Diversification
                </h3>
                <p className="text-gray-600 text-sm">
                  Reduce dependency on a single marketplace.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
                <div className="text-blue-600 font-bold text-3xl mb-2">
                  Higher
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Profit Margins
                </h3>
                <p className="text-gray-600 text-sm">
                  Optimize costs, ads, and commissions per platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Expand Your Marketplace Presence?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Let’s build a platform-specific growth strategy for your brand.
            </p>

            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Schedule Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platforms;
