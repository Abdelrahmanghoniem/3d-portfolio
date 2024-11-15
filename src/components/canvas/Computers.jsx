/* eslint-disable react/no-unknown-property */
import  { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// eslint-disable-next-line react/prop-types
const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <pointLight intensity={0.30} />

      {/* Conditionally render or adjust spotLight for non-mobile */}
      {!isMobile && (
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
      )}

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.7}
        position={isMobile ? [0, -3.5, -1.5] : [0, -3.8, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = (onModelLoaded) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Simulate model loading completion and call onModelLoaded when done
    const loadModel = async () => {
      // Here, add actual model loading logic
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Example delay
      if (onModelLoaded) onModelLoaded();
    };
    loadModel();
  }, []);


  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop={isMobile ? "always" : "always"} // Reduce render loop on mobile
      shadows
      dpr={[1, isMobile ? 1:2]} // Reduce pixel ratio on mobile
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
