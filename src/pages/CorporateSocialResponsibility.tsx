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
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleSectionToggle = (section: string) => {
    setActiveSection(section);
    setShowMore(false);
  };

  const handleReadMoreToggle = () => {
    setShowMore(!showMore);
  };

  const renderPolicyContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>CSR POLICY</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-lg text-gray-700">
        <p>
          This CSR Policy encompasses AUTOLINX philosophy for social responsibilities and lays down the guidelines and mechanism for undertaking projects, programs, and activities towards such responsibilities.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            The CSR Policy sets out AUTOLINX's commitment to ensuring that our activities extend beyond business and include initiatives and endeavors for the benefit and development of the community and society.
          </li>
          <li>
            In alignment with the above vision, AUTOLINX, through the CSR Activities, will endeavor to enhance value creation in society and the community, promoting sustained growth.
          </li>
          <li>
            This CSR Policy has been framed in accordance with the Companies Act 2013 and its associated rules.
          </li>
        </ul>
        <h3 className="font-semibold">II. VISION STATEMENT AND OBJECTIVE</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            The objective of this CSR Policy is to:
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Outline projects, programs, and activities to be undertaken by AUTOLINX;</li>
              <li>Specify execution modalities;</li>
              <li>Monitor the process for these initiatives;</li>
              <li>Enhance quality of life and economic well-being for local communities;</li>
              <li>Reinforce AUTOLINX's socially responsible image through CSR activities.</li>
            </ul>
          </li>
        </ol>
        <h3 className="font-semibold">III. CSR COMMITTEE</h3>
        <p>
          The CSR Committee, formed under the Act's provisions, comprises two Directors and the Company Secretary. Its responsibilities include recommending CSR policies, reviewing expenditures, and monitoring CSR initiatives.
        </p>
        <h3 className="font-semibold">IV. CSR CELL</h3>
        <p>
          The CSR Cell assists with the implementation and impact assessment of CSR initiatives. Members:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Mr. Umesh Sahai Bhanot</li>
          <li>Mr. Ashish Mohan Chandra Bhatt</li>
        </ul>
        <p>Roles include identifying CSR activities, determining execution modalities, and ensuring timely implementation.</p>
        <h3 className="font-semibold">V. CSR EXPENDITURE AND ALLOCATION</h3>
        <p>
          CSR expenditure is in compliance with the Companies Act 2013. The Board may amend this policy to ensure compliance and alignment with statutory requirements.
        </p>
      </CardContent>
    </Card>
  );
  

  const renderMemberContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>CSR MEMBERS</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-lg text-gray-700">
        <p>
          The CSR Cell assists the CSR Committee in implementing and assessing CSR initiatives. Members include:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Mr. Umesh Sahai Bhanot</li>
          <li>Mr. Ashish Mohan Chandra Bhatt</li>
        </ul>
        <h3 className="font-semibold mt-4">Roles:</h3>
        <ul className="list-decimal list-inside ml-4 space-y-2">
          <li>Identifying CSR activities as directed by the Board;</li>
          <li>Assessing CSR initiatives;</li>
          <li>Executing CSR projects within defined timelines;</li>
          <li>Providing periodic reports to the CSR Committee;</li>
        </ul>
      </CardContent>
    </Card>
  );

  const renderProjectContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>CSR PROJECT</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-lg text-gray-700">
        <p>
          Key initiatives undertaken by AUTOLINX include:
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
  );

  return (
    <section className="py-16 px-6 md:px-16 mt-8 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Sidebar Navbar */}
        <nav className="w-full md:w-1/4 bg-white p-4 mb-8 md:mb-0 md:mr-6">
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
          {activeSection === 'csrPolicy' && renderPolicyContent()}
          {activeSection === 'csrMember' && renderMemberContent()}
          {activeSection === 'csrProject' && renderProjectContent()}
        </div>
      </div>
    </section>
  );
};

export default CorporateSocialResponsibility;
