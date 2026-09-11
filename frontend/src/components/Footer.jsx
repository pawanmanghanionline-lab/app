import { Link } from 'react-router-dom';
import { MapPin, Clock, Globe, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { mockData } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { contact, social } = mockData;
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-gray-900 mb-4">
              Solo<span className="text-blue-600">Scale</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">{mockData.brand.description}</p>
            <div className="flex items-start space-x-2 text-sm text-gray-600 mb-3">
              <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>{contact.address}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
              <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span>{contact.hours}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
              <Globe className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span>{contact.serviceArea}</span>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a href={`tel:+91${contact.phone}`} className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="h-4 w-4" /> +91 {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="h-4 w-4" /> {contact.email}
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Services</Link></li>
              <li><Link to="/platforms" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Platforms</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                <Linkedin className="h-5 w-5" /><span>LinkedIn</span>
              </a>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                <Instagram className="h-5 w-5" /><span>Instagram</span>
              </a>
              <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                <span className="h-5 w-5 flex items-center justify-center font-bold">WA</span><span>WhatsApp</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                <Mail className="h-5 w-5" /><span>{contact.email}</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© {currentYear} SoloScale. All rights reserved.</p>
            <p className="text-sm text-gray-600 mt-2 md:mt-0">{contact.deliveryMode} · Pan-India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
