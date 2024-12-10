// src/components/Navbar.tsx
import routes from '@/routes';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Ensure you are using Link from react-router-dom
import { AlignLeft, X as CloseIcon } from 'lucide-react';

const Navbar: React.FC = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		if (currentScrollY > lastScrollY) {
			// User is scrolling down
			setIsVisible(false);
		} else {
			// User is scrolling up
			setIsVisible(true);
		}
		setLastScrollY(currentScrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	const isActive = (path: string) => location.pathname === path;

	const toggleMenu = () => setIsMenuOpen(prev => !prev);

	return (
		// <nav className='flex justify-between items-center px-4 py-8 '>
		<>
			<nav className={`fixed z-50 top-0 left-0 w-full md:pt-2 bg-white transition-transform duration-300 dark:bg-black dark:text-white ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
				<div className='relative z-40 mx-auto flex gap-2 justify-between items-center px-2 py-4 md:px-8'>
					<div className='w-1/5 flex items-center justify-center gap-2 text-lg md:text-2xl font-bold p-1'>
						{isMenuOpen ? (
							<CloseIcon
								className='cursor-pointer p-1 size-8 md:hidden '
								onClick={toggleMenu}
							/>
						) : (
							<AlignLeft
								className='stroke-black md:hidden cursor-pointer p-1 size-8'
								aria-label='Menu'
								onClick={toggleMenu}
							/>
						)}
						<Link
							to='/'
							className='text-nowrap'>
							<img
								src='/assets/APLL_Vascor Logo_landscape.jpg'
								alt='APL VASCOR'
							/>
						</Link>
					</div>

					{/* Desktop menu */}
					<div className='max-md:hidden '>
						<ul className='flex items-center justify-between'>
							{routes.map(route => (
								<Link
									key={route.name}
									to={route.path}
									onClick={() => setIsMenuOpen(false)}
									className={`group/item relative text-base px-3 py-2 rounded-md transition-transform duration-200 transform hover:-translate-y-[3px] text-gray-800 dark:text-gray-200 font-semibold text-nowrap ${
										isActive(route.path) ? 'text-primary -translate-y-[3px]' : ''
									}`}>
									{route.name}
									<div
										className={`absolute left-0 right-0 h-[2px] w-full rounded-full bg-primary opacity-0 transition-all duration-200 -bottom-1  ${
											isActive(route.path) ? 'opacity-100' : 'opacity-0 group-hover/item:opacity-100'
										}`}></div>
								</Link>
							))}
						</ul>
					</div>

					<div className='flex gap-4 items-center justify-between'>
						<a
							href='tel:1800123827267'
							className='border bg-primary py-2 px-3 rounded-full text-white font-semibold hidden md:inline-block text-nowrap'>
							1800 123 827267
						</a>
						<Link
							key='login'
							to='/auth/login'
							className='text-base mx-2 no-underline px-4 py-2 hover:bg-primary hover:text-white transition-colors border-primary border-2 font-semibold rounded-full '>
							Login
						</Link>
					</div>
				</div>
			</nav>
			{/* Mobile nav menu */}
			<div className={`md:hidden absolute z-40 top-[4.5rem] left-0 w-full bg-white dark:bg-black transition-transform duration-300 transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
				<ul className='flex flex-col items-start justify-start'>
					{routes.map(route => (
						<li
							key={route.name}
							className='w-full bg-white px-1'>
							<Link
								to={route.path}
								onClick={() => setIsMenuOpen(false)}
								className={`text-base text-white p-3 transition-opacity duration-200 dark:text-gray-200 text-nowrap text-ellipsis overflow-hidden bg-primary inline-block w-full hover:bg-opacity-90 focus:bg-opacity-85 `}>
								{route.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Navbar;
