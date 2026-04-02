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
                className="flex justify-center items-end md:items-center md:h-full w-full relative"
            >
                <video className="w-full h-fit md:h-full" autoPlay={true} muted={true} loop={true}>
                    <source src="/video/UGBB.mp4" type="video/mp4" className="w-fit h-fit" />
                </video>
                <div
                    id="TitleContainer"
                    className="flex flex-col justify-center items-center text-ugbb-red-main font-sans-bogle text-4xl md:text-9xl absolute animate-fade-in bottom-2 md:bottom-auto"
                >
                    <h1 className="text-border">UNDERGROUND</h1>
                    <h1 className="text-border">BARBELL</h1>
                    <hr className="border-3 md:border-6 border-white rounded-full my-2 w-3/4"/>
                    <h3 className="text-[10px] md:text-2xl font-sans-bartle text-border">BE THE BEST - WORK HARD</h3>
                </div>
            </div>
        </section>
    );
}