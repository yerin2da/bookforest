export default function InfoComponent6({
                                           label, title, txt, icon_name,
                                           index = 0, // index 추가
                                           wrapClass = '', txtWrapClass = '', titleClass = '', labelClass = '', txtClass = '', imgClass = '',
                                           onClick = null
                                       }) {
    const isEven = index % 2 === 0;//짝수면 사진이 위

    return (
        <div className="max-w-[250px] conic-border-box p-4 items-stretch h-fit xs:p-6 sm:p-8">
            <div
                className={`w-fit h-full flex ${isEven ? 'flex-col-reverse' : 'flex-col'} rounded group justify-between gap-10`}
            >
                {/* 이미지 영역 */}
                <div className="w-full overflow-hidden rounded-sm shadow-fit">
                    <img
                        src={`${process.env.PUBLIC_URL}/img/mainNobel/${icon_name}.png`}
                        alt={`${title}`}
                        className="h-full object-cover transition-transform duration-500 group-hover:scale-105 "
                        onClick={onClick}
                    />
                </div>


                {/* 텍스트 영역 */}
                <div className={`${txtWrapClass}`}>
                    <p className={`text-sm xs:text-base font-medium text-black pb-0.5 ${titleClass}`}>{title}</p>
                    <p className={`text-xs xs:text-sm text-textGray ${txtClass}`}>{txt}</p>
                </div>
            </div>
        </div>
    );
}
