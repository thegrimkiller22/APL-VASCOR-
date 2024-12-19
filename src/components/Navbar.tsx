import routes from '@/routes';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlignLeft, X as CloseIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 100);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed z-50 top-0 left-0 w-full md:pt-2 bg-white transition-transform duration-300 dark:bg-black dark:text-white ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="relative z-40 mx-auto flex justify-between items-center px-4 py-4 md:px-8">
          {/* Logo and Menu Icon */}
          <div className="flex items-center gap-4">
            {isMenuOpen ? (
              <CloseIcon
                className="cursor-pointer p-1 size-8 md:hidden"
                onClick={toggleMenu}
              />
            ) : (
              <AlignLeft
                className="stroke-black md:hidden cursor-pointer p-1 size-8"
                aria-label="Menu"
                onClick={toggleMenu}
              />
            )}
            <Link to="/" className="flex items-center">
              <img
                src="/assets/APLL_Vascor Logo_landscape.jpg"
                alt="APL VASCOR"
                className="h-8"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {routes.map((route) => (
              <Link
                key={route.name}
                to={route.path}
                onClick={() => setIsMenuOpen(false)}
                className={`group relative text-base px-3 py-2 rounded-md transition-transform duration-200 transform hover:-translate-y-[3px] font-semibold ${
                  isActive(route.path) ? 'text-primary -translate-y-[3px]' : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                {route.name}
                <div
                  className={`absolute left-0 right-0 h-[2px] w-full rounded-full bg-primary transition-all duration-200 -bottom-1 ${
                    isActive(route.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                ></div>
              </Link>
            ))}
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="tel:1800123827267"
              className="hidden md:block border bg-primary py-2 px-4 rounded-full text-white font-semibold text-sm"
            >
              1800 123 827267
            </a>
            <Link
              to="/auth/login"
              className="text-sm px-4 py-2 border-primary border-2 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute z-40 top-[4.5rem] left-0 w-full bg-white dark:bg-black transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-start py-4 space-y-2">
          {routes.map((route) => (
            <li key={route.name} className="w-full">
              <Link
                to={route.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-base font-semibold ${
                  isActive(route.path) ? 'bg-primary text-white' : 'text-gray-800 dark:text-gray-200'
                } hover:bg-primary hover:text-white transition`}
              >
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
