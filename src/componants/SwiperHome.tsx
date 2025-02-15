import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import '../styles/swiper.css';
import "swiper/css";
import "swiper/css/effect-coverflow";

// typage des données contenu dans le swiper
type SlideData = {
    title: string;
    background: string;
  };

const SwiperHome: React.FC = () => {
    // déclaration des données contenu dans le swiper
  const dataSlide: SlideData[] = [
    {
      title: "Un restaurant",
      background: "rgba(255, 0, 0, 0.25)"
    },
    {
      title: "Un cinéma",
      background: "rgba(0, 0, 255, 0.25)"
    },
    {
      title: "Un bar",
      background: "rgba(0, 255, 0, 0.25)"
    },
    {
      title: "Une boîte de nuit",
      background: "rgba(255, 255, 0, 0.25)"
    },
    {
      title: "Une exposition",
      background: "rgba(128, 0, 128, 0.25)"
    },
    {
      title: "Un marché",
      background: "rgba(255, 165, 0, 0.25)"
    },
    {
      title: "Un concert",
      background: "rgba(255, 0, 255, 0.25)"
    },
  ];

  return (
    <div className="container-swiper-home">
        {/* paramétrage du swiper  */}
      <Swiper
        direction={"vertical"}
        speed={800}
        loop={true}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        modules={[Autoplay]}
        allowTouchMove={false}
        noSwiping={true}
        simulateTouch={false}
        touchStartPreventDefault={true}
      >
        {/* injection des données dans le swiper  */}
        {dataSlide.map((data, index) => (
          <SwiperSlide key={index}>
              <div className="slide-content" style={{ background: data.background }}>
                <p className="title-swip">
                  {data.title}
                </p>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperHome;