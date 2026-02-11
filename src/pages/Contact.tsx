import "../styles/contact.css"

export default function Contact(){
    return(
        <><section className="home-contact" id="contact">
            <h1>Contact Us</h1>
            <div className="contact-container">

                <form className="contact-form">

                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."  />

                    <input type="submit" value="Submit" />

                </form>
            </div>

        </section></>
    )
}