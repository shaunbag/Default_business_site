import "../styles/mission.css";
import earth from "../assets/earth.gif";
import dave from "../assets/dave-eye.gif";
import cog from "../assets/cog.gif";
import binary from "../assets/binary.gif";
import logo from "../assets/logo-no-text.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export default function Mission() {

    return (
        <section className="home-mission" id="mission">
            <div className="mission-title">
                <img src={logo} />
                <h1>Our Mission</h1>
                <img src={logo} />
            </div>
            
            <div className="mission-container">
                <Swiper
                   modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="mission-card">
                            <p>At AcmeTechExperience, our mission is to build technology that works reliably in the real world not just on paper.
                                We believe great technology comes from experience, thoughtful design, and a deep understanding of how people actually use the systems we create.</p>
                            <img src={earth} width={250} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mission-card">
                            <img src={dave} width={280} />
                            <p>Technology moves fast, but experience provides clarity. We focus on creating solutions that are scalable, secure, and practical,
                                ensuring every product we deliver stands up to real world demands. From concept to deployment, we prioritize quality, performance, and long term value.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mission-card">
                            <p>We don’t chase trends for the sake of innovation. Instead, we apply proven expertise to modern challenges, combining forward-thinking design with dependable engineering.
                                Our goal is simple: deliver technology that empowers businesses, reduces complexity, and grows with confidence.</p>
                            <img src={cog} width={280} />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="mission-card">
                            <p>At the core of our mission is trust. We build strong partnerships, communicate transparently, and take ownership of the solutions we provide—because experience isn’t
                                just something we have, it’s something we stand by.</p>
                            <img src={binary} width={250} />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <section className="triangle"></section>
        </section>
    )
}