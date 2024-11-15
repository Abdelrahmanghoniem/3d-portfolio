import {motion} from 'framer-motion'
import {styles} from '../styles'
import { ComputersCanvas } from "./canvas";
import { Suspense, useEffect, useState } from 'react';
import CanvasErrorBoundary from './ErrorBoundary';


const mobileFallback = (
  <>
    <div className="absolute inset-1 flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[355px] h-[330px] rounded-full border-4 border-dotted border-[#915eff]" />
    </div>
    <div className="relative bottom-10 w-full text-center">
      <p className={`${styles.heroSubText} mt-2
          text-white-100`}> 
        Open in desktop for a better view
      </p>
    </div>
  </>
);


const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);



  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    const userAgent = navigator.userAgent.toLowerCase();
    const androidCheck = /android/i.test(userAgent);
    setIsAndroid(androidCheck); // Check if the device is Android

    handleResize(); // Call on initial load
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section className={`relative w-full h-screen mx-auto`}>
      

      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        
        <div className='flex flex-col
        justify-center items-center mt-5'>

          <div className='w-5 h-5 rounded-full
          bg-[#915eff]'/>
          <div className="w-1 sm:h-80 h-40
          violet-gradient"/>
        </div>
        <div>
        <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m <span className="text-[#915eff]">Abdelrahman
          </span></h1>

          <p className={`${styles.heroSubText} mt-2
          text-white-100`}>
            I develop 3d visuals, user <br className='sm:block hidden'/>
            interfaces and web applications 

          </p>
          
          </div>
          

      </div>


      
   {/* Conditionally render the fallback or ComputersCanvas based on device type */}
   {isAndroid ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <CanvasErrorBoundary fallback={mobileFallback}>
            {mobileFallback}
          </CanvasErrorBoundary>
        </div>
      ) : isMobile ? (
        <CanvasErrorBoundary fallback={mobileFallback}>
          <ComputersCanvas />
        </CanvasErrorBoundary>
      ) : (
        <ComputersCanvas />
      )}

        
     



     
      <div className="absolute xs:bottom-10 bottom-20
      w-full flex justify-center items-center
      ">
        <a href='#about'>
          <div className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2
          ">
            <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'

              />
              

          </div>
        </a>
        

      </div>

    </section>
  )
}

export default Hero