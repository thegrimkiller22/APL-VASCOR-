import React, { useState } from 'react';

const CorporateSocialResponsibility: React.FC = () => {
  // Set the default active section to 'csrPolicy'
  const [activeSection, setActiveSection] = useState<string | null>('csrPolicy');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSectionToggle = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 md:px-16 mt-8">
      <div className="container mx-auto">
        {/* Navbar */}
        <div className="flex justify-center space-x-6 mb-8">
          <button
            onClick={() => handleSectionToggle('csrPolicy')}
            className={`text-xl font-semibold transition duration-300 ${activeSection === 'csrPolicy' ? 'text-blue-700' : 'text-gray-900 hover:text-blue-600'}`}
          >
            CSR POLICY
          </button>
          <button
            onClick={() => handleSectionToggle('csrMember')}
            className={`text-xl font-semibold transition duration-300 ${activeSection === 'csrMember' ? 'text-blue-700' : 'text-gray-900 hover:text-blue-600'}`}
          >
            CSR MEMBER
          </button>
          <button
            onClick={() => handleSectionToggle('csrProject')}
            className={`text-xl font-semibold transition duration-300 ${activeSection === 'csrProject' ? 'text-blue-700' : 'text-gray-900 hover:text-blue-600'}`}
          >
            CSR PROJECT
          </button>
        </div>

        {/* Section content */}
        <div className="space-y-16">
          {/* CSR POLICY */}
          {activeSection === 'csrPolicy' && (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">CSR POLICY</h2>
              <p className="text-lg text-gray-700 mb-4">
                This CSR Policy encompasses AUTOLINX philosophy for social responsibilities and lays down the guidelines and mechanism for undertaking projects, programs and activities towards such responsibilities.
              </p>
              <h3 className="text-xl font-semibold mb-2">VISION STATEMENT AND OBJECTIVE</h3>
              <ol className="list-decimal list-inside text-lg text-gray-700 mb-4 space-y-2">
                <li>The CSR Policy sets out AUTOLINX commitment towards ensuring that our activities extend beyond business and include initiatives and endeavors for the benefit and development of the community and society.</li>
                <li>In alignment with the above vision, AUTOLINX, through the CSR Activities, will endeavor to enhance value creation in the society and in the community.</li>
                <li>This CSR Policy has been framed in accordance with the applicable provisions of the Companies Act 2013.</li>
                <li>The objective of this CSR Policy is to:
                  <ul className="list-disc list-inside">
                    <li>Outline projects, programs and activities to be undertaken by AUTOLINX;</li>
                    <li>Specify the modalities of execution of such projects, programs and activities;</li>
                    <li>Monitor the process to be followed for such projects, programs and activities;</li>
                    <li>Directly or indirectly take up programs that benefit the communities in and around its work centers;</li>
                    <li>Generate community goodwill for AUTOLINX.</li>
                  </ul>
                </li>
              </ol>
              <button 
                onClick={toggleExpand}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
              {isExpanded && (
                <div className="mt-4 text-lg text-gray-700 space-y-2">
                  <h3 className="font-semibold">III. CSR COMMITTEE</h3>
                  <p>The CSR Committee has been constituted in accordance with the provisions of the Act comprising of the 2 (Two) Directors...</p>
                  <h3 className="font-semibold">IV. CSR CELL</h3>
                  <p>The CSR Cell has been constituted to assist the CSR Committee with the implementation and impact assessment of the CSR initiatives. It will coordinate with various departments to ensure effective execution...</p>
                  <h3 className="font-semibold">V. CSR EXPENDITURE AND ALLOCATION</h3>
                  <p>The CSR expenditure shall be as per the requirements of the Companies Act 2013, ensuring that a minimum percentage of the average net profits of the company is allocated for CSR activities...</p>
                  <h3 className="font-semibold">VI. AMENDMENT</h3>
                  <p>The CSR Committee is empowered to amend or modify the CSR Policy as necessary to align with the evolving needs of the community and regulatory requirements...</p>
                </div>
              )}
            </div>
          )}

          {/* CSR MEMBER */}
          {activeSection === 'csrMember' && (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">CSR MEMBER</h2>
              <p className="text-lg text-gray-700 mb-4">
                The CSR Cell has been constituted to assist the CSR Committee with the implementation and impact assessment of the CSR initiatives. The CSR Cell comprises of the following members:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-4 space-y-2">
                <li>Mr. Umesh Sahai Bhanot</li>
                <li>Mr. Ashish Mohan Chandra Bhatt</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Role of the CSR Cell</h3>
              <ol className="list-decimal list-inside text-lg text-gray-700 mb-4 space-y-2">
                <li>Identifying CSR Activities at the directions of the Board and the CSR Committee;</li>
                <li>Undertaking impact assessment of the CSR Activities;</li>
                <li>Determining the modalities of execution including targets and timelines in consultation with the CSR Committee;</li>
                <li>Timely implementation of the CSR Activities approved by the Board in compliance with the Applicable provisions of the Act and CSR Rules;</li>
                <li>Providing periodic reports to the CSR Committee on implementation as well as assessment carried out through field visits and feedback sessions;</li>
                <li>Any other assistance as may be required by the Board and the CSR Committee in relation to Implementation of the CSR Activities.</li>
              </ol>
            </div>
          )}

          {/* CSR PROJECT */}
          {activeSection === 'csrProject' && (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">CSR PROJECT</h2>
              <p className="text-lg text-gray-700 mb-4">
                The CSR Project section highlights various initiatives undertaken by the organization. Key projects include:
              </p>
              <h3 className="text-xl font-semibold mb-2">
                <a href="http://www.apllvascor.com/assets/CSR/PM_CARES_BANK_receipt.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PM Cares</a>
              </h3>
              <h3 className="text-xl font-semibold mb-2">
                <a href="http://www.apllvascor.com/assets/CSR/Kardigudda_Boys_Girls_B_Week_2.pdf" target="_blank" className="text-blue-600 hover:underline">Kardigudda Boys & Girls Week</a>
              </h3>
              <h3 className="text-xl font-semibold mb-2">
                <a href="http://www.apllvascor.com/assets/CSR/ELImpactReport202021.pdf" target="_blank" className="text-blue-600 hover:underline">Impact Report 2020-21</a>
              </h3>
              <h3 className="text-xl font-semibold mb-2">
                <a href="http://www.apllvascor.com/assets/CSR/billsandphotoslastSISSO2021.pdf" target="_blank" className="text-blue-600 hover:underline">Photos</a>
              </h3>
            </div>
          )}
        </div>
      </div>
  </section>)
}

export default CorporateSocialResponsibility;