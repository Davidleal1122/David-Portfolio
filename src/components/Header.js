import React from 'react';
// Images
import Logo from '../assets/logo.svg';
// Import Link from react-scroll
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a href='#banner'>
            <img
              src={Logo}
              alt='Logo'
              width="150" // Replace with actual width
              height="50"  // Replace with actual height
              loading="lazy"
            />
          </a>
          {/* Work with me Button */}
          <Link
            to='contact'
            smooth={true}
            spy={true}
            offset={-80} // Optional: adjust offset if needed
            href='#contact' // Added href for crawlability
            className='btn btn-sm flex justify-center items-center cursor-pointer'
          >
            Work with me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
