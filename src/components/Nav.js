import React from 'react';
// Import icons
import { BiHomeAlt } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
// Import scroller from react-scroll for smooth scrolling
import { scroller } from 'react-scroll';

const scrollToSection = (section) => {
  scroller.scrollTo(section, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset: -80 // Adjust offset as needed
  });
};

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* Nav inner */}
        <div className='w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <a
            href="#home"
            aria-label="Home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center bg-transparent hover:bg-white/20 rounded-full transition duration-300'
          >
            <BiHomeAlt />
          </a>
          <a
            href="#about"
            aria-label="About"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center bg-transparent hover:bg-white/20 rounded-full transition duration-300'
          >
            <BsClipboardData />
          </a>
          <a
            href="#work"
            aria-label="Work"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('work');
            }}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center bg-transparent hover:bg-white/20 rounded-full transition duration-300'
          >
            <BsBriefcase />
          </a>
          <a
            href="#contact"
            aria-label="Contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center bg-transparent hover:bg-white/20 rounded-full transition duration-300'
          >
            <BsChatSquareText />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
