import Image from "next/image";
import TempImage from "../../public/Equipment/LegExtensionAndCrunch.png"
import { SquareChartGantt } from 'lucide-react';
import { CircleArrowLeft } from 'lucide-react';
import { CircleArrowRight } from 'lucide-react';

interface ClassesCardInterface {
    title: string,
}

export default function ClassesCard(props: ClassesCardInterface) {


    return (
        <div
            id="ClassesCardContainer"
            className="w-full"
        >

            <div
                id="ClassesCardTitleContainer"
                className="mb-8 lg:mb-15 w-full flex flex-col justify-center items-center"
            >
                <h4 className="font-sans-bartle text-3xl md:text-4xl text-white text-border-red mb-2">{props.title}</h4>
                <hr className="border-4 border-ugbb-red-main rounded-full w-4/5 lg:w-1/2"/>
            </div>

            <div
                id="ClassesCardInfoAndControlsContainer"
                className="flex flex-col justify-center items-center"
            >
                <div
                    id="ClassesCardInfoContainer"
                    className="lg:w-[650px] bg-white rounded-4xl flex flex-col justify-center items-center"
                >
                    <Image
                        src={TempImage}
                        alt="Temp Image"
                        className="w-7/10 rounded-4xl mt-6"
                    />
                    <h5 className="font-sans-bartle text-2xl md:text-3xl text-ugbb-red-sec mt-6">STRENGTH</h5>

                    <button
                        className="mt-9 w-6/10 flex justify-center items-center bg-ugbb-red-main py-3 rounded-4xl text-white mb-6"
                    >
                        <span className="font-sans-bartle text-sm md:text-lg text-black text-border-white">VIEW</span>
                        <SquareChartGantt className="w-10 h-10 ml-2"/>
                    </button>
                </div>

                <div
                    id="ClassesControlsContainer"
                    className="flex justify-center items-center mt-12"
                >
                    <div
                        id="ClassesControlsLeftButton"
                        className="text-black bg-white rounded-full p-1 mr-3"
                    >
                        <CircleArrowLeft className="w-[55px] h-[55px]"/>
                    </div>

                    <div
                        id="ClassesControlsTitleContainer"
                        className="bg-ugbb-red-main rounded-4xl w-1/2 p-2 text-center"
                    >
                        <p className="font-sans-bartle text-sm md:text-lg text-black text-border-white">TOGGLE THROUGH</p>
                    </div>

                    <div
                        id="ClassesControlsLeftButton"
                        className="text-black bg-white rounded-full p-1 ml-3"
                    >
                        <CircleArrowRight className="w-[55px] h-[55px]"/>
                    </div>

                </div>
            </div>


        </div>
    )
}