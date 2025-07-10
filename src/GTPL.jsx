import Header from "./Components/Header";

const GTPL = () => {
    const gtplDesc = "In Fall 2024, I joined Propulsive Landers at Georgia Tech as a GNC algorithms developer, where I designed spline-based path-planning and gimbal-command translation algorithms for VTOL rockets. We were accepted to present our research at the AIAA Region 2 Conference in Greensboro, North Carolina (April 2025). In December of 2024, I was promoted to GNC Vice-Lead, where I first led the development of our rocket's state space model. Following its completion, I co-directed the implementation of our Linear Quadratic Regulator (LQR) control loop, improving accuracy and runtime by 20%."

    return (
        <div>
            <Header/>
            <div className="section h-full min-h-[100vh]">
                <p className="header">Georgia Tech Propulsive Landers (GTPL)</p>
                <a href="https://www.gtpropulsivelanders.org/" target="_blank" className="desc text-center underline">Link to Propulsive Landers Website</a>
                <p className="desc indent-[4rem]">{gtplDesc}</p>
                <img src="../public/images/gtpl.jpg" className="w-[60vw]"/>
            </div>
        </div>
    )
}

export default GTPL;