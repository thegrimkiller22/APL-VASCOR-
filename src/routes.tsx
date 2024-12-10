import { About, AwardsRecognition, ContactUs, CorporateSocialResponsibility, Gallery, Carrier } from '@/index';
import Inbound from './Inbound';

const routes = [
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
		path: '/inbound',
		element: <Inbound />,
		name: 'Inbound ',
	},
	{
		path: '/carrier',
		element: <Carrier />,
		name: 'Carrier',
	},
	{
		path: '/contact-us',
		element: <ContactUs />,
		name: 'Contact Us',
	},
];

export default routes;
