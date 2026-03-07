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
                className="flex w-full"
            >
                <div
                    id="ClassesContainer"
                    className="m-25 w-1/2"
                >
                    <ClassesCard title={"CLASSES"} />
                </div>

                <div
                    id="EventsContainer"
                    className="m-25 w-1/2"
                >
                    <ClassesCard title={"EVENTS"} />
                </div>

            </div>

        </section>
    );
}