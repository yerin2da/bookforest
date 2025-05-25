
import axios from "axios";
import React, {useEffect, useState} from "react";

import {ImSpinner2} from "react-icons/im";
import NoResult from "../../components/NoResult";
import PaginationSimple from "../../components/PaginationSimple";
import GalleryComponent from "../../components/GalleryComponent";
import ExhibiGalleryComponent from "./ExhibiGalleryComponent";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import MoreBtn from "../../components/MoreBtn";


const ITEMS_PER_PAGE = 10;

const getFetchData = async ({ pageParam = 1 }) => {//현재 몇 페이지인지
    const { data } = await axios.get(`${process.env.PUBLIC_URL}/db/all.json`);
    const filteredData = (data.art || [])
    .filter(item => item.PERIOD && item.PERIOD.includes("~"))//PERIOD가 존재하고, ~ 문자가 포함된 데이터만 추려냄
    .sort((a, b) => {
        const endA = a.PERIOD.split("~")[1]?.trim(); //PERIOD" 문자열을 "~" 기준으로 나눔
        const endB = b.PERIOD.split("~")[1]?.trim();//두 번째 요소, "끝나는 날짜"만 가져옴
        const dateA = new Date(endA);
        const dateB = new Date(endB);
        return dateB - dateA; // 내림차순(더 먼 것부터)
    });

    const start = (pageParam - 1) * ITEMS_PER_PAGE;
    const sliced = filteredData.slice(start, start + ITEMS_PER_PAGE);
    return {
        items: sliced,
        nextPage: sliced.length === ITEMS_PER_PAGE ? pageParam + 1 : undefined,
    };

};


export default function ExhibiGallery() {

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery({
        queryKey: ["exhibition"],
        queryFn: getFetchData,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });


    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center gap-2 py-20 text-gray-600">
                <ImSpinner2 className="animate-spin text-3xl" />
                <p>전시 정보를 불러오고 있어요</p>
            </div>
        );
    }

    if (isError) {
        return <NoResult />;
    }

    const allItems = data.pages.flatMap(page => page.items);

    return (
        <div className={``}>
            {allItems.length > 0 ? (
                <ul className="w-full items-stretch">
                    {allItems.map((item, idx) => (
                        <li key={idx} className="h-full flex cursor-pointer border-y py-4">
                            <ExhibiGalleryComponent item={item} tit="multi-ellipsis2" />
                        </li>
                    ))}
                </ul>
            ) : (
                <NoResult />
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
