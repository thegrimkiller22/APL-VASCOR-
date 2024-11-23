// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="bg-blue-50 py-20 px-6 md:px-16">
      <div className="container mx-auto text-center">
        {/* Image Section */}
        <div className="mb-16 max-w-full">
          <img 
            src="https://via.placeholder.com/1200x400" // Replace with your image URL
            alt="APL Logistics"
            className="w-full h-72 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Header Section */}
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 leading-tight md:text-6xl">
          APL Logistics Vascor Automotive Pvt Ltd.
        </h1>
        <p className="text-xl text-blue-600 mb-12 max-w-4xl mx-auto md:text-2xl">
          Unique challenges, unique solutions.
        </p>

        {/* Content Section */}
        <div className="text-left text-lg text-blue-700 space-y-8 mx-auto max-w-3xl">
          <p>
            We work closely with Original Equipment Manufacturers (OEMs) in India to offer specialized solutions spanning the
            entire supply chain. Backed by cutting-edge technology and a team of dedicated experts, we blend high quality with
            cost-consciousness to deliver effective results.
          </p>

          <p>
            Leveraging the combined expertise of two leading supply chain powerhouses, APL Logistics & VASCOR Logistics, we
            deliver:
          </p>

          <ul className="list-inside list-disc space-y-4 text-blue-700">
            <li>Unmatched Supply Chain experience in India.</li>
            <li>A dedicated and singular approach to support the Automotive Industry.</li>
            <li>End-to-end multimodal transportation and distribution network.</li>
            <li>A broad range of value-added services for every stage of the automotive supply chain.</li>
            <li>Innovation, flexibility, reliability, efficiency, and proven results.</li>
            <li>Real-time information of the consignment through an extensive array of proprietary IT applications.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="/about"
            className="inline-block bg-blue-600 text-white text-lg font-semibold py-4 px-10 rounded-full shadow-xl transition-all transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
