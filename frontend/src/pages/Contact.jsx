import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    platform: '',
    monthlyGMV: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError('');
  };
  
  const handlePlatformChange = (value) => {
    setFormData(prev => ({ ...prev, platform: value }));
    if (error) setError('');
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          platform: '',
          monthlyGMV: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      
      // Handle different error types
      if (err.response) {
        // Server responded with error
        const errorMsg = err.response.data?.detail || 'Failed to submit form. Please try again.';
        setError(errorMsg);
      } else if (err.request) {
        // Request made but no response
        setError('Network error. Please check your connection and try again.');
      } else {
        // Something else happened
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Grow Your Business Together
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Get a free audit and discover actionable strategies to scale your marketplace business.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="md:col-span-3">
                <Card className="border-2">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Request Free Audit
                    </h2>
                    
                    {isSubmitted && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <p className="text-green-700 text-sm">
                          Thank you! We'll contact you within 24 hours.
                        </p>
                      </div>
                    )}
                    
                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm">
                          {error}
                        </p>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="w-full"
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            className="w-full"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="platform" className="block text-sm font-medium text-gray-900 mb-2">
                            Primary Platform *
                          </label>
                          <Select value={formData.platform} onValueChange={handlePlatformChange} required>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select platform" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="amazon">Amazon</SelectItem>
                              <SelectItem value="flipkart">Flipkart</SelectItem>
                              <SelectItem value="meesho">Meesho</SelectItem>
                              <SelectItem value="jiomart">JioMart</SelectItem>
                              <SelectItem value="multiple">Multiple Platforms</SelectItem>
                              <SelectItem value="planning">Planning to Start</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label htmlFor="monthlyGMV" className="block text-sm font-medium text-gray-900 mb-2">
                            Monthly GMV (approx.)
                          </label>
                          <Input
                            id="monthlyGMV"
                            name="monthlyGMV"
                            type="text"
                            value={formData.monthlyGMV}
                            onChange={handleInputChange}
                            placeholder="e.g., 5 Lakhs"
                            className="w-full"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                          Tell us about your goals (optional)
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="What challenges are you facing? What are your growth goals?"
                          className="w-full"
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        {isSubmitting ? 'Submitting...' : 'Get Free Audit'}
                      </Button>
                      
                      <div className="space-y-2">
                        <p className="text-xs text-gray-500 text-center">
                          We'll respond within 24 hours. 100% confidential.
                        </p>
                        <p className="text-xs text-blue-600 font-medium text-center bg-blue-50 py-2 px-4 rounded">
                          All billing and invoicing are done strictly under GST. GST invoice will be provided for all services.
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Info */}
              <div className="md:col-span-2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Get In Touch
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                          <p className="text-sm text-gray-600">
                            {mockData.contact.address}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                          <p className="text-sm text-gray-600">
                            {mockData.contact.hours}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Service Delivery</h4>
                          <p className="text-sm text-gray-600">
                            {mockData.contact.deliveryMode}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            Serving {mockData.contact.serviceArea}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        What Happens Next?
                      </h4>
                      <ul className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2 font-bold">1.</span>
                          <span>We'll review your information and current setup</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2 font-bold">2.</span>
                          <span>Schedule a 30-minute strategy call</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2 font-bold">3.</span>
                          <span>Get a customized growth plan with no obligation</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Who We Serve
                    </h4>
                    <div className="space-y-2">
                      {mockData.targetClients.map((client, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>{client}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
