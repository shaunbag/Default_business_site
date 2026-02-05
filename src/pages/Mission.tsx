import "../styles/mission.css";
import earth from "../assets/earth.gif";
import logo from "../assets/logo-no-text.png";

export default function Mission() {

    return (
        <section className="home-mission" id="mission">
            <div className="mission-title">
                <img src={logo} />
                <h1>Our Mission</h1>
                <img src={logo} />
            </div>
            
            <div className="mission-container">
                <div className="mission-card">
                            <p>At AcmeTechExperience, our mission is to build technology that works reliably in the real world not just on paper.
                                We believe great technology comes from experience, thoughtful design, and a deep understanding of how people actually use the systems we create.</p>
                            <img src={earth} width={250} />
                        </div>
              
            </div>
            <section className="triangle"></section>
        </section>
    )
}