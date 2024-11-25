import React, { useState } from 'react';

const About: React.FC = () => {
  // State to track which section is selected, default to 'company'
  const [activeSection, setActiveSection] = useState<string | null>('company');

  // Function to toggle the active section
  const handleSectionToggle = (section: string) => {
    setActiveSection(activeSection === section ? null : section); // Toggle the section
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 md:px-16 mt-8">
      <div className="container mx-auto">
        {/* Navbar */}
        <div className="flex justify-center space-x-6 mb-8">
          <button
            onClick={() => handleSectionToggle('company')}
            className={`text-xl font-semibold transition duration-300 ${activeSection === 'company' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'}`}
          >
            Company Description
          </button>
          <button
            onClick={() => handleSectionToggle('partners')}
            className={`text-xl font-semibold transition duration-300 ${activeSection === 'partners' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'}`}
          >
            About The Partners
          </button>
          <button
            onClick={() => handleSectionToggle('board')}
            className={`text-xl font-semibold transition duration-300 ${activeSection === 'board' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'}`}
          >
            Board of Directors
          </button>
          <button
            onClick={() => handleSectionToggle('management')}
            className={`text-xl font-semibold transition duration-300 ${activeSection === 'management' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'}`}
          >
            Management Team
          </button>
        </div>

        {/* Section content */}
        <div className="space-y-16">
          {/* Company Description */}
          {activeSection === 'company' && (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Company Description</h2>
              <p className="text-lg text-gray-700 mb-4">
                APL Logistics Vascor Automotive Pvt. Ltd. is a Delhi-based third-party logistics specialist serving the automotive
                sector in India. Incorporated in 2012, the company is a joint venture of two of the most respected brands in
                international supply chain management and automotive logistics: APL Logistics and VASCOR.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                In 2011, the company began studying the automotive logistics market in India. Intensive discussions with OEMs,
                key stakeholders, the Indian Railway, and transporters helped establish the essentials of a rail-based mode of
                transportation. Combining our expertise and experience in finished vehicle logistics in India and the US, our service
                offering was tailored to not only meet but surpass the industry's expectations.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our research led us into the realm of designing rail cars and rail car interiors, which ultimately included the
                design of a car loading ramp suitable for Indian conditions. In October 2013, APL Logistics VASCOR Automotive became
                the first 3PL (third-party logistics provider) to be licensed by Indian Railways to operate automotive trains. Our
                services blend US standards and systems with an in-depth understanding of Indian ground realities.
              </p>
            </div>
          )}

          {/* About The Partners */}
          {activeSection === 'partners' && (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">About The Partners</h2>
              <div className="space-y-8">
                {/* APL Logistics */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">APL Logistics</h3>
                  <p className="text-lg text-gray ```tsx
                    -700 mb-4">
                    APL Logistics provides international, integrated supply chain services in more than 73 countries, including both
                    origin and destination services such as freight consolidation, warehousing and distribution management. It uses innovative IT for maximum supply chain visibility and control.
                  </p>
                  <a href="https://www.apllogistics.com" className="text-blue-600 hover:underline mt-2 block">
                    Visit APL Logistics Website
                  </a>
                </div>

                {/* VASCOR */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">VASCOR</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    VASCOR is a leading provider of logistics services to the automotive sector. Formed in 1987, the company is a joint
                    venture of Singapore-based supply chain management leader APL Logistics and FUJITRANS Corporation of Japan. Based in
                    Georgetown, Kentucky, USA, VASCOR provides a full spectrum of logistics services to major automotive manufacturers
                    and sales entities, as well as all U.S. Class One Railroads.
                  </p>
                  <a href="https://www.vascorlogistics.com" className="text-blue-600 hover:underline mt-2 block">
                    Visit VASCOR Website
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Board of Directors */}
          {activeSection === 'board' && (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Board of Directors</h2>
              <ul className="list-inside list-disc space-y-4 text-lg text-gray-700">
                <li><strong>Thad Bedard</strong> - President, APL Logistics & Chairman - APL Logistics VASCOR Automotive Pvt. Ltd.</li>
                <li><strong>TOMONORI KONO</strong> - Director, APL Logistics VASCOR Automotive Pvt. Ltd.</li>
                <li><strong>Umesh Bhanot</strong> - Regional Head - South Asia, APL Logistics</li>
                <li><strong>Ashish Bhatt</strong> - Managing Director, APL Logistics VASCOR Automotive Pvt. Ltd.</li>
              </ul>
            </div>
          )}

          {/* Management Team */}
          {activeSection === 'management' && (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Management Team</h2>
              <ul className="list-inside list-disc space-y-4 text-lg text-gray-700">
                <li><strong>Ashish Bhatt</strong> - Managing Director, APL Logistics VASCOR Automotive Pvt. Ltd.</li>
                <li><strong>Kunal Mahapatra</strong> - Sr. General Manager, APL Logistics VASCOR Automotive Pvt. Ltd.</li>
                <li><strong>Malay Nandy</strong> - Sr. General Manager IT & Systems Development & Customer Service, APL Logistics VASCOR Automotive Pvt. Ltd.</li>
                <li><strong>Tarak Haldar</strong> - Sr. General Manager, Accounts, APL Logistics VASCOR Automotive Pvt. Ltd.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;