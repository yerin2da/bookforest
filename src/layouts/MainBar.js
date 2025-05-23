import { MdHomeFilled } from "react-icons/md";
import {FaBars} from "react-icons/fa6";
import {IoSearch} from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import NavIcon from "../components/NavIcon";
import React from "react";
// import {useLocation} from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import ScrollTopButton from "../components/ScrollTopButton";
import {useNavigate} from "react-router-dom";
export default function MainBar() {
    const navigate = useNavigate();

    return (
        <>
            {/*top버튼*/}
            <ScrollTopButton />

            <footer className="w-full py-16 px-4 flex flex-col items-center gap-4 bg-black mx-auto">

                {/*로고*/}
                <div
                    className="font-black text-mainColor text-[24px]"
                    onClick={() => navigate("/")}
                >
                    BOOK<span className={`text-white`}> FOREST</span>
                </div>

                {/* 텍스트 */}
                <div className={`text-white text-center text-xs xs:text-sm space-y-1`}>
                    <p className={`break-keep`}>(065758) 서울특별시 중구 국제로 110길, 국제빌딩 203호</p>
                    <p>대표 강학수</p>
                    <p>문의 02-365-7800</p>
                    <p>메일 forest06@gmail.com</p>
                    <p>Copyright©all rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
