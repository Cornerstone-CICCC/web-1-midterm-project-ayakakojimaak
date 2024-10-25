import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h2>Front-End Developer & UI/UX Designer</h2>
        <h1>Hello, I'm Ayaka Kojima</h1>
        <p>
          As a seasoned front-end engineer with a robust design background, I am dedicated to enhancing user experiences
          and fostering collaborative development environments.
        </p>
        <div className="header__links">
          <a href="#projects">Projects</a>
          <a href="https://www.linkedin.com/in/ayaka-kojima/">LinkedIn</a>
        </div>
      </div>
      <img src="/assets/images/profile.jpg" alt="Ayaka Kojima" className="header__image" />
    </header>
  );
};

export default Header;
