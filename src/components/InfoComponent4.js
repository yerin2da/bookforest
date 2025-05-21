import IconImage from "./IconImage";

export default function InfoComponent4({
                                           title, txt, icon_name,
                                           bgClass = '', titleClass = '', txtClass = '', imgClass = '', onClick = null
                                       }) {
    return (
        <div
            onClick={onClick}
            className={`w-full aspect-square flex justify-center items-center max-h-[180px]
                        rounded-lg relative overflow-hidden ${bgClass}`}
        >
            {/* 원형 이미지 */}
            <div className="absolute w-[80%] -bottom-[23%] -right-[27%] z-1">
                <IconImage
                    imageSrc={`${process.env.PUBLIC_URL}/img/mainChild/${icon_name}.png`}
                    className={`${imgClass}`}
                    title={title}
                />
            </div>

            {/* 텍스트 */}
            <p className={`text-sm xs:text-base sm:text-lg font-medium text-white relative z-10 ${titleClass}`}>
                {title}
            </p>
        </div>
    );
}
