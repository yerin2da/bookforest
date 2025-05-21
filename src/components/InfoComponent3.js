
export default function InfoComponent3({label, title, txt, txt2, icon_name, wrapClass='', txtWrapClass='', titleClass='',labelClass='', txtClass='', txt2Class='', imgClass='' ,  onClick=null}) {
    return (
        <div className={`max-w-[200px]`}>
            <div
                onClick={onClick}
                className={`w-full rounded-lg group bg-center bg-no-repeat text-white relative overflow-hidden ${wrapClass} bg-cover shadow-fit`}
            >
                {/* 이미지 영역 */}
                <div className="w-full overflow-hidden rounded-sm shadow-fit">
                    <img
                        src={`${process.env.PUBLIC_URL}/img/mainRecommend/${icon_name}.jpg`}
                        alt={`${title}`}
                        className="h-full object-cover transition-transform duration-500 group-hover:scale-105 "
                        onClick={onClick}
                    />
                </div>

            </div>

            <div className={`${txtWrapClass} pt-4 `}>
                <p className={`text-xs bg-DarkMain text-white w-fit px-3 py-1 rounded-sm mb-1 ${labelClass}`}>{label}</p>
                <p className={`text-sm xs:text-base text-black font-medium pb-0.5 ${titleClass}`}>{title}</p>
                <p className={`text-xs xs:text-sm text-textGray ${txtClass}`}>{txt}</p>
            </div>
        </div>
    );
};
