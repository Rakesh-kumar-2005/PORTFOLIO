"use client";

import { useRef, useState } from "react";
import { IoCheckmark, IoCopyOutline, IoThumbsUp } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import useIntersectionObserver from "./use-intersection-observer";
import { FaThumbsUp } from "react-icons/fa6";
import { BsHandThumbsUp } from "react-icons/bs";
import { MdThumbUp } from "react-icons/md";
import { HiOutlineThumbUp, HiThumbUp } from "react-icons/hi";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto min-h-[180vh] w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  delay = 0,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  delay?: number;
}) => {
  const leftLists = ["ReactJS", "NextJS", "Typescript", "TailwindCSS"];
  const rightLists = ["SpringBoot", "Flutter", "Cloud", "MySQL"];

  const [isHovered, setIsHovered] = useState(false);
  const [targetRef, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("yourmail@example.com").then(() => {
      setCopied(true);

      // reset after delay so animations can replay next time
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div
      ref={targetRef}
      className={cn(
        `row-span-1 relative  overflow-hidden rounded-3xl border border-white/20 group/bento hover:shadow-xl transition-all duration-500 hover:shadow-fuchsia-400/20 shadow-sm justify-between hover:scale-105 flex flex-col space-y-4 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`,
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${id === 7 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              width={200}
              height={200}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 7 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-500 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div
            className={`font-sans text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-72 xs:max-w-80 sm:max-w-96 font-bold z-10  ${
              id == 3 &&
              "translate-y-0 xs:translate-y-[4px] sm:translate-y-[8px] md:translate-y-[15px] lg:translate-y-[24px]"
            }`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 4 && (
            <div
              className={`flex gap-1 lg:gap-5 w-fit absolute right-2 lg:right-4`}
            >
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className={`lg:py-4 lg:px-3 py-2 px-3 hover:scale-105 duration-300 transition-all text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] ${
                      i === 0
                        ? "hover:bg-gradient-to-br from-cyan-400 to-blue-500"
                        : i === 1
                        ? "hover:bg-gradient-to-br from-black-100 to-black"
                        : i === 2
                        ? "hover:bg-gradient-to-br from-blue-600 to-blue-800"
                        : "hover:bg-gradient-to-br from-cyan-400 to-cyan-500"
                    }`}
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-transparent"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center "></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className={`lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center hover:scale-105 duration-300 transition-all bg-[#10132E] ${
                      i === 0
                        ? "hover:bg-gradient-to-br from-green-500 to-emerald-600"
                        : i === 1
                        ? "hover:bg-gradient-to-br from-blue-400 to-blue-600"
                        : i === 2
                        ? "hover:bg-gradient-to-br from-orange-400 to-orange-600"
                        : "hover:bg-gradient-to-br from-sky-500 to-sky-600"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 7 && <CopyEmailButton id={id} />}
        </div>
      </div>
    </div>
  );
};

export default function CopyEmailButton({ id }: { id: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("yourmail@example.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
  id === 7 && (
    <div className="mt-5 relative flex flex-col items-center">
      {/* Button */}
      <div className="relative cursor-pointer">
        <MagicButton
          title={copied ? "Email is Copied!" : "Copy my email address"}
          icon={
            copied ? (
              <IoCheckmark className="text-green-400 text-[12px] sm:text-[12px] md:text-[16px]" />
            ) : (
              <IoCopyOutline className="text-[12px] sm:text-[12px] md:text-[16px]" />
            )
          }
          position="left"
          handleClick={handleCopy}
          otherClasses={`!bg-[#161A31] border transition-all duration-300 transform cursor-pointer
            text-[5px] sm:text-[5px] md:text-[14px]
            px-1 sm:px-1.5 py-0.5 sm:py-1
            ${
              copied
                ? "border-green-400 shadow-md shadow-green-400/25"
                : "border-transparent hover:border-purple-400 hover:shadow-md hover:shadow-purple-400/25"
            }`}
        />
      </div>

      {/* Tooltip */}
      <div
        className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
          copied
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-black text-[10px] sm:text-[10px] md:text-[12px] px-1.5 py-0.5 rounded-md shadow-md border border-green-400/40 relative">
          <div className="flex items-center gap-0.5">
            <HiOutlineThumbUp className="text-green-400 text-[10px] sm:text-[10px] md:text-[12px]" />
            <span>Let&apos;s Connect!</span>
          </div>
          {/* Small arrow */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-gray-800 rotate-45 border-l border-t border-green-400/40"></div>
          </div>
        </div>
      </div>
    </div>
  )
);

}
