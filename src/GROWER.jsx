import Header from "./Components/Header";

const GROWER = () => {
    const growerDesc = "In January 2025, I joined the Grid Resilience, Outage, Weather, and Emergency Response (GROWER) lab at Georgia Tech as an undergraduate researcher. During my time, I have acquired skills such as data management, data processing and analysis, data visualization, and web development. We have leveraged tools such as GeoPandas and Matplotlib to help create informative graphics that represent various types of power outage data at a zipcode and county level for the United States. We are currently working with other teams within our organization to bring more responsive, real-time data to our dashboard."

    return (
        <div>
            <Header/>
            <div className="section h-full min-h-[100vh]">
                <p className="header">Grid Resilience, Outage, Weather, and Emergency Response Lab (GROWER)</p>
                <div>
                    <a target="_blank" href="https://brandonlee28.github.io/growerdashboard/states/north-carolina" className="desc text-center underline mr-24">Power Outage Dashboard</a>
                    <a target="_blank" href="https://www.linkedin.com/company/poweroutage/posts/?feedView=all" className="desc text-center underline">GROWER Lab LinkedIn</a>
                </div>
                <p className="desc indent-[4rem]">{growerDesc}</p>
                <div className="astro-card-grid">
                    <img src="../public/images/grower/nc_saidi.png" className="astro-card"/>
                    <img src="../public/images/grower/nc_saifi.png" className="astro-card"/>
                    <img src="../public/images/grower/va_saidi.png" className="astro-card"/>
                    <img src="../public/images/grower/va_saifi.png" className="astro-card"/>
                </div>
            </div>
        </div>
    )
}

export default GROWER;