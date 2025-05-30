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

        "/art/gallery" : "도서관 전시정보",
        "/recommend/gallery" : "이달의 추천도서",
        "/nobel/gallery" : "노벨 수상자의 대표작",
        "/popular/detail" : "인기도서 상세",
        "children/gallery" : "어린이 동화구연",

        "/bookfore/librarianRecommend/gallery" : "사서 추천도서",
        "/bookfore/new/gallery":"추천 신작",
        "/bookfore/school/gallery":"도서관 찾기",

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

        <header className={`w-full text-2xl h-20 bg-white border-b pl-4 ${className} 
               
                `}>

            <div className={`h-full max-w-screen-xl flex justify-between mx-auto`}>
                {showLogo
                    ? (
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
                    )
                    : (<BackButton caption={caption}/>)

                }

            </div>

        </header>
    );
}
