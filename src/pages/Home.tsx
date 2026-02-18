import NavBar from "../components/NavBar";
import "../styles/home.css";
import Mission from "./Mission";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const history = useNavigate();


    return (
        <main>
            <NavBar shopNav={false} />
            <main className="home-top" id="home">
                <article className="home-title-container">
                    <section className="home-title">
                        <h1>Power Your Creations With Acme</h1>
                        <div className="home-subtitle">
                            <h3>Building the future, one project at a time.</h3>
                            <button onClick={() => history('/shop')}>Shop</button>
                        </div>
                    </section>
                </article>
                <section className="home-flash-cards">
                    <div className="flash-card flash-card-a">
                        <h2>100+</h2>
                        <p>Valued Customers</p>
                    </div>
                    <div className="flash-card flash-card-b">
                        <h2>50+</h2>
                        <p>Projects Completed</p>
                    </div>
                    <div className="flash-card flash-card-c">
                        <h2>100%</h2>
                        <p>Customer Satisfaction</p>
                    </div>
                </section>
                <section className="trust-pilot">
                    <div className="trust-pilot-content">
                        <h2>Rated 5 Stars on Trustpilot</h2>
                        <p>See why our customers love us!</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <button onClick={() => window.open("https://www.trustpilot.com/review/acme.com", "_blank")}>Read Reviews</button>
                    </div>
                </section>
            </main>


            <Mission />
            <About />
            <Contact />
            <Footer />

        </main>
    )
}