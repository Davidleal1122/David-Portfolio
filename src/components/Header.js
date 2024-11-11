import React from 'react';
// images
import Logo from '../assets/logo.svg';
// import Link from react-scroll
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a href='#banner'>
            <img src={Logo} alt='Logo' />
          </a>
          {/* Work with me Button */}
          <Link 
            to='contact'
            smooth={true}
            spy={true}
            offset={-80} // Optional: adjust offset if needed
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
