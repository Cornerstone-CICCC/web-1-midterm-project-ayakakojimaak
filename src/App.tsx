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
      <div id="main">
        <Header />
        <Sidebar />
        <SettingAppearance />
        <AboutMe />
        <ProjectSection />
        <ContactForm />
      </div>
    </ThemeProvider>
  );
};

export default App;
