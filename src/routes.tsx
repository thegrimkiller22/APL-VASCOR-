import { About, AwardsRecognition, ContactUs, CorporateSocialResponsibility, Gallery, Home } from '@/pages';

const routes = [
	{
		path: '/',
		element: <Home />,
		name: 'Home',
	},
	{
		path: '/about-us',
		element: <About />,
		name: 'About Us',
	},
	{
		path: '/awards-and-recognition',
		element: <AwardsRecognition />,
		name: 'Awards Recognition',
	},
	{
		path: '/corporate-social-responsibility',
		element: <CorporateSocialResponsibility />,
		name: 'Corporate Social Responsibility',
	},
	{
		path: '/gallery',
		element: <Gallery />,
		name: 'Gallery',
	},
	{
		path: '/contact-us',
		element: <ContactUs />,
		name: 'Contact Us',
	},
];

export default routes;
