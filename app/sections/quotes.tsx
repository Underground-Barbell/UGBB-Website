'use client'
import { useState } from 'react';
import AnimationOnScroll from "@/app/tools/AnimationOnScroll";


export default function Quotes(){

    return (
        <section
            id="Quotes"
            className="bg-black text-white font-dosis font-bold text-center lg:flex lg:flex-col lg:justify-center lg:items-center pt-10 pb-20 border-b-20 md:border-b-28 border-ugbb-red-main relative"
        >
            <div
                className="lg:w-1/2"
            >
                <AnimationOnScroll classNameInView={"animate-fade-in opactiy-100"} classNameNotInView={"opacity-0"}>
                    <p className="italic text-lg mx-4">
                        &#34;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.&#34;
                    </p>
                    <p className="">- Loremizer</p>
                </AnimationOnScroll>
            </div>

        </section>
    );
}