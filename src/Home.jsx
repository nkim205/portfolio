import AboutMe from "./Components/AboutMe";
import Experiences from "./Components/Experiences";
import Education from "./Components/Education";
import Skills from "./Components/Skills";

const Home = () => {
  return (
    <>
      <div id="about-me">
        <AboutMe />
      </div>

      <div id="experiences">
        <Experiences />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="education">
        <Education />
      </div>
    </>
  );
};

export default Home;
