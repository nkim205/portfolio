import Header from "./Components/Header";

const WanderSync = () => {
    const wandersyncDesc = "In Fall 2024, I joined a 6-member team to develop WanderSync, a collaborative Android travel‐management app built with Java, XML, and Google Firebase. Working in two-week Agile sprints over the course of 2 months, I led the design and development of a Firebase data schemas, security rules, and REST interfaces that boosted query efficiency by 25% and ensured real-time, authenticated access for users. On the front end, I helped design singleton and observer patterns to create loosely coupled modules for trip CRUD, collaborator invites, and itinerary sharing, creating a cohesive and responsive UI."

    return (
        <div>
            <Header/>
            <div className="section h-full min-h-[100vh]">
                <p className="header">WanderSync: Travel Management System</p>
                
                <div>
                    <a target="_blank" href="https://charleskimbac.github.io/test/" className="desc text-center underline mr-24">WanderSync Blog Page</a>
                    <a target="_blank" href="https://www.linkedin.com/feed/update/urn:li:activity:7266677771534249984/" className="desc text-center underline">WanderSync LinkedIn Post</a>
                </div>
                
                <p className="desc indent-[4rem]">{wandersyncDesc}</p>
                <div className=" grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    <img src="/portfolio/images/wandersync/home.png"/>
                    <img src="/portfolio/images/wandersync/Accomodations.png"/>
                    <img src="/portfolio/images/wandersync/Logistics.png"/>
                    <img src="/portfolio/images/wandersync/Destinations.png"/>
                    <img src="/portfolio/images/wandersync/Dining.png"/>
                    <img src="/portfolio/images/wandersync/Community.png"/>
                </div>
            </div>
        </div>
    )
}

export default WanderSync;