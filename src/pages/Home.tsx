import NavBar from "../components/NavBar";
import "../styles/home.css";
import logo from "../assets/logo-no-text.png";
import Mission from "./Mission";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const [isHome, setIsHome] = useState(true);
    const history = useNavigate();

    useEffect(() => {
        const changeNavBg = () => {
            const isAtTop = window.scrollY < 10;
            setIsHome(prev => (prev !== isAtTop ? isAtTop : prev));
        };

        window.addEventListener("scroll", changeNavBg);

        return () => window.removeEventListener("scroll", changeNavBg);
    }, []);


    return (
        <main>
            <NavBar isHome={isHome} shopNav={false}/>
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