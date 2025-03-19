import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper/modules";
import img1 from "../.././assets/home/slide1.jpg";
import img2 from "../.././assets/home/slide2.jpg";
import img3 from "../.././assets/home/slide3.jpg";
import img4 from "../.././assets/home/slide4.jpg";
import img5 from "../.././assets/home/slide2.jpg";
import Section from "../../Component/Section/Section";
// import "./index.css";

const Category = () => {
  return (
    <div className=" container mx-auto mb-24">
      {/* <div className="text-center flex  flex-col items-center justify-center ">
        <h1 className="text-[23px] text-[#D99904] italic ">
          ---From 11:00am to 10:00pm---
        </h1>
        <h1 className="text-[40px] text-[#151515] mt-3 w-[400px] py-2 italic border-t-2 border-b-2 border-[#E8E8E8)]">
          ORDER ONLINE
        </h1>
      </div> */}
      <Section
        subHeading={"  ---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></Section>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h1 className="text-4xl uppercase -mt-20  text-center text-black">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h1 className="text-4xl uppercase -mt-20  text-center text-black">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h1 className="text-4xl uppercase -mt-20  text-center text-black">
            pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h1 className="text-4xl uppercase -mt-20  text-center text-black">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h1 className="text-4xl uppercase -mt-20 mb-10 text-center text-black">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h1 className="text-4xl uppercase -mt-20  text-center text-black">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h1 className="text-4xl uppercase -mt-20  text-center text-black">
            pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h1 className="text-4xl uppercase -mt-20  text-center text-black">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h1 className="text-4xl uppercase -mt-20 mb-10 text-center text-black">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
