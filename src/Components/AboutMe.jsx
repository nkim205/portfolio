const AboutMe = () => {
    const description = "Hi, I’m Nathan Kim, a third-year Computer Science major at Georgia Tech focusing on Information Networks, full-stack development, and Modeling & Simulation. I’ve architected guidance, navigation, and control algorithms in Python/C++ for VTOL rockets and helped visualized US power outage data at a zipcode level via GeoPandas and Matplotlib. More recently, I have developed scalable, full-stack applications using tools such as React, Node.js, and MongoDB."
    
    return (
        <div className="section">
            <img src="/portfolio/images/headshot.jpg" className="w-[12.5vw] rounded-full"></img>
            <p className="text-[1.5rem] text-center text-purple-900 mx-[20vw]">{description}</p>
            <div className="flex flex-row gap-16">
                <a href="https://github.com/nkim205" target="_blank"><img src="/portfolio/images/github.png" className="social-icon"></img></a>
                <a href="https://www.linkedin.com/in/nathan-kim-7816b22bb/" target="_blank"><img src="/portfolio/images/linkedin.png" className="social-icon"></img></a>
                <a href="mailto:kimnathan0324@gmail.com" target="_blank"><img src="/portfolio/images/email.png" className="social-icon"></img></a>
            </div>
        </div>
    )
}

export default AboutMe;