import ProfileCard from "@/components/ProfileCard";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { industries_we_serve, profiles } from "@/lib/constants";
import { Link } from "react-router-dom";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Who We Are", href: "#who-we-are" },
  { title: "Industries We Serve", href: "#industries" },
  { title: "VASCOR Leadership", href: "#leadership" },
  { title: "Associations", href: "#associations" },
  { title: "Awards", href: "#awards" },
];

const About: React.FC = () => {
  return (
    <section className="w-full min-h-screen mt-20 bg-gray-50">
      {/* Header Section */}
      <div
        className="relative w-full h-[70vh] flex items-end justify-center pb-4 bg-cover bg-center mt-20"
        style={{
          backgroundImage: 'url("aplmedia/KMB07464.JPG")',
        }}
      >
        {/* Header Text */}
        <h3 className="font-bold text-5xl text-[#1e40af]">About VASCOR</h3>
      </div>

      {/* Navigation */}
      <nav className="w-full px-4 py-6 mt-4 mb-12">
        <div className="container mx-auto">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {navItems.map((item, index) => (
              <li key={item.href} className="flex items-center">
                <Link
                  to={item.href}
                  className="text-blue-600 hover:text-blue-800 transition-colors text-base"
                >
                  {item.title}
                </Link>
                {index < navItems.length - 1 && (
                  <span className="text-blue-600 mx-4">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Who We Are Section */}
      <Section title="Trusted Experience" heading="Who We Are" id="who-we-are">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              A privately held joint venture between APL Logistics® and
              Fujitrans Corporation®, VASCOR is infused with expertise in
              providing the best service and value in global supply chain
              solutions. It's in our name as VASCOR stands for{" "}
              <span className="font-semibold">V</span>alue{" "}
              <span className="font-semibold">A</span>dded{" "}
              <span className="font-semibold">S</span>ervice{" "}
              <span className="font-semibold">COR</span>poration!
            </p>
            <p className="text-gray-600 leading-relaxed">
              VASCOR started in 1987 to serve the automotive sector in the heart
              of horse country, Georgetown, KY. Today, our expertise extends to
              industries like manufacturing, food and beverage, and retail
              distribution.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We provide custom solutions across the supply chain, including
              inbound transportation, finished vehicle logistics, IT services,
              and business intelligence. Our ISO 9001:2015 certified Quality
              Management System ensures our solutions meet high standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Combining expertise, integrity, and ethical standards, we deliver
              total confidence in our solutions to help clients reduce costs and
              optimize their supply chain.
            </p>
          </div>

          {/* Video */}
          <div className="lg:sticky lg:top-8">
            <div className="w-full max-w-lg mx-auto">
              <iframe
                className="w-full aspect-video rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/N4qoQmSFuIA?autoplay=1&mute=1"
                title="Why should VASCOR be your 3PL provider?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl font-bold text-gray-800 max-w-3xl">
              Contact us to find the right customized solution for your
              business!
            </h2>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-full text-lg font-semibold"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries_we_serve.map((industry) => (
              <div
                key={industry.title}
                className="p-8 bg-white shadow-lg grid place-items-center h-96 rounded-xl"
              >
                <div className="">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-32 h-32 mx-auto "
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold mt-4">{industry.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <Section title="Experience and Expertise" heading="VASCOR Leadership">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <ProfileCard key={profile.name} card_details={profile} />
          ))}
        </div>
      </Section>

      {/* Footer CTA */}
      <section className="bg-blue-600 text-white w-full py-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] place-items-center">
          <p className="text-xl lg:text-3xl font-bold inline-block max-w-[32ch]">
            Contact us to decide what customized solution is right for you!
          </p>
          <Link
            to="/contact-us"
            className="border-2 py-6 px-14 rounded-full text-base font-semibold uppercase -ml-24 hover:-translate-y-2 transition-transform duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </section>
  );
};

export default About;
