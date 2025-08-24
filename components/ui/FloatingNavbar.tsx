"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [activeItem, setActiveItem] = useState(-1);
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // Improved container styling with better spacing
          "flex md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-6 inset-x-0 mx-auto px-6 py-3 rounded-full border border-black/.1 shadow-2xl items-center justify-between bg-black/50 backdrop-blur-sm max-w-xl",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.85)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              // Improved padding and centering for all items
              "relative text-neutral-50 items-center flex flex-col p-1 rounded-full",
              "hover:bg-white/10 hover:text-blue-400 min-w-[80px] transition-all duration-300",
              activeItem === idx ? "bg-white/20" : ""
            )}
            onClick={() => setActiveItem(idx)}
          >
            <span className="flex items-center justify-center mb-1">
              {navItem.icon}
            </span>
            <span className="text-sm font-medium px-2 py-1 !cursor-pointer text-center">
              {navItem.name}
            </span>
            {activeItem === idx ? (
              <motion.span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 -z-10"
                layoutId="activeItem"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            ) : null}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
