import data2 from "../../db/data.json";
import axios from "axios";
import React, {useEffect, useState} from "react";

import {ImSpinner2} from "react-icons/im";
import NoResult from "../../components/NoResult";
import RecommendGalleryComponent from "../recommend/RecommendGalleryComponent";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import MoreBtn from "../../components/MoreBtn";
import {useLocation, useSearchParams} from "react-router-dom";
import ChildrenGalleryCard from "./ChildrenGalleryCard";


const ITEMS_PER_PAGE = 5;

const getFetchData = async ({ pageParam = 1, queryKey }) => {
    const [_key, selC1] = queryKey;//두 번째 값인 selC1(선택한 카테고리 코드)만 추출
    const { data } = await axios.get(`${process.env.PUBLIC_URL}/db/all.json`);
    const filteredGroup = data.children.find(group => group.code === selC1);
    const filteredData = filteredGroup?.items || [];

    const start = (pageParam - 1) * ITEMS_PER_PAGE;
    const sliced = filteredData.slice(start, start + ITEMS_PER_PAGE);

    return {
        items: sliced,
        nextPage: sliced.length === ITEMS_PER_PAGE ? pageParam + 1 : undefined,
    };
};



export default function ChildrenGallery() {

    //주소창에서 쿼리 값 가져옴
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);//단순 문자열을 객체로 바꿀 때는 항상 new를 붙입니다

    //카테고리 값 초기 설정
    const initCategory = queryParams.get("category") || '1';

    //쿼리 읽고 쓰는 도구 준비
    const [searchParams, setSearchParams] = useSearchParams();
    const [selC1, setSelC1] = useState(initCategory);

    //카테고리 바꾸는 함수
    const handleSelC1 = (code) => {
        setSelC1(code); // 카테고리 상태 변경

        // URL 쿼리 업데이트
        const newParams = new URLSearchParams(searchParams);//기존 쿼리 복사
        newParams.set("category", code);
        setSearchParams(newParams, { replace: true });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery({
        queryKey: ["children", selC1],
        queryFn: getFetchData,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });


    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center gap-2 py-20 text-gray-600">
                <ImSpinner2 className="animate-spin text-3xl" />
                <p>어린이 동화구연 정보를 불러오고 있어요</p>
            </div>
        );
    }

    if (isError) {
        return <NoResult />;
    }

    const allItems = data.pages.flatMap(page => page.items);

    return (
        <div className={`relative !pt-0`}>
            <div className="bg-white z-10 py-3 fixed top-20 w-full shadow-shadowBottom ">
                <div className={`flex flex-wrap`}>
                    {data2.childrenCategory.map((item, idx) => (
                        <button
                            key={idx}
                                onClick={() => handleSelC1(item.code)}
                            className={`w-fit px-3 py-2 font-medium rounded-full whitespace-nowrap text-sm ${
                                selC1 === item.code ? "bg-mainColor text-white" : "text-textBlack"
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}

                </div>
            </div>
            {allItems.length > 0 ? (
                <ul className="items-stretch w-full pt-20 grid grid-cols-1 xs:grid-cols-2  gap-x-8 gap-y-16 ">
                    {allItems.map((item, idx) => (
                        <li key={idx} className="h-full flex cursor-pointe max-h-[600px] aspect-[313/240]r">
                            <ChildrenGalleryCard item={item}/>
                        </li>
                    ))}
                </ul>
            ) : (
                <NoResult/>
            )}


            {/*다음페이지*/}
            {hasNextPage && (
                <MoreBtn
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                    isLoading={isFetchingNextPage}
                />
            )}
        </div>
    );
}
