import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-coverflow";

const SwiperHome = () => {
    const dataSlide = [
        {
            color: "red",
            title: "Salut"
        },
        {
            color: "blue",
            title: "bonjour"
        }
    ]

    return (
        <div className="container-swiper-home">
            <Swiper
          direction={"vertical"}
        //   effect={"coverflow"}
        //   grabCursor={true}
        //   centeredSlides={true}
        //   loop={true}
        //   slidesPerView={'auto'}
        //   coverflowEffect={{
        //     rotate: 0,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 2.5,
        //   }}
        //   autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false, 
        //   }}
        //   pagination={{ el: ".swiper-pagination", clickable: false }}
        //   modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        speed={800}
        loop={true}
          className="slider">
                <SwiperSlide>
                    <h1>Salut</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>bonjour</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>coucou</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>ola</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>guten tag</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>buenos dias</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>good morning</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperHome;