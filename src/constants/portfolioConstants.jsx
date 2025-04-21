//Imports
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import rustIcon from "../Assets/icons/rust.svg";
import nodejsIcon from "../Assets/icons/nodejs.svg";
import html5Icon from "../Assets/icons/html5.svg";
import css3Icon from "../Assets/icons/css3.svg";
import reactIcon from "../Assets/icons/react.svg";
import javascriptIcon from "../Assets/icons/javascript.svg";

//Portfolio Pathnames
export const PORTFOLIO_PATHNAME = {
  about: "/about",
  home: "/",
  blog: "/blog",
  works: "/works",
};

// Portfolio Social Network Icons
export const PORTFOLIO_SOCIALNETWORKS_ICONS = [
  { socialNetworkIcon: githubIcon, description: "Github" },
  { socialNetworkIcon: linkedinIcon, description: "Linkedin" },
  { socialNetworkIcon: instagramIcon, description: "Instagram" },
];

// Portfolio Technologies Icons
export const PORTFOLIO_TECHSTACK_ICONS = [
  { techIcon: rustIcon, description: "Rust", color: "#F58888" },
  { techIcon: nodejsIcon, description: "Node JS", color: "#41DBCE" },
  { techIcon: html5Icon, description: "HTML5", color: "#0FBEF4" },
  { techIcon: css3Icon, description: "CSS3", color: "#F58888" },
  { techIcon: reactIcon, description: "React", color: "#0FBEF4" },
  { techIcon: javascriptIcon, description: "Javascript", color: "#41DBCE" },
];

// Portfolio Project Cards
export const PORTFOLIO_PROJECT_CARDS = [
  {
    projectTitle: "Project 1",
    projectDescription:
      "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac massa commodo, dignissim purus vel, malesuada justo. In auctor luctus mollis. Nunc varius nulla sapien, et fringilla lorem pharetra sit amet. Maecenas ut pellentesque lacus, ac lacinia turpis. Ut ac.",
    color: "orange",
  },
  {
    projectTitle: "Project 2",
    projectDescription:
      "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac massa commodo, dignissim purus vel, malesuada justo. In auctor luctus mollis. Nunc varius nulla sapien, et fringilla lorem pharetra sit amet. Maecenas ut pellentesque lacus, ac lacinia turpis. Ut ac.",
    color: "teal",
  },
  {
    projectTitle: "Project 3",
    projectDescription:
      "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac massa commodo, dignissim purus vel, malesuada justo. In auctor luctus mollis. Nunc varius nulla sapien, et fringilla lorem pharetra sit amet. Maecenas ut pellentesque lacus, ac lacinia turpis. Ut ac.",
    color: "salmon",
  },
  {
    projectTitle: "Project 4",
    projectDescription:
      "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac massa commodo, dignissim purus vel, malesuada justo. In auctor luctus mollis. Nunc varius nulla sapien, et fringilla lorem pharetra sit amet. Maecenas ut pellentesque lacus, ac lacinia turpis. Ut ac.",
    color: "dodgerblue",
  },
  {
    projectTitle: "Project 5",
    projectDescription:
      "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac massa commodo, dignissim purus vel, malesuada justo. In auctor luctus mollis. Nunc varius nulla sapien, et fringilla lorem pharetra sit amet. Maecenas ut pellentesque lacus, ac lacinia turpis. Ut ac.",
    color: "gold",
  },
];
