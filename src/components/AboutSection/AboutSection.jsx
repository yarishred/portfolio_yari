import React from "react";

import aboutMe from "../../assets/images/global/aboutme.png";

// Import Styles
import "../../styles/components/AboutSection.css";

export const AboutSection = () => {
  return (
    <section className="layout__about">
      <article className="layout__about__description">
        <h2>
          Create, Teach and <span>Inspire.</span>
        </h2>
        <p>
          Web developer with a Master’s in AI. I build scalable apps and explore
          how artificial intelligence can enhance digital experiences. I focus
          on teaching and sharing knowledge through code.
        </p>
      </article>

      <div className="layout__about__shape">
        <figure>
          <img src={aboutMe} alt="" />
        </figure>
      </div>
    </section>
  );
};
