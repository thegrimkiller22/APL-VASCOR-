import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const MultiColumnForm: React.FC = () => {
  const [roles, setRoles] = useState<{ broker: boolean; carrier: boolean }>({
    broker: false,
    carrier: false,
  });

  const handleRoleChange = (role: 'broker' | 'carrier') => {
    setRoles((prev) => ({ ...prev, [role]: !prev[role] }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg ">
      <h2 className="text-2xl font-semibold mb-6">Form</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* MC Number */}
          <div className="mb-4">
            <Label htmlFor="mcNumber">MC Number *</Label>
            <Input id="mcNumber" placeholder="Enter MC Number" required />
          </div>

          {/* DOT Number */}
          <div className="mb-4">
            <Label htmlFor="dotNumber">DOT Number *</Label>
            <Input id="dotNumber" placeholder="Enter DOT Number" required />
          </div>

          {/* Are you a: */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <Label>Are you a:</Label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="broker"
                checked={roles.broker}
                onChange={() => handleRoleChange('broker')}
              />
              <Label htmlFor="broker" className="ml-2">Broker</Label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="carrier"
                checked={roles.carrier}
                onChange={() => handleRoleChange('carrier')}
              />
              <Label htmlFor="carrier" className="ml-2">Carrier</Label>
            </div>
          </div>

          {/* Company Name */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <Label htmlFor="companyName">Company Name *</Label>
            <Input id="companyName" placeholder="Enter Company Name" required />
          </div>

          {/* Preferred Lanes - From */}
          <div className="mb-4">
            <Label htmlFor="preferredLanesFrom">Preferred Lanes - From:</Label>
            <Input id="preferredLanesFrom" placeholder="From" required />
          </div>

          {/* Preferred Lanes - To */}
          <div className="mb-4">
            <Label htmlFor="preferredLanesTo">Preferred Lanes - To:</Label>
            <Input id="preferredLanesTo" placeholder="To" required />
          </div>

          {/* Address */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <Label htmlFor="address">Address *</Label>
            <Textarea id="address" placeholder="Enter Address" required />
          </div>

          {/* City */}
          <div className="mb-4">
            <Label htmlFor="city">City *</Label>
            <Input id="city" placeholder="Enter City" required />
          </div>

          {/* State */}
          <div className="mb-4">
            <Label htmlFor="state">State *</Label>
            <Input id="state" placeholder="Enter State" required />
          </div>

          {/* Zip Code */}
          <div className="mb-4">
            <Label htmlFor="zipCode">Zip Code *</Label>
            <Input id="zipCode" placeholder="Enter Zip Code" required />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <Label htmlFor="phone">Phone *</Label>
            <Input id="phone" type="tel" placeholder="Enter Phone Number" required />
          </div>

          {/* Name */}
          <div className="mb-4">
            <Label htmlFor="name">Name *</Label>
            <Input id="name" placeholder="Enter Your Name" required />
          </div>

          {/* Title */}
          <div className="mb-4">
            <Label htmlFor="title">Title *</Label>
            <Input id="title" placeholder="Enter Your Title" required />
          </div>

          {/* Email */}
          <div className=" mb-4">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" placeholder="Enter Your Email" required />
          </div>

          {/* Comments */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <Label htmlFor="comments">Comments</Label>
            <Textarea id="comments" placeholder="Any additional comments" />
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full mt-4 bg-blue-500 text-white hover:bg-blue-600">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MultiColumnForm;