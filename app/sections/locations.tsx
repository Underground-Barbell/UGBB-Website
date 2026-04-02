'use client'
import LocationCard from "@/app/components/LocationCard";
import Map from "@/app/tools/Map";


export default function Locations(){

    return (
        <section
            id="Locations"
            className="bg-gray-100 flex flex-col desktop:flex-row"
        >
            <div
                id="LocationsMobileTitleContainer"
                className="text-center"
            >
                <h1 className="desktop:hidden font-sans-bartle text-3xl md:text-5xl text-white text-border-red mt-15">LOCATIONS</h1>
            </div>
            <div
                id="APIMapContainer"
                className="desktop:w-1/2 "
            >
                <div
                    id="InnerAPIMapContainer"
                    className="h-[400px] desktop:h-[845px] border-4 border-ugbb-red-sec mx-4 desktop:mx-15 my-5 rounded-4xl"
                >
                    <Map/>
                </div>
            </div>

            <div
                id="LocationsContainer"
                className="desktop:w-1/2 flex flex-col items-center"
            >
                <h1 className="hidden desktop:block font-sans-bartle text-5xl text-white text-border-red mt-15">LOCATIONS</h1>
                <div
                    id="LocationCardContainer"
                    className="mt-15 w-full"
                >
                    <LocationCard title="OTTUMWA" address="921 Church St" city="Ottumwa" state="Iowa, 52501" availability="24/7" />
                    <LocationCard title="HEDRICK" address="117 S Main St" city="Hedrick" state="Iowa, 52563" availability="24/7" />
                </div>

            </div>

        </section>
    );
}