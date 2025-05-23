import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import data from "../../db/data.json";
import InfoComponent7 from "../../components/InfoComponent7";
// import 'swiper/css';
// import 'swiper/css/navigation';

export default function MainVisualSlide() {
    const navigate = useNavigate();

    const handleClick = (code) => {
        // navigate(`/stage/gallery/${code}`);
    };

    return (
        <div className="w-full">
                <Swiper
                    className="w-full h-72 xs:h-92 sm:h-[450px]" // 고정 높이
                    modules={[Navigation, Autoplay ]}
                    direction="horizontal"
                    loop={true}  // 슬라이드 반복
                    spaceBetween={0}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                >
                    {data.mainCategory.map((item, idx) => (
                        <SwiperSlide key={idx} className={`h-full bg-no-repeat bg-cover text-black bg-center`}
                             style={{
                                 backgroundImage: `url('${process.env.PUBLIC_URL}/img/mainVisual/${item.img}Bg.png')`,
                             }}
                        >
                            <InfoComponent7
                                onClick={() => handleClick(item.code)}
                                icon_name={item.img}
                                txt={item.txt}
                                txt2={item.txt2}
                                txtClass={item.code === "school" ? "text-white" : ""}
                                txt2Class={
                                    item.code === "school"
                                        ? "text-white text-lg sm:text-2xl"
                                        : "text-base text-textDarkGray"
                                }
                                imgClass={`w-28 h-28 
                                           xs:w-40 h-40
                                           sm:w-60 h-60
                                        `}


                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    );
}
