import {Link, useLocation, matchPath, useNavigate} from "react-router-dom";
import BackButton from "../UI/BackButton";
import HambergerButton from "../UI/HambergerButton";
import {IoSearch} from "react-icons/io5";
import React, {useRef, useState} from "react";
import SearchInput from "../components/SearchInput";
import { LuBell } from "react-icons/lu";
import 'swiper/css';
import IconImage from "../components/IconImage";
import NavIcon from "../components/NavIcon";
import {FaBars} from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BootstrapNavbar from "../pages/BootstrapNavbar"; // ← 핵심! (collapse, dropdown, modal 등 포함)


export default function Header({ className=''}) {
    const location = useLocation();
    const currentPath = location.pathname;

    const captions = {//페이지 제목
        "/notice": "공지사항",
        "/register": "회원가입",
        "/guide": "이용가이드",
        "/guide/:id": "이용가이드 상세",

        "/stage/gallery/exhibition":"제주 BEST 전시",
        "/guide/gallery":"여행 가이드",
        "/guide/gallery/detail":"여행 가이드 상세",
        // "/guide/gallery/:category/:cid":"상세 정보",
        "/stage/gallery/musical":"뮤지컬 모음",
        "/stage/gallery/music":"음악회 모음",
        "/stage/gallery/play":"연극 모음",
        "/stage/gallery/korMusic":"국악 모음",
        "/theme/gallery/:category":"테마 여행",
    };

    // 캡션 자동 매칭
    let caption = captions[currentPath]; // 정확히 일치하는 경로 먼저 찾기
    if (!caption) {// 못 찾았으면
        for (const path in captions) {// captions의 모든 경로 순회!
            if (matchPath({ path, end: true }, currentPath)) {// matchPath로 비교 - matchPath("/guide/gallery/:category", "/guide/gallery/c1")
                caption = captions[path];// 찾으면 caption 설정
                break;
            }
        }
    }

    const showLogo = ["/", "/mypage"].includes(currentPath);

    const bgBlack = ["/findCurrency", "/buy"].includes(currentPath);//헤더 블랙

    const hiddenHamberger = ["/login", "/register", "/mainSearch"].includes(currentPath);
    const hiddenBell = ["/notice"].includes(currentPath);

    //메인서치일때
    const mainSearch = ["/mainSearch"].includes(currentPath);

    const navigate = useNavigate();

    const inputRef = useRef(null);

    return (

        <header className={`w-full text-2xl h-20 sticky top-0 z-[9999] max-w-screen-xl pl-4 ${className} 
                ${bgBlack
            ? "bg-midBlack text-white"
            : "bg-white"}
                `}>

            <div className={`h-full flex items-center justify-between`}>
                {showLogo ? (
                    <div className={` w-full pr-6 flex items-center justify-between h-full`}>
                        <h1
                            className="font-black text-mainColor text-[24px]"
                            onClick={() => navigate("/")}
                        >
                            BOOK<span className={`text-black`}> FOREST</span>
                        </h1>

                        {/*모바일*/}
                        <HambergerButton className="lg:hidden" />

                        {/*pc*/}
                        <BootstrapNavbar className="hidden lg:block " />

                    </div>
                    ) :
                    // 메인 서치페이지
                    mainSearch
                        ? (
                            <>
                                {/*백버튼+검색*/}
                                <BackButton caption={caption}/>
                                <SearchInput
                                    className={`!rounded-full !bg-gray-100 !border-0 !placeholder-gray-400`}
                                    inputPlaceholder={`제주에서 신나게 놀자!`}
                                    btnClassName={`text-gray-400`}
                                    ref={inputRef}
                                    onSearch={() => {
                                        const keyword = inputRef.current?.value;
                                        if (!keyword) return;
                                        navigate("/mainSearch", {state: {keyword}, replace: true}); // 현재 경로에 state만 갱신
                                    }}
                                />
                            </>
                        ) : (
                            <BackButton caption={caption}/>
                        )
                }
                {/*{!hiddenHamberger && !hiddenBell && (*/}
                {/*    // 공지사항*/}
                {/*    <LuBell*/}
                {/*        onClick={() => navigate("/notice")}*/}
                {/*        className={`cursor-pointer hover:text-mainColor`}/>*/}
                {/*)}*/}
            </div>



        </header>
    );
}
