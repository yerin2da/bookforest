
import {useNavigate} from "react-router-dom";
import InfoComponent6 from "../../components/InfoComponent6";
import SectionTitle from "../../components/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import data from "../../db/data.json";
import InfoComponent3 from "../../components/InfoComponent3";


export default function Nobel() {
    const navigate = useNavigate();

    const handleClick = (code) => {
        navigate(`/stage/gallery/${code}`);
    };

    return (
        <div className={`border border-green-900 relative bg-cover w-full`}>

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
                    style={{width: "100%", height: "fit-content"}}
                    // breakpoints={{
                    //     // 기본 화면 크기
                    //     320: {
                    //         slidesPerView: 2.2,
                    //     },
                    //     // 화면 크기가 480px 이상일 때
                    //     // 480: {
                    //     //     slidesPerView: 3.5,
                    //     // },
                    //     // 화면 크기가 768px 이상일 때
                    //     768: {
                    //         slidesPerView: 4.5,
                    //     },
                    //     // 화면 크기가 1024px 이상일 때
                    //     1024: {
                    //         slidesPerView: 5.5,
                    //     }
                    // }}
                >

                    {/* 컨텐츠 박스 */}
                    {data.nobelCategory.map((item, idx) => (
                        <SwiperSlide key={idx} className={`rounded overflow-hidden flex flex-col `}>
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