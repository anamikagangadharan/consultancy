import React from "react";
import css from "./Approach.module.css";
import Value from "../../assets/testbox.svg";
import Value2 from "../../assets/testbox2.svg";
import A1 from "../../assets/a1.svg"
import A2 from "../../assets/a2.svg"
import A3 from "../../assets/a3.svg"
import A4 from "../../assets/a4.svg"
import A5 from "../../assets/a5.svg"
import A6 from "../../assets/a6.svg"


import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const Approach = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <div className={css.div1}>
            <div className={css.line}></div>
            <div className={css.head}>
          <span>Our Design and Development approach</span>
        </div>
        </div>
      
   {mobile? <Swiper className={css.swiperdiv}
    modules={[Pagination]}
    //    navigation={true}
       pagination={true}
       loopFillGroupWithBlank={true}
       slidesPerView={1}
       spaceBetween={0}
       slidesPerGroup={1}
       loop={true}>

   <SwiperSlide>
   <div className={css.box}>
              <div className={css.boxleft}>
                <img src={A1} alt="" />
              </div>
              <div className={css.boxright}>
                <span>REQUIREMENT GATHERING</span>
                <span>Understanding your needs is our top priority. We meticulously document requirements, creating a robust software project base.</span>
              </div>
            </div>
   </SwiperSlide>

   <SwiperSlide>
   <div className={css.box}>
              <div className={css.boxleft}>
                <img src={A2} alt="" /> 
              </div>
              <div className={css.boxright}>
                <span>PLANNING</span>
                <span>
                We develop a strategic plan, detailing project steps. Our roadmap ensures efficient resource allocation and timeline adherence.
                </span>
              </div>
            </div>
    
   </SwiperSlide>



   <SwiperSlide>

   <div className={css.box}>
              <div className={css.boxleft}>
                <img src={A3} alt="" />
              </div>
              <div className={css.boxright}>
                <span>DESIGN</span>
              <span>Our design phase centers on crafting visually engaging and user-friendly interfaces. Prioritizing user experience in every pixel.</span>
              </div>
            </div> 

   </SwiperSlide>

   <SwiperSlide>

   <div className={css.box}>
              <div className={css.boxleft}>
                <img src={A4} alt="" />
              </div>
              <div className={css.boxright}>
                <span>DEVELOPMENT</span>
                <span>
                Our development phase brings your project to life. We translate your ideas into clean, efficient, and functional code.
                </span>
              </div>
            </div>

   </SwiperSlide>



   <SwiperSlide>
   <div className={css.box}>
              <div className={css.boxleft}>
                <img src={A5} alt="" />
              </div>
              <div className={css.boxright}>
                <span>TESTING</span>
              <span>Our testing phase leaves no stone unturned. Stringent testing guarantees flawless and secure software performance.</span>
              </div>
            </div>


   </SwiperSlide>


   <SwiperSlide>

   <div className={css.box}>
              <div className={css.boxleft}>
                <img src={A6} alt="" />
              </div>
              <div className={css.boxright}>
                <span>DELIVERY AND MAINTENANCE</span>
                <span>
                We deliver your software promptly and provide ongoing support. Our maintenance keeps your software in peak condition.
                </span>
              </div>
            </div>

   </SwiperSlide>


  











          
   </Swiper>
   
   
   
   :
   
   
      <div className={css.div2}>
            {/* set1 */}
          <div className={css.bset}>
            <div className={css.box}>
              <div className={css.boxleft}>
                <img src={A1} alt="" />
              </div>
              <div className={css.boxright}>
                <span>REQUIREMENT GATHERING</span>
                <span>Understanding your needs is our top priority. We meticulously document requirements, creating a robust software project base.</span>
              </div>
            </div>
            <div className={css.box}>
              <div className={css.boxleft}>
                <img src={A2} alt="" /> 
              </div>
              <div className={css.boxright}>
                <span>PLANNING</span>
                <span>
                We develop a strategic plan, detailing project steps. Our roadmap ensures efficient resource allocation and timeline adherence.
                </span>
              </div>
            </div>
          </div>

            {/* set2 */}
          <div className={css.bset}>
            <div className={css.box}>
              <div className={css.boxleft}>
                <img src={A3} alt="" />
              </div>
              <div className={css.boxright}>
                <span>DESIGN</span>
              <span>Our design phase centers on crafting visually engaging and user-friendly interfaces. Prioritizing user experience in every pixel.</span>
              </div>
            </div>
            <div className={css.box}>
              <div className={css.boxleft}>
                <img src={A4} alt="" />
              </div>
              <div className={css.boxright}>
                <span>DEVELOPMENT</span>
                <span>
                Our development phase brings your project to life. We translate your ideas into clean, efficient, and functional code.
                </span>
              </div>
            </div>
          </div>

            {/* set3 */}
          <div className={css.bset}>
            <div className={css.box}>
              <div className={css.boxleft}>
                <img src={A5} alt="" />
              </div>
              <div className={css.boxright}>
                <span>TESTING</span>
              <span>Our testing phase leaves no stone unturned. Stringent testing guarantees flawless and secure software performance.</span>
              </div>
            </div>
            <div className={css.box}>
              <div className={css.boxleft}>
                <img src={A6} alt="" />
              </div>
              <div className={css.boxright}>
                <span>DELIVERY AND MAINTENANCE</span>
                <span>
                We deliver your software promptly and provide ongoing support. Our maintenance keeps your software in peak condition.
                </span>
              </div>
            </div>
          </div>



        </div> }
     
      </div>
    </div>
  );
};

export default Approach;
