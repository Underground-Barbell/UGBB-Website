'use client'
import { useState } from 'react';


export default function Quotes(){

    return (
        <section
            id="Quotes"
            className="bg-black text-white font-dosis font-bold text-center lg:flex lg:flex-col lg:justify-center lg:items-center pt-10 pb-20 border-b-20 md:border-b-28 border-ugbb-red-main"
        >
            <p className="italic text-lg lg:w-1/2 mx-4">
                &#34;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.&#34;
            </p>
            <p className="">- Loremizer</p>
        </section>
    );
}