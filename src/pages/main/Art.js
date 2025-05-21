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
        navigate(`theme/gallery?category=${code}`);
    };

    return (
        <section className={``}>

            <div>
                {/*섹션제목*/}
                <SectionTitle
                    className={``}
                    title={<div>책과 <span className={`text-mainColor`}>예술</span><span>이</span> 만나는 공간</div>}
                />
                <Swiper
                    className={`overflow-visible`}
                    // modules={[Autoplay]}
                    direction="horizontal"
                    loop={false}  // 슬라이드 반복
                    spaceBetween={30}
                    slidesPerView={2.2}
                    slidesPerGroup={1}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    style={{ width: "100%", height: "fit-content" }}
                    // breakpoints={{
                    //     // 기본 화면 크기
                    //     320: {
                    //         slidesPerView: 2.5,
                    //     },
                    //     // 화면 크기가 480px 이상일 때
                    //     480: {
                    //         slidesPerView: 3,
                    //     },
                    //     // 화면 크기가 768px 이상일 때
                    //     768: {
                    //         slidesPerView: 3.5,
                    //     },
                    //     // 화면 크기가 1024px 이상일 때
                    //     1024: {
                    //         slidesPerView: 3.5,
                    //     }
                    // }}
                >

                    {/* 컨텐츠 박스 */}
                    {data.recommendCategory.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <InfoComponent3
                                onClick={() => handleClick(item.code)}
                                icon_name={item.img}
                                label={item.label}
                                labelClass={`!text-textGray !bg-transparent !px-0`}
                                title={item.title}
                                txt={item.author}
                                txtClass={`!text-textGray font-medium`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </section>
    );
};