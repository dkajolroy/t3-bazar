import { useRouter } from "next/router";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { carousel } from "~/constants/data";
import CategoryMenu from "./CategoryMenu";

function HeroSection() {
  const router = useRouter();
  return (
    <div className=" overflow-hidden bg-slate-200">
      <div className="grid grid-cols-7 lg:grid-cols-5">
        {/* Category Map */}
        <div className="col-span-2 hidden bg-white sm:block  lg:col-span-1 ">
          <CategoryMenu />
        </div>
        {/* Carousel Map */}
        <div className="col-span-7 sm:col-span-5 lg:col-span-4">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="h-full"
          >
            {carousel.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  onClick={() => router.push(item.link)}
                  className="h-full w-full cursor-pointer"
                  src={item.image}
                  alt="slide"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
