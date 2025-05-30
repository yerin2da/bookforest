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
        <div className={`w-[80%] h-full flex items-center justify-around max-w-screen-xl mx-auto font-pretendard cursor-pointer`}
             onClick={onClick}
        >
            {/* 텍스트 */}
            <div className="space-y-2 sm:space-y-4">
                {/*큰 글씨*/}
                <div className={`text-lg sm:text-2xl font-bold whitespace-pre-line break-keep ${txtClass}`}>
                    {txt}
                </div>

                {/*작은 글씨*/}
                <div className={`sm:text-xl whitespace-pre-line ${txt2Class}`}>{txt2}</div>
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
