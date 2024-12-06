import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/constants';
import { Box, ChevronRight, LayoutDashboard, Phone, Truck, Warehouse } from 'lucide-react';

const Inbound: React.FC = () => {
  const itSystems = [
    {
      title: "Transportation Management System (TMS)",
      description: "VASCOR designed the TMS for the just-in-time supply chain to provide the best service to our customers with real-time exception notifications sent to all stakeholders.",
      icon: Truck,
    },
    {
      title: "Mobile App",
      description: "Our mobile app provides real-time tracking of all shipments to allow full route visibility.",
      icon: Phone,
    },
    {
      title: "Dashboard/Portal",
      description: "The web-based dashboard is customized per customer requirements to show your supply chain's most relevant information and data.",
      icon: LayoutDashboard,
    },
    {
      title: "Order Management System (OMS)",
      description: "OMS provides part-level visibility and route-level detail for a full visual of the supply chain from start to finish with route optimization from suppliers to the plant.",
      icon: Box,
    },
    {
      title: "Trailer Utilization Optimizer",
      description: "Maximize trailer space and routing efficiency",
      icon: Truck,
    },
    {
      title: "Yard Management System",
      description: "Manage your yard operations effectively",
      icon: Warehouse,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="container mx-auto">
        {/* Hero Image */}
        <div
          style={{ background: 'url("https://www.vascorlogistics.com/build/assets/files/page_editor_header_images/181.jpg") no-repeat center/cover' }}
          className='relative w-full h-[70vh] flex items-end justify-center pb-4 mt-20'>
          <h3 className='font-bold text-5xl text-white'>Inbound Logistics</h3>
        </div>

        {/* Services Section */}
        <h2 className="text-3xl font-semibold text-blue-900 mb-4 text-center">Our Services</h2>
        <p className="text-xl font-medium text-gray-800 mb-8 text-center">
          Below are the extensive logistics solutions we provide. Let us know what solution is right for you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-lg transition-all transform hover:scale-105 mb-4 p-4 hover:bg-blue-500 group"
            >
              <CardHeader className="group-hover:text-white">
                <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm group-hover:text-white">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* IT Systems Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mt-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">IT Systems</h2>
            <p className="text-muted-foreground mb-8">
              VASCOR provides multiple tools to produce the best efficiency and optimization for your supply chain. Each tool offers state-of-the-art functions with information and data to manage the supply chain and allows our customers to focus on what they do best, making parts.
            </p>

            <div className="space-y-6">
              {itSystems.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <item.icon className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          {item.title}
                          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* IT Systems Image */}
          <div className="lg:sticky lg:top-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://www.vascorlogistics.com/assets/files/Page-Editor-Files/IMG_InboundIT-cropped.jpg"
                  alt="Inbound IT Systems"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inbound;
