import Header from "./Header";
import MainBar from "./MainBar";
import {matchPath, Outlet, useLocation} from "react-router-dom";
import RandomDiagram from "../components/RandomDiagram";

export default function Layout() {
    const location = useLocation();

    // 로그인, 회원가입 페이지에서는 MainBar 숨김
    const hiddenMainBar = ["/login", "/register"].includes(location.pathname);

    // 노벨
    const nobel = ["/nobel/gallery"].includes(location.pathname);

    // 신작추천
    const subNew = ["/bookfore/new/gallery"].includes(location.pathname);

    const path = location.pathname;
    // 제주가이드, 제주테마, 공지사항에서만 !pt-0
    const pt0 = ["/guide/gallery/:category", "/theme/gallery/:category", "/notice"].includes(path)
        ||matchPath("/guide/gallery/:category", path)
        ||matchPath("/theme/gallery/:category", path);

    return (
        <div className="w-full min-h-screen flex flex-col items-center mx-auto">
            <Header className={`sticky top-0 z-[9999] `}/>

            <main className={`w-full flex-grow  overflow-y-auto scrollbar-hide overflow-x-hidden 
                    ${nobel ? "bg-[#835152] " : "bg-white" }
                    ${subNew ? "w-full !max-w-[3000px] bg-center bg-no-repeat bg-cover" : "" }
                `}

                  // style={
                  //     subNew
                  //         ? {
                  //             backgroundImage: `url(${process.env.PUBLIC_URL}/img/subNew/bg.jpg)`,
                  //         }
                  //         : {}
                  // }
            >
                <Outlet/> {/* 각 페이지 렌더링 */}
            </main>

            {/*푸터*/}
            {!hiddenMainBar && <MainBar />}
        </div>
    );
}
