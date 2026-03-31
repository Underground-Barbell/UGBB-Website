"use client"
import { useState } from "react";
import Image from "next/image"
import { MapPinned } from 'lucide-react';
import { SquareArrowDownRight } from 'lucide-react';

interface EquipmentActionCardInterface {
    title: string,
    iconId: number,
    setAction: (action: boolean) => void;
}

export default function EquipmentActionCard(props: EquipmentActionCardInterface) {

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
        <button
            id="EquipmentActionCard"
            className="flex justify-center items-center bg-black p-2 rounded-2xl mr-4 mb-4 border-4 border-white lg:border-0 hover:scale-105 active:border-2 active:border-white"
            onClick={() => props.setAction(true)}

        >
            <h4 className="font-sans-bartle text-xl text-ugbb-red-sec text-border-white">{props.title}</h4>
            <div
                className="text-white"
            >
                {iconPicker()}
            </div>
        </button>
    );
}