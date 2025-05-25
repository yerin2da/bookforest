import React from 'react';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AuthWatcher from './hooks/AuthWatcher';
import RouteMain from './routes/RouteMain';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { APIProvider } from '@vis.gl/react-google-maps';
import LoginExpireWatcher from "./hooks/LoginExpireWatcher";
import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const url = process.env.REACT_APP_API_MAP_KEY;//구글맵

const queryClient = new QueryClient();

function App() {
    return (
        <HashRouter>
            <APIProvider apiKey={url}>
                <RecoilRoot>
                    <QueryClientProvider client={queryClient}>
                        <AuthWatcher />
                        <LoginExpireWatcher />
                        <RouteMain />
                    </QueryClientProvider>
                </RecoilRoot>
            </APIProvider>
        </HashRouter>
    );
}

export default App;
