import { Html, useProgress } from "@react-three/drei";
const isMobile = window.innerWidth <= 500; // Example breakpoint for mobile

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 8,
        padding: isMobile ? "10px" : "20px",

      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: isMobile ? 12 : 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;