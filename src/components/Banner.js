import React from 'react';
// images
import Images from '../assets/main.svg';
// Icons
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//CV
import curriculumVitae from '../assets/curriculumVitae.pdf';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              DAVID <span>LEAL</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'STUDENT',
                  2000,
                  'DEVELOPER',
                  2000,
                  'DESIGNER',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Passionate Computer Science student, web developer, and aspiring photographer. With a love for technology and creativity, I’m dedicated to building engaging web experiences and capturing moments through my lens. Explore my journey and projects that reflect my skills, ambitions, and vision for the future.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a href={curriculumVitae}
                target='_blank'
                rel='noopener noreferrer'
                className="btn btn-lg flex items-center justify-center text-center">
                Download CV
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://github.com/Davidleal1122" aria-label="GitHub Profile">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/daveleal1122" aria-label="Facebook Profile">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/dvrbtml/" aria-label="Instagram Profile">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Images} alt='main' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
