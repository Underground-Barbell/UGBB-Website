'use client'
import { useState } from 'react';
import ContactCard from "@/app/components/ContactCard";
import InstagramIcon from "../../public/Icons/instagramIcon.png"
import FacebookIcon from "../../public/Icons/facebookIcon.png"
import Image from "next/image";


export default function Contact(){
    const [socialView, setSocialView] = useState<boolean>(false);

    return (
        <section
            id="Contact"
            className="bg-gray-100 flex flex-col justify-center items-center pb-18 border-b-28 border-ugbb-red-sec"
        >
            <h2 className="font-sans-bartle text-3xl lg:text-5xl text-white text-border-red mt-5">CONTACT US</h2>

            <div
                id="ContactCardContainer"
                className="hidden bg-gray-300 h-[285px] w-8/10 rounded-4xl mt-10 lg:block"
            >
                {socialView && (
                    <div
                        className="h-full flex justify-center items-center"
                    >
                        <button
                            className="bg-gray-200 lg:w-1/2 h-9/10 m-4 rounded-4xl flex flex-col justify-center items-center animate-slide-in-left"
                            onClick={() => setSocialView(false)}
                        >
                            <div
                                className="flex flex-col justify-center items-center"
                            >
                                <Image src={FacebookIcon} alt="Facebook Icon" />
                                <span className="font-sans-bartle text-3xl text-border-red">View Facebook</span>
                            </div>
                        </button>
                        <ContactCard
                            title="INSTAGRAM"
                            description="Send a DM on Instagram to get started with membership options, personal training, or to set up your first visit."
                            handle="https://www.instagram.com/underground.barbell/"
                            iconData={InstagramIcon}
                            customStyles="animate-slide-in-right"
                            setSocialView={(value) => setSocialView(value)}
                        />
                    </div>
                )}

                {!socialView && (
                    <div
                        className="h-full flex justify-between items-center "
                    >
                        <ContactCard
                            title="FACEBOOK"
                            description="Message Jeramy Ingle on Facebook to get set up with a membership, training, or to schedule a time to stop in."
                            handle="https://www.facebook.com/groups/139261723105795"
                            iconData={FacebookIcon}
                            customStyles="animate-slide-in-left"
                            setSocialView={(value) => setSocialView(value)}
                        />

                        <button
                            className="bg-gray-200 lg:w-1/2 h-9/10 m-4 rounded-4xl flex flex-col justify-center items-center animate-slide-in-right"
                            onClick={() => setSocialView(true)}
                        >
                            <div
                                className="flex flex-col justify-center items-center"
                            >
                                <Image src={InstagramIcon} alt="Instagram Icon" />
                                <span className="font-sans-bartle text-3xl text-border-red">View Instagram</span>
                            </div>
                        </button>
                    </div>
                )}

            </div>
            <div
                id="ContactCardContainerMobile"
                className="lg:hidden bg-gray-300 h-[500px] md:w-8/10 mx-3 lg:mx-0 rounded-4xl mt-10 flex justify-center items-center"
            >
                {socialView && (
                    <ContactCard
                        title="INSTAGRAM"
                        description="Send a DM on Instagram to get started with membership options, personal training, or to set up your first visit."
                        handle="https://www.instagram.com/underground.barbell/"
                        iconData={InstagramIcon}
                        customStyles="animate-fade-in"
                        setSocialView={(value) => setSocialView(value)}
                    />
                )}

                {!socialView && (
                    <ContactCard
                        title="FACEBOOK"
                        description="Message Jeramy Ingle on Facebook to get set up with a membership, training, or to schedule a time to stop in."
                        handle="https://www.facebook.com/groups/139261723105795"
                        iconData={FacebookIcon}
                        customStyles="animate-fade-in"
                        setSocialView={(value) => setSocialView(value)}
                    />
                )}
            </div>
        </section>
    );
}