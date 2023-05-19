import ReactImageMagnify from 'react-image-magnify';
import './App.css';
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "./img/s1.webp";
import img2 from "./img/s2.jpg";
import img3 from "./img/s3.jpg";
import img4 from "./img/s4.jpg";
import img5 from "./img/s5.jpg";
import img6 from "./img/s6.webp";
import img7 from "./img/s7.webp";
import img8 from "./img/s8.jpg";
import img9 from "./img/s9.jpg";
// import img10 from "./img/10.jpg";

// import required modules
import { Navigation } from "swiper";
import { useState } from 'react';
function App() {
  const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [activeimg, setActiveimg] = useState(img1);
  return (
    <section className="">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12' >
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-2 col-md-12 col-sm-12 order-lg-1 order-2 order-md-2 ss'>
                  <Swiper
                   direction={window.innerWidth <= 768 ? 'horizontal' : 'vertical'}
                    slidesPerView={window.innerWidth <= 768 ? 3 : 6}
                    spaceBetween={10}
                    mousewheel={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={
                      {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                      }
                    }
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {
                      slides.map((slide, i) => (
                        <SwiperSlide
                          key={i}
                          onClick={() => setActiveimg(slide)}
                        >
                          <div>
                            <img src={slide} alt="" />
                          </div>
                        </SwiperSlide>
                      ))
                    }
                    <div className="swiper-button-next next"></div>
                    <div className="swiper-button-prev prev"></div>
                  </Swiper>
                </div>
                <div className='col-lg-10 col-md-12 col-sm-12 order-lg-2 order-1 order-md-1'>
                  <div className='slider-section'>
                    <div className='zoom-section'>
                      <ReactImageMagnify  {...{
                        smallImage: {
                          alt: '',
                          isFluidWidth: true,
                          src: activeimg,
                          width: 400, // set the desired width
                          height: 300,
                        },
                        largeImage: {
                          src: activeimg,
                          width: 1200,
                          height: 1200,
                        }
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


          {/* col-6 right section for text */}
          <div className='col-lg-6 col-md-6 col-sm-12' >
            <div className='right-section'>
              <div class="xzoom_part">

                <h4>MuscleBlaze Creatine Monohydrate, 400 g (0.88 lb) <span> <iconify-icon icon="mdi:lacto-vegetarian"
                  class="veg-nonveg-icon"></iconify-icon></span> </h4>


                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore vero temporibus, accusamus
                  magnam maxime quis </h6>
                <p class="star"><i class="fas fa-star"></i>4.5
                </p>
                <h3>₹1289 <span>MRP:<del class="ms-1">1489</del></span> </h3>
                <div class=" btn-contain mb-2">
                  <p>Weight</p>
                  <div class="btn-body">
                    <p class="btn-views btn-views-1"><a href="/">5kg</a></p>
                    <p class="btn-views"><a href="/">10kg</a></p>
                  </div>
                </div>
                <div class=" btn-contain mb-2">
                  <p>Flavour</p>
                  <div class="btn-body">
                    <p class="btn-views btn-views-1"><a href="/">Chocolate</a></p>
                    <p class="btn-views"><a href="/">Vanila</a></p>
                    <p class="btn-views"><a href="/">Strawberry</a></p>
                  </div>
                </div>
                <div class=" btn-contain">
                  <p>Color</p>
                  <div class="btn-body">
                    <p class="btn-views  btn-views-1"><a href="/">Blue</a></p>
                    <p class="btn-views"><a href="/">Black</a></p>
                    <p class="btn-views"><a href="/">Red</a></p>
                  </div>
                </div>
                <div class="d-flex align-items-center mt-3">
                  <label for=""> Qty: </label>
                  <input type="number" value="1" class="form-control" />
                  <div class="btn-xzone-body ">
                    <a href="cart-page.html">
                      <p class="btn-xzone"> <i class="bi bi-cart2"></i><span> Add To Cart
                      </span></p>
                    </a>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
