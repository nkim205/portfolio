import Header from "./Components/Header";

const Csync = () => {
    const csyncDesc = "CSync is a college application manager that helps students stay organized and track all their college applications with ease! It is a full stack web application that was built using React.js, Node.js, MongoDB, RESTful APIs, and Auth0. It leverages Auth0 for JWT-based authentication and custom Express middleware, allowing for secure authorization and data validation. On the backend, RESTful API endpoints combined with rate limiting, caching, and optimized middleware pipelines boost data querying by 50% and eliminate hanging requests. The frontend is built on a foundation of dynamic, reusable, and scaleable React components styled with TailwindCSS. Through asynchronous data fetching and error handling, it achieves a seamless, responsive user experience across all platforms. It is deployed on Render and Netlify with a 99% uptime and was developed through Agile sprints using Git for Version Control."

    return (
        <div>
            <Header/>
            <div className="section h-full min-h-[100vh]">
                <p className="header">CSync: A College Application Management Platform</p>
                <a href="https://heroic-empanada-14fa99.netlify.app/" target="_blank" className="underline desc text-center">Link to CSync!</a>
                <p className="desc indent-[4rem]">{csyncDesc}</p>
                <p className="desc text-center font-bold">Images coming soon!</p>
            </div>
        </div>
    )
}

export default Csync;