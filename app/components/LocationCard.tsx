import Link from "next/link"
import { SquareArrowUpRight } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Clock8 } from 'lucide-react';

interface LocationCardInterface {
    title: string,
    address: string,
    city: string,
    state: string,
    availability: string
}

export default function LocationCard(props: LocationCardInterface) {


    return (
        <div
            id="LocationCard"
            className="bg-white border-2 border-ugbb-red-sec rounded-4xl mx-4 lg:mx-25 mb-22"
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
                id=""
                className="flex justify-end mb-2"
            >
                <Link href="/" className="flex justify-center items-center text-ugbb-red-main">
                    <span className="font-sans-bartle text-2xl text-white text-border-red">More Info</span>
                    <SquareArrowUpRight className="w-[55px] h-[55px] mr-4" />
                </Link>
            </div>

        </div>
    );
}