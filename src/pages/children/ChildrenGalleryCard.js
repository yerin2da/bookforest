import React from 'react';

export default function ChildrenGalleryCard({ item }) {

    return (
        <div
            onClick={() => window.open(item.url, "_blank")}
            className={`group relative  w-full rounded-2xl  shadow-fit overflow-hidden `}>

            <img className={`h-60 w-full object-cover `}
                 src={item.image_object}
                 alt={item.title}
            />

            {/* 설명 박스 */}
            <div className={`px-6 py-4`}>
                <div className={`font-bold text-xl mb-2`}>
                    {item.title}
                </div>
                <div className={`text-gray-500 text-xs xs:text-sm space-y-1`}>
                    <p className={`text-sm xs:text-base`}>{item.author}<span className={`bar`}/>{item.agent} </p>
                    {/*<p className={`text-sm xs:text-base font-medium multi-ellipsis`}>{item.author}<span className={`bar`}/>{item.agent} </p>*/}
                    <p className={``}>{item.cntc_instt_nm}</p>
                </div>

            </div>

        </div>
    );

};
