import type React from "react"
import "../styles/modal.css"
import { useNavigate } from "react-router-dom";

type Props = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuModal({ setShowModal, setShowLoginModal }: Props) {

    const history = useNavigate();
    
    return (
        <div className="modal-background">
            <div className="modal-container">
            <button className="modal-close" onClick={() => setShowModal(false)}>X</button>
                <h3><a onClick={() => {
                    history("/home")
                    setShowModal(false)
                }}>Home</a></h3>
                <h3><a onClick={() => {
                    history("/shop")
                    setShowModal(false)
                }}>Shop</a></h3>
                <h3><a className="login-nav" onClick={() => {
                    setShowLoginModal(true)
                    setShowModal(false)
                }}>Login</a></h3>
            </div>
        </div>
    )
}