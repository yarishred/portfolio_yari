// Import Styles
import "../../styles/components/NavSection.css";

export const NavSection = () => {
  return (
    <nav className="layout__navigation">
      <ul>
        <li>
          <button className="link menu-opt1">About</button>
        </li>
        <li>
          <button className="link menu-opt1">works</button>
        </li>
        <li>
          <button className="link menu-opt2">blog</button>
        </li>
        <li>
          <button className="link menu-opt2">contact</button>
        </li>
      </ul>
    </nav>
  );
};
