'use client'
import { usePathname } from 'next/navigation';
import React from 'react'
import Header from './layout/Header';
import Footer from './layout/Footer';

const ChildCom = ({ children }) => {
    const pathName = usePathname();
    const hideHeaderFooterOn = ['/components/login-form'];
    const shouldHide = hideHeaderFooterOn.includes(pathName);
    return (
        <div className='w-full h-screen'>
            {!shouldHide && <Header />}
            {children}
            {!shouldHide && <Footer />}
        </div>
    );
}

export default ChildCom