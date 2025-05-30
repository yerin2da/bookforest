import React from 'react';

export default function LibrarianRecommendGalleryComponent({ item }) {

    const cleanDescription = item.description
        ?.replace(/<!--[\s\S]*?-->/g, '')      // HTML 주석 제거
        .replace(/<[^>]*>/g, '')               // HTML 태그 제거
        .replace(/"documentPr"[\s\S]+$/, '')   // 한컴 JSON 덩어리 제거
        .trim();

    return (
        <div
            onClick={() => window.open(item.url, "_blank")}
            className={`group cursor-pointer relative w-full h-100 flex items-center gap-3`}>

            {/* 포스터 이미지 */}
            <div
                className={`h-52 aspect-[170/240] overflow-hidden relative z-2 rounded-lg border border-gray-100 shadow-fit`}>
                <img
                    className={`w-full h-full object-cover duration-300 group-hover:scale-110`}
                    src={item.referenceIdentifier ? `${process.env.PUBLIC_URL}/img/subLibrarianRecommend/${encodeURIComponent(item.referenceIdentifier)}`: `${process.env.PUBLIC_URL}/img/default.jpg`}
                    alt={item.title}
                />
                {/*<div className={`absolute top-0 left-0 w-fit `}><p>{item.label}</p></div>*/}

            </div>

            {/* 설명 박스 */}
            <div className={`relative z-2 pt-3 flex flex-col justify-center flex-1 space-y-1.5`}>
                <div className={`text-xs bg-DarkMain text-white w-fit px-2 py-1 rounded-sm mb-1 `}><p>{item.subjectCategory}</p></div>
                <p className={`font-semibold text-sm xs:text-base multi-ellipsis2 leading-tight line-clamp-2`}>{item.title}</p>
                <p className={`text-xs xs:text-sm font-medium text-gray-400 pb-2`}>
                    {item.rights} <span className={`bar`}/> <span className={`font-normal`}>{item.creator}</span>
                </p>
                <p className={`text-xs xs:text-sm text-textGray line-clamp-4`}>{cleanDescription}</p>
            </div>

        </div>
    );

};
