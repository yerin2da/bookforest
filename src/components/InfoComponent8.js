import IconImage from "./IconImage";

export default function InfoComponent8({
                                           label, title, txt, icon_name,
                                           wrapClass = '', txtWrapClass = '', titleClass = '', labelClass = '', txtClass = '', imgClass = '',
                                           onClick = null, item

                                       }) {

    return (
        <div className="max-w-[250px] flex group relative pb-2 items-end">

            {/* 숫자 이미지 영역 */}
            <div className="w-1/2 h-fit">
                <IconImage
                    imageSrc={`${process.env.PUBLIC_URL}/img/mainPopular/num/${icon_name}.png`}
                    title={`${title}위`}
                    className="object-contain"
                />
            </div>

            {/* 이미지 영역 */}
            <div className="w-full rounded overflow-hidden shadow-fit -ml-3 xs:-ml-5">
                <IconImage
                    imageSrc={`${process.env.PUBLIC_URL}/img/mainPopular/${icon_name}.png`}
                    title={`${title}위 책`}
                    className="object-cover transition-transform duration-500 group-hover:scale-105 "
                    onClick={onClick}
                />
            </div>

        </div>

    );
}
