import Header from "./Components/Header";

const SSRL = () => {
    const ssrlDesc = "In Spring 2024, I joined the University of Georgia’s Small Satellite Research Laboratory as a Mission Operations member for the MEMESat-1 team, where I developed Java-based orbital simulations to validate CubeSat tracking algorithms and boost positional accuracy by 10%, effectively extending ground-station communication windows. Additionally, I helped refine mission-operations documentation streamlining and organizing our workflow."

    return (
        <div>
            <Header/>
            <div className="section h-full min-h-[100vh]">
                <p className="header">Small Satellite Research Lab at the University of Georgia</p>
                <a href="https://smallsat.uga.edu/missions" target="_blank" className="desc text-center underline">Link to the SSRL Missions Page</a>
                <p className="desc indent-[4rem]">{ssrlDesc}</p>
            </div>
        </div>
    )
}

export default SSRL;