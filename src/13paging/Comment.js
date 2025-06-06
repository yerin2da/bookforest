import React, {useEffect, useRef, useState} from "react";
import TailButton from "../UI/TailButton";
import axios from "axios";
import { IoMdSend } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
export default function Comment({ postId }) {
    const [tdata, setTdata] = useState([]);

    const txt1Ref = useRef();//현재 참조요소 값변경, 포커스 등

    //수정
    const [isUpdate, setIsUpdate] = useState(false);
    const [isUpdateId, setIsUpdateId] = useState();

    //1. 댓글 가져오기
    const url = `${apiBaseUrl}/api/comments`;

    const getFetchData = async (page = 1) => {
        try {
            const response = await axios.get(url,{
                params: { postId },
                headers: {
                    Accept: "application/json"
                }
            });

            console.log("댓글 데이터 확인:", response.data);

            setTdata(response.data);

        } catch (error) {
            console.error("데이터 불러오기 실패", error);
            setTdata([]);
        }
    };

    // postId가 바뀌면 댓글 다시 불러오기!
    useEffect(() => {
        if (postId) {
            getFetchData();
        }
    }, [postId]);


    //2. 댓글 입력하기
    const jsonPost = async () => {
        if(txt1Ref.current.value === ''){
            alert('내용을 입력하세요');
            txt1Ref.current.focus();
            return;
        }

        const postData = {
            title : txt1Ref.current.value,
            postId: postId
        }

        const {data} = await axios.post(url, postData, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        // 최신 데이터를 맨 앞에 추가
        setTdata(prevData => [data, ...prevData]);

        //댓글 입력창 초기화
        txt1Ref.current.value = '';

    }

    // 3. 댓글 삭제
    const jsonDelete = async (id) => {

        await axios.delete(`${url}/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        setTdata(tdata.filter(item => item.id !== id));

        txt1Ref.current.value = '';

    }

    // 4. 댓글 수정하기
    const jsonPut = async () => {
        const putData ={
            id: isUpdateId,
            title : txt1Ref.current.value,
            postId: postId
        }

        const {data} = await axios.put(`${url}/${isUpdateId}`, putData, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        setTdata(tdata.map(item => item.id === isUpdateId ? data : item));

        txt1Ref.current.value = '';
        txt1Ref.current.focus();

        setIsUpdate(false);
        setIsUpdate('null');
    }

    //수정버튼
    const handleUpdate = async (item) => {
        txt1Ref.current.value = item.title;

        setIsUpdate(true);
        setIsUpdateId(item.id);
    }

    //등록버튼
    const handleOk = () =>{
        if(isUpdate){
            jsonPut();
        }
        else {
            jsonPost();
        }
    }

    const [showOptionsId, setShowOptionsId] = useState(null);//도트 누르면 수정, 삭제 버튼 보이게

    const toggleOptions = (id) => {
        setShowOptionsId(prevId => (prevId === id ? null : id));//같은 ID 클릭 → 숨김 (null), 다른 ID 클릭 → 해당 ID로 전환!
    };

    return (
        <div className={``}>

            <div className={`w-full pb-4`}>
                <div>
                    <label htmlFor="txt1" className="hidden">내용</label>
                </div>

                {/*댓글 입력창*/}
                <div className="relative">
                    <input
                        id="txt1"
                        type="text"
                        className="w-full h-12 bg-gray-100 rounded-full pr-14 !border-0 pl-4"
                        ref={txt1Ref}
                        placeholder="댓글을 입력해주세요"
                    />

                    <TailButton
                        caption={<IoMdSend className="w-5 h-5 text-white"/>}
                        handleClick={handleOk}
                        className="w-10 h-10 bg-mainColor rounded-full flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 pl-1"
                    />
                </div>
            </div>

            <div className={`font-bold text-base pb-2`}>댓글 {tdata.length}</div>

            <ul className="w-full">
                {tdata.map(item => (
                    <li key={item.id} className="flex justify-between items-center border-b py-4">
                        <div className="flex-1 text-left">{item.title}</div>

                        <div className="relative">
                            {/* 도트 아이콘 */}
                            <div
                                tabIndex={0}
                                onBlur={() => setTimeout(() => setShowOptionsId(null), 100)} // 딜레이
                                className="cursor-pointer relative z-10"
                                onClick={() => toggleOptions(item.id)}
                            >
                                <HiOutlineDotsVertical/>
                            </div>

                            {/* 옵션 버튼 (조건부 렌더링) */}
                            {showOptionsId === item.id && (
                                <div
                                    className="w-28 absolute z-20 right-0 top-full mt-1 bg-white border rounded shadow p-2 space-y-3">

                                    <TailButton
                                        caption={<div className={`flex items-center gap-2`}><FaPencilAlt/>수정하기</div>}
                                        bcolor="mainColor"
                                        handleClick={() => handleUpdate(item)}
                                    />
                                    <TailButton
                                        caption={<div className={`flex items-center gap-2`}><RiDeleteBinLine/> 삭제하기
                                        </div>}
                                        bcolor="orange"
                                        handleClick={() => jsonDelete(item.id)}
                                    />
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

        </div>

    );
};