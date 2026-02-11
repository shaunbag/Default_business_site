import { useEffect, useRef, useState } from "react";
import "../styles/splash.css";
import logo from "../assets/logo-black.png";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

export default function Splash() {

    const [email, setEmail] = useState("");
    const [quote, setQuote] = useState("");
    const formRef = useRef<HTMLFormElement | null>(null);
    const history = useNavigate();

    useEffect(() => {
        callQuoteApi();
    }, [])

    async function callQuoteApi() {
        const res = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random");

        if (!res.ok) {
            throw new Error(`Get Request For Quote Failed (${res.status}) `);
        }

        const data = await res.json();
        console.log(data);
        if (data && quote === "") {
            setQuote(data.quote);
        }
    }

    function sendEmail(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            formRef.current,
            {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            }
        ).then(
            () => console.log("SUCCESS!"),
            (error) => console.log("FAILED...", error.text)
        );
        setEmail("")
    }


    return (
        <article className="splash-container">
            <section className="splash-section">
                <img src={logo} width={200}/>
                <h2 className="splash-sub-header">Powering <span style={{color: 'red'}}>Tech</span> Through <span style={{color: 'green'}}>Experience</span></h2>
                <i>"{quote}"</i>
                <div>
                    <h3>Mailing List</h3>
                    <form ref={formRef} onSubmit={(e) => sendEmail(e)}>
                        <input required className="mail-input" placeholder="Email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button className="mail-btn" type="submit">SUBMIT</button>
                    </form>
                </div>
                <br/>
                <button className="enter-btn" onClick={() => history("/home")}>Enter Site</button>
            </section>

        </article>
    )
}