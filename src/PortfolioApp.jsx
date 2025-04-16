import React from "react";

// Import Components
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { NavSection } from "./components/NavSection/NavSection";

// Import Styles
import "./styles/GlobalStyle.css";

export const PortfolioApp = () => {
  return (
    <main className="layout">
      <NavSection />
      <section className="layout__content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </section>
    </main>
  );
};
