import NavBar from "../components/NavBar";
import "../styles/home.css";
import logo from "../assets/logo-no-text.png";
import Mission from "./Mission";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";

export default function Home(){

    return(
        <main>
            <NavBar />
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