import React from "react";

// Import constants
import {
  PORTFOLIO_SOCIALNETWORKS_ICONS,
  PORTFOLIO_TECHSTACK_ICONS,
} from "../../constants/portfolioConstants.jsx";

// Import Styles
import "../../styles/components/HeroSection.css";

// Import Custom Hooks
import { useRandomIcons } from "../../hooks/useRandomIcons";

export const HeroSection = () => {
  const [techStackIcons] = useRandomIcons(PORTFOLIO_TECHSTACK_ICONS);

  return (
    <section className="hero">
      <article className="hero__description">
        <h1 className="hero__title">Yari Ruiz</h1>
        <p className="hero__text"> Fullstack Developer <span className="hero__text__highlight">AI Master's</span> Educator.</p>
        <figure className="hero__socialnetwork">
          {PORTFOLIO_SOCIALNETWORKS_ICONS.map((snIcon) => (
            <img
              className="hero__socialnetwork__icons"
              key={snIcon.description}
              src={snIcon.socialNetworkIcon}
              alt={snIcon.description}
            />
          ))}
        </figure>
      </article>
      <article className="hero__techstack">
        {techStackIcons.map((icon, index) => {
          return (
            <div
              key={index}
              className={`hero__tech hero__tech${index}`}
              style={{
                backgroundColor:
                  PORTFOLIO_TECHSTACK_ICONS[icon - 1]?.color ||
                  "var(--color-5th)",
              }}
            >
              <img
                className={"hero__techIcon"}
                style={{
                  display: PORTFOLIO_TECHSTACK_ICONS[icon - 1]?.color || "none",
                }}
                src={PORTFOLIO_TECHSTACK_ICONS[icon - 1]?.techIcon}
                alt={
                  PORTFOLIO_TECHSTACK_ICONS[icon - 1]?.description ||
                  "No description"
                }
              />
            </div>
          );
        })}
      </article>
    </section>
  );
};

// <MainBannerStyle>
//   <div className="banner-wrapper">
//     <h1 className="banner-textPrimary">Yari Ruiz</h1>
//     <p className="banner-textsecondary">
//       Developer & MSc in Machine Learning.
//     </p>
//     <div className="banner-sn-wrapper">
//       {PORTFOLIO_SN_ICONS.map((snIcon) => (
//         <img
//           key={snIcon.description}
//           src={snIcon.snIcon}
//           alt={snIcon.description}
//         />
//       ))}
//     </div>
//   </div>
//   <div className="banner-box-wrapper">
//     {techIcons.map((icon, index) => {
//       return (
//         <div
//           key={index}
//           className={`box box${index}`}
//           style={{
//             backgroundColor:
//               PORTFOLIO_TECH_ICONS[icon - 1]?.color || "var(--color_5th)",
//           }}
//         >
//           <img
//             className={"techIcon"}
//             style={{
//               display: PORTFOLIO_TECH_ICONS[icon - 1]?.color || "none",
//             }}
//             src={PORTFOLIO_TECH_ICONS[icon - 1]?.techIcon}
//             alt={
//               PORTFOLIO_TECH_ICONS[icon - 1]?.description || "No description"
//             }
//           />
//         </div>
//       );
//     })}
//   </div>
// </MainBannerStyle>
