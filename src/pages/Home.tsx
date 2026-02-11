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
            <NavBar shopNav={false}/>
            <section className="home-top" id="home">
                <div className="home-title-container">
                    <div className="home-title">
                        <h1>Power Your Creations With Acme</h1>
                        <div className="home-subtitle">
                            <h3>Building the future, one project at a time.</h3>
                            <button onClick={() => history('/shop')}>Shop</button>
                        </div>

                    </div>
                </div>

            </section>

            <Mission />
            <About />
            <Contact />
            <Footer />

        </main>
    )
}