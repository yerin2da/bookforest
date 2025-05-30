
export default function InfoComponent3({label, title, txt, txt2, icon_name, wrapClass='', txtWrapClass='', titleClass='',labelClass='', txtClass='', txt2Class='', imgClass='' ,  onClick=null}) {

    return (
        <div onClick={onClick} className={`cursor-pointer min-w-[130px] max-w-[160px] max-h-[320px] ${wrapClass}`}>
            <div

                className={`w-full rounded-lg group bg-center bg-no-repeat text-white relative overflow-hidden bg-cover shadow-fit`}
            >
                {/* 이미지 영역 */}
                <div className={`w-full aspect-[3/4] overflow-hidden rounded-sm shadow-fit ${imgClass}`}>
                    <img
                        src={`${process.env.PUBLIC_URL}/img/${icon_name}.jpg`}
                        alt={`${title}`}
                        className={`w-full h-full object-fill transition-transform duration-500 group-hover:scale-105`}

                    />
                </div>
            </div>

            <div className={`${txtWrapClass} pt-4`}>
                <p className={`text-xs bg-DarkMain text-white w-fit px-2 py-1 rounded-sm mb-1 font-light ${labelClass}`}>{label}</p>
                <p className={`text-sm xs:text-base text-black font-medium pb-1 truncate ${titleClass}`}>{title}</p>
                <p className={`text-xs xs:text-sm text-textGray ${txtClass}`}>{txt}</p>
            </div>
        </div>
    );
};
