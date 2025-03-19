'use client'
import { useEffect, useState, useRef } from "react";
import React from 'react'

const page = () => {
    const divRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    // observer.unobserve(entry.target);
                }
                if (!entry.isIntersecting) {
                    entry.target.classList.remove("show");
                    // observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }
        return () => observer.disconnect();
    }, []);


    return (
        <div className="w-full h-auto bg-gray-400 flex flex-col items-center justify-center">
            <div className="w-full h-screen bg-red-400"></div>
            <div className="w-full h-screen bg-green-400"></div>
            <div className="w-full h-screen flex items-center justify-center bg-blue-800">
                <h1 className="text-4xl font-semibold opacity-0" ref={divRef}>Welcome Nahid Hasan</h1>
            </div>

        </div>

    )
}

export default page