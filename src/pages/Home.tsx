import NavBar from "../components/NavBar";
import "../styles/home.css";
import logo from "../assets/logo-no-text.png";
import Mission from "./Mission";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home(){

    const [isHome, setIsHome] = useState(true); 
    
   useEffect(() => {
        const changeNavBg = () => {
            const isAtTop = window.scrollY < 10;
            setIsHome(prev => (prev !== isAtTop ? isAtTop : prev));
        };

        window.addEventListener("scroll", changeNavBg);

        return () => window.removeEventListener("scroll", changeNavBg);
    }, []);


    return(
        <main>
            <NavBar isHome={isHome}/>
            <section className="home-top" id="home">
                <div className="home-title-container">
                    <div className="home-title">
                    <img src={logo} width={300}/>
                        <h1>Acme</h1>
                        <h2>A World Of Possibility</h2>
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