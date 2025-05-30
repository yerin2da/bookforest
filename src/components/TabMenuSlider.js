import { Swiper, SwiperSlide } from "swiper/react";


export default function TabMenuSlider({ data, onClick, selTab, spaceBetween, slideClass="", btnClass="", tClass, fClass }) {
    return (
        <Swiper
            className="overflow-visible w-full h-fit "
            // modules={[Autoplay]} // ✅ Autoplay 활성화
            direction="horizontal"
            loop={false}
            spaceBetween={5}
            slidesPerView={3.5}
            // slidesPerGroup={1}
            breakpoints={{
                // 350: {
                //     slidesPerView: 2.8,
                // },
                // 500: {
                //     slidesPerView: 3.5,
                // },
                // 640: {
                //     slidesPerView: 4.5,
                // },
                // 768: {
                //     slidesPerView: 5.5,
                // },
                // 1024: {
                //     slidesPerView: 6.5,
                // },
            }}
        >
            {data.map(({ code, label }, idx) => (
                <SwiperSlide
                    key={idx}
                    className={`${slideClass}`}
                >
                    <button
                        onClick={() => onClick(code)}
                        className={`w-fit px-4 py-2 font-semibold rounded-full whitespace-nowrap text-base ${btnClass} ${
                            selTab === code ? tClass : fClass
                        }`}
                    >
                        {label}
                    </button>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};