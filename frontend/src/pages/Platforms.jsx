import { Link } from 'react-router-dom';
import { ArrowRight, Package, ShoppingCart, Users, Smartphone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';

const Platforms = () => {
  const iconMap = {
    'Amazon': Package,
    'Flipkart': ShoppingCart,
    'Meesho': Users,
    'JioMart': Smartphone
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Master Every Major Marketplace
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Platform-specific expertise to maximize your reach and revenue across India's top e-commerce channels.
            </p>
          </div>
        </div>
      </section>
      
      {/* Platforms Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {mockData.platforms.map((platform, index) => {
              const Icon = iconMap[platform.name] || Package;
              const isEven = index % 2 === 0;
              
              return (
                <Card key={platform.id} className="border-2 hover:border-blue-600 transition-all hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className={`grid md:grid-cols-12 gap-8 items-center ${!isEven ? 'md:direction-rtl' : ''}`}>
                      <div className={`md:col-span-3 ${!isEven ? 'md:order-last' : ''}`}>
                        <div className="bg-blue-100 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto">
                          <Icon className="h-12 w-12 text-blue-600" />
                        </div>
                      </div>
                      
                      <div className={`md:col-span-9 ${!isEven ? 'md:order-first' : ''}`}>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                          {platform.name}
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {platform.expertise}
                        </p>
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                            Our Expertise Includes:
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {platform.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Multi-Platform Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Multi-Platform Matters
              </h2>
              <p className="text-lg text-gray-600">
                Don't put all your eggs in one basket
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border-2 hover:border-blue-600 transition-all">
                <div className="text-blue-600 font-bold text-3xl mb-2">3x</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Reach Multiplier
                </h3>
                <p className="text-gray-600 text-sm">
                  Access different customer segments on each platform to maximize market coverage.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 hover:border-blue-600 transition-all">
                <div className="text-blue-600 font-bold text-3xl mb-2">Risk</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Diversification
                </h3>
                <p className="text-gray-600 text-sm">
                  Protect your business from single-platform dependency and policy changes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 hover:border-blue-600 transition-all">
                <div className="text-blue-600 font-bold text-3xl mb-2">Higher</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Profit Margins
                </h3>
                <p className="text-gray-600 text-sm">
                  Compare and optimize platform-specific costs, commissions, and ad spend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Platform Strategy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Platform Strategy
              </h2>
              <p className="text-lg text-gray-600">
                Unified management, platform-specific optimization
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Centralized Dashboard
                </h3>
                <p className="text-gray-600">
                  Track performance across all platforms in one place. Compare metrics, identify trends, and make data-driven decisions.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Platform-Specific Optimization
                </h3>
                <p className="text-gray-600">
                  Each marketplace has unique algorithms and best practices. We optimize listings, ads, and strategies for each platform's requirements.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Inventory & Pricing Sync
                </h3>
                <p className="text-gray-600">
                  Maintain consistent inventory levels and competitive pricing across platforms while maximizing margins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Expand Your Marketplace Presence?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Let's discuss which platforms are right for your business and create a growth strategy.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
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