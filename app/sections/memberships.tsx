'use client'
import { useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import MembershipCard from "@/app/components/MembershipCard";
import BarbellIcon from "../../public/Icons/Barbell.svg"
import { SquareArrowDownRight, X } from 'lucide-react';

interface MembershipInfo {
    id: number,
    infoDesc: string
    discDesc: string
}

export default function Memberships(){
    const [moreInfoToggle, setMoreInfoToggle] = useState<boolean>(false)
    const [currentInfo, setCurrentInfo] = useState<MembershipInfo>({discDesc: "", id: 0, infoDesc: ""})

    const membershipInfo = [
        {
            id: 1,
            infoDesc: "Lorem 1",
            discDesc: "Lorem 1"
        },
        {
            id: 2,
            infoDesc: "Lorem 2",
            discDesc: "Lorem 2"
        },
        {
            id: 3,
            infoDesc: "Lorem 3",
            discDesc: "Lorem 3"
        },
        {
            id: 4,
            infoDesc: "Lorem 4",
            discDesc: "Lorem 4"
        }
    ]

    const displayRelativeMembershipInformation = (id: number, toggleState: boolean) => {
        setMoreInfoToggle(toggleState)

        membershipInfo.forEach((item) => {
            if (item.id === id) {
                setCurrentInfo(membershipInfo[id - 1])
            }
        })
    }

    return (
        <section
            id="Memberships"
            className="bg-gray-100 pb-22 relative"
        >
            <div
                id="MembershipTitleContainer"
                className="text-center pt-12 pb-10"
            >
                <h2 className="font-sans-bartle text-2xl md:text-5xl text-border-red text-white">MEMBERSHIPS</h2>

            </div>

            <div
                id="CardContainer"
                className="flex flex-col md:flex-row w-full"
            >
                <div
                    className="md:w-2/5"
                >
                    <div
                        id="BasicMembershipContainer"
                        className="mx-5 md:ml-16 md:mr-4 bg-ugbb-red-sec rounded-4xl"
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
                                onClick={() => displayRelativeMembershipInformation(4, true)}
                                className="w-full flex justify-end text-white"
                            >
                                <SquareArrowDownRight className="w-[45px] h-[45px] hover:scale-110 active:border-2 active:border-white"/>
                            </button>
                        </div>
                    </div>

                    <div
                        id="MembershipContactLinkContainer"
                        className="border-2 border-ugbb-red-main mx-5 mb-6 md:mb-0 md:ml-16 md:mr-4 bg-white rounded-4xl"
                    >
                        <div
                            id="NextStepsContactLinkContainer"
                            className="text-center p-5 flex flex-col items-center"
                        >
                            <Link href="/">
                                <span className="font-sans-bartle text-ugbb-red-sec text-xl mb-1">Visit Contact to Get Setup</span>
                            </Link>
                        </div>

                    </div>
                </div>

                <div
                    id="OtherMembershipsContainer"
                    className="mx-5 md:mr-16 md:ml-4 md:m-10 md:w-3/5"
                >
                    <MembershipCard
                        id={1}
                        title="FAMILY"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit."
                        pricePerMonth="75$/MONTH"
                        setMoreInfoToggle={(value, id) => displayRelativeMembershipInformation(id, value)}
                    />
                    <MembershipCard
                        id={2}
                        title="BASIC + PERSONAL TRAINING"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit."
                        pricePerMonth="125$/MONTH"
                        setMoreInfoToggle={(value, id) => displayRelativeMembershipInformation(id, value)}
                    />
                    <MembershipCard
                        id={3}
                        title="FAMILY + PERSONAL TRAINING"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit."
                        pricePerMonth="175$/MONTH"
                        setMoreInfoToggle={(value, id) => displayRelativeMembershipInformation(id, value)}
                    />
                </div>

            </div>

            {moreInfoToggle && (
                <div
                    className="h-full w-full absolute z-100 flex justify-center items-center top-5 animate-fade-in-menu"
                >
                    <div
                        className="h-full w-8/10 bg-black rounded-4xl relative flex flex-col items-center justify-between"
                    >
                        <button
                            className="text-white absolute top-4 right-4"
                            onClick={() => setMoreInfoToggle(false)}
                        >
                            <X className="w-[45px] h-[45px] hover:scale-110 active:border-2 active:border-white"/>
                        </button>
                        <div
                            className="flex flex-col justify-center items-center text-center mt-15"
                        >
                            <h2 className="font-sans-bartle text-border-white text-4xl mb-3">INFORMATION</h2>
                            <p className="text-white font-bold font-dosis">{currentInfo.infoDesc}</p>
                        </div>
                        <div
                            className="flex flex-col justify-center items-center text-center mb-35"
                        >
                            <h2 className="font-sans-bartle text-border-white text-4xl mb-3">DISCLAIMER</h2>
                            <p className="text-white font-bold font-dosis">{currentInfo.discDesc}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}