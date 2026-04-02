'use client'
import { useState } from 'react';


export default function Hero() {
    return (
        <section id="Hero" className="w-full">
            <div
                id="HeroContainer"
                className="relative w-full h-svh overflow-hidden flex justify-center items-end md:items-center"
            >
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src="/video/UGBB.mp4" type="video/mp4" />
                </video>

                <div
                    id="TitleContainer"
                    className="relative z-10 flex flex-col justify-center items-center text-ugbb-red-main font-sans-bogle text-4xl md:text-9xl animate-fade-in bottom-2 md:bottom-auto"
                >
                    <h1 className="text-border">UNDERGROUND</h1>
                    <h1 className="text-border">BARBELL</h1>
                    <hr className="border-3 md:border-6 border-white rounded-full my-2 w-3/4"/>
                    <h3 className="text-[10px] md:text-2xl font-sans-bartle text-border">
                        BE THE BEST - WORK HARD
                    </h3>
                </div>
            </div>
        </section>
    );
}