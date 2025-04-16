// Import Styles
import "../../styles/components/NavSection.css";

export const NavSection = () => {
  return (
    <nav className="layout__navigation">
      <ul className="layout__list">
        <li className="layout__item">
          <a className="layout__link">About</a>
        </li>
        <li className="layout__item">
          <a className="layout__link">works</a>
        </li>
        <li className="layout__item">
          <a className="layout__link">blog</a>
        </li>
        <li className="layout__item">
          <a className="layout__link">contact</a>
        </li>
      </ul>
    </nav>
  );
};
