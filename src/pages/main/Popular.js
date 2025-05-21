
import {useNavigate} from "react-router-dom";
import InfoComponent6 from "../../components/InfoComponent6";
import SectionTitle from "../../components/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import data from "../../db/data.json";
import InfoComponent3 from "../../components/InfoComponent3";
import InfoComponent8 from "../../components/InfoComponent8";


export default function Popular() {
    const navigate = useNavigate();

    const handleClick = (code) => {
        navigate(`/stage/gallery/${code}`);
    };

    return (
        <div className={`relative bg-cover w-full`}>

            {/* 배경 이미지 확장 영역 */}
            <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110 "
                style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/img/paperBg.jpg')`,
                    opacity: 0.3,
                }}
            />

            {/*그라디언트*/}
            <div className={`absolute left-0 bottom-0 w-full h-full z-2 bg-[linear-gradient(130deg,_#F0F8FF_50%,_#0080FF_100%)]`}
                 style={{
                     opacity: 0.2,
                 }}
            />

            <section>
                <div className={``}>
                    {/*섹션제목*/}
                    <SectionTitle
                        className={``}
                        title={<>오늘의<span className={`text-mainColor`}>인기 </span>도서 TOP 5</>}
                        txtClass={`hidden`}
                    />

                    <Swiper
                        className={`overflow-visible`}
                        direction="horizontal"
                        loop={false}  // 슬라이드 반복
                        spaceBetween={30}
                        slidesPerView={2.2}
                        slidesPerGroup={1}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        style={{width: "100%", height: "fit-content"}}

                    >

                        {/* 컨텐츠 박스 */}
                        {data.popularCategory .map((item, idx) => (
                            <SwiperSlide key={idx} className={`rounded flex flex-col `}>
                                <InfoComponent8
                                    index={idx}
                                    onClick={() => handleClick(item.code)}
                                    icon_name={item.code}
                                    title={item.code}
                                    // txt={item.author}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </section>


        </div>
    );
};