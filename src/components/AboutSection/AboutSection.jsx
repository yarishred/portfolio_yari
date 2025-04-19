import React from "react";

import aboutMe from "../../assets/images/global/aboutme.png";

// Import Styles
import "../../styles/components/AboutSection.css";

export const AboutSection = () => {
  return (
    <section className="layout__about">
      <h1>About Section</h1>

      <div className="layout__about__shape">
        <figure>
          <img src={aboutMe} alt="" />
        </figure>
      </div>
    </section>
  );
};
