'use client'
import { useState } from 'react';


export default function Hero(){

    return (
        <section
            id="Hero"
            className=""
        >
            <div
                id="HeroContainer"
                className="flex justify-center items-center h-full w-full relative"
            >
                <video className="w-full h-full" autoPlay={true} muted={true} loop={true}>
                    <source src="/video/UGBB.mp4" type="video/mp4" />
                </video>
                <div
                    id="TitleContainer"
                    className="flex flex-col justify-center items-center text-ugbb-red-main font-sans-bogle text-7xl md:text-9xl absolute animate-fade-in"
                >
                    <h1 className="text-border">UNDERGROUND</h1>
                    <h1 className="text-border">BARBELL</h1>
                    <hr className="border-6 border-white rounded-full my-2 w-3/4"/>
                    <h3 className="text-[15px] md:text-2xl font-sans-bartle text-border">BE THE BEST - WORK HARD</h3>
                </div>
            </div>
        </section>
    );
}