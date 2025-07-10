import {useNavigate} from "react-router-dom";

const Experiences = () => {
    const navigate = useNavigate();

    const csyncRoute = () => {
        navigate("./CSync")
    }

    const gtplRoute = () => {
        navigate("./GTPL")
    }

    const growerRoute = () => {
        navigate("./GROWER")
    }
    
    const wanderSyncRoute = () => {
        navigate("./WanderSync")
    }

    const ssrlRoute = () => {
        navigate("./SSRL")
    }

    const astrophotographyRoute = () => {
        navigate("./Astrophotography")
    }

    return (
        <div className="section">
            <p className="header">Projects & Experiences</p>
            <div className="exp-card-grid">
                <div className="exp-card" onClick={csyncRoute}>CSync: A College Application Management Platform</div>
                <div className="exp-card" onClick={gtplRoute}>Propulsive Landers at Georgia Tech</div>
                <div className="exp-card" onClick={growerRoute}>Grid Resilience, Outage, Weather, Emergency Response Lab</div>
                <div className="exp-card" onClick={wanderSyncRoute}>WanderSync: A Travel Management System</div>
                <div className="exp-card" onClick={ssrlRoute}>Small Satellite Research Lab at UGA</div>
                <div className="exp-card" onClick={astrophotographyRoute}>Astrophotography</div>
            </div>
        </div>
    )
}

export default Experiences;