import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";

export const Members = (): JSX.Element => {
  return (
    <aside className="members">
      <div className="container">
        <div className="content">
          <h2>Our Members</h2>
        </div>
        <div className="swiper-container members-container">
          <Swiper spaceBetween={50} slidesPerView={3}>
            <SwiperSlide>
              <img
                alt="Image of All Truck logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_alltruck-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Bunches logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_bunches-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Excel logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_exel-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of APC logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_apc-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Arlon logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_arlon-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Chiumento logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_chiumento-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of GCS logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_gcs-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Orange Tree logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_orange_tree-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Romaz logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_romax-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Woodhead logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_woodhead-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Dennis logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_dennis_220x147.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="swiper-container members-mobile-container">
          <Swiper spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <img
                alt="Image of All Truck logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_alltruck-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of APC logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_apc-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Arlon logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_arlon-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Bunches logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_bunches-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Bunches logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_exel-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Chiumento logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_chiumento-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of GCS logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_gcs-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Orange Tree logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_orange_tree-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Romaz logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_romax-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Woodhead logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_woodhead-220x147.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Image of Dennis logo"
                src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/client_logos_dennis_220x147.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </aside>
  );
};
