"use client";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      {/* <div className="hidden lg:block">
        <FloatingNav navItems={navItems} />
      </div> */}

      {/* Hero section - full width, no constraints */}
      <Hero />
      {/* Other sections with proper container */}
      <div className="max-w-7xl w-full px-4 sm:px-28">
        <Grid />
        {/* <RecentProjects />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
}