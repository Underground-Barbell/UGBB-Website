'use client'
import { useState } from 'react';


export default function Introduction(){

    return (
        <section
            id="Introduction"
            className="border-t-20 md:border-t-28 border-ugbb-red-sec text-white bg-black "
        >
            <div
                className="flex flex-col justify-center items-center md:items-end md:text-end"
            >
                <h2 className="text-4xl md:text-5xl font-sans-bartle text-border-red mt-8 md:mx-8">WELCOME</h2>
                <hr className="border-3 w-85 md:w-130 lg:w-165 rounded-full text-ugbb-red-main mt-2 md:mx-8"/>
                <p className="font-dosis text-[17px] md:text-lg md:w-1/2 mx-8 mt-2 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum
                    diam ut, vehicula velit. Integer augue eros,  porttitor et imperdiet non, dignissim
                    posuere massa. Aliquam suscipit  pretium eros, eget venenatis erat suscipit ut.
                </p>
            </div>
        </section>
    );
}