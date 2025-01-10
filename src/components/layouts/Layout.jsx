import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer/Footer'
import Header from '../common/Header/Header'
import "./Layout.scss";

const Layout = () => {
    return (
        <div className="layout_design">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
