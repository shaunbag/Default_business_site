import type React from "react"
import "../styles/modal.css"

type Props = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuModal({ setShowModal, setShowLoginModal }: Props) {

    return (
        <div className="modal-background">
            <div className="modal-container">
                <h3><a href="#home">Home</a></h3>
                <h3><a href="#mission">Mission</a></h3>
                <h3><a href="#about">About</a></h3>
                <h3><a href="#contact">Contact</a></h3>
                <h3><a >Shop</a></h3>
                <h3><a className="login-nav" onClick={() => {
                    setShowLoginModal(true)
                    setShowModal(false)
                }}>Login</a></h3>
            </div>
        </div>
    )
}