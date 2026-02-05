import type React from "react"
import "../styles/modal.css"

type Props = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginModal({setShowModal}: Props) {

    return(
         <div className="modal-background">
            <div className="modal-container">
                <button className="modal-close" onClick={() => setShowModal(false)}>X</button>
                <h3 className="login-header">Login</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" placeholder="Username" name="username"/>
                    <label htmlFor="password">Password: </label>
                    <input type="password" placeholder="Password" name="password"/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}