import { useState } from "react";
import logo from "../assets/logo-no-text.png";
import menu from "../assets/menu.png"
import "../styles/navbar.css";
import LoginModal from "./LoginModal";
import MenuModal from "./MenuModal";

type Props = {
    isHome: boolean;
}

export default function NavBar({isHome}: Props) {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showNavModal, setShowNavModal] = useState(false);

    return (
        <>
            <nav className="nav-bar" style={{backgroundColor: isHome ? "rgba(2, 54, 105, 0.452)" : "transparent" }}>

                <img src={logo} width={70} />

                <div className="nav-items">
                    <h3><a href="#home">Home</a></h3>
                    <h3><a href="#mission">Mission</a></h3>
                    <h3><a href="#about">About</a></h3>
                    <h3><a href="#contact">Contact</a></h3>
                    <h3><a >Shop</a></h3>
                    <h3><a className="login-nav" onClick={() => setShowLoginModal(true)}>Login</a></h3>
                </div>

                <img id="menu-icon" src={menu} width={70} onClick={() => setShowNavModal(true)} />


            </nav>
            {
                showLoginModal && (
                    <LoginModal setShowModal={setShowLoginModal} />
                )
            }
            {
                showNavModal && (
                    <MenuModal setShowLoginModal={setShowLoginModal} setShowModal={setShowNavModal} />
                )
            }

        </>
    )
}