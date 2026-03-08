"use client"
import { useState } from "react";
import Image from "next/image"
import { MapPinned } from 'lucide-react';
import { SquareArrowDownRight } from 'lucide-react';

interface EquipmentActionCardInterface {
    title: string,
    iconId: number
}

export default function EquipmentActionCard(props: EquipmentActionCardInterface) {
    const [actionButtonToggle, setActionButtonToggle] = useState<boolean>(false)

    function iconPicker() {

        if (props.iconId === 1) {
            return (
                <MapPinned className="w-[55px] h-[55px]" />
            );
        } else {
            return (
                <SquareArrowDownRight className="w-[55px] h-[55px]" />
            )
        }

    }

    return (
        <div
            id="EquipmentActionCard"
            className="flex justify-center items-center bg-black p-2 rounded-2xl mr-4 mb-4"
        >
            <h4 className="font-sans-bartle text-xl text-ugbb-red-sec text-border-white">{props.title}</h4>
            <button
                onClick={() => setActionButtonToggle(!actionButtonToggle)}
                className="text-white"
            >
                {iconPicker()}
            </button>
        </div>
    );
}