import React from "react";
import Comment from "../../13paging/Comment";

export default function PopularDetailCard({item,onClick}) {


    const default2 = `${process.env.PUBLIC_URL}/img/default2.jpg`;


    return (
        <div className={`w-full !p-0`}>

            <div className="mx-auto px-4 py-10">
                <div className={`text-center text-lg xs:text-xl py-6 text-[#0091ff] space-y-2 break-keep whitespace-pre-line`}>
                    {item.des2}
                </div>


                <div className={`w-full flex flex-col gap-4 items-center space-y-4 pb-4`}>
                    {/*이미지*/}
                    <div className="flip min-w-[300px] max-w-[500px] aspect-[458/650]">
                        <div className="card">
                            {/* 앞면 이미지 */}
                            <div className="front">
                                <img
                                    className="w-full h-full object-cover"
                                    src={`${process.env.PUBLIC_URL}/img/mainPopular/${item.code}.png`}
                                    alt="앞면"
                                />
                            </div>

                            {/* 뒷면 이미지 */}
                            <div className="back">
                                <img
                                    className="w-full h-full object-cover"
                                    src={`${process.env.PUBLIC_URL}/img/mainPopular/${item.code}_back.jpg`}
                                    alt="뒷면"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={`text-center flex flex-col items-center space-y-3`}>
                        {/*제목*/}
                        <div className={`font-bold text-xl`}>
                            {item.title}
                        </div>

                        {/*작가, 출판사*/}
                        <p className={`text-sm xs:text-base text-gray-500 flex items-center whitespace-nowrap`}>
                            {item.author}
                            <span className={`bar`}/>
                            {item.creator}
                        </p>
                    </div>

                </div>

                {/*설명*/}
                <div className={`text-sm text-gray-500 space-y-3 text-center break-keep pb-6 w-[90%] mx-auto`}>
                    {item.descript}
                </div>


                {/** 출처 : 예스24 <https://www.yes24.com/Product/Goods/130036149>*/}


            </div>
        </div>
    );
};