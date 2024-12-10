import { SquareArrowOutUpRight } from "lucide-react";

const AwardsRecognition = () => {
  return (
    <section className="bg-white py-20 mt-48 px-6 md:px-16">
      {/* Header Section */}
      <h1 className="text-5xl font-extrabold text-blue-900 leading-tight md:text-6xl text-center mb-32">
        Awards and Recognition
      </h1>
      <div className="grid grid-cols-2 w-full  text-lg leading-relaxed text-left">
        <div className="px-6 py-10">
          <h2 className="text-5xl font-bold mb-4 text-left  ">Awards</h2>
          <ul className="space-y-4">
            <li className="inline-flex gap-2 items-start justify-start">
              APL Logistics VASCOR Automotive Pvt Ltd now ISO 9001 certified
              <a
                href="http://www.apllvascor.com/img/ISO.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <SquareArrowOutUpRight className="size-4" />
              </a>
            </li>
            <li className="inline-flex gap-2 items-start justify-start">
              APL Logistics VASCOR Automotive awarded for "Best Third Party
              Logistics Company"
              <a
                href="http://www.apllvascor.com/scale.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <SquareArrowOutUpRight className="size-4" />
              </a>
            </li>
            <li className="inline-flex gap-2 items-start justify-start">
              APL Logistics VASCOR Automotive Pvt Ltd has been awarded as the
              ‘Best 3PL Company of the Year (Automotive)' at Inflection Awards
              2018!
            </li>
            <li className="inline-flex gap-2 items-start justify-start">
              APL Logistics VASCOR Automotive Pvt Ltd has been awarded as the
              'Best Rail Freight Company of the Year' at Global Logistics
              Excellence Awards by CNBC Network 18.
            </li>
            <li className="inline-flex gap-2 items-start justify-start">
              Container Corporation of India awarded
              <a
                href="http://www.apllvascor.com/pdf/APLL_VASCOR_Wins_Award_In_India.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <SquareArrowOutUpRight className="size-4" />
              </a>
            </li>
            <li className="inline-flex gap-2 items-start justify-start">
              Express Logistics & Supply Chain Conclave award
              <a
                href="http://www.apllvascor.com/pdf/APLL_VASCOR_Wins_Award_In_India.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <SquareArrowOutUpRight className="size-4" />
              </a>
            </li>
            <li className="inline-flex gap-2 items-start justify-start">
              APL Logistics VASCOR Automotive receives "Best Emerging Player"
              award
              <a
                href="http://www.apllvascor.com/pdf/APLL_VASCOR_Wins_Award_In_India.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <SquareArrowOutUpRight className="size-4" />
              </a>
            </li>
            <li className="inline-flex gap-2 items-start justify-start">
              AutoLinxSMtrain flagged off by India Railway Minister
              <a
                href="http://www.apllvascor.com/pdf/Train-carrying-automobiles-flagged-off_Business-Line.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <SquareArrowOutUpRight className="size-4" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full h-[700px] bg-red-50">
          <img
            src="http://www.apllvascor.com/img/ISO.jpg"
            alt="ISO Certification"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 w-full ">
        <div className="px-6 py-16 order-2">
          <h3 className="text-primary font-bold inline-flex items-center justify-start gap-4 text-lg">
            {" "}
            <span className="w-8 h-0.5 bg-primary inline-block" /> What We Do
          </h3>
          <h2 className="text-5xl font-bold mb-4">Case Study </h2>
          <p>
            {" "}
            APL Logistics VASCOR Automotive has been a key player in the
            logistics and supply chain industry, offering innovative solutions
            for automotive transportation. This case study outlines their
            approach to enhancing operational efficiency and improving logistics
            performance. Through their strategic initiatives and investment in
            cutting-edge technology, APL Logistics VASCOR Automotive has made
            significant strides in the automotive logistics sector.{" "}
          </p>
          <br></br>
          <ul className="list-none space-y-4 text-blue-700">
            <li>
              <a
                href="http://www.apllvascor.com/assets/pdf/APLL_VASCOR_Case_Study.pdf"
                className="text-blue-600 hover:text-blue-700 inline-flex items-start justify-start gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                AutoLinx Case Study <SquareArrowOutUpRight className="size-4" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full h-[750px] bg-red-50">
          <img
            src="/assets/case study.png"
            alt=""
            className="w-full h-full object-center object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 w-full ">
        <div className="px-6 py-16">
          <h2 className="text-5xl font-bold mb-4 text-left">Media</h2>
          <p className="text-gray-500 text-lg leading-relaxed text-left">
            <ul className="list-none space-y-4">
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
                </strong>{" "}
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
                </strong>{" "}
              </li>
            </ul>
          </p>
        </div>
        <div className="w-full h-[750px] bg-red-50">
          <img
            src="assets/together.png"
            alt="Aerial view of parking lot with cars"
            className="w-full h-full object-center object-cover "
            loading="lazy"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 w-full h-dvh">
        <div className="px-6 py-16 order-2">
          <h2 className="text-5xl font-bold mb-4 text-left">Industry Links</h2>
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
        <div className="w-full h-[750px] bg-red-50">
          <img
            src="/assets/trophy.png"
            alt="Aerial view of parking lot with cars"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;
