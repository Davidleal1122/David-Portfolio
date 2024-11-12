import React from 'react';
// Import icons
import { BiHomeAlt } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
// Import Link from react-scroll
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* Nav inner */}
        <div className='w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <a href="#home" aria-label="Home">
            <Link
              to='home'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-200}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center bg-transparent hover:bg-white/20 rounded-full transition duration-300'
            >
              <BiHomeAlt />
            </Link>
          </a>
          <a href="#about" aria-label="About">
            <Link
              to='about'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={20}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center bg-transparent hover:bg-white/20 rounded-full transition duration-300'
            >
              <BsClipboardData />
            </Link>
          </a>
          <a href="#work" aria-label="Work">
            <Link
              to='work'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-40}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center bg-transparent hover:bg-white/20 rounded-full transition duration-300'
            >
              <BsBriefcase />
            </Link>
          </a>
          <a href="#contact" aria-label="Contact">
            <Link
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={20}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center bg-transparent hover:bg-white/20 rounded-full transition duration-300'
            >
              <BsChatSquareText />
            </Link>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
