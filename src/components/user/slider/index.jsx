import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from 'swiper/modules';
import "./style.css";

export default function Slider() {
  return (
    <>
      <Swiper className="mySwiper"
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}>
        <SwiperSlide><img src="https://cdn.dsmcdn.com/ty1593/pimWidgetApi/mobile_20241030092447_3197642ErkekMobile202410251901.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.dsmcdn.com/ty1602/pimWidgetApi/mobile_20241121115346_3169350ErkekMobile202411201104.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.dsmcdn.com/ty1599/pimWidgetApi/mobile_20241112154951_adidassss.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.dsmcdn.com/ty1554/pimWidgetApi/mobile_20240917221515_3170377ErkekMobile202409171802.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
