import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BrowseArchive } from "./components/BrowseArchive";
import { WhatThisSiteIs } from "./components/WhatThisSiteIs";
import { FeaturedCaseStudies } from "./components/FeaturedCaseStudies";
import { QuickGlossary } from "./components/QuickGlossary";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div className="min-h-screen bg-[#f7f4ef] font-sans text-[#1f2937]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
          
          .font-serif {
            font-family: 'Playfair Display', Georgia, serif;
          }
          
          .font-sans {
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          
          body {
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
        `}
      </style>
      
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      
      <main>
        <HeroSection />
        
        <BrowseArchive />
        
        <WhatThisSiteIs />
        
        <FeaturedCaseStudies />
        
        <QuickGlossary />
      </main>
      
      <Footer />
    </div>
  );
}