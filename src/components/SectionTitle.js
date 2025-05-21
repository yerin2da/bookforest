import { IoIosArrowForward } from "react-icons/io";
export default function SectionTitle({icon, title, className='', txtClass=''}) {
    return (
        <div className={`sectionTitle flex items-start justify-between relative z-3`}>
            <div
                className={`font-bold text-lg pb-4 flex items-center gap-1 ${className}`}>{title}
            </div>
            <div className={`text-textGray text-xs flex items-start ${txtClass}`}>더보기<IoIosArrowForward /></div>

        </div>
    );
};