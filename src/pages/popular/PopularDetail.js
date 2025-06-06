import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import GuideDetailCard from "../guide/GuideDetailCard";
import Comment from "../../13paging/Comment";
import { ImSpinner2 } from "react-icons/im";
import PopularDetailCard from "./PopularDetailCard";

export default function PopularDetail() {
    const [searchParams] = useSearchParams();
    const [tdata, setTdata] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const category = searchParams.get("category");
    const id = searchParams.get("id");


    useEffect(() => {
        const getFetchData = async () => {
            setIsLoading(true);
            try {
                const { data } = await axios.get(`${process.env.PUBLIC_URL}/db/all.json`);
                const matched = data.popular.find(i => String(i.code) === String(id));
                setTdata(matched); // 객체 하나만
                console.log("현재 ID:", id);
                console.log("전체 popular 배열:", data.popular);
                console.log("매칭 결과:", matched);
            } catch (error) {
                console.error("데이터 로딩 실패:", error);
            } finally {
                setIsLoading(false);
            }
        };

        getFetchData();
    }, [id]);

    return (
        <div>
            {isLoading ? (
                <div className="flex flex-col items-center justify-center gap-2 py-20 text-gray-600 transition-opacity duration-700 opacity-100 pointer-events-none">
                    <ImSpinner2 className="animate-spin text-3xl text-gray-600" />
                    <p>상세 정보를 불러오고 있어요</p>
                </div>
            ) : tdata ? (
                <>
                    <PopularDetailCard item={tdata} />
                    {/*<div className="py-2">*/}
                    {/*    <Comment postId={id} />*/}
                    {/*</div>*/}
                </>
            ) : (
                <p className="text-center py-10 text-gray-500">해당 정보를 찾을 수 없습니다.</p>
            )}
        </div>
    );
}
