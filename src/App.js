
import React from 'react';
import {HashRouter} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AuthWatcher from './hooks/AuthWatcher';
import RouteMain from './routes/RouteMain';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {APIProvider} from '@vis.gl/react-google-maps';
import LoginExpireWatcher from "./hooks/LoginExpireWatcher";
import 'swiper/css';
import 'swiper/css/navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ← 핵심! (collapse, dropdown, modal 등 포함)


const url = process.env.REACT_APP_API_MAP_KEY;//구글맵

function App() {
    return (
        <HashRouter>

            <APIProvider apiKey={url}>
                <RecoilRoot>
                        <AuthWatcher /> {/* 페이지 이동시 auth 감시 */}
                        <LoginExpireWatcher/>{/* 로그인 유효시간 만료 감시 */}

                        {/* 전역 알림 */}
                        {/*<ToastContainer*/}
                        {/*    position="top-center"*/}
                        {/*    autoClose={3000}*/}
                        {/*    hideProgressBar={false}*/}
                        {/*    closeOnClick*/}
                        {/*    pauseOnHover*/}
                        {/*    draggable*/}
                        {/*/>*/}


                        {/* 전체 라우트 관리 */}
                        <RouteMain />
                </RecoilRoot>
            </APIProvider>
        </HashRouter>

    );
}

export default App;
