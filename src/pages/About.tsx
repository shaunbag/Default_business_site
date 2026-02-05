import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";
import "../styles/about.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import logo from "../assets/logo-no-text.png";

export default function About() {

    return (
        <><article className="home-about" id="about">
            <div className="about-title">
                <img src={logo} />
                <h1>About Us</h1>
                <img src={logo} />
            </div>

            <div className="about-slider">
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
                        <section className="about-card">
                            <h3>Who We Are</h3>
                            <p>AcmeTechExperience is a technology-focused company built on practical knowledge and real-world delivery.
                                We design and implement solutions that solve genuine problems, not just theoretical ones.</p>
                            <p>Our work is shaped by experience across modern platforms, evolving technologies, and the challenges businesses face every day.
                                We believe technology should be clear, reliable, and purposeful—and that belief guides everything we create.</p>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className="about-card">
                            <h3>Our Approach</h3>
                            <p>We take a thoughtful, experience-led approach to technology.
                                Every project begins with understanding the problem, the environment, and the people who will use the solution.</p>
                            <p>By combining proven practices with modern tools, we build systems that are scalable, secure, and easy to maintain.
                                We focus on clarity over complexity, ensuring every decision adds real value.</p>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className="about-card">
                            <h3>What We Build</h3>
                            <p>We deliver technology that is designed to last. From robust platforms and integrations to clean, intuitive digital experiences,
                                our solutions are built with long-term performance in mind.</p>
                            <p>We prioritise quality, reliability, and adaptability—so the systems we create today continue to support growth tomorrow.</p>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className="about-card">
                            <h3>Why Experience Matters</h3>
                            <p>Technology changes quickly, but experience provides perspective. It helps us anticipate challenges, avoid unnecessary risk, and build with confidence.</p>

                            <p>At AcmeTechExperience, experience isn’t just a background—it’s an active part of every solution.
                                It’s how we deliver technology you can trust, today and into the future.</p>
                        </section>
                    </SwiperSlide>

                </Swiper>
            </div>
        </article><section className="spikes"></section></>
    )
}