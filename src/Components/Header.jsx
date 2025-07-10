import {useNavigate, useLocation} from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const homeRoute = () => {
        navigate("../")
    }

    const goToSection = (sectionId) => {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: sectionId } });
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
    }

    
    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location])

    return (
        <div className="flex flex-row justify-between px-4 py-2 text-[1.5rem] text-purple-900 bg-purple-50">
            <p>Nathan Donghyun Kim</p>
            <ul className="flex flex-row gap-10">
                <li onClick={homeRoute} className="cursor-pointer">Home</li>
                <li onClick={() => goToSection("about-me")} className="cursor-pointer">About Me</li>
                <li onClick={() => goToSection("experiences")} className="cursor-pointer">Projects & Experience</li>
                <li onClick={() => goToSection("education")} className="cursor-pointer">Education</li>
                <li onClick={() => goToSection("skills")} className="cursor-pointer">Skills</li>
            </ul>
        </div>
    )
}

export default Header;