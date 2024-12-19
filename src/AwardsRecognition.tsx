import { SquareArrowOutUpRight } from "lucide-react";

const AwardsRecognition = () => {
  return (
    <section className="bg-white py-20 mt-48 px-6 md:px-16">
      {/* Header Section */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight text-center mb-16">
        Awards and Recognition
      </h1>

      {/* Awards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-left">
        <div className="px-4 md:px-6 py-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Awards</h2>
          <ul className="space-y-4">
            <li className="inline-flex gap-2 items-start">
              APL Logistics VASCOR Automotive Pvt Ltd now ISO 9001 certified
              <a
                href="/assets/awards.png"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <SquareArrowOutUpRight className="w-5 h-5" />
              </a>
            </li>
            <li className="inline-flex gap-2 items-start">
              APL Logistics VASCOR Automotive awarded for "Best Third Party
              Logistics Company"
              <a
                href="http://www.apllvascor.com/scale.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <SquareArrowOutUpRight className="w-5 h-5" />
              </a>
            </li>
            <li className="inline-flex gap-2 items-start">
              APL Logistics VASCOR Automotive Pvt Ltd has been awarded as the
              ‘Best 3PL Company of the Year (Automotive)' at Inflection Awards
              2018!
            </li>
            <li className="inline-flex gap-2 items-start">
              APL Logistics VASCOR Automotive Pvt Ltd has been awarded as the
              'Best Rail Freight Company of the Year' at Global Logistics
              Excellence Awards by CNBC Network 18.
            </li>
            <li className="inline-flex gap-2 items-start">
              Container Corporation of India awarded
              <a
                href="http://www.apllvascor.com/pdf/APLL_VASCOR_Wins_Award_In_India.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <SquareArrowOutUpRight className="w-5 h-5" />
              </a>
            </li>
            <li className="inline-flex gap-2 items-start">
              Express Logistics & Supply Chain Conclave award
              <a
                href="http://www.apllvascor.com/pdf/APLL_VASCOR_Wins_Award_In_India.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <SquareArrowOutUpRight className="w-5 h-5" />
              </a>
            </li>
            <li className="inline-flex gap-2 items-start">
              APL Logistics VASCOR Automotive receives "Best Emerging Player"
              award
              <a
                href="http://www.apllvascor.com/pdf/APLL_VASCOR_Wins_Award_In_India.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <SquareArrowOutUpRight className="w-5 h-5" />
              </a>
            </li>
            <li className="inline-flex gap-2 items-start">
              AutoLinxSMtrain flagged off by India Railway Minister
              <a
                href="http://www.apllvascor.com/pdf/Train-carrying-automobiles-flagged-off_Business-Line.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <SquareArrowOutUpRight className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full h-96 md:h-[700px] bg-red-50">
          <img
            src="/assets/awards.png"
            alt="ISO Certification"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Case Study Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className="px-4 md:px-6 py-8 order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Case Study</h2>
          <p className="text-gray-600">
            APL Logistics VASCOR Automotive has been a key player in the
            logistics and supply chain industry, offering innovative solutions
            for automotive transportation. This case study outlines their
            approach to enhancing operational efficiency and improving logistics
            performance. Through their strategic initiatives and investment in
            cutting-edge technology, APL Logistics VASCOR Automotive has made
            significant strides in the automotive logistics sector.
          </p>
          <ul className="list-none space-y-4 mt-4 text-blue-700">
            <li>
              <a
                href="http://www.apllvascor.com/assets/pdf/APLL_VASCOR_Case_Study.pdf"
                className="text-blue-600 hover:text-blue-700 inline-flex items-start gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                AutoLinx Case Study <SquareArrowOutUpRight className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full h-96 md:h-[750px] bg-red-50">
          <img
            src="/assets/case study.png"
            alt="Case Study"
            className="w-full h-full object-center object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Media Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className="px-4 md:px-6 py-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Media</h2>
          <ul className="list-none space-y-4 text-blue-700">
            <li>
              <strong>
                <a
                  href="http://www.apllvascor.com/scale.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  APL Logistics VASCOR Automotive AutoLinx
                </a>
              </strong>
            </li>
            <li>
              <strong>
                <a
                  href="http://www.apllvascor.com/img/ISO.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  APL Logistics VASCOR Overview
                </a>
              </strong>
            </li>
            <li>
              <strong>
                <a
                  href="http://www.apllvascor.com/scale.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  APL Logistics VASCOR Automotive AutoDirect
                </a>
              </strong>
            </li>
          </ul>
        </div>
        <div className="w-full h-96 md:h-[750px] bg-red-50">
          <img
            src="assets/together.png"
            alt="Media"
            className="w-full h-full object-center object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Industry Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className="px-4 md:px-6 py-8 order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Industry Links</h2>
          <ul className="list-none space-y-4 text-blue-700">
            <li>
              <strong>
                <a
                  href="https://www.apllogistics.com//"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  APL Logistics
                </a>
              </strong>
            </li>
            <li>
              <strong>
                <a
                  href="https://www.vascorlogistics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  VASCOR
                </a>
              </strong>
            </li>
            <li>
              <strong>
                <a
                  href="https://www.siam.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Society of Indian Automobile Manufacturers
                </a>
              </strong>
            </li>
          </ul>
        </div>
        <div className="w-full h-96 md:h-[750px] bg-red-50">
          <img
            src="/assets/trophy.png"
            alt="Industry Links"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;
