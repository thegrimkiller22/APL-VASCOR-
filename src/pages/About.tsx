import ProfileCard from '@/components/ProfileCard';
import { profiles } from '@/lib/constants';
import { Link } from 'react-router-dom';
interface NavItem {
	title: string;
	href: string;
}

const navItems: NavItem[] = [
	{ title: 'Who We Are', href: '#who-we-are' },
	{ title: 'Industries We Serve', href: '#industries' },
	{ title: 'VASCOR Leadership', href: '#leadership' },
	{ title: 'Associations', href: '#associations' },
	{ title: 'Awards', href: '#awards' },
];
const About: React.FC = () => {
	return (
		<section className='w-full min-h-dvh relative mt-20 '>
			<div
				style={{ background: 'url("https://www.vascorlogistics.com/build/assets/files/page_editor_header_images/iStock-893188474.jpg") no-repeat center/cover' }}
				className='relative w-full h-[70vh] flex items-end justify-center pb-4 mt-20'>
				<h3 className='font-bold text-5xl text-white'>About VASCOR</h3>
			</div>

			<nav className='w-full px-4 py-6 bg-white my-4'>
				<div className='container mx-auto'>
					<ul className='flex flex-wrap items-center justify-center gap-2 md:gap-4'>
						{navItems.map((item, index) => (
							<li
								key={item.href}
								className='flex items-center'>
								<Link
									to={item.href}
									className='text-blue-800 hover:text-blue-900 transition-colors text-sm md:text-base lg:text-lg font-medium'>
									{item.title}
								</Link>
								{index < navItems.length - 1 && <span className='text-blue-600 mx-2 md:mx-4'>|</span>}
							</li>
						))}
					</ul>
				</div>
			</nav>

			

			<div className='container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{profiles.map(profile => (
					<ProfileCard
						key={profile.name}
						card_details={profile}
					/>
				))}
			</div>
		</section>
	);

	// return (
	//   <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 md:px-16">

	//     <div className='grid grid-cols-2 w-full h-dvh'>
	// 			<div className='px-6 py-16'>
	// 				<h3 className='text-primary font-bold inline-flex items-center justify-start gap-4 text-lg'>
	// 					{' '}
	// 					<span className='w-8 h-0.5 bg-primary inline-block' /> About us
	// 				</h3>
	// 				<h2 className='text-5xl font-bold mb-4'>Company Description</h2>
	// 				<p className='text-gray-500 text-lg leading-relaxed '>
	//         APL Logistics Vascor Automotive Pvt. Ltd. is a Delhi-based third-party logistics specialist serving the automotive
	//           sector in India. Incorporated in 2012, the company is a joint venture of two of the most respected brands in
	//           international supply chain management and automotive logistics: APL Logistics and VASCOR.
	//           In 2011, the company began studying the automotive logistics market in India. Intensive discussions with OEMs,
	//           key stakeholders, the Indian Railway, and transporters helped establish the essentials of a rail-based mode of
	//           transportation. Combining our expertise and experience in finished vehicle logistics in India and the US, our service
	//           offering was tailored to not only meet but surpass the industry's expectations.

	// 				</p>
	// 			</div>
	// 			<div className='w-full h-full bg-red-50'>
	// 				<img
	// 					src=''
	// 					alt=''
	// 				/>
	// 			</div>
	// 		</div>
	//     <div className='grid grid-cols-2 w-full h-dvh'>
	// 			<div className='px-6 py-16 order-2'>
	// 				<h3 className='text-primary font-bold inline-flex items-center justify-start gap-4 text-lg'>
	// 					{' '}
	// 					<span className='w-8 h-0.5 bg-primary inline-block' /> About Us
	// 				</h3>
	// 				<h2 className='text-5xl font-bold mb-4'>About The Partners</h2>
	// 				<p className='text-gray-500 text-lg leading-relaxed '>
	//         <p className="text-lg text-gray-700 mb-4">
	//            APL Logistics provides international, integrated supply chain services in more than 73 countries, including both
	//            origin and destination services such as freight consolidation, warehousing and distribution management. It uses innovative IT for maximum supply chain visibility and control.
	//          </p>
	//          <a href="https://www.apllogistics.com" className="text-blue-600 hover:underline">
	//            Visit APL Logistics Website
	//         </a>
	//         <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">VASCOR</h3>
	//          <p className="text-lg text-gray-700 mb-4">
	//            VASCOR is a leading provider of logistics services to the automotive sector. Formed in 1987, the company is a joint
	//           venture of Singapore-based supply chain management leader APL Logistics and FUJITRANS Corporation of Japan. Based in
	//           Georgetown, Kentucky, USA, VASCOR provides a full spectrum of logistics services to major automotive manufacturers
	//           and sales entities, as well as all U.S. Class One Railroads.
	//          </p>
	//          <a href="https://www.vascorlogistics.com" className="text-blue-600 hover:underline">
	//            Visit VASCOR Website
	//          </a>
	// 				</p>
	// 			</div>
	// 			<div className='w-full h-full bg-red-50'>
	// 				<img
	// 					src=''
	// 					alt=''
	// 				/>
	// 			</div>
	// 		</div>
	//     <div className='grid grid-cols-2 w-full h-dvh'>
	// 			<div className='px-6 py-16'>
	// 				<h3 className='text-primary font-bold inline-flex items-center justify-start gap-4 text-lg'>
	// 					{' '}
	// 					<span className='w-8 h-0.5 bg-primary inline-block' /> About us
	// 				</h3>
	// 				<h2 className='text-5xl font-bold mb-4'>Board of Directors</h2>
	// 				<p className='text-gray-500 text-lg leading-relaxed '>

	//         <ul className="list-inside list-disc space-y-4 text-lg text-gray-700">
	//           <li><strong>Thad Bedard</strong> - President, APL Logistics & Chairman - APL Logistics VASCOR Automotive Pvt. Ltd.</li>
	//           <li><strong>TOMONORI KONO</strong> - Director, APL Logistics VASCOR Automotive Pvt. Ltd.</li>
	//           <li><strong>Umesh Bhanot</strong> - Regional Head - South Asia, APL Logistics</li>
	//           <li><strong>Ashish Bhatt</strong> - Managing Director, APL Logistics VASCOR Automotive Pvt. Ltd.</li>
	//         </ul>
	// 				</p>
	// 			</div>
	// 			<div className='w-full h-full bg-red-50'>
	// 				<img
	// 					src=''
	// 					alt=''
	// 				/>
	// 			</div>
	// 		</div>
	//     <div className='grid grid-cols-2 w-full h-dvh'>
	// 			<div className='px-6 py-16 order-2'>
	// 				<h3 className='text-primary font-bold inline-flex items-center justify-start gap-4 text-lg'>
	// 					{' '}
	// 					<span className='w-8 h-0.5 bg-primary inline-block' /> About Us
	// 				</h3>
	// 				<h2 className='text-5xl font-bold mb-4'>Management Team</h2>
	//         <ul className="list-inside list-disc space-y-4 text-lg text-gray-700">
	//          <li><strong>Ashish Bhatt</strong> - Managing Director, APL Logistics VASCOR Automotive Pvt. Ltd.</li>
	//          <li><strong>Kunal Mahapatra</strong> - Sr. General Manager, APL Logistics VASCOR Automotive Pvt. Ltd.</li>
	//          <li><strong>Malay Nandy</strong> - Sr. General Manager IT & Systems Development & Customer Service, APL Logistics VASCOR Automotive Pvt. Ltd.</li>
	//          <li><strong>Tarak Haldar</strong> - Sr. General Manager, Accounts, APL Logistics VASCOR Automotive Pvt. Ltd.</li>
	//        </ul>

	// 			</div>
	// 			<div className='w-full h-full bg-red-50'>
	// 				<img
	// 					src=''
	// 					alt=''
	// 				/>
	// 			</div>
	//       </div>

	//   </section>

	// );
};

export default About;
