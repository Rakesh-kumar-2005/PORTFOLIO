"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      {/* FloatingNav should be positioned absolutely to not affect layout */}
      {/* Show only on large screens and above */}
      <div className="hidden lg:block">
        <FloatingNav navItems={navItems} />
      </div>

      {/* Hero section - full width, no constraints */}
      <Hero />

      {/* Other sections with proper container */}
      <div className="max-w-7xl w-full px-4 sm:px-10">
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
