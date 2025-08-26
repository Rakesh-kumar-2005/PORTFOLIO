import { FaRocket } from "react-icons/fa6";
import { useEffect, useState } from "react";
// import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // for a little delay in visibility of the screen contents...
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden mb-auto sm:mb-10 min-h-screen w-full pb-10">
      {/**
       *  UI: Spotlights positioned at screen corners - responsive size
       */}
      <div className="pointer-events-none">
        <Spotlight
          className="-top-40 -left-32 h-[90vh] w-[90vw]"
          fill="rgba(99, 102, 241, 0.75)" // Bright Indigo
        />

        <Spotlight
          className="-top-20 -right-40 h-[85vh] w-[85vw]"
          fill="rgba(236, 72, 153, 0.7)" // Vibrant Pink
        />

        <Spotlight
          className="top-1/2 -left-20 h-[70vh] w-[70vw]"
          fill="rgba(34, 211, 238, 0.8)" // Strong Cyan
        />

        <Spotlight
          className="bottom-0 right-0 h-[90vh] w-[90vw]"
          fill="rgba(139, 92, 246, 0.75)" // Neon Violet
        />
      </div>

      {/**
       *  UI: Full viewport grid background
       */}
      <div
        className="fixed inset-0 w-screen h-screen dark:bg-black-100 bg-white opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="absolute inset-0 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content Container - Scaled to match 80% zoom appearance */}
      <div
        className="relative z-10 min-h-screen w-full"
        style={{ transform: "scale(0.8)", transformOrigin: "center" }}
      >
        <div className="relative z-10 min-h-screen w-full flex flex-col lg:grid lg:grid-cols-2">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center items-center lg:items-start px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left mt-8 sm:mt-12 lg:mt-16 xl:mt-20 2xl:mt-0 order-2 xl:order-1">
            {/* Heading Section */}
            <div
              className={`transition-all duration-1000 ${
                textVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_100%]">
                  Rakesh Kumar Mohanty
                </span>
              </h1>
              {/* Professional Title */}
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white/90 mb-2 sm:mb-3">
                  Full-Stack Developer & Cloud Analyst
                </h2>
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto lg:mx-0 rounded-full"></div>
              </div>

              {/* Main Description */}
              <div className="space-y-4 sm:space-y-5 lg:space-y-6 mb-8 sm:mb-10 lg:mb-12">
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto lg:mx-0">
                  Passionate{" "}
                  <span className="text-blue-400 font-semibold">
                    full-stack developer
                  </span>{" "}
                  specializing in modern web technologies and{" "}
                  <span className="text-fuchsia-400 font-semibold">
                    AI-powered solutions
                  </span>
                  . I create scalable digital experiences that seamlessly
                  integrate cutting-edge technology with innovative design.
                </p>

                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-400 leading-relaxed max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto lg:mx-0">
                  Proficient in{" "}
                  <span className="text-cyan-400 font-medium">
                    React & Next.js
                  </span>
                  ,{" "}
                  <span className="text-green-400 font-medium">
                    Spring Boot
                  </span>
                  , <span className="text-blue-400 font-medium">Flutter</span>,
                  and{" "}
                  <span className="text-orange-400 font-medium">AWS Cloud</span>{" "}
                  — delivering comprehensive solutions from concept to
                  deployment.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start 
            opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_1.1s_forwards]"
            >
              <a href="#about" className="group">
                <div className="relative inline-flex h-12 sm:h-14 lg:h-16 overflow-hidden group rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-fuchsia-400/50">
                  <span className="absolute inset-[-1000%] group-hover:animate-[spin_1s_linear_infinite] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f29cf7_0%,#393BB2_50%,#f29cf7_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 sm:px-8 lg:px-10 py-1 text-sm sm:text-base lg:text-lg font-semibold text-white backdrop-blur-3xl transition-colors">
                    <FaRocket className="mr-2 sm:mr-3 text-sm sm:text-base lg:text-lg group-hover:text-blue-400 transition-colors animate-bounce" />
                    Let&apos;s Connect
                  </span>
                </div>
              </a>
            </div>

            {/* Contact Info */}
            <div
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-8 lg:gap-12 text-sm sm:text-base lg:text-lg text-gray-400
            opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_1.3s_forwards]"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for projects</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Bhubaneswar, India</span>
              </div>
            </div>
          </div>

          {/* Right Side - Tech Orbit */}
          <div className="order-2 xl:order-2 min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[75vh] 2xl:min-h-screen pt-8 sm:pt-12 lg:pt-16 xl:pt-20 2xl:pt-0">
            <PortfolioTechOrbit />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.03);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 25s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Hero;

export function PortfolioTechOrbit() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(150);

  // Responsive radius based on screen size - scaled up to match 80% zoom
  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Adjust radius based on both width and height for better responsiveness
      if (width < 480) {
        setRadius(Math.min(width * 0.31, height * 0.19, 100)); // Very small screens
      } else if (width < 640) {
        setRadius(Math.min(width * 0.28, height * 0.23, 125)); // Small screens
      } else if (width < 768) {
        setRadius(Math.min(width * 0.25, height * 0.25, 150)); // Medium screens
      } else if (width < 1024) {
        setRadius(Math.min(width * 0.23, height * 0.28, 175)); // Large screens
      } else if (width < 1280) {
        setRadius(Math.min(width * 0.19, height * 0.31, 200)); // XL screens
      } else {
        setRadius(Math.min(width * 0.15, height * 0.35, 225)); // 2XL+ screens
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      // Reduce mouse effect on smaller screens
      const intensity = window.innerWidth < 768 ? 25 : 50;
      setMousePosition({ x: x * intensity, y: y * intensity });
    };

    // Update rotation angle for counter-rotation
    const updateRotation = () => {
      setRotation((prev) => (prev + 0.5) % 360);
    };

    const interval = setInterval(updateRotation, 50);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const techStack = [
    {
      name: "Next.js",
      color: "bg-black border-2 border-white/20",
      svg: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C4.344 2.647 1.093 4.485 2.228 5.012z" />
        </svg>
      ),
    },
    {
      name: "React.js",
      color: "bg-gradient-to-br from-cyan-400 to-blue-500",
      svg: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="11" ry="4" strokeWidth="1" />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4"
            strokeWidth="1"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4"
            strokeWidth="1"
            transform="rotate(120 12 12)"
          />
        </svg>
      ),
    },
    {
      name: "Spring Boot",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      svg: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21z" />
        </svg>
      ),
    },
    {
      name: "Flutter",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      svg: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.37zm.159 11.871L11.3 14.04l-4.907-4.907 2.864-2.864 8.017 8.017-2.801 2.801z" />
        </svg>
      ),
    },
    {
      name: "AWS Cloud",
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
      svg: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl aspect-square flex items-center justify-center">
          {/* Central Tech Hub - scaled up */}
          <div
            className="absolute transition-transform duration-300 ease-out"
            style={{
              width: `${Math.min(150, window.innerWidth * 0.31)}px`,
              height: `${Math.min(150, window.innerWidth * 0.31)}px`,
              transform: `translate(${mousePosition.x * 0.15}px, ${
                mousePosition.y * 0.15
              }px)`,
            }}
          >
            {/* Outer rotating ring */}
            <div
              className="absolute inset-0 rounded-full border border-transparent sm:border-2 bg-gradient-to-r from-blue-400 via-fuchsia-500 to-cyan-400 opacity-40 blur-sm"
              style={{ transform: `rotate(${rotation * 2}deg)` }}
            />

            {/* Middle pulsing ring */}
            <div className="absolute inset-1 sm:inset-2 rounded-full border border-white/30 animate-pulse" />

            {/* Inner core */}
            <div className="absolute inset-2 sm:inset-4 bg-gradient-to-br from-sky-400 via-fuchsia-500 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-sm">
              {/* Inner glow ring */}
              <div className="absolute inset-1 sm:inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full" />

              {/* Core content - scaled up */}
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur border border-white/40 shadow-lg">
                {/* Animated Network logo */}
                <svg
                  className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white animate-pulse drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                >
                  <g transform="translate(50,50)">
                    {/* Central Node */}
                    <circle
                      cx="0"
                      cy="0"
                      r="8"
                      fill="currentColor"
                      opacity="0.9"
                      className="sm:r-10"
                    />

                    {/* Connecting Lines */}
                    <line
                      x1="-15"
                      y1="-15"
                      x2="15"
                      y2="15"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.6"
                      className="sm:stroke-2.5"
                    />
                    <line
                      x1="15"
                      y1="-15"
                      x2="-15"
                      y2="15"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.6"
                      className="sm:stroke-2.5"
                    />
                    <line
                      x1="0"
                      y1="-20"
                      x2="0"
                      y2="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.6"
                      className="sm:stroke-2.5"
                    />
                    <line
                      x1="-20"
                      y1="0"
                      x2="20"
                      y2="0"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.6"
                      className="sm:stroke-2.5"
                    />

                    {/* Corner Nodes */}
                    <circle
                      cx="-15"
                      cy="-15"
                      r="4"
                      fill="currentColor"
                      className="sm:r-5"
                    />
                    <circle
                      cx="15"
                      cy="-15"
                      r="4"
                      fill="currentColor"
                      className="sm:r-5"
                    />
                    <circle
                      cx="-15"
                      cy="15"
                      r="4"
                      fill="currentColor"
                      className="sm:r-5"
                    />
                    <circle
                      cx="15"
                      cy="15"
                      r="4"
                      fill="currentColor"
                      className="sm:r-5"
                    />

                    {/* Cardinal Nodes */}
                    <circle
                      cx="0"
                      cy="-20"
                      r="4"
                      fill="currentColor"
                      className="sm:r-5"
                    />
                    <circle
                      cx="20"
                      cy="0"
                      r="4"
                      fill="currentColor"
                      className="sm:r-5"
                    />
                    <circle
                      cx="0"
                      cy="20"
                      r="4"
                      fill="currentColor"
                      className="sm:r-5"
                    />
                    <circle
                      cx="-20"
                      cy="0"
                      r="4"
                      fill="currentColor"
                      className="sm:r-5"
                    />

                    {/* Outer Glow Effect */}
                    <circle
                      cx="0"
                      cy="0"
                      r="25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      opacity="0.3"
                      className="sm:stroke-1.2 lg:r-30"
                    />
                  </g>
                </svg>

                {/* Floating particles */}
                <div className="absolute inset-0">
                  <div
                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping"
                    style={{ top: "10%", left: "20%" }}
                  />
                  <div
                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-300 rounded-full animate-ping"
                    style={{
                      bottom: "20%",
                      left: "10%",
                      animationDelay: "0.6s",
                    }}
                  />
                  <div
                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-ping"
                    style={{
                      top: "80%",
                      right: "15%",
                      animationDelay: "1.2s",
                    }}
                  />
                </div>
              </div>

              {/* Pulsating outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 opacity-20 animate-ping" />
            </div>
          </div>

          {/* Orbiting Tech Stack with Counter-Rotation */}
          <div
            className="absolute inset-0 z-50 transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 0.08}px, ${
                mousePosition.y * 0.08
              }px) rotate(${rotation}deg)`,
            }}
          >
            {techStack.map((tech, i) => {
              const angle = (i * 360) / techStack.length;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={tech.name}
                  className="absolute flex items-center justify-center"
                  style={{
                    width: `${Math.min(100, window.innerWidth * 0.19)}px`,
                    height: `${Math.min(100, window.innerWidth * 0.19)}px`,
                    top: `calc(50% + ${y}px - ${Math.min(
                      50,
                      window.innerWidth * 0.095
                    )}px)`,
                    left: `calc(50% + ${x}px - ${Math.min(
                      50,
                      window.innerWidth * 0.095
                    )}px)`,
                  }}
                >
                  {/* Counter-rotating container to keep content upright */}
                  <div
                    style={{
                      transform: `rotate(${-rotation}deg)`,
                      transition: "transform 0.05s linear",
                    }}
                  >
                    <div
                      className={`${tech.color} rounded-full shadow-2xl flex items-center justify-center cursor-pointer group hover:scale-110 sm:hover:scale-125 transition-transform duration-300 relative`}
                      style={{
                        width: `${Math.min(80, window.innerWidth * 0.15)}px`,
                        height: `${Math.min(80, window.innerWidth * 0.15)}px`,
                      }}
                    >
                      {tech.svg}

                      {/* Tooltip */}
                      <div
                        className={`pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/90 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-xl text-sm font-semibold ${i == 0 ? 'text-white' : i == 1 ? 'text-blue-400' : i == 2 ? 'text-emerald-400' : i == 3 ? 'text-blue-500' : 'text-orange-400'} whitespace-nowrap border border-white/20`}
                        style={{
                          top: `${-Math.min(60, window.innerWidth * 0.11)}px`,
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        {tech.name}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/90"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Background Glow - scaled up... */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-75 sm:h-75 lg:w-100 lg:h-100 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(calc(-50% + ${
                mousePosition.x * 0.2
              }px), calc(-50% + ${mousePosition.y * 0.2}px))`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
