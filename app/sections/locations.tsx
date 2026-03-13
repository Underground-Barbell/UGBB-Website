'use client'
import { useState } from 'react';
import LocationCard from "@/app/components/LocationCard";


export default function Locations(){

    return (
        <section
            id="Locations"
            className="bg-gray-100 flex flex-col lg:flex-row"
        >
            <div
                id="LocationsMobileTitleContainer"
                className="text-center"
            >
                <h1 className="lg:hidden font-sans-bartle text-3xl md:text-5xl text-white text-border-red mt-15">LOCATIONS</h1>
            </div>
            <div
                id="APIMapContainer"
                className="lg:w-1/2 "
            >
                <div
                    id="InnerAPIMapContainer"
                    className="h-[650px] lg:h-[845px] border-4 border-ugbb-red-sec mx-4 lg:mx-15 my-5 rounded-4xl"
                >
                    {/* TODO: Integrate API Map Here */}
                </div>
            </div>

            <div
                id="LocationsContainer"
                className="lg:w-1/2 flex flex-col items-center"
            >
                <h1 className="hidden lg:block font-sans-bartle text-5xl text-white text-border-red mt-15">LOCATIONS</h1>
                <div
                    id="LocationCardContainer"
                    className="mt-15 w-full"
                >
                    <LocationCard title="OTTUMWA" address="123 Address Street" city="Ottumwa" state="Iowa" availability="24/7" />
                    <LocationCard title="HEDRICK" address="123 Address Street" city="Hedrick" state="Iowa" availability="24/7" />
                </div>

            </div>

        </section>
    );
}