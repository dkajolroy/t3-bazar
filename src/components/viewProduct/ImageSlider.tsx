import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  images: string[];
};
function ImageSlider({ images }: Props) {
  return (
    <div className="w-full bg-slate-400">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="h-[120px]"
      >
        {images.map((item, index) => (
          <SwiperSlide
            className="w-1/4 cursor-pointer border transition hover:border-slate-600 hover:opacity-[0.5]"
            key={index}
          >
            <img className="min-h-full w-full " src={item} alt="photo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
