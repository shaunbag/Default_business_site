import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export default function About(){

    return(
        <section className="home-about" id="about">
            <h1>About Us</h1>
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
                      
                    </SwiperSlide>
                    <SwiperSlide>
                       
                    </SwiperSlide>
                    <SwiperSlide>
                       
                    </SwiperSlide>

                    <SwiperSlide>
                        
                    </SwiperSlide>

                </Swiper>
        </section>
    )
}