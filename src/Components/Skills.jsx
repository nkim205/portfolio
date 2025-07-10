const Skills = () => {
    return (
        <div className="flex flex-col items-center gap-0 py-[2rem] bg-[#eeeaff]">
            <p className="header">Skills</p>
            <div className="section">
                <p className="subheader">Programming Languages</p>
                <div className="skill-card-grid">
                    <p className="skill-card">Java</p>
                    <p className="skill-card">JavaScript</p>
                    <p className="skill-card">C</p>
                    <p className="skill-card">C++</p>
                    <p className="skill-card">Python</p>
                    <p className="skill-card">MATLAB</p>
                </div>
            </div>

            <div className="section">
                <p className="subheader">Technologies, Frameworks, & Skills</p>
                <div className="skill-card-grid">
                    <p className="skill-card">Node.js</p>
                    <p className="skill-card">React.js</p>
                    <p className="skill-card">TailwindCSS</p>
                    <p className="skill-card">Express</p>
                    <p className="skill-card">MongoDB</p>
                    <p className="skill-card">Google Firebase</p>
                    <p className="skill-card">RESTful APIs</p>
                    <p className="skill-card">JWT Authentication</p>
                    <p className="skill-card">Auth0</p>
                    <p className="skill-card">Cloud Deployment</p>
                    <p className="skill-card">Git</p>
                    <p className="skill-card">Agile Methodologies</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;