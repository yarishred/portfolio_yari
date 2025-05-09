import React from "react";

// Import Components
import { NavSection } from "./components/NavSection/NavSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { BlogSection } from "./components/BlogSection/BlogSection";

// Import Styles
import "./styles/GlobalStyle.css";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const PortfolioApp = () => {


  const scrolling = useRef(null);

  
  const handleScroll = (event) => {
    const delta = event.deltaY;

    if (scrolling.current) {
      scrolling.current.scrollLeft +=
        delta > 0
          ? scrolling.current.offsetWidth
          : -scrolling.current.offsetWidth;
    }

    console.log(scrolling.current.scrollLeft)
  };

  return (
    <main className="layout">
      <NavSection />
      <section
        className="layout__content"
        onWheel={handleScroll}
        ref={scrolling}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <BlogSection/>
      </section>
    </main>
  );
};
