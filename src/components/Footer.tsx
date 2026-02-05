import "../styles/footer.css";
import logo from "../assets/logo.png";
import github from "../assets/github.png";
import x from "../assets/x.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

export default function Footer(){
    return(
        <footer className="footer-container">
        <div className="footer-twotier__top">
            <div className="footer-twotier__top-container">
                <div className="footer-twotier__brand">
                    <img src={logo} width={70} />
                   
                     <p>We build technology grounded in real-world experience. Every solution is designed to last.</p>
                </div>
                <div className="footer-twotier__links">
                    <h3 className="footer-twotier__heading">Products</h3>
                    <ul>
                        <li><a href="#">Web Templates</a></li>
                        <li><a href="#">Code Snippets</a></li>
                        <li><a href="#">UI Kits</a></li>
                        <li><a href="#">Design Assets</a></li>
                    </ul>
                </div>
                 <div className="footer-twotier__links">
                    <h3 className="footer-twotier__heading">Company</h3>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="footer-twotier__bottom">
            <div className="footer-twotier__bottom-container">
                <p className="footer-twotier__copyright">
                    &copy; 2026 Acme Tech Experience, Inc. All rights reserved.
                </p>
                <nav className="footer-twotier__social" aria-label="Social Media">
                    <ul>
                        <li><a href="#" aria-label="Our Twitter Profile"><img src={x} width={40}/></a></li>
                        <li><a href="#" aria-label="Our GitHub Profile"><img src={github} width={40}/></a></li>
                        <li><a href="#" aria-label="Our LinkedIn Profile"><img src={linkedin} width={40}/></a></li>
                        <li><a href="#" aria-label="Our Instagram Profile"><img src={instagram} width={40}/></a></li>
                        <li><a href="#" aria-label="Our Facebook Profile"><img src={facebook} width={40}/></a></li>
                    </ul>
                </nav>
            </div>
        </div>
        </footer>
    )
}