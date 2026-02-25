'use client'
import { useState } from 'react';
import LocationCard from "@/app/components/LocationCard";


export default function Locations(){

    return (
        <section id="Locations">
            <div id="APIMapContainer">
                {/* TODO: Integrate API Map Here */}
            </div>
            <div id="LocationsContainer">
                <h1>LOCATIONS</h1>
                <div id="LocationCardContainer">
                    <LocationCard title="OTTUMWA" address="123 Address Street" city="Ottumwa" state="Iowa" availability="24/7" />
                    <LocationCard title="HEDRICK" address="123 Address Street" city="Hedrick" state="Iowa" availability="24/7" />
                </div>
            </div>
        </section>
    );
}