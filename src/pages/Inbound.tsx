import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils'; // Import ShadCN's utility for className conditional joining 
import { services } from '@/lib/constants';
const Inbound: React.FC = () => {
  

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 mt-8 text-center">
          Inbound Logistics
        </h1>

        <div className="relative mb-8">
          <img
            src="https://imgs.search.brave.com/4a7Ef7aKj9mSSDOlgOZMtp7rptuD2gupoWIslhU0iCw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0M0/RDFCQVFILTFWLU1D/RGxSVVEvY29tcGFu/eS1iYWNrZ3JvdW5k/XzEwMDAwLzAvMTYw/OTk2MjkwODI5NS92/YXNjb3JfdHJhbnNw/b3J0X2x0ZF9jb3Zl/cj9lPTIxNDc0ODM2/NDcmdj1iZXRhJnQ9/SF8tN1pNMnh5dUct/d0NCT2xuNWI5Yy1m/VXhOTGZRcndQOTVi/NzBxeGgtbw.jpeg"
            alt="Inbound Logistics"
            className="w-full h-auto mb-4 rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-semibold text-white shadow-lg p-4 text-center">
              {/* Optional: Image overlay text */}
            </h2>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-blue-900 mb-4 text-center">Our Services</h2>

        <p className="text-xl font-bold text-black mb-8 text-center">
          Below are the extensive logistics solutions we provide. Let us know what solution is right for you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                'shadow-lg transition-all transform hover:scale-105 mb-4 p-4 hover:bg-blue-500 hover:text-white transition-colors duration-300  '
              )}
            >
              {/* Apply hover effect to the entire card */}
              <CardHeader className="flex-1 hover:text-white">
                <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm flex-1 hover:text-white">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inbound;
