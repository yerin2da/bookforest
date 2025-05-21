import SectionTitle from "../../components/SectionTitle";
import { useNavigate} from "react-router-dom";
import data from "../../db/data.json";
import InfoComponent3 from "../../components/InfoComponent3";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import WFullButton from "../../components/WFullButton";

export default function JejuTheme() {
    const navigate = useNavigate();

    const handleClick = (code) => {
        navigate(`theme/gallery?category=${code}`);
    };

    return (
        <section className={``}>

            <div>
                {/*섹션제목*/}
                <SectionTitle
                    className={``}
                    title={<>이달의 <span className={`text-mainColor`}>추천</span> 도서</>}
                />
                <Swiper
                    className="overflow-visible"
                    // modules={[Autoplay]} // ✅ Autoplay 활성화
                    direction="horizontal"
                    loop={false}
                    spaceBetween={30}
                    slidesPerView={2.2}
                    slidesPerGroup={1}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    style={{ width: '100%', height: 'fit-content' }}
                    // breakpoints={{
                    //     320: {
                    //         slidesPerView: 2.2,
                    //     },
                    //     480: {
                    //         slidesPerView: 3.5,
                    //     },
                    //     768: {
                    //         slidesPerView: 4.5,
                    //     },
                    //     1024: {
                    //         slidesPerView: 4.5,
                    //     },
                    // }}
                >

                    {/* 컨텐츠 박스 */}
                    {data.recommendCategory.map((item, idx) => (
                        <SwiperSlide key={idx} className="">
                            <InfoComponent3
                                onClick={() => handleClick(item.code)}
                                icon_name={item.img}
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