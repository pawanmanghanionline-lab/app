import { Target, Users, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About SoloScale
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We're on a mission to make marketplace success accessible to every Indian brand and MSME.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower Indian MSMEs and brands with world-class marketplace management services that drive profitable growth. We believe every seller deserves access to data-driven strategies, transparent reporting, and systems that actually work.
                </p>
              </div>
              
              <div>
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To become India's most trusted e-commerce growth partner, known for delivering measurable results and building long-term seller success. We're creating a future where marketplace complexity doesn't hold back great products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who We Help */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Who We Help
              </h2>
              <p className="text-lg text-gray-600">
                Tailored solutions for different business stages
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-blue-600 transition-all">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3">
                    New Sellers
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Complete marketplace onboarding and setup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Product catalogue creation and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Launch strategy and initial growth plan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Compliance and seller health management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-blue-600 transition-all">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3">
                    Scaling Sellers
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Advanced PPC campaigns and ad optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Margin improvement and pricing strategy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Multi-platform expansion and management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Advanced analytics and growth forecasting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-blue-600 transition-all">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3">
                    D2C Brands
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Premium A+ content and brand storytelling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Brand Registry and IP protection support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Strategic positioning and competitive analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Premium customer experience management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-blue-600 transition-all">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3">
                    Category Specialists
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Furniture & Home category expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Category-specific optimization strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Large item logistics and returns management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Seasonal planning and inventory management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The SoloScale Approach
              </h2>
              <p className="text-lg text-gray-600">
                Systems, playbooks, and data — not guesswork
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Audit & Analysis
                  </h3>
                  <p className="text-gray-600">
                    We start with a deep-dive audit of your current marketplace performance, identifying gaps and quick wins.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Custom Strategy
                  </h3>
                  <p className="text-gray-600">
                    Based on your goals, category, and budget, we create a tailored growth roadmap with clear milestones.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Systematic Execution
                  </h3>
                  <p className="text-gray-600">
                    We implement proven SOPs and playbooks, managing every detail from listings to ads to customer service.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Transparent Reporting
                  </h3>
                  <p className="text-gray-600">
                    Weekly dashboards show real metrics: sales, profit, ad performance, and actionable recommendations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Continuous Optimization
                  </h3>
                  <p className="text-gray-600">
                    Markets change. We continuously test, learn, and optimize to keep your business ahead of competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emphasis on Profitability */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We Focus on Profit, Not Just Sales
            </h2>
            <p className="text-lg text-blue-100 mb-4">
              Many agencies chase vanity metrics. We optimize for what actually matters: your bottom line. Higher margins, better ROI, and sustainable growth.
            </p>
            <p className="text-lg text-blue-100">
              Because a ₹10 lakh revenue at 5% margin is better than ₹20 lakh at 2%.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;