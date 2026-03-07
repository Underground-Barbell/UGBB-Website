'use client'
import { useState } from 'react';
import ContactCard from "@/app/components/ContactCard";
import InstagramIcon from "../../public/Icons/instagramIcon.png"
import FacebookIcon from "../../public/Icons/facebookIcon.png"


export default function Contact(){

    return (
        <section
            id="Contact"
            className="bg-gray-100 flex flex-col justify-center items-center pb-18"
        >
            <h2 className="font-sans-bartle text-5xl text-white text-border-red mt-5">CONTACT US</h2>

            <div
                id="ContactCardContainer"
                className="bg-gray-300 h-[375px] w-8/10 rounded-4xl mt-10 flex justify-center items-center"
            >
                <ContactCard
                    title="INSTAGRAM"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit."
                    handle="instagram.com/ugbb"
                    iconData={InstagramIcon}
                />
                <ContactCard
                    title="FACEBOOK"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit."
                    handle="facebook.com/ugbb"
                    iconData={FacebookIcon}
                />
            </div>
        </section>
    );
}