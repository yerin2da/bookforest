// // components/MbNav.jsx
// import { Link } from "react-router-dom";
// import React from "react";
//
// export default function MbNav({ isOpen, onClose }) {
//     if (!isOpen) return null; // 안 열렸으면 렌더 안 함
//
//     return (
//         <div
//             className="fixed inset-0 bg-black/40 z-[9998] flex justify-end"
//             onClick={onClose}
//         >
//             {/* 사이드 네비게이션 */}
//             <div
//                 className="w-full sm:w-64 h-full bg-white shadow-xl p-6"
//                 // onClick={(e) => e.stopPropagation()} // 내부 클릭 막기
//             >
//                 <button
//                     onClick={onClose}
//                     className="text-sm text-gray-400 hover:text-black mb-6"
//                 >
//                     닫기 ✕
//                 </button>
//                 <ul className="space-y-4">
//                     <li><Link to="/mypage" className="hover:text-mainColor">마이페이지</Link></li>
//                     <li><Link to="/guide" className="hover:text-mainColor">이용 가이드</Link></li>
//                     <li><Link to="/stage/gallery/exhibition" className="hover:text-mainColor">제주 전시</Link></li>
//                     <li><Link to="/theme/gallery?category=healing" className="hover:text-mainColor">테마 여행</Link></li>
//                 </ul>
//             </div>
//         </div>
//     );
// }
