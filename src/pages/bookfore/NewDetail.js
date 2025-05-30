
export default function NewDetail() {

    return (
        <div className={`w-full !p-0`}>

            {/*배너*/}
            <div className="w-full max-w-screen-xl mx-auto max-h-[400px]">
                <img
                    className="w-full h-full max-h-[400px] object-fill"
                    src={`${process.env.PUBLIC_URL}/img/subNew/banner.png`}
                    alt="배너이미지"
                />
            </div>


            <div className="mx-auto px-4 py-10">
                <div className={`text-center text-lg xs:text-xl py-6 text-[#0091ff] space-y-2`}>
                    <p>“구름 감상에 매료된 전 세계 구름관찰자들에게</p>
                    <p>근사한 선물이 될 책!”</p>
                </div>

                <div className={`w-full flex flex-col gap-4 items-center space-y-4 pb-4`}>
                    {/*이미지*/}
                    <div className="flip min-w-[300px] max-w-[500px] aspect-[458/590]">
                        <div className="card">
                            {/* 앞면 이미지 */}
                            <div className="front">
                                <img
                                    className="w-full h-full object-cover"
                                    src={`${process.env.PUBLIC_URL}/img/subNew/front.jpg`}
                                    alt="앞면"
                                />
                            </div>

                            {/* 뒷면 이미지 */}
                            <div className="back">
                                <img
                                    className="w-full h-full object-cover"
                                    src={`${process.env.PUBLIC_URL}/img/subNew/back.jpg`}

                                    alt="뒷면"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={`text-center space-y-3`}>
                        {/*제목*/}
                        <div className={`font-bold text-xl`}>
                            구름관찰자를 위한 그림책
                        </div>

                        {/*작가, 출판사*/}
                        <p className={`text-sm xs:text-base text-gray-500 flex items-center whitespace-nowrap`}>
                            개빈 프레터피니 저/윌리엄 그릴 그림 <span className={`bar`}/>김영사
                        </p>
                    </div>

                </div>

                {/*설명*/}
                <div className={`text-sm text-gray-500 space-y-3 text-center break-keep pb-6 w-[90%] mx-auto`}>
                    <p className={`text-base text-[#76abd3] `}>구름감상협회 회장 개빈 프레터피니와 케이트 그리너웨이상 수상작가 윌리엄 그릴이 안내하는 구름 감상
                        첫걸음</p>

                    <p>‘구름감상협회’를 설립하고 시종일관한 구름 사랑을 이어온 개빈 프레터피니가 글을 쓰고,
                        케이트 그리너웨이상과 볼로냐 라가치상을 수상한 저명한 일러스트레이터 윌리엄 그릴이 그림을 그렸다.
                        구름의 주요 유형에 대한 흥미로운 사실과 비밀을 알려주고, 구름이 주변 날씨를 어떻게 형성하는지를 들려주면서,
                        서정적인 그림에 구름의 아름다움과 신비를 다채롭게 담아냈다.
                    </p>

                    <p> 어린이와 성인, 누가 읽어도 좋다.
                        구름을 좋아하는 사람이라면 누구나 이 책을 통해 구름의 멋진 이름을 배우고, 구름이 노닐기 좋아하는 하늘을 탐험하고,
                        구름이 햇빛과 어우러지는 방식에 감탄하며, 지구 밖 다른 행성의 구름도 만나볼 수 있다.
                    </p>

                    <p>구름의 특별한 삶을 섬세하게 포착해낸 페이지들을 오래 응시하며 책장을 천천히 넘기다 보면
                        자연스레 고개를 들어 바깥 하늘을 바라보게 된다.
                    </p>

                    {/** 출처 : 예스24 <https://www.yes24.com/Product/Goods/130036149>*/}
                </div>


            </div>
        </div>
    );
}
