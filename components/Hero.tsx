import { FaRocket } from "react-icons/fa6";
import { useEffect, useState } from "react";
// import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
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

  const [radius, setRadius] = useState(130);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) setRadius(100); // small screens
      else if (width < 1024) setRadius(150); // medium screens
      else setRadius(180); // large screens
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);

    return () => clearTimeout(timer);
  });

  return (
    <div className="relative overflow mb-auto sm:mb-10 h-screen w-screen pb-10">
      {/**
       *  UI: Spotlights positioned at screen corners - smaller size
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

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen sm:mt-8 lg:mt-0 w-full">
        <div className="relative z-10 min-h-screen w-full flex flex-col lg:grid lg:grid-cols-2">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center items-center lg:items-start px-6 lg:px-16 xl:px-24 space-y-8 text-center lg:text-left mt-16 lg:mt-0">
            {/* Heading... */}
            <div
              className={`transition-all duration-1000 ${
                textVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0  translate-y-16"
              } `}
            >
              <h1 className="text-6xl md:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent ">
                  Rakesh Kumar Mohanty
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                I am a dedicated professional with a passion for innovation and
                design, leveraging cutting-edge AI technology to craft stunning
                visuals. Specializing in image editing, I offer expertise in
                cropping, resizing, color adjustment, background removal, and
                enhancement to bring your creative vision to life.
              </p>
            </div>
            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start 
                      opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_1.1s_forwards]"
            >
              <a href="#about" className="group">
                <div className="relative inline-flex h-12 overflow-hidden group rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 hover:scale-110 hover:shadow-md hover:shadow-fuchsia-400 hover:translate-x-1 hover:translate-y-1">
                  <span className="absolute inset-[-1000%] group-hover:animate-[spin_1s_linear_infinite] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f29cf7_0%,#393BB2_50%,#f29cf7_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors">
                    <FaRocket className="mr-2 group-hover:text-blue-400 transition-colors animate-bounce" />
                    Let&apos;s Connect
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex items-center justify-center mt-12 mb-16 sm:mb-20 md:mb-24 lg:mb-0 lg:mt-0">
            <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-full max-w-lg h-[300px] sm:h-[400px] md:h-[600px] lg:h-full flex items-center justify-center">
              {/* Central Tech Hub */}
              <div
                className="absolute w-40 h-40 sm:w-52 sm:h-52 transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${mousePosition.x * 0.15}px, ${
                    mousePosition.y * 0.15
                  }px)`,
                }}
              >
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 via-fuchsia-500 to-cyan-400 animate-spin-slow opacity-40 blur-sm"></div>

                {/* Middle pulsing ring */}
                <div className="absolute inset-2 rounded-full border border-white/30 animate-pulse" />

                {/* Inner core */}
                <div className="absolute inset-4 bg-gradient-to-br from-sky-400 via-fuchsia-500 to-indigo-600 rounded-full shadow-2xl animate-float flex items-center justify-center backdrop-blur-sm">
                  {/* Inner glow ring */}
                  <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>

                  {/* Core content */}
                  <div className="relative w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur border border-white/40 shadow-lg">
                    {/* Animated Cloud logo */}
                    <svg
                      className="w-24 h-24 text-white animate-pulse drop-shadow-lg"
                      fill="currentColor"
                      viewBox="0 0 100 100"
                    >
                      <g transform="translate(50,50)">
                        {/* Central Node */}
                        <circle
                          cx="0"
                          cy="0"
                          r="20"
                          fill="currentColor"
                          opacity="0.7"
                        />
                        {/* Connecting Lines and Nodes */}
                        <line
                          x1="-15"
                          y1="-15"
                          x2="15"
                          y2="15"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                        <line
                          x1="15"
                          y1="-15"
                          x2="-15"
                          y2="15"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                        <circle cx="-15" cy="-15" r="5" fill="currentColor" />
                        <circle cx="15" cy="-15" r="5" fill="currentColor" />
                        <circle cx="-15" cy="15" r="5" fill="currentColor" />
                        <circle cx="15" cy="15" r="5" fill="currentColor" />
                        {/* Outer Glow Effect */}
                        <circle
                          cx="0"
                          cy="0"
                          r="25"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1"
                          opacity="0.3"
                        />
                      </g>
                    </svg>
                    {/* Floating particles */}
                    <div className="absolute inset-0">
                      <div
                        className="absolute w-1.5 h-1.5 bg-white rounded-full animate-ping"
                        style={{ top: "10%", left: "20%" }}
                      />
                      <div
                        className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping"
                        style={{
                          bottom: "20%",
                          left: "10%",
                          animationDelay: "0.6s",
                        }}
                      />
                      <div
                        className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"
                        style={{
                          top: "80%",
                          right: "15%",
                          animationDelay: "1.2s",
                        }}
                      />
                    </div>
                  </div>

                  {/* Pulsating outer glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 opacity-20 animate-ping"></div>
                </div>
              </div>

              {/* Orbiting Tech Stack */}
              <div
                className="absolute inset-0 z-50 animate-spin-slow transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${mousePosition.x * 0.08}px, ${
                    mousePosition.y * 0.08
                  }px)`,
                }}
              >
                {[
                  {
                    name: "Next.js",
                    color: "bg-black-400 border-2 border-white/20",
                    svg: (
                      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C4.344 2.647 1.093 4.485 2.228 5.012z" />
                    ),
                  },
                  {
                    name: "React.js",
                    color: "bg-gradient-to-br from-cyan-400 to-blue-500",
                    svg: (
                      <>
                        <circle cx="12" cy="12" r="2" />
                        <ellipse
                          cx="12"
                          cy="12"
                          rx="11"
                          ry="4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                        <ellipse
                          cx="12"
                          cy="12"
                          rx="11"
                          ry="4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          transform="rotate(60 12 12)"
                        />
                        <ellipse
                          cx="12"
                          cy="12"
                          rx="11"
                          ry="4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          transform="rotate(120 12 12)"
                        />
                      </>
                    ),
                  },
                  {
                    name: "Spring Boot",
                    color: "bg-gradient-to-br from-green-500 to-emerald-800",
                    svg: (
                      <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21z" />
                    ),
                  },
                  {
                    name: "Flutter",
                    color: "bg-gradient-to-br from-blue-400 to-blue-600",
                    svg: (
                      <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.37zm.159 11.871L11.3 14.04l-4.907-4.907 2.864-2.864 8.017 8.017-2.801 2.801z" />
                    ),
                  },
                  {
                    name: "Cloud",
                    color:
                      "bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white/20",
                    svg: (
                      <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                    ),
                  },
                ].map((tech, i, arr) => {
                  const angle = (i * 360) / arr.length;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={tech.name}
                      className="absolute w-20 h-20 flex items-center justify-center"
                      style={{
                        top: `calc(50% + ${y}px - 32px)`,
                        left: `calc(50% + ${x}px - 32px)`,
                        transform: `rotate(${angle}deg)`,
                      }}
                    >
                      <div style={{ transform: `rotate(${-angle}deg)` }}>
                        <div
                          className={`${tech.color} w-16 h-16 rounded-full shadow-2xl flex items-center justify-center cursor-pointer group hover:scale-125 transition-transform duration-300`}
                        >
                          <svg
                            className="w-8 h-8 text-white drop-shadow-lg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {tech.svg}
                          </svg>
                          <div className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/90 px-3 py-1 rounded-lg shadow-xl text-xs font-semibold text-white whitespace-nowrap -top-10 left-1/2 -translate-x-1/2">
                            {tech.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Background Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl"
                style={{
                  transform: `translate(calc(-50% + ${
                    mousePosition.x * 0.2
                  }px), calc(-50% + ${mousePosition.y * 0.2}px))`,
                }}
              />
            </div>
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
