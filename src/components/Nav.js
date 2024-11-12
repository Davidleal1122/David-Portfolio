import React from 'react';
//import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';
// import Link from react-scroll
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        { /* nav inner */}
        <div className='w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50'>
          <Link
            href='#home'
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[60px] h-
            [60px] flex items-center justify-center'
          >
            <BiHomeAlt />
          </Link>
          <Link
            href='#about'
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-
            [60px] flex items-center justify-center'
          >

            <BsClipboardData />
          </Link>
          <Link
            href='#work'
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-
            [60px] flex items-center justify-center'
          >
            <BsBriefcase />
          </Link>
          <Link
            href='#contact'
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-
            [60px] flex items-center justify-center'
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
