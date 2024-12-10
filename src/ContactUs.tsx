import React from "react";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Contact Details */}
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg mb-8 md:mb-0 md:mr-8">
          <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">
            Contact Us
          </h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Address
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Plot No 19, 4th Floor, Sewa Tower,
            <br />
            Near Maruti Udyog Material Gate,
            <br />
            Udyog Vihar, Phase IV,
            <br />
            Sector 18, Gurgaon,
            <br />
            Haryana 122015, India
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Contact No.:</strong>{" "}
            <a
              href="tel:1800 123 827267"
              className="text-blue-600 hover:underline"
            >
              1800 123 827267
            </a>
          </p>
        </div>

        {/* Responsive Map */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Location
          </h2>
          <div className="w-full h-96 relative overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Company Location"
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.586227601055!2d77.07545037556831!3d28.4920051757417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1937d8c00001%3A0x40c7b2bdd9e6b022!2sAPL%20LOGISTICS%20%7C%20VASCOR!5e0!3m2!1sen!2sin!4v1732515149484!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                border: 0,
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
