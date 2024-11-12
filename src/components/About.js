import React from 'react';
// CountUp library for animated counters
import CountUp from 'react-countup';
// Intersection observer for triggering animations on scroll
import { useInView } from 'react-intersection-observer';
// Motion library for animations
import { motion } from 'framer-motion';
// Animation variants
import { fadeIn } from '../variants';
// Link from react-scroll for smooth scrolling
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='hidden lg:flex flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend…" style="opacity: 0; transform: translateX(-80px) translateY(0px) translateZ(0px);'
          ></motion.div>

          {/* Text */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm David Leal, a third-year Computer Science student at Cavite State University, Bacoor..
            </h3>
            <p className='mb-6'>
              As a front-end and web developer with a passion for technology, creativity, and photography, I specialize in crafting engaging web experiences using Java, PHP, CSS Tailwind, and React. I’m dedicated to learning, growing, and building impactful digital solutions while capturing meaningful moments through my lens.
            </p>

            {/* Stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={55} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Code <br /> Commits
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div className='flex gap-x-8 items-center'>
              <Link
                href='#contact'
                to='contact'
                smooth={true}
                spy={true}
                offset={-80}
                className='btn btn-sm flex justify-center items-center cursor-pointer'>
                Contact me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
