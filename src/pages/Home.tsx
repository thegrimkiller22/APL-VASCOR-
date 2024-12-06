import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { carouselImages, deliveries, vehicleDistributionCenters } from '@/lib/constants';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { useRef } from 'react';

const HeroSection = () => {
	const plugin = useRef([Autoplay({ delay: 4000 }), Fade()]);
	return (
		<div className='relative flex items-center justify-start w-full h-dvh overflow-hidden'>
			<div className='absolute inset-0 z-10'>
				<Carousel
					opts={{ align: 'start', loop: true, containScroll: false }}
					plugins={plugin.current}
					className='w-full h-full opacity-75 '>
					<CarouselContent>
						{carouselImages.map((img, index) => (
							<CarouselItem
								key={index}
								className=''>
								<img
									src={img}
									alt=''
									className='object-cover object-center w-full h-full'
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>

			{/* Header */}
			<div className='w-1/2 z-20 ml-20 leading-snug'>
				<h1 className='font-extrabold text-6xl leading-tight '>
					APL Logistics Vascor <br /> Automotive Pvt Ltd.
				</h1>
				<p className='font-semibold text-xl my-4'>Unique challenges, unique solutions.</p>
				<div className='w-3/4 flex items-center justify-start gap-2 mt-4'>
					<Input
						type='text'
						placeholder='Track your VIN'
						tabIndex={2}
						className='py-6 px-4 text-lg text-inherit bg-white/90 border-0'
					/>
					<Button
						type='button'
						className='py-6 px-8'>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
};

const Home = () => {
	return (
		<section className='bg-white w-full min-h-dvh overflow-hidden'>
			<HeroSection />

			{/* What we do section */}
			<div className='grid grid-cols-2 w-full h-dvh'>
				<div className='px-6 py-16'>
					<h3 className='text-primary font-bold inline-flex items-center justify-start gap-4 text-lg'>
						{' '}
						<span className='w-8 h-0.5 bg-primary inline-block' /> What We Do
					</h3>
					<h2 className='text-5xl font-bold mb-4'>APL Logistics</h2>
					<p className='text-gray-500 text-lg leading-relaxed '>
						We work closely with Original Equipment Manufacturers (OEMs) in India to offer specialized solutions spanning the entire supply chain. We back those solutions with cutting-edge technology and a team of hard-working experts, to
						perfectly mesh high quality with cost-consciousness. We leverage the combined expertise of two leading supply chain powerhouses, APL Logistics & VASCOR Logistics.
						<br />
						We deliver:
						<ul className='list-disc list-inside'>
							{deliveries.map((el, index) => (
								<li key={index}>{el}</li>
							))}
						</ul>
					</p>
					<Button
						type='button'
						className='mt-4 py-2 px-4 bg-blue-500 text-white rounded'>
						<a href='About-us'>About Us</a>
					</Button>
				</div>
				<div className='w-full h-full bg-red-50'>
					<img
						src='https://images.pexels.com/photos/28374669/pexels-photo-28374669/free-photo-of-an-aerial-view-of-a-parking-lot-with-cars.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt=''
						className='w-full h-full object-center object-cover '
					/>
				</div>
			</div>

			<div className='grid grid-cols-2 w-full h-dvh'>
				<div className='px-6 py-16 order-2'>
					<h3 className='text-primary font-bold inline-flex items-center justify-start gap-4 text-lg'>
						{' '}
						<span className='w-8 h-0.5 bg-primary inline-block' /> What We Do
					</h3>
					<h2 className='text-5xl font-bold mb-4'>Corporate Social Responsibility (CSR)</h2>
    <p className='text-gray-500 text-lg leading-relaxed'>
      At APL Logistics VASCOR Automotive, we believe in contributing to the well-being of the communities in which we operate. Our Corporate Social Responsibility (CSR) initiatives are designed to create a positive impact on society, the environment, and the economy. 
      We strive to integrate sustainable practices into every aspect of our operations, from reducing our carbon footprint to investing in local communities.
      <br />
      Our CSR efforts focus on several key areas:
      <ul className='list-disc list-inside'>
        <li><strong>Environmental Sustainability:</strong> Implementing eco-friendly practices across our supply chain to reduce environmental impact.</li>
        <li><strong>Community Engagement:</strong> Supporting education, healthcare, and economic development in the regions where we operate.</li>
        <li><strong>Employee Welfare:</strong> Creating a safe, inclusive, and nurturing work environment for all our employees.</li>
        <li><strong>Ethical Business Practices:</strong> Upholding high standards of transparency, integrity, and accountability in our business operations.</li>
      </ul>
      
    </p>
					<Button
						type='button'
						className='mt-4 py-2 px-4 bg-blue-500 text-white rounded'>
						<a href='corporate-social-responsibility'>Corporate Social Responsibility</a>
					</Button>
				</div>
				<div className='w-full h-full bg-red-50'>
					<img
						src='https://imgs.search.brave.com/YFflr_PhcRPN_NU1HvPRodN2NhQk9ihf-OZkrr_k4CM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTQ0MTI1NzQ2NDMt/ZmYxMWIwYTVjMWMz/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1URjhmR3h2/WjJsemRHbGpjM3hs/Ym53d2ZId3dmSHg4/TUE9PQ.jpeg'
						alt=''
						className='w-full h-full object-center object-cover'
					/>
				</div>
			</div>

			<div className='grid grid-cols-2 w-full h-dvh'>
				<div className='px-6 py-16'>
					<h3 className='text-primary font-bold inline-flex items-center justify-start gap-4 text-lg'>
						{' '}
						<span className='w-8 h-0.5 bg-primary inline-block' /> What We Do
					</h3>
					<h2 className='text-5xl font-bold mb-4'>Vehicle Distribution Centers</h2>
					<p className='text-gray-500 text-lg leading-relaxed '>
						"In addition to our core rail transportation network for finished vehicle distribution, APL Logistics VASCOR Automotive will operate a network of vehicle distribution centres and yards.Sites are strategically located adjacent
						to the rail terminals. These Centers provide various value-added services, including :
						<ul className='list-disc list-inside'>
							{vehicleDistributionCenters.map((el, index) => (
								<li key={index}> {el} </li>
							))}
						</ul>
					</p>
					<Button
						type='button'
						className='mt-4 py-2 px-4 bg-blue-500 text-white rounded'>
						<a href='inbound'>Inbound Logistics</a>
					</Button>
				</div>
				<div className='w-full h-full bg-red-50'>
					<img
						src='https://imgs.search.brave.com/p1gic0E_QS4yZENmcgoHPUJqJs6nc6NwZ8y0zdbaMlk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/OC8xNS8xNy81Ni9w/cm9kdWN0aW9uLTQ0/MDg1NzNfNjQwLmpw/Zw'
						alt=''
						className='w-full h-full object-center object-cover'
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
