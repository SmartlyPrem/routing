import React from 'react';
import Header from './Component/Header';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}

export default MainPage;
