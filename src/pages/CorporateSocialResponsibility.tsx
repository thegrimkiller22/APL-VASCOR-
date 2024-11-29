import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CorporateSocialResponsibility: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('csrPolicy');
  const [showMore, setShowMore] = useState<boolean>(false); // State to manage "Read More"

  const handleSectionToggle = (section: string) => {
    setActiveSection(section);
    setShowMore(false); // Reset the "show more" when switching sections
  };

  const handleReadMoreToggle = () => {
    setShowMore(!showMore); // Toggle the "Read More" section
  };

  return (
    <section className="py-16 px-6 md:px-16 mt-8 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Sidebar Navbar */}
        <nav className="w-full md:w-1/4 bg-white p-4   mb-8 md:mb-0 md:mr-6">
          <ul className="space-y-4">
            {['csrPolicy', 'csrMember', 'csrProject'].map((section) => (
              <li key={section}>
                <Button
                  variant={activeSection === section ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => handleSectionToggle(section)}
                >
                  {section.replace('csr', 'CSR ').toUpperCase()}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Section Content */}
        <div className="flex-1 space-y-8">
          {activeSection === 'csrPolicy' && (
            <Card >
              <CardHeader>
                <CardTitle>CSR POLICY</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-gray-700">
                <p>
                  This CSR Policy encompasses AUTOLINX philosophy for social responsibilities and lays down the guidelines and mechanism for undertaking projects, programs, and activities towards such responsibilities.
                </p>
                <li>
                        The CSR Policy sets out AUTOLINX commitment towards ensuring that our activities extend beyond business and include initiatives and endeavors for the benefit and development of the community and society. The CSR Policy lays down guidelines for undertaking programs geared towards social welfare activities or initiatives.
                      </li>
                      <li>
                        In alignment with the above vision, AUTOLINX, through the CSR Activities, will endeavor to enhance value creation in the society and in the community, through its services, conduct and initiatives, so as to promote sustained growth for the society and community, in fulfilment of its role as a socially responsible corporate.
                      </li>
                      <li>
                        This CSR Policy has been framed in accordance with the applicable provisions of the Companies Act 2013 and the rules issued thereunder.
                      </li>
                <Button onClick={handleReadMoreToggle} className="bg-white text-blue-600">
                  {showMore ? 'Read Less' : 'Read More'}
                  </Button>
                {showMore && (
                  <>
                    <h3 className="font-semibold">II. VISION STATEMENT AND OBJECTIVE</h3>
                    <ol className="list-decimal list-inside space-y-2">
                      
                      <li>
                        The objective of this CSR Policy is to:
                        <ul className="list-disc list-inside ml-4 space-y-2">
                          <li>Outline projects, programs and activities to be undertaken by AUTOLINX;</li>
                          <li>Specify the modalities of execution of such projects, programs and activities;</li>
                          <li>Monitor the process to be followed for such projects, programs and activities;</li>
                          <li>
                            Directly or indirectly take up programs that benefit the communities in and around its work centers and results, over a period of time, in enhancing the quality of life and economic well-being of the local populace;
                          </li>
                          <li>
                            Generate community goodwill for AUTOLINX and help reinforce a positive and socially responsible image, through our CSR Activities.
                          </li>
                        </ul>
                      </li>
                    </ol>
                    <h3 className="font-semibold">III. CSR COMMITTEE</h3>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>
                        The CSR Committee has been constituted in accordance with the provisions of the Act comprising of the 2 (Two) Directors. The Company Secretary shall be the secretary to the Committee. The CSR Committee may invite other experts/invitees as per its requirements.
                      </li>
                      <li>
                        The CSR Committee shall be responsible for:
                        <ul className="list-disc list-inside ml-4 space-y-2">
                          <li>
                            To formulate and recommend to the Board, a CSR policy which shall indicate the activities to be undertaken by the Company as per the Companies Act, 2013;
                          </li>
                          <li>
                            To review and recommend the amount of expenditure to be incurred on the activities to be undertaken by the Company;
                          </li>
                          <li>To monitor the CSR Policy of the Company from time to time;</li>
                          <li>
                            Any other matter as the CSR Committee may deem appropriate after approval of the Board of Directors or as may be directed by the Board of Directors from time to time.
                          </li>
                        </ul>
                      </li>
                    </ol>
                    <h3 className="font-semibold">IV. CSR CELL</h3>
                    <p>
                      The CSR Cell has been constituted to assist the CSR Committee with the implementation and impact assessment of the CSR initiatives. The CSR Cell comprises of the following:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Mr. Umesh Sahai Bhanot</li>
                      <li>Mr. Ashish Mohan Chandra Bhatt</li>
                    </ul>
                    <h4 className="font-semibold mt-4">Role of the CSR Cell:</h4>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Identifying CSR Activities at the directions of the Board and the CSR Committee;</li>
                      <li>Undertaking impact assessment of the CSR Activities;</li>
                      <li>
                        Determining the modalities of execution including targets and timelines in consultation with the CSR Committee;
                      </li>
                      <li>
                        Timely implementation of the CSR Activities approved by the Board in compliance with the Applicable provisions of the Act and CSR Rules;
                      </li>
                      <li>
                        Providing periodic reports to the CSR Committee on implementation as well as assessment carried out through field visits and feedback sessions;
                      </li>
                      <li>
                        Any other assistance as may be required by the Board and the CSR Committee in relation to Implementation of the CSR Activities.
                      </li>
                    </ul>
                    <h3 className="font-semibold">V. CSR EXPENDITURE AND ALLOCATION</h3>
                    <p>
                      The CSR expenditure shall be as per the requirements of the Companies Act 2013. The Company may in compliance with the provisions of the Act and the CSR Rules, including notifications and clarifications issued thereunder.
                    </p>
                    <h3 className="font-semibold">VI. AMENDMENT</h3>
                    <p>
                      The CSR Committee is empowered to amend or modify the CSR Policy and such changes shall be placed before the Board for its approval. The Board may subject to compliance with applicable law, at any time approve or alter, amend or modify the CSR Policy, as it deems fit to comply with the statutory obligation to undertake the CSR Activities.
                    </p>
                  </>
                )}
              </CardContent>
              
            </Card>
          )}

          {activeSection === 'csrMember' && (
            <Card>
              <CardHeader>
                <CardTitle>CSR MEMBERS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-gray-700">
                <p>
                  The CSR Cell has been constituted to assist the CSR Committee with the implementation and impact assessment of the CSR initiatives. The CSR Cell comprises of the following members:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Mr. Umesh Sahai Bhanot</li>
                  <li>Mr. Ashish Mohan Chandra Bhatt</li>
                </ul>
                <h3 className="font-semibold mt-4">Role of the CSR Cell:</h3>
                <ul className="list-decimal list-inside ml-4 space-y-2">
                  <li>Identifying CSR Activities at the directions of the Board and the CSR Committee;</li>
                  <li>Undertaking impact assessment of the CSR Activities;</li>
                  <li>Determining the modalities of execution, including targets and timelines in consultation with the CSR Committee;</li>
                  <li>
                    Timely implementation of the CSR Activities approved by the Board in compliance with the applicable provisions of the Act and CSR Rules;
                  </li>
                  <li>
                    Providing periodic reports to the CSR Committee on implementation as well as assessments carried out through field visits and feedback sessions;
                  </li>
                  <li>
                    Any other assistance as may be required by the Board and the CSR Committee in relation to the implementation of the CSR Activities.
                  </li>
                </ul>
              </CardContent>
            </Card>
          )}

          {activeSection === 'csrProject' && (
            <Card>
              <CardHeader>
                <CardTitle>CSR PROJECT</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-gray-700">
                <p>
                  The CSR Project section highlights various initiatives undertaken by the organization. Key projects include:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    <a
                      href="http://www.apllvascor.com/assets/CSR/PM_CARES_BANK_receipt.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      PM Cares
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.apllvascor.com/assets/CSR/Kardigudda_Boys_Girls_B_Week_2.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Kardigudda Boys & Girls Week
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.apllvascor.com/assets/CSR/ELImpactReport202021.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Impact Report 2020-21
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.apllvascor.com/assets/CSR/billsandphotoslastSISSO2021.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Photos
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default CorporateSocialResponsibility;