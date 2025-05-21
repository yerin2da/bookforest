export default function InfoComponent7({
                                           txt,
                                           txt2,
                                           icon_name,
                                           bg_name,
                                           txtClass,
                                           txt2Class,
                                           imgClass,
                                           onClick = null,
                                       }) {
    return (

            <div className={`px-10 h-full flex items-center justify-between gap-1 max-w-screen-md mx-auto font-pretendard`}
                 onClick={onClick}
            >
                {/* 텍스트 */}
                <div className="">
                    <div className={`text-lg font-bold whitespace-pre-line break-keep ${txtClass}`}>
                        {txt}
                    </div>
                    <div className={`mt-2 whitespace-pre-line ${txt2Class}`}>{txt2}</div>
                </div>

                {/* 아이콘 이미지 */}
                <div
                    className={`shrink-0 ${imgClass} bg-contain bg-no-repeat bg-center`}
                    style={{
                        backgroundImage: `url('${process.env.PUBLIC_URL}/img/mainVisual/${icon_name}.png')`,
                    }}
                ></div>
            </div>
    );
}
