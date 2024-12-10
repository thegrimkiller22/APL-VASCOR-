import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const MultiColumnForm: React.FC = () => {
  const [roles, setRoles] = useState<{ broker: boolean; carrier: boolean }>({
    broker: false,
    carrier: false,
  });

  const [formData, setFormData] = useState({
    mcNumber: "",
    dotNumber: "",
    companyName: "",
    preferredLanesFrom: "",
    preferredLanesTo: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    name: "",
    title: "",
    email: "",
    comments: "",
  });

  const handleRoleChange = (role: "broker" | "carrier") => {
    setRoles((prev) => ({ ...prev, [role]: !prev[role] }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform validation and submission logic
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg ">
      <h2 className="text-2xl font-semibold mb-6">Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* MC Number */}
          <div className="mb-4">
            <Label htmlFor="mcNumber">MC Number *</Label>
            <Input
              id="mcNumber"
              name="mcNumber"
              value={formData.mcNumber}
              onChange={handleInputChange}
              placeholder="Enter MC Number"
              required
            />
          </div>

          {/* DOT Number */}
          <div className="mb-4">
            <Label htmlFor="dotNumber">DOT Number *</Label>
            <Input
              id="dotNumber"
              name="dotNumber"
              value={formData.dotNumber}
              onChange={handleInputChange}
              placeholder="Enter DOT Number"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <Label>Are you a:</Label>
            <fieldset className="space-y-2 mt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="broker"
                  name="broker"
                  checked={roles.broker}
                  onChange={() => handleRoleChange("broker")}
                  className="mr-2"
                />
                <Label htmlFor="broker">Broker</Label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="carrier"
                  name="carrier"
                  checked={roles.carrier}
                  onChange={() => handleRoleChange("carrier")}
                  className="mr-2"
                />
                <Label htmlFor="carrier">Carrier</Label>
              </div>
            </fieldset>
          </div>

          {/* Company Name */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <Label htmlFor="companyName">Company Name *</Label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Enter Company Name"
              required
            />
          </div>

          {/* Preferred Lanes */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <Label>Preferred Lanes</Label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="preferredLanesFrom">From:</Label>
                <Input
                  id="preferredLanesFrom"
                  name="preferredLanesFrom"
                  value={formData.preferredLanesFrom}
                  onChange={handleInputChange}
                  placeholder="From"
                  required
                />
              </div>
              <div>
                <Label htmlFor="preferredLanesTo">To:</Label>
                <Input
                  id="preferredLanesTo"
                  name="preferredLanesTo"
                  value={formData.preferredLanesTo}
                  onChange={handleInputChange}
                  placeholder="To"
                  required
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <Label htmlFor="address">Address *</Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter Address"
              required
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter City"
              required
            />
          </div>

          {/* State */}
          <div className="mb-4">
            <Label htmlFor="state">State *</Label>
            <Input
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="Enter State"
              required
            />
          </div>

          {/* Zip Code */}
          <div className="mb-4">
            <Label htmlFor="zipCode">Zip Code *</Label>
            <Input
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="Enter Zip Code"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter Phone Number"
              required
            />
          </div>

          {/* Name */}
          <div className="mb-4">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Your Name"
              required
            />
          </div>

          {/* Title */}
          <div className="mb-4">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter Your Title"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email"
              required
            />
          </div>

          {/* Comments */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <Label htmlFor="comments">Comments</Label>
            <Textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              placeholder="Any additional comments"
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full mt-6 bg-blue-500 text-white hover:bg-blue-600"
          disabled={
            !formData.mcNumber || !formData.dotNumber || !formData.companyName
          }
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MultiColumnForm;
