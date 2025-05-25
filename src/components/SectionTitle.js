import { IoIosArrowForward } from "react-icons/io";
import {redirect, useNavigate} from "react-router-dom";

export default function SectionTitle({icon, title, className='', txtClass='', redirectPath=''}) {

    const navigate = useNavigate();
    const move = () => {
        navigate(redirectPath);
    }

    return (
        <div className={`sectionTitle flex items-center justify-between relative z-3 pb-6`}>
            <div
                className={`font-bold text-lg  flex items-center gap-1 ${className}`}>{title}
            </div>
            <div onClick={move}
                className={`text-textGray text-xs flex items-start cursor-pointer ${txtClass}`}>더보기<IoIosArrowForward /></div>

        </div>
    );
};