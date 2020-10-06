import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const Views = (): JSX.Element => {
  return (
    <section className="members-view">
      <div className="container">
        <div className="content">
          <h2>Members&apos; Views</h2>
        </div>
        <div className="swiper-container members-view-container">
          <Swiper spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <div className="members-view-content">
                <div className="content">
                  <p>
                    People look for good company because they know it brings out their best. The Nexus group is good
                    company. John Williams and the group have helped me grow my business from £5m to £50m whilst
                    remaining honest and true to myself.
                  </p>
                </div>
                <div className="content">
                  <p className="has-text-weight-bold">
                    David Woodhead,{" "}
                    <a href="http://woodhead-construction.co.uk/" target="_blank" rel="noopener noreferrer">
                      Woodhead Construction
                    </a>
                  </p>
                </div>
                <figure className="image">
                  <img
                    alt="Small photograph of David Woodhead"
                    src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/david-woodhead.png"
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="members-view-content">
                <div className="content">
                  <p>
                    Nexus keeps my feet to the fire, teaching, training and equipping me with both business and personal
                    decisions. Meeting with my group every month is like having a group of non-executive directors
                    advising, questioning and encouraging me on my business – invaluable input.
                  </p>
                </div>
                <div className="content">
                  <p className="has-text-weight-bold">
                    Dan Turner,{" "}
                    <a href="https://www.bunches.co.uk?referer=nexus" target="_blank" rel="noopener noreferrer">
                      Bunches
                    </a>
                  </p>
                </div>
                <figure className="image">
                  <img
                    alt="Small photograph of Dan Turner"
                    src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/dan-turner.png"
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="members-view-content">
                <div className="content">
                  <p>
                    To have survived the recession, most SMEs are robust, agile and lean. Continuous learning,
                    development and then the application of this learning with cascading has never been more of a
                    competitive advantage. Through Nexus and the coaching skills of John Williams, Alltruck plc has been
                    transformed and the renewal process becomes continuous.
                  </p>
                </div>
                <div className="content">
                  <p className="has-text-weight-bold">
                    Paul Robinson,{" "}
                    <a href="https://alltruckplc.co.uk?referer=nexus" target="_blank" rel="noopener noreferrer">
                      Alltruck plc
                    </a>
                  </p>
                </div>
                <figure className="image">
                  <img
                    alt="Small photograph of Paul Robinson Woodhead"
                    src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/paul-robinson.png"
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="members-view-content">
                <div className="content">
                  <p>
                    I learnt something from a speaker session in my third meeting that has paid for my membership every
                    year since.
                  </p>
                </div>
                <div className="content">
                  <p className="has-text-weight-bold">
                    Andy Cripps,{" "}
                    <a href="https://www.apc-accountants.co.uk?referer=nexus" target="_blank" rel="noopener noreferrer">
                      APC Accountants
                    </a>
                  </p>
                </div>
                <figure className="image">
                  <img
                    alt="Small photograph of Andy Cripps"
                    src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/andy-cripps.png"
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="members-view-content">
                <div className="content">
                  <p>
                    As owner-manager of a relatively small but fast growing business, I particularly value the skills
                    and experience of the other Nexus members plus they hold me accountable for goals and decisions.
                  </p>
                </div>
                <div className="content">
                  <p className="has-text-weight-bold">
                    Jacqui Mason,{" "}
                    <a
                      href="http://www.theorangetreedaynursery.co.uk?referer=nexus"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Orange Tree Day Nursery
                    </a>
                  </p>
                </div>
                <figure className="image">
                  <img
                    alt="Small photograph of Jacqui Mason"
                    src="https://res.cloudinary.com/elliotjreed/image/upload/v1602007653/nexus/jacqui-mason.png"
                  />
                </figure>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
