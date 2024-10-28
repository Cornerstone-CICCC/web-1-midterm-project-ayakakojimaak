import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SettingAppearance from "./components/SettingAppearance";
import AboutMe from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
import ContactForm from "./components/ContactForm";
import "./styles/main.scss";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="background-header">
        <img src={`${process.env.PUBLIC_URL}/assets/images/vector01.svg`} className="background-header__vector" />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/atf.png`}
          alt="Ayaka Kojima"
          className="background-header__img"
        />
      </div>
      <div id="main">
        <Header />
        <Sidebar />
        <SettingAppearance />
        <AboutMe />
        <ProjectSection />
        <ContactForm />
      </div>
      <div className="background-footer">
        <img src={`${process.env.PUBLIC_URL}/assets/images/vector03.svg`} className="background-footer__vector" />
      </div>
    </ThemeProvider>
  );
};

export default App;
