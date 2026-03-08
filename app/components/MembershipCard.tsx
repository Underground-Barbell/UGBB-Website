'use client'
import { useState } from "react";
import { SquareArrowDownRight } from 'lucide-react';

interface MemberShipCardInterface {
    title: string,
    description: string,
    pricePerMonth: string
}

export default function MembershipCard(props: MemberShipCardInterface) {
    const [moreInfoToggle, setMoreInfoToggle] = useState<boolean>(false)

    return (
        <div
            id="MembershipCard"
            className="bg-white rounded-4xl border-2 border-ugbb-red-main my-4"
        >
            <div
                id="OtherMembershipCard"
                className="m-3 p-1"
            >
                <h3 className="font-sans-bartle text-ugbb-red-sec text-2xl mb-1">{props.title}</h3>
                <hr className="border-4 text-ugbb-red-main rounded-full mb-1"/>
                <p className="text-black font-dosis font-bold mb-2">{props.description}</p>
                <div
                    id="MembershipLowerInfoContainer"
                    className="flex justify-between"
                >
                    <h5 className="text-3xl font-sans-bartle text-white text-border-red">{props.pricePerMonth}</h5>
                    <button onClick={() => setMoreInfoToggle(!moreInfoToggle)}>
                        <SquareArrowDownRight className="w-[45px] h-[45px]"/>
                    </button>
                </div>
            </div>
        </div>
    );
}