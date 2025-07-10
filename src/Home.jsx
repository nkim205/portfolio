import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Experiences from "./Components/Experiences";
import Education from "./Components/Education";
import Skills from "./Components/Skills";

const Home = () => {
    return (
        <div className="h-[100vh]">
            <Header/>
            <div id="about-me">
                <AboutMe/>
            </div>
        
            <div id="experiences">
                <Experiences/>
            </div>

            <div id="education">
                <Education/>
            </div>

            <div id="skills">
                <Skills/>
            </div>
        </div>
    )
}

export default Home;