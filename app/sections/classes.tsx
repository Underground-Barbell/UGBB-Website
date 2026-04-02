'use client'
import { useState } from 'react';
import ClassesCard from "@/app/components/ClassesCard";


export default function Classes(){

    return (
        <section
            id="Classes"
            className="bg-black border-b-28 border-ugbb-red-sec"
        >
            <div
                id="ClassesAndEventsContainer"
                className="flex flex-col justify-center items-center desktop:flex-row w-full"
            >
                <div
                    id="ClassesContainer"
                    className="m-12 desktop:m-25 desktop:w-1/2"
                >
                    <ClassesCard title={"CLASSES"} />
                </div>

                <div
                    id="EventsContainer"
                    className="m-12 desktop:m-25 desktop:w-1/2"
                >
                    <ClassesCard title={"EVENTS"} />
                </div>

            </div>

        </section>
    );
}
