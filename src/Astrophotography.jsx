import Header from "./Components/Header";

const Astrophotography = () => {
    return (
        <div>
            <Header/>
            <div className="section h-full">
                <p className="header">Astrophotography</p>
                <div className="desc">
                    <p>In December 2022, I witnessed my first astronomical event —the Geminid meteor shower— and instantly became hooked on capturing the night sky. Over the past three years I’ve:</p>
                    <ul className="list-disc ml-16">
                        <li>Overcome freezing winter nights to capture deep-sky objects</li>
                        <li>Gained patience and resilience waiting for the stars to align under a clear, moonless night sky</li>
                        <li>Overcome various setbacks with by experimenting with different equipment and techniques</li>
                    </ul>
                    <p>Through countless nights spent up in the mountains, I've captured stunning images of the Orion Nebula, Lagoon Nebula, and more!</p>
                </div>
                
                <div className="astro-card-grid">
                    <img src="../public/images/astro/orion.png" className="astro-card"/>
                    <img src="../public/images/astro/heart-and-soul.png" className="astro-card"/>
                    <img src="../public/images/astro/tadpoles.png" className="astro-card"/>
                    <img src="../public/images/astro/lagoon.png" className="astro-card"/>
                    <img src="../public/images/astro/moon.png" className="astro-card"/>
                    <img src="../public/images/astro/eclipse.png" className="astro-card"/>
                </div>
            </div>
        </div>
    )
}

export default Astrophotography;