// src/pages/AwardsRecognition.tsx
import React from 'react';

const awards: React.FC = () => {
  return (
    <section className="bg-blue-50 py-20 px-6 md:px-16">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 leading-tight md:text-6xl">
          Awards and Recognition
        </h1>
        
        <div className="space-y-6 text-lg text-blue-700 max-w-4xl mx-auto">
          <p><strong>APL Logistics VASCOR Automotive Pvt Ltd</strong> now ISO 9001 certified</p>
          <p><strong>APL Logistics VASCOR Automotive</strong> awarded for "Best Third Party Logistics Company"</p>
          <p><strong>APL Logistics Vascor Automotive Pvt Ltd</strong> has been awarded as the ‘Best 3PL Company of the Year (Automotive)' at Inflection Awards 2018!</p>
          <p><strong>APL Logistics Vascor Automotive Pvt Ltd</strong> has been awarded as the 'Best Rail Freight Company of the Year' at Global Logistics Excellence Awards by CNBC Network 18.</p>
          <p><strong>Container Corporation of India</strong> awarded</p>
          <p><strong>Express Logistics & Supply Chain Conclave</strong> award</p>
          <p><strong>APL Logistics VASCOR Automotive</strong> receives "Best Emerging Player" award</p>
          <p><strong>AutoLinxSMtrain</strong> flagged off by India Railway Minister</p>
          <p><strong>APL Logistics VASCOR Automotive</strong> invests in high-capacity rakes, gears up new rail-based offering for finished vehicles in India</p>
          <p><strong>APL Logistics and VASCOR</strong> form automotive logistics joint venture</p>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-blue-900 mb-4">Case Studies</h3>
          <ul className="list-none space-y-4 text-blue-700">
            <li><a href="/autolinx-case-study" className="text-blue-600 hover:text-blue-700">AutoLinx Case Study</a></li>
          </ul>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-blue-900 mb-4">Media</h3>
          <ul className="list-none space-y-4 text-blue-700">
            <li><a href="file://C:\Users\Anubhav Banerjee\Desktop\office\Website\website\Assets\APLL_VASCOR_Case_Study.pdf" className="text-blue-600 hover:text-blue-700">APL Logistics VASCOR AutoLinx</a></li>
            <li><a href="/apllogistics-vascor-overview" className="text-blue-600 hover:text-blue-700">APL Logistics VASCOR Overview</a></li>
            <li><a href="/apllogistics-vascor-autodirect" className="text-blue-600 hover:text-blue-700">APL Logistics VASCOR AutoDirect</a></li>
          </ul>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-blue-900 mb-4">Industry Links</h3>
          <ul className="list-none space-y-4 text-blue-700">
            <li><a href="https://www.apllogistics.com" className="text-blue-600 hover:text-blue-700">APL Logistics</a></li>
            <li><a href="https://www.vascor.com" className="text-blue-600 hover:text-blue-700">VASCOR</a></li>
            <li><a href="https://www.siam.in" className="text-blue-600 hover:text-blue-700">Society of Indian Automobile Manufacturers</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default awards;
