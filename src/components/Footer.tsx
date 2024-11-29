// src/components/Footer.tsx
import React from 'react';
import { Phone, Mail } from 'lucide-react'; // Import icons from lucide-react

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">Quick Links</h3>
            <ul className="list-none space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-primary transition duration-200">Home</a></li>
              <li><a href="/about-us" className="text-gray-300 hover:text-primary transition duration-200">About VASCOR</a></li>
              <li><a href="/inbound" className="text-gray-300 hover:text-primary transition duration-200">Inbound Logistics</a></li>
              <li><a href="/finished-vehicle-logistics" className="text-gray-300 hover:text-primary transition duration-200">Finished Vehicle Logistics</a></li>
              <li><a href="/locations" className="text-gray-300 hover:text-primary transition duration-200">Locations</a></li>
              <li><a href="/carriers" className="text-gray-300 hover:text-primary transition duration-200">Carriers</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-primary transition duration-200">Careers</a></li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">Information</h3>
            <ul className="list-none space-y-2">
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-primary transition duration-200">Privacy Policy</a></li>
              <li><a href="/terms-of-use" className="text-gray-300 hover:text-primary transition duration-200">Terms Of Use</a></li>
              <li><a href="/cookie-policy" className="text-gray-300 hover:text-primary transition duration-200">Cookie Policy</a></li>
              <li><a href="/vendor-code-of-conduct" className="text-gray-300 hover:text-primary transition duration-200">Vendor Code of Conduct</a></li>
              <li><a href="/sitemap" className="text-gray-300 hover:text-primary transition duration-200">Sitemap</a></li>
              <li><a href="/en-espanol" className="text-gray-300 hover:text-primary transition duration-200">En Español</a></li>
              <li><a href="/login" className="text-gray-300 hover:text-primary transition duration-200">Login</a></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">Contact Us</h3>
            <div className="flex items-center mb-2">
              <Phone className="mr-2 text-primary" />
              <span>+1 (502) 570-2020</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-primary" />
              <span>contactus@vascorlogistics.com</span>
            </div>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">About Us</h3>
            <p className="text-gray-300 text-sm">
              A privately held joint venture between APL Logistics® and Fujitrans Corporation,® VASCOR is infused with expertise that comes from our connection to our owners’ global supply chain solutions.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">&copy; 2024 APL VASCOR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

 export default Footer;