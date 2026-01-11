import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';
import axios from 'axios';

/* 🔴 FIXED: Direct backend URL */
const API = "http://127.0.0.1:8000/api";

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

        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('Form submission error:', err);

      if (err.response) {
        const errorMsg = err.response.data?.detail || 'Failed to submit form. Please try again.';
        setError(errorMsg);
      } else if (err.request) {
        setError('Network error. Please check your connection and try again.');
      } else {
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
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">
                            Phone Number *
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">
                            Primary Platform *
                          </label>
                          <Select value={formData.platform} onValueChange={handlePlatformChange}>
                            <SelectTrigger>
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
                          <label className="block text-sm font-medium text-gray-900 mb-2">
                            Monthly GMV (approx.)
                          </label>
                          <Input
                            name="monthlyGMV"
                            type="text"
                            value={formData.monthlyGMV}
                            onChange={handleInputChange}
                            placeholder="e.g., 5 Lakhs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Tell us about your goals (optional)
                        </label>
                        <Textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="What challenges are you facing? What are your growth goals?"
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
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Right Info Section – unchanged */}
              {/* You can keep your existing right section as is */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
