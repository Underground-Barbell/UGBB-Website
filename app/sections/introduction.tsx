'use client'
import {useState, useEffect, useRef} from 'react';
import AnimationOnScroll from "@/app/tools/AnimationOnScroll";


export default function Introduction(){


    return (
        <section
            id="Introduction"
            className="border-t-15 md:border-t-28 border-ugbb-red-sec text-white bg-black "
        >
            <AnimationOnScroll classNameInView={"animate-slide-in-right opacity-100"} classNameNotInView={"opacity-0"}>
                <div
                    className="flex flex-col justify-center items-center text-center md:items-end md:text-end"
                >
                    <h2 className="text-3xl md:text-5xl font-sans-bartle text-border-red mt-8 md:mx-8">WELCOME</h2>
                    <hr className="border-3 w-85 md:w-130 lg:w-165 rounded-full text-ugbb-red-main mt-2 md:mx-8"/>
                    <p className="font-dosis text-[15px] md:text-lg md:w-1/2 mx-8 mt-2 font-bold">
                        Underground Barbell is a Southeast Iowa powerlifting gym located in Ottumwa, Iowa, built for individuals who are serious about getting stronger and putting in real work every single day. This is not your everyday commercial gym, it is a place where driven people come together, stay committed, and push each other to improve.                    </p>
                </div>
            </AnimationOnScroll>
        </section>
    );
}