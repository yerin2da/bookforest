import SectionTitle from "../../components/SectionTitle";
import { useNavigate} from "react-router-dom";
import data from "../../db/data.json";
import InfoComponent3 from "../../components/InfoComponent3";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import WFullButton from "../../components/WFullButton";

export default function Art() {
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
                    title={<div>책과 <span className={`text-mainColor`}>예술</span><span>이</span> 만나는 공간</div>}
                    redirectPath={`art/gallery`}
                />
                <Swiper
                    className={`overflow-visible`}
                    // modules={[Autoplay]}
                    direction="horizontal"
                    loop={false}  // 슬라이드 반복
                    spaceBetween={20}
                    slidesPerView={1.5}
                    slidesPerGroup={1}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        360: {
                            slidesPerView: 1.8,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 2.2,
                            spaceBetween: 20,
                        },
                        500: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3.2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3.5,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 4.8,
                            spaceBetween: 32,
                        },
                    }}
                >

                    {/* 컨텐츠 박스 */}
                    {data.artCategory.map((item, idx) => (
                        <SwiperSlide key={idx} className={``}>
                            <InfoComponent3
                                onClick={() => handleClick(item.url)}
                                icon_name={`/mainArt/${item.code}`}
                                label={item.label}
                                labelClass={`xs:text-sm !text-textGray !bg-transparent !px-0 !font-medium`}
                                title={item.title}
                                txt={item.date}
                                txtClass={`!text-textGray font-medium`}
                                wrapClass={`cursor-pointer min-w-[130px] !max-w-[200px] !max-h-[400px] h-full
                                `}
                                imgClass={`aspect-none`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </section>
    );
};