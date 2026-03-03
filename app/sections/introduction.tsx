'use client'
import { useState } from 'react';


export default function Introduction(){

    return (
        <section
            id="Introduction"
            className="border-t-28 border-ugbb-red-sec text-white bg-black "
        >
            <div
                className="flex flex-col items-end text-end relative right-12"
            >
                <h2 className="text-5xl font-sans-bartle text-border-red mt-8">WELCOME</h2>
                <hr className="border-3 w-165 rounded-full text-ugbb-red-main mt-2"/>
                <p className="font-dosis text-lg w-1/2 mt-2 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum
                    diam ut, vehicula velit. Integer augue eros,  porttitor et imperdiet non, dignissim
                    posuere massa. Aliquam suscipit  pretium eros, eget venenatis erat suscipit ut.
                </p>
            </div>
        </section>
    );
}