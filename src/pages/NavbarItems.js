// components/NavbarItems.js
export const menuItems = [
    {
        title: '전시안내',
        path: '/art/gallery',
        children: [],
    },
    {
        title: '북셀렉션',
        path: '/recommend/gallery',
        children: [
            { name: '이달의 책', path: '/recommend/gallery' },
            { name: '노벨상', path: '/nobel/gallery' },
        ],
    },
    {
        title: '북포레 전용관',
        path: '/bookfore/librarianRecommend/gallery',
        children: [
            { name: '사서추천도서', path: '/bookfore/librarianRecommend/gallery' },
            { name: '도서관 찾기', path: '/' },
            { name: '신작 소개', path: '/bookfore/new/gallery' },
        ],
    },
    {
        title: '어린이교육',
        path: '/children/gallery',
        children: [],
    },
    {
        title: '공지사항',
        path: '/notice',
        children: [],
    },
];
