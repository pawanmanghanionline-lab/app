// redeploy trigger
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, BarChart3, ShoppingBag, Package, ShoppingCart, Users, Smartphone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';

const Home = () => {
  const iconMap = {
    1: ShoppingBag,
    2: Target,
    3: BarChart3,
    4: TrendingUp
  };
  
  const platformIcons = {
    'Amazon': Package,
    'Flipkart': ShoppingCart,
    'Meesho': Users,
    'JioMart': Smartphone
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              SoloScale
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight">
              {mockData.brand.tagline}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              India's trusted e-commerce growth agency helping brands and MSMEs scale on Amazon, Flipkart, Meesho, and JioMart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                  Book Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Solve
            </h2>
            <p className="text-lg text-gray-600">
              Stop losing sales to poor listings, inefficient ads, and marketplace complexity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-blue-600 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Low Visibility
                </h3>
                <p className="text-gray-600 text-sm">
                  SEO-optimized listings that rank higher and drive organic sales.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-blue-600 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Poor Ad ROI
                </h3>
                <p className="text-gray-600 text-sm">
                  Data-driven PPC campaigns optimized for profitability, not just clicks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-blue-600 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Thin Margins
                </h3>
                <p className="text-gray-600 text-sm">
                  Strategic pricing and cost optimization for sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platforms We Master
            </h2>
            <p className="text-lg text-gray-600">
              Expert management across India's top marketplaces
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {mockData.platforms.map((platform) => {
              const Icon = platformIcons[platform.name] || Package;
              return (
                <div
                  key={platform.id}
                  className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-all hover:shadow-lg flex flex-col items-center text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">{platform.name}</h3>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/platforms">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View Platform Expertise
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Drive Growth
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end marketplace management services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mockData.services.slice(0, 6).map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium text-gray-900">Problem:</span> {service.problem}
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    {service.outcome}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose SoloScale */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SoloScale
            </h2>
            <p className="text-lg text-gray-600">
              Systems, transparency, and results-driven approach
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mockData.whyChoose.map((reason) => {
              const Icon = iconMap[reason.id] || Target;
              return (
                <div key={reason.id} className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Brands We've Worked With */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Brands We've Worked With
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by leading brands across India
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <p className="text-gray-500 text-lg">
                Brand logos will be displayed here
              </p>
              <p className="text-gray-400 text-sm mt-2">
                (Awaiting brand logos with permission letters)
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Marketplace Business?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Get a free audit and actionable growth plan for your Amazon or Flipkart store.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Audit Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
