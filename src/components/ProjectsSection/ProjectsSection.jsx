import React from "react";

// Import Styles
import "../../styles/components/ProjectsSection.css";

export const ProjectsSection = () => {
  return (
    <section className="projects">
      <article className="projects__description">
        <h2 className="projects__description__title">
          <span className="projects__description__hightlight">Things </span>I've
          Built.
        </h2>
        <p className="projects__description__text">Ideas that have turned into real projects.</p>
      </article>
      {/* <article className="projects__list">
        <div className="projects__item">Project 1</div>
      </article> */}
    </section>
  );
};
