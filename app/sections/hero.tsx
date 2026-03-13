'use client'
import { useState } from 'react';


export default function Hero(){

    return (
        <section
            id="Hero"
            className="bg-[url(/testing-bg-img-hero.png)] h-screen"
        >
            <div
                id="HeroContainer"
                className="flex justify-center items-center h-full"
            >
                {/* TODO: Cinematic Video Here */}
                <div
                    id="TitleContainer"
                    className="flex flex-col justify-center items-center text-ugbb-red-main font-sans-bogle text-7xl lg:text-9xl"
                >
                    <h1 className="text-border">UNDERGROUND</h1>
                    <h1 className="text-border">BARBELL</h1>
                    <hr className="border-6 border-white rounded-full my-2 w-3/4"/>
                    <h3 className="text-[15px] lg:text-2xl font-sans-bartle text-border">BE THE BEST - WORK HARD</h3>
                </div>
            </div>
        </section>
    );
}