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

    const [textToCopy, setTextToCopy] = useState(`${props.address}, ${props.city}, ${props.state}`);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    return (
        <div
            id="LocationCard"
            className="bg-white border-2 border-ugbb-red-sec rounded-[38px] mx-4 lg:mx-25 mb-22 relative"
        >
            <div
                id="LocationCardTitleContainer"
                className="mb-4"
            >
                <h4 className="font-sans-bartle text-ugbb-red-sec text-2xl my-2 ml-2">{props.title}</h4>
                <hr className="border-4 border-ugbb-red-main rounded-full mx-2" />
            </div>

            <button
                id="LocationCardAddressInfoContainer"
                className="text-black font-dosis text-lg font-bold flex mb-4 relative"
                onClick={() => handleCopy()}
            >
                <MapPin className="w-[55px] h-[55px] ml-4" />
                <div className="ml-1">
                    <p>{props.address}</p>
                    <p>{props.city}, {props.state}</p>
                </div>
                {isCopied && (
                    <div
                        className="h-full w-full bg-ugbb-red-main rounded-3xl absolute flex justify-center items-center"
                    >
                        <p className="font-dosis font-extrabold text-white">COPIED!</p>
                    </div>
                )}
            </button>



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
                    className="h-full w-full absolute z-50 flex justify-center items-center top-0 bottom-0 animate-fade-in-menu rounded-4xl border-ugbb-red-sec border-8"
                >
                    <div
                        className="h-full w-full bg-black rounded-2xl relative flex flex-col items-center justify-center"
                    >
                        <button
                            className="text-white absolute top-4 right-4"
                            onClick={() => setSeeLocationModal(false)}
                        >
                            <X className="w-[45px] h-[45px] hover:scale-110 active:border-2 active:border-white"/>
                        </button>
                        <div
                            className="flex flex-col justify-center items-center text-center"
                        >
                            <h2 className="font-sans-bartle text-border-white text-3xl mb-3">24/7 Location Disclaimer</h2>
                            <p className="text-white font-bold font-dosis">This is a 24/7 access facility, giving members the freedom to train on their own schedule at any time of day or night. Members are responsible for maintaining the space, including turning lights on and off, keeping equipment organized, and respecting the environment. This level of access is built on trust, accountability, and a shared commitment to keeping the gym running smoothly for everyone.</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}