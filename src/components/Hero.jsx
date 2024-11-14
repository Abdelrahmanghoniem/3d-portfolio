import { useEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary component
import { ComputersCanvas } from "./canvas"; // Your 3D scene component

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile(); // Check on mount
    window.addEventListener("resize", checkIfMobile); // Check on resize
    return () => window.removeEventListener("resize", checkIfMobile); // Cleanup
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Hi, I&apos;m <span className="text-[#915eff]">Abdelrahman</span>
          </h1>
          <p className="text-white mt-2">
            I develop 3D visuals, user <br className="sm:block hidden" /> interfaces, and web applications.
          </p>
        </div>
      </div>

      <ErrorBoundary
        fallback={
          <>
            {/* Mobile fallback UI */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[355px] h-[330px] rounded-full border-4 border-dotted border-[#915eff]" />
            </div>
            <div className="absolute bottom-10 w-full text-center">
              <p className="text-white text-sm bg-[#333333] p-2 rounded-md mx-4">
                Open in desktop for a better view
              </p>
            </div>
          </>
        }
      >
        {!isMobile && <ComputersCanvas />}
      </ErrorBoundary>
    </section>
  );
};

export default Hero;
