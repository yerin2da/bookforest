
import {useNavigate} from "react-router-dom";
import InfoComponent6 from "../../components/InfoComponent6";
import SectionTitle from "../../components/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import data from "../../db/data.json";
import InfoComponent3 from "../../components/InfoComponent3";
import {Autoplay} from "swiper/modules";


export default function Nobel() {
    const navigate = useNavigate();

    const handleClick = (code) => {
        navigate(`/stage/gallery/${code}`);
    };

    return (
        <div className={`relative bg-cover w-full`}>

            {/* 배경 이미지 */}
            <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover
                {/*transition-transform duration-500 group-hover:scale-110 */}
                "
                style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/img/paperBg.jpg')`,
                    opacity: 0.3,
                }}
            />

            {/*배경 그라디언트*/}
            <div className={`absolute left-0 bottom-0 w-full h-full z-2 bg-[linear-gradient(130deg,_#E9E4CB_50%,_#D78D85_100%)]`}
                 style={{
                     opacity: 0.2,
             }}/>


            <section>
                <div className={``}>
                    {/*섹션제목*/}
                    <SectionTitle
                        className={``}
                        title={<><span className={`text-mainColor`}>노벨 </span>문학상 수상자의 대표작</>}
                    />

                <Swiper
                    className={`overflow-visible`}
                    modules={[Autoplay]}
                    direction="horizontal"
                    loop={true}  // 슬라이드 반복
                    spaceBetween={30}
                    slidesPerView={1.5}
                    slidesPerGroup={1}
                    autoplay={{
                        delay: 0, // 끊김 없이 계속 흐르게
                        disableOnInteraction: false,
                    }}
                    speed={6000} // 슬라이딩 이동 속도

                    style={{width: "100%", height: "fit-content"}}
                    breakpoints={{
                        350: {
                            slidesPerView: 2.2,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2.8,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3.2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 4.2,
                            spaceBetween: 32,
                        },
                    }}
                >

                    {/* 컨텐츠 박스 */}
                    {data.nobelCategory.map((item, idx) => (
                        <SwiperSlide key={idx} className={`rounded overflow-hidden flex-col h-auto flex items-stretch`}>
                            <InfoComponent6
                                index={idx}
                                onClick={() => handleClick(item.code)}
                                icon_name={item.img}
                                title={item.title}
                                txt={item.author}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>

            </section>


        </div>
    );
};