import ProfileCard from '@/components/ProfileCard';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { industries_we_serve, profiles } from '@/lib/constants';
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
		<section className='w-full min-h-dvh relative mt-20 bg-gray-50'>
			<div
				style={{ background: 'url("https://www.vascorlogistics.com/build/assets/files/page_editor_header_images/iStock-893188474.jpg") no-repeat center/cover' }}
				className='relative w-full h-[70vh] flex items-end justify-center pb-4 mt-20'>
				<h3 className='font-bold text-5xl text-white'>About VASCOR</h3>
			</div>

			<nav className='w-full px-4 py-6 mt-4 mb-12'>
				<div className='container mx-auto'>
					<ul className='flex flex-wrap items-center justify-center gap-2 md:gap-4'>
						{navItems.map((item, index) => (
							<li
								key={item.href}
								className='flex items-center'>
								<Link
									to={item.href}
									className='text-blue-600 hover:text-blue-800 transition-colors text-sm md:text-base lg:text-lg'>
									{item.title}
								</Link>
								{index < navItems.length - 1 && <span className='text-blue-600 mx-2 md:mx-4'>|</span>}
							</li>
						))}
					</ul>
				</div>
			</nav>

			<Section
				title='Trusted Experience'
				heading='Who We Are'
				id='who-we-are'>
				{/* Main Content */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
					<div className='space-y-6'>
						<p className='text-gray-600 leading-relaxed'>
							A privately held joint venture between APL Logistics® and Fujitrans Corporation,® VASCOR is infused with expertise in providing the best service and value in global supply chain solutions. It's in our name as VASCOR stands
							for <span className='font-semibold'>V</span>alue <span className='font-semibold'>A</span>dded <span className='font-semibold'>S</span>ervice <span className='font-semibold'>COR</span>poration!
						</p>

						<p className='text-gray-600 leading-relaxed'>
							VASCOR started in 1987 to serve the automotive sector in the heart of horse country, Georgetown, KY. With automotive a large part of our business today, we have also leveraged our expertise in other sectors, including
							manufacturing, food and beverage, and retail distribution.
						</p>

						<p className='text-gray-600 leading-relaxed'>
							Broad expertise across the entire supply chain allows VASCOR to create custom solutions to fit every client's unique operational challenges, from inbound transportation to finished vehicle logistics. No matter how complex
							the problem is, we have extensive background and experience to develop the right solution.
						</p>

						<p className='text-gray-600 leading-relaxed'>
							Within this process, we provide real-time visibility to the supply chain to offer a full picture of solutions for our customers. These comprehensive support and service offerings include IT Services, Business Intelligence,
							and Supply Chain Engineering. These capabilities provide our customers the visibility, analytics, and flexibility to ultimately control and reduce costs in the supply chain.
						</p>

						<p className='text-gray-600 leading-relaxed'>
							We provide customized solutions throughout the entire supply chain as a transportation and logistics solution provider for both production and finished vehicle supply chains. Our ISO 9001:2015 certified Quality Management
							System backs these solutions to develop, implement, and improve quality assurance processes. Combining all those elements, together with integrity and high ethical standards, we give our customers total confidence in our
							solutions.
						</p>
					</div>

					<div className='lg:sticky lg:top-8'>
						<div className='aspect-video w-full flex justify-center'>
						<iframe
  className="w-full max-w-[500px] aspect-video rounded-lg shadow-lg"
  src="https://www.youtube.com/embed/N4qoQmSFuIA?autoplay=1&mute=1"
  title="Why should VASCOR be your 3PL provider?"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>


						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className='mt-12 lg:mt-16'>
					<div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
						<h2 className='text-xl lg:text-2xl font-bold text-gray-800 max-w-3xl'>We ask that you continue to review our service offerings and contact us to decide what customized solution is right for you!</h2>
						<Button
							size='lg'
							className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold min-w-[200px]'>
							CONTACT US
						</Button>
					</div>
				</div>
			</Section>

			<section className='bg-blue-600 py-16 px-4'>
				<div className='container mx-auto'>
					<h2 className='text-4xl md:text-5xl font-bold text-white text-center mb-12'>Industries We Serve</h2>

					<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
						{industries_we_serve.map(industry => (
							<div
								key={industry.title}
								className='flex flex-col items-baseline justify-center p-8 h-full bg-white'>
								<div className='flex flex-col items-center text-center space-y-4'>
									<div className='size-32 bg-white'>
										<img
											src={industry.image}
											alt=''
											className='object-cover object-center aspect-square w-full h-full'
										/>
									</div>
									<h3 className='text-2xl font-bold'>{industry.title}</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Section title='Experience and Expertise' heading='VASCOR Leadership'>
				<div className='container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{profiles.map(profile => (
						<ProfileCard
							key={profile.name}
							card_details={profile}
						/>
					))}
				</div>
			</Section>

			<section className='bg-blue-600 text-white w-full py-20'>
				<div className='container mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] place-items-center'>
					<p className='text-xl lg:text-3xl font-bold inline-block max-w-[32ch]'>Contact us to decide what customized solution is right for you!</p>
					<Link to="/contact-us" className='border-2 py-6 px-14 rounded-full text-base font-semibold uppercase -ml-24 hover:-translate-y-2 transition-transform duration-300'>Contact Us</Link>
				</div>
			</section>

		</section>
	);

	
};

export default About;
