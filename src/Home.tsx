import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { deliveries, vehicleDistributionCenters } from "@/lib/constants";

const HeroSection = () => {
  return (
    <div className="mt-20 relative flex flex-col items-center justify-start w-full h-dvh overflow-hidden md:flex-row">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/AutoLinx animation video.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Header Content */}
      <div className="relative z-20 w-full px-6 md:w-1/2 md:ml-20 leading-snug mt-16 md:mt-32 lg:mt-48 text-center md:text-left">
        <h1 className="font-extrabold text-4xl md:text-6xl leading-tight text-black">
          APL Logistics Vascor <br /> Automotive Pvt Ltd.
        </h1>
        <p className="font-semibold text-lg md:text-xl my-4 text-black">
          Unique challenges, unique solutions.
        </p>
        <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 mt-4">
          <Input
            type="text"
            placeholder="Track your VIN"
            tabIndex={2}
            className="py-3 px-4 text-base md:text-lg bg-white/90 border-0 w-full"
          />
          <Button
            type="button"
            className="py-3 px-8 text-base md:text-lg w-full md:w-auto"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <section className="bg-white w-full min-h-dvh overflow-hidden">
      <HeroSection />

      {/* What we do section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-dvh gap-4 px-4 md:px-0 order-2 ">
        <div className="px-4 md:px-6 py-8 order-2 md:order-1">
          <h3 className="text-primary font-bold inline-flex items-center justify-start gap-4 text-lg">
            <span className="w-8 h-0.5 bg-primary inline-block" /> What We Do
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">APL Logistics</h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            We work closely with Original Equipment Manufacturers (OEMs) in
            India to offer specialized solutions spanning the entire supply
            chain. We back those solutions with cutting-edge technology and a
            team of hard-working experts, to perfectly mesh high quality with
            cost-consciousness. We leverage the combined expertise of two
            leading supply chain powerhouses, APL Logistics & VASCOR Logistics.
            <br />
            We deliver:
            <ul className="list-disc list-inside">
              {deliveries.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </p>
          <Button
            type="button"
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded"
          >
            <a href="About-us">About Us</a>
          </Button>
        </div>
        <div className="w-full h-64 md:h-full bg-red-50">
          <img
            src="/assets/DJI_0246.jpg"
            alt=""
            className="w-full h-full object-center object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-dvh gap-4 px-4 md:px-0">
        <div className="px-6 py-8 md:py-16 md:order-1">
          <h3 className="text-primary font-bold inline-flex items-center justify-start gap-4 text-lg">
            <span className="w-8 h-0.5 bg-primary inline-block" /> Corporate Social Responsibility
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Corporate Social Responsibility (CSR)
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            At APL Logistics VASCOR Automotive, we believe in contributing to
            the well-being of the communities in which we operate. Our Corporate
            Social Responsibility (CSR) initiatives are designed to create a
            positive impact on society, the environment, and the economy. We
            strive to integrate sustainable practices into every aspect of our
            operations, from reducing our carbon footprint to investing in local
            communities.
            <br />
            Our CSR efforts focus on several key areas:
            <ul className="list-disc list-inside">
              <li>
                <strong>Environmental Sustainability:</strong> Implementing
                eco-friendly practices across our supply chain to reduce
                environmental impact.
              </li>
              <li>
                <strong>Community Engagement:</strong> Supporting education,
                healthcare, and economic development in the regions where we
                operate.
              </li>
              <li>
                <strong>Employee Welfare:</strong> Creating a safe, inclusive,
                and nurturing work environment for all our employees.
              </li>
              <li>
                <strong>Ethical Business Practices:</strong> Upholding high
                standards of transparency, integrity, and accountability in our
                business operations.
              </li>
            </ul>
          </p>
          <Button
            type="button"
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded"
          >
            <a href="corporate-social-responsibility">
              Corporate Social Responsibility
            </a>
          </Button>
        </div>
        <div className="w-full h-64 md:h-full bg-red-50 order-1 md:order-2">
          <img
            src="/assets/_MG_9708.jpg"
            alt=""
            className="w-full h-full object-center object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-dvh gap-4 px-4 md:px-0">
        <div className="px-4 md:px-6 py-8 order-2 md:order-1">
          <h3 className="text-primary font-bold inline-flex items-center justify-start gap-4 text-lg">
            <span className="w-8 h-0.5 bg-primary inline-block" /> What We Do
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Vehicle Distribution Centers
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            In addition to our core rail transportation network for finished
            vehicle distribution, APL Logistics VASCOR Automotive will operate
            a network of vehicle distribution centers and yards. Sites are
            strategically located adjacent to the rail terminals. These centers
            provide various value-added services, including:
            <ul className="list-disc list-inside">
              {vehicleDistributionCenters.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </p>
          <Button
            type="button"
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded"
          >
            <a href="inbound">Inbound Logistics</a>
          </Button>
        </div>
        <div className="w-full h-64 md:h-full bg-red-50">
          <img
            src="/assets/DJI_0285.jpg"
            alt=""
            className="w-full h-full object-center object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
