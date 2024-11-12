import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles} from '../styles'
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
      // eslint-disable-next-line react/no-unknown-property
      options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview.
      </h2>
    </motion.div>
    <motion.p
    className='mt-4 text-secondary text-[17px]
    max-w-3xl leading-[30px]'
    variants={fadeIn("","",0.1,1)}>
Hi, I’m Abdelrahman Ghoniem, a software engineer and web developer with a passion for creating efficient, user-centered applications.

With a strong foundation in full-stack development and a degree in computer science from MTI University, I bring hands-on experience across multiple projects, from building responsive web pages to developing functional desktop applications. My skills include React, Node.js, and Tailwind CSS, along with Agile methodologies, which enable me to deliver high-quality, scalable solutions while fostering a collaborative team environment. I’m inspired by the potential of technology to make a positive impact, and I'm eager to contribute to meaningful projects that help people.

    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}

    </div>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");