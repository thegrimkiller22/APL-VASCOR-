import React from 'react';
import { Phone, Mail } from 'lucide-react';
import AnimatedBrandSlider from '@/components/slider';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
          {/* Logo Section */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-6 lg:mb-0">
            <img 
              src="/assets/APLL_Vascor Logo_landscape.jpg" 
              alt="VASCOR Logistics" 
              className="max-w-full h-auto"
            />
          </div>

          {/* Slider Section */}
          <div className="w-full lg:w-2/3">
            <AnimatedBrandSlider />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">Quick Links</h3>
            <ul className="list-none space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-primary transition duration-200">Home</a></li>
              <li><a href="/about-us" className="text-gray-600 hover:text-primary transition duration-200">About VASCOR</a></li>
              <li><a href="/inbound" className="text-gray-600 hover:text-primary transition duration-200">Inbound Logistics</a></li>
              <li><a href="/finished-vehicle-logistics" className="text-gray-600 hover:text-primary transition duration-200">Finished Vehicle Logistics</a></li>
              <li><a href="/locations" className="text-gray-600 hover:text-primary transition duration-200">Locations</a></li>
              <li><a href="/carriers" className="text-gray-600 hover:text-primary transition duration-200">Carriers</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-primary transition duration-200">Careers</a></li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">Information</h3>
            <ul className="list-none space-y-2">
              <li><a href="/privacy-policy" className="text-gray-600 hover:text-primary transition duration-200">Privacy Policy</a></li>
              <li><a href="/terms-of-use" className="text-gray-600 hover:text-primary transition duration-200">Terms Of Use</a></li>
              <li><a href="/cookie-policy" className="text-gray-600 hover:text-primary transition duration-200">Cookie Policy</a></li>
              <li><a href="/vendor-code-of-conduct" className="text-gray-600 hover:text-primary transition duration-200">Vendor Code of Conduct</a></li>
              <li><a href="/sitemap" className="text-gray-600 hover:text-primary transition duration-200">Sitemap</a></li>
              <li><a href="/login" className="text-gray-600 hover:text-primary transition duration-200">Login</a></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">Contact Us</h3>
            <div className="flex items-center mb-2">
              <Phone className="mr-2 text-primary" />
              <span>1800 123 827267</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-primary" />
              <span>contactus@vascorlogistics.com</span>
            </div>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">About Us</h3>
            <p className="text-gray-600 mb-4">VASCOR Logistics is a leading provider of logistics solutions, specializing in inbound and finished vehicle logistics.</p>
            <p className="text-gray-600">Our mission is to deliver exceptional service and innovative solutions to our clients.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
