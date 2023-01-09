import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";


export const Review = () => {
  return (
    <div>
      <section id="testimonials" className="testimonials">
        <div className="testimonials-slider swiper" data-aos="fade-up">
          <div className="swiper-wrapper">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}

              autoplay={{
                delay:3000,
               disableOnInteraction:false

              }}

              modules={[Pagination,Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <div className="swiper-slide"    >
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                    On the Scrapyard portal ,scrap collection process is very fast i sold the steel scrap on the portal and scrap collector picked up the scrap in 24 hrs.{" "}
                    </p>
                    <div className="profile mt-auto">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Rushikesh Dandge</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                    Transaction process is very efficient ,we purchased some handcraft items on scrap portal.Overall quiltiy is good.{" "}
                    </p>
                    <div className="profile mt-auto">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Yash Chutake</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                    This site is very good for the artist ,we buy those item that we need and make some handcraft item.{" "}
                    </p>
                    <div className="profile mt-auto">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Yash Ambekar</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                    Site is very flexible, time efficient and customer support section very fastly.{" "}
                    </p>
                    <div className="profile mt-auto">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Pranav Kadam</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};
