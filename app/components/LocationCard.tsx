import Link from "next/link"
import {SquareArrowUpRight, X} from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Clock8 } from 'lucide-react';
import {useState} from "react";

interface LocationCardInterface {
    title: string,
    address: string,
    city: string,
    state: string,
    availability: string
}

export default function LocationCard(props: LocationCardInterface) {
    const [seeLocationModal, setSeeLocationModal] = useState<boolean>(false)

    return (
        <div
            id="LocationCard"
            className="bg-white border-2 border-ugbb-red-sec rounded-4xl mx-4 lg:mx-25 mb-22 relative"
        >
            <div
                id="LocationCardTitleContainer"
                className="mb-4"
            >
                <h4 className="font-sans-bartle text-ugbb-red-sec text-2xl my-2 ml-2">{props.title}</h4>
                <hr className="border-4 border-ugbb-red-main rounded-full mx-2" />
            </div>

            <div
                id="LocationCardAddressInfoContainer"
                className="text-black font-dosis text-lg font-bold flex mb-4"
            >
                <MapPin className="w-[55px] h-[55px] ml-4" />
                <div className="ml-1">
                    <p>{props.address}</p>
                    <p>{props.city}, {props.state}</p>
                </div>
            </div>

            <div
                id="LocationCardAvailabiltyInfoContainer"
                className="text-black font-dosis text-lg font-bold flex mb-4"
            >
                <Clock8 className="w-[55px] h-[55px] ml-4" />
                <div
                    className="flex justify-center items-center ml-1"
                >
                    <p>{props.availability}</p>
                </div>
            </div>

            <div
                id="LocationCardMoreInfoContainer"
                className="flex justify-end mb-2"
            >
                <button
                    className="flex justify-center items-center text-ugbb-red-main hover:scale-105 active:underline"
                    onClick={() => setSeeLocationModal(true)}
                >
                    <span className="font-sans-bartle text-2xl text-white text-border-red">More Info</span>
                    <SquareArrowUpRight className="w-[55px] h-[55px] mr-4 active:border-2 active:border-ugbb-red-sec" />
                </button>
            </div>

            {seeLocationModal && (
                <div
                    className="h-full w-full absolute z-100 flex justify-center items-center top-0 bottom-0 animate-fade-in-menu rounded-4xl"
                >
                    <div
                        className="h-full w-full bg-black rounded-4xl relative flex flex-col items-center justify-center"
                    >
                        <button
                            className="text-white absolute top-4 right-4"
                            onClick={() => setSeeLocationModal(false)}
                        >
                            <X className="w-[45px] h-[45px] hover:scale-110 active:border-2 active:border-white"/>
                        </button>
                        <h2 className="font-sans-bartle text-border-white text-4xl mb-3">INFORMATION</h2>
                        <p className="text-white font-bold font-dosis">Lorem</p>
                    </div>
                </div>
            )}

        </div>
    );
}