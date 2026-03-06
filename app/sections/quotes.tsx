'use client'
import { useState } from 'react';


export default function Quotes(){

    return (
        <section
            id="Quotes"
            className="bg-black text-white font-dosis font-bold flex flex-col justify-center items-center pt-10 pb-20 border-b-22 border-ugbb-red-main"
        >
            <p className="italic text-lg w-1/2">
                &#34;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.&#34;
            </p>
            <p className="">- Loremizer</p>
        </section>
    );
}