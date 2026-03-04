'use client'
import { useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import MembershipCard from "@/app/components/MembershipCard";
import BarbellIcon from "../../public/Icons/Barbell.svg"
import { SquareArrowDownRight } from 'lucide-react';


export default function Memberships(){
    const [moreInfoToggle, setMoreInfoToggle] = useState<boolean>(false)

    return (
        <section
            id="Memberships"
            className="bg-gray-100 pb-22"
        >
            <div
                id="MembershipTitleContainer"
                className="text-center pt-12 pb-10"
            >
                <h2 className="font-sans-bartle text-5xl text-border-red text-white">MEMBERSHIPS</h2>

            </div>

            <div
                id="CardContainer"
                className="flex w-full"
            >
                <div
                    className="w-2/5"
                >
                    <div
                        id="BasicMembershipContainer"
                        className="ml-16 mr-4 bg-ugbb-red-sec rounded-4xl"
                    >
                        <div
                            id="BasicMembershipCard"
                            className="m-10 p-5 text-center flex flex-col items-center"
                        >
                            <h3 className="text-black font-sans-bartle text-3xl text-border-white mb-4">BASIC</h3>
                            <hr className="border-4 text-white rounded-full mb-6 w-full"/>
                            <h5 className="text-black font-sans-bartle text-3xl text-border-white mb-6">- 35$/MONTH -</h5>
                            <Image src={BarbellIcon} alt="Barbell Icon" width={375} height={150} className="mb-6" />
                            <p className="text-white font-dosis font-bold mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum
                                gravida, vestibulum diam ut, vehicula velit. Integer augue eros,
                                porttitor et imperdiet non, dignissim posuere massa.
                            </p>
                            <button
                                onClick={() => setMoreInfoToggle(!moreInfoToggle)}
                                className="w-full flex justify-end text-white"
                            >
                                <SquareArrowDownRight className="w-[45px] h-[45px]"/>
                            </button>
                        </div>
                    </div>

                    <div
                        id="MembershipContactLinkContainer"
                        className="border-2 border-ugbb-red-main ml-16 mr-4 bg-white rounded-4xl"
                    >
                        <div
                            id="NextStepsContactLinkContainer"
                            className="text-center p-5 flex flex-col items-center"
                        >
                            <Link href="/">
                                <span className="text-black font-dosis font-bold text-xl">Visit Contact to Get Setup</span>
                            </Link>
                            <hr className="border-2 border-ugbb-red-main w-1/2"/>
                        </div>

                    </div>
                </div>

                <div
                    id="OtherMembershipsContainer"
                    className="mr-16 ml-4 m-10 w-3/5"
                >
                    <MembershipCard
                        title="FAMILY"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit."
                        pricePerMonth="75$/MONTH"
                    />
                    <MembershipCard
                        title="BASIC + PERSONAL TRAINING"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit."
                        pricePerMonth="125$/MONTH"
                    />
                    <MembershipCard
                        title="FAMILY + PERSONAL TRAINING"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit."
                        pricePerMonth="175$/MONTH"
                    />
                </div>

            </div>
        </section>
    );
}