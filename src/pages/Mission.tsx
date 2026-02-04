import gif from "../assets/earth.gif"
export default function Mission(){

    return(
        <section className="home-mission" id="mission">
            <div>
                <h1>Our Mission</h1>
                <img src={gif}/>
            </div>
        </section>
    )
}