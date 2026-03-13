'use client'
import { useState } from 'react';
import ContactCard from "@/app/components/ContactCard";
import InstagramIcon from "../../public/Icons/instagramIcon.png"
import FacebookIcon from "../../public/Icons/facebookIcon.png"


export default function Contact(){

    return (
        <section
            id="Contact"
            className="bg-gray-100 flex flex-col justify-center items-center pb-18 border-b-28 border-ugbb-red-sec"
        >
            <h2 className="font-sans-bartle text-3xl lg:text-5xl text-white text-border-red mt-5">CONTACT US</h2>

            <div
                id="ContactCardContainer"
                className="hidden bg-gray-300 h-[375px] w-8/10 rounded-4xl mt-10 lg:flex justify-center items-center"
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
            <div
                id="ContactCardContainerMobile"
                className="lg:hidden bg-gray-300 h-[500px] md:w-8/10 mx-3 lg:mx-0 rounded-4xl mt-10 flex justify-center items-center"
            >
                <ContactCard
                    title="INSTAGRAM"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit."
                    handle="instagram.com/ugbb"
                    iconData={InstagramIcon}
                />
                {/*<ContactCard*/}
                {/*    title="FACEBOOK"*/}
                {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit."*/}
                {/*    handle="facebook.com/ugbb"*/}
                {/*    iconData={FacebookIcon}*/}
                {/*/>*/}
            </div>
        </section>
    );
}