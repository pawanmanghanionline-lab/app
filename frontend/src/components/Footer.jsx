import { Link } from 'react-router-dom';
import { MapPin, Clock, Globe } from 'lucide-react';
import { mockData } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-gray-900 mb-4">
              Solo<span className="text-blue-600">Scale</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              {mockData.brand.description}
            </p>
            <div className="flex items-start space-x-2 text-sm text-gray-600 mb-3">
              <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>{mockData.contact.address}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
              <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span>{mockData.contact.hours}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Globe className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span>{mockData.contact.serviceArea}</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/platforms" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Platforms
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Account Management</li>
              <li className="text-gray-600 text-sm">Product Listing & SEO</li>
              <li className="text-gray-600 text-sm">A+ Content Design</li>
              <li className="text-gray-600 text-sm">PPC Ads Management</li>
              <li className="text-gray-600 text-sm">Profit Optimization</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © {currentYear} SoloScale. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 mt-2 md:mt-0">
              Delivery Mode: {mockData.contact.deliveryMode}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};