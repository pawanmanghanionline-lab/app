import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, FileText, Award, TrendingUp, DollarSign, Shield, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';

const Services = () => {
  const iconMap = {
    1: ShoppingBag,
    2: FileText,
    3: Award,
    4: TrendingUp,
    5: DollarSign,
    6: Shield,
    7: BarChart3
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              End-to-End Marketplace Growth Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              From account setup to scaling — we handle everything so you can focus on your business.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {mockData.services.map((service) => {
                const Icon = iconMap[service.id] || ShoppingBag;
                return (
                  <Card key={service.id} className="border-2 hover:border-blue-600 transition-all hover:shadow-xl">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-12 gap-6">
                        <div className="md:col-span-2 flex md:justify-center">
                          <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center">
                            <Icon className="h-8 w-8 text-blue-600" />
                          </div>
                        </div>
                        
                        <div className="md:col-span-10">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {service.title}
                          </h3>
                          
                          <div className="space-y-3">
                            <div>
                              <span className="font-semibold text-gray-900">The Problem: </span>
                              <span className="text-gray-600">{service.problem}</span>
                            </div>
                            
                            <div>
                              <span className="font-semibold text-gray-900">Our Solution: </span>
                              <span className="text-gray-600">{service.solution}</span>
                            </div>
                            
                            <div className="flex items-start space-x-2 pt-2">
                              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                                <span className="font-semibold text-sm">{service.outcome}</span>
                              </div>
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
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Work
              </h2>
              <p className="text-lg text-gray-600">
                Simple, transparent, and results-focused process
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl">
                  1
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Free Audit
                </h3>
                <p className="text-gray-600 text-sm">
                  We analyze your current setup and identify immediate opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl">
                  2
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Custom Strategy
                </h3>
                <p className="text-gray-600 text-sm">
                  Get a tailored growth plan with clear goals and timelines.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl">
                  3
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Execution & Growth
                </h3>
                <p className="text-gray-600 text-sm">
                  We implement and optimize while you track results weekly.
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
              Ready to Transform Your Marketplace Performance?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Book a free strategy call and discover how we can help you scale profitably.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;