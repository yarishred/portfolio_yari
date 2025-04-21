import React from "react";

import aboutMe from "../../assets/images/global/aboutme.png";

// Import Styles
import "../../styles/components/AboutSection.css";

export const AboutSection = () => {
  return (
    <section className="about">
      <article className="about__description">
        <h2 className="about__description__title">
          Create, Teach and <span className="about__description__highlight">Inspire.</span>
        </h2>
        <p className="about__description__text">
          Web developer with a Master’s in AI. I build scalable apps and explore
          how artificial intelligence can enhance digital experiences. I focus
          on teaching and sharing knowledge through code.
        </p>
      </article>

      <div className="about__shape">
        <figure className="about__image">
          <img className="about__image__photo" src={aboutMe} alt="Photo of Yari, web developer and AI enthusiast" />
        </figure>
      </div>
    </section>
  );
};
