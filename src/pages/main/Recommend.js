import SectionTitle from "../../components/SectionTitle";
import { useNavigate} from "react-router-dom";
import data from "../../db/data.json";
import InfoComponent3 from "../../components/InfoComponent3";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import WFullButton from "../../components/WFullButton";

export default function Recommend() {
    const navigate = useNavigate();

    const handleClick = (code) => {
        if (code.startsWith("http")) {
            window.open(code, "_blank");
        }
    };


    return (
        <section className={``}>

            <div>
                {/*섹션제목*/}
                <SectionTitle
                    className={``}
                    title={<>이달의 <span className={`text-mainColor`}>추천</span> 도서</>}
                    redirectPath={`recommend/gallery?category=1`}
                />
                <Swiper
                    className="overflow-visible w-full h-fit "
                    // modules={[Autoplay]} // ✅ Autoplay 활성화
                    direction="horizontal"
                    loop={false}
                    spaceBetween={20}
                    slidesPerView={1.5}
                    slidesPerGroup={1}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        350: {
                            slidesPerView: 2.2,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        500: {
                            slidesPerView: 3.2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4.2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 5.2,
                            spaceBetween: 32,
                        },
                    }}
                >

                    {/* 컨텐츠 박스 */}
                    {data.recommendCategory.map((item, idx) => (
                        <SwiperSlide key={idx} className="">
                            <InfoComponent3
                                onClick={() => handleClick(item.url)}
                                icon_name={`/mainRecommend/${item.code}`}
                                label={item.label}
                                title={item.title}
                                txt={item.author}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </section>
    );
};