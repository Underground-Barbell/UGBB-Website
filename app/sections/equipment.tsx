'use client';

import { useState } from 'react';
import Image from 'next/image';
import EquipmentActionCard from '@/app/components/EquipmentActionCard';
import { CircleArrowLeft, CircleArrowRight, X } from 'lucide-react';

import Image1 from '../../public/Equipment/LegExtensionAndCrunch.png';
import Image2 from '../../public/Equipment/BicepCurlAndLegExtension.png';
import Image3 from '../../public/Equipment/IMG_3526.jpg';
import Image4 from '../../public/Equipment/IMG_3527.jpg';
import Image5 from '../../public/Equipment/IMG_3528.jpg';
import Image6 from '../../public/Equipment/IMG_3529.jpg';
import Image7 from '../../public/Equipment/IMG_3530.jpg';
import Image8 from '../../public/Equipment/IMG_3531.jpg';
import Image9 from '../../public/Equipment/IMG_3531.jpg';
import Image10 from '../../public/Equipment/IMG_3532.jpg';
import Image11 from '../../public/Equipment/IMG_3533.jpg';
import Image12 from '../../public/Equipment/IMG_3534.jpg';
import Image13 from '../../public/Equipment/IMG_3535.jpg';
import Image14 from '../../public/Equipment/IMG_3536.jpg';
import Image15 from '../../public/Equipment/IMG_3537.jpg';
import Image16 from '../../public/Equipment/IMG_3538.jpg';
import Image17 from '../../public/Equipment/IMG_3540.jpg';
import Image18 from '../../public/Equipment/IMG_3541.jpg';
import Image19 from '../../public/Equipment/IMG_3542.jpg';
import Image20 from '../../public/Equipment/IMG_3543.jpg';
import Image21 from '../../public/Equipment/IMG_3544.jpg';
import Image22 from '../../public/Equipment/IMG_3545.jpg';
import Image23 from '../../public/Equipment/IMG_3546.jpg';
import Image24 from '../../public/Equipment/IMG_3547.jpg';
import Image25 from '../../public/Equipment/IMG_3548.jpg';
import Image26 from '../../public/Equipment/IMG_3549.jpg';
import Image27 from '../../public/Equipment/IMG_3550.jpg';
import Image28 from '../../public/Equipment/IMG_3551.jpg';
import Image29 from '../../public/Equipment/IMG_3552.jpg';
import Image30 from '../../public/Equipment/IMG_3553.jpg';
import Image31 from '../../public/Equipment/IMG_3554.jpg';
import Image32 from '../../public/Equipment/IMG_3555.jpg';

const allImagesOttumwa = [
    { id: '1', image: Image1 },
    { id: '2', image: Image2 },
    { id: '3', image: Image3 },
    { id: '4', image: Image4 },
    { id: '5', image: Image5 },
    { id: '6', image: Image6 },
    { id: '7', image: Image7 },
    { id: '8', image: Image8 },
    { id: '9', image: Image9 },
    { id: '10', image: Image10 },
    { id: '11', image: Image11 },
    { id: '12', image: Image12 },
    { id: '13', image: Image13 },
    { id: '14', image: Image14 },
    { id: '15', image: Image15 },
    { id: '16', image: Image16 },
    { id: '17', image: Image17 },
    { id: '18', image: Image18 },
    { id: '19', image: Image19 },
    { id: '20', image: Image20 },
    { id: '21', image: Image21 },
    { id: '22', image: Image22 },
    { id: '23', image: Image23 },
    { id: '24', image: Image24 },
    { id: '25', image: Image25 },
    { id: '26', image: Image26 },
    { id: '27', image: Image27 },
    { id: '28', image: Image28 },
    { id: '29', image: Image29 },
    { id: '30', image: Image30 },
    { id: '31', image: Image31 },
    { id: '32', image: Image32 },
];

export default function Equipment() {
    const [seeImageModal, setSeeImageModal] = useState<boolean>(false);
    const [seeLocationMenu, setSeeLocationMenu] = useState<boolean>(false);
    const [seeAllImages, setSeeAllImages] = useState<boolean>(false);

    const [mainImageIndex, setMainImageIndex] = useState<number>(0);
    const [selectedModalImageIndex, setSelectedModalImageIndex] = useState<number>(0);

    const totalImages = allImagesOttumwa.length;

    function getWrappedIndex(index: number): number {
        return (index + totalImages) % totalImages;
    }

    function nextImageRight(): void {
        setMainImageIndex((prev) => getWrappedIndex(prev + 1));
    }

    function nextImageLeft(): void {
        setMainImageIndex((prev) => getWrappedIndex(prev - 1));
    }

    return (
        <section id="Equipment" className="bg-black desktop:h-[900px] relative">
            <div
                id="EquipmentImagesContainer"
                className="h-full w-full flex flex-col desktop:flex-row items-center desktop:items-start p-8"
            >
                <div id="EquipmentTitleContainer" className="desktop:hidden mb-4">
                    <h2 className="font-sans-bartle text-border-white text-3xl md:text-5xl">
                        EQUIPMENT
                    </h2>
                </div>

                <div
                    id="CentralEquipmentImageContainer"
                    className="desktop:w-3/5 desktop:h-9/10 desktop:px-22"
                >
                    <div className="lg:h-[650px] lg:w-[650px] desktop:h-full desktop:w-full desktop:pt-15 relative">
                        <button
                            onClick={() => {
                                setSelectedModalImageIndex(mainImageIndex);
                                setSeeImageModal(true);
                            }}
                            className="h-full border-2 border-white rounded-4xl"
                        >
                            <Image
                                src={allImagesOttumwa[mainImageIndex].image}
                                alt={`Equipment image ${allImagesOttumwa[mainImageIndex].id}`}
                                className="h-full rounded-4xl"
                            />
                        </button>

                        <div
                            id="EquipmentButtonContainer"
                            className="absolute bottom-2 desktop:bottom-2/5 w-full flex justify-between"
                        >
                            <button
                                onClick={nextImageLeft}
                                className="text-white bg-black rounded-4xl p-1 ml-4 hover:scale-110"
                            >
                                <CircleArrowLeft className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] active:border-2 active:border-white active:rounded-full" />
                            </button>

                            <button
                                onClick={nextImageRight}
                                className="text-white bg-black rounded-4xl p-1 mr-4 hover:scale-110"
                            >
                                <CircleArrowRight className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] active:border-2 active:border-white active:rounded-full" />
                            </button>
                        </div>

                        <div
                            id="EquipmentTitleContainer"
                            className="hidden desktop:block desktop:absolute desktop:bottom-0 desktop:ml-5 desktop:mb-5"
                        >
                            <h2 className="font-sans-bartle text-border-white text-4xl">EQUIPMENT</h2>
                        </div>

                        <div
                            id="EquipmentActionButtonContainer"
                            className="hidden desktop:flex desktop:flex-col desktop:absolute desktop:bottom-0 desktop:right-0"
                        >
                            {/* No Images of Other Gym, Possible Future Update */}
                            {/* <EquipmentActionCard title="LOCATION" iconId={1} setAction={(value) => setSeeLocationMenu(value)} /> */}
                            <EquipmentActionCard
                                title="VIEW ALL"
                                iconId={2}
                                setAction={(value) => setSeeAllImages(value)}
                            />
                        </div>
                    </div>

                    <div
                        id="EquipmentActionButtonContainer"
                        className="desktop:hidden mt-4 flex flex-col justify-center items-center"
                    >
                        {/* No Images of Other Gym, Possible Future Update */}
                        {/* <EquipmentActionCard title="LOCATION" iconId={1} setAction={(value) => setSeeLocationMenu(value)} /> */}
                        <EquipmentActionCard
                            title="VIEW ALL"
                            iconId={2}
                            setAction={(value) => setSeeAllImages(value)}
                        />
                    </div>
                </div>

                <div
                    id="ExtraImagesContainer"
                    className="hidden desktop:grid desktop:w-2/5 desktop:h-full desktop:grid-cols-2 desktop:grid-rows-3"
                >
                    {[1, 2, 3, 4, 5, 6].map((offset, i) => {
                        const actualIndex = getWrappedIndex(mainImageIndex + offset);

                        return (
                            <button
                                key={`${actualIndex}-${offset}`}
                                onClick={() => {
                                    setSelectedModalImageIndex(actualIndex);
                                    setSeeImageModal(true);
                                }}
                            >
                                <Image
                                    src={allImagesOttumwa[actualIndex].image}
                                    alt={`Equipment preview ${allImagesOttumwa[actualIndex].id}`}
                                    className={`h-9/10 w-9/10 m-2 rounded-4xl border-2 border-white ${
                                        i % 2 === 0 ? 'mr-4' : 'ml-4'
                                    } ${i >= 2 ? 'mt-4' : ''} ${i >= 4 ? 'mt-6' : ''}`}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            {seeAllImages && (
                <div className="h-full w-full fixed z-100 flex justify-center items-center top-5 animate-fade-in-menu">
                    <div className="h-8/10 w-8/10 bg-ugbb-red-main rounded-4xl relative flex flex-col items-center justify-between">
                        <button
                            className="text-white absolute top-4 right-4 z-10"
                            onClick={() => setSeeAllImages(false)}
                        >
                            <X className="w-[45px] h-[45px] hover:scale-110 active:border-2 active:border-white" />
                        </button>

                        <div className="w-full h-full p-8 pt-16 overflow-y-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {allImagesOttumwa.map((item, index) => (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setSelectedModalImageIndex(index);
                                            setSeeAllImages(false);
                                            setSeeImageModal(true);
                                        }}
                                        className="border-2 border-white rounded-2xl overflow-hidden"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={`Equipment image ${item.id}`}
                                            className="w-full h-[220px] object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {seeLocationMenu && (
                <div className="h-full w-full fixed z-100 flex justify-center items-center top-5 animate-fade-in-menu">
                    <div className="h-8/10 w-8/10 bg-ugbb-red-main rounded-4xl relative flex flex-col items-center justify-between">
                        <button
                            className="text-white absolute top-4 right-4"
                            onClick={() => setSeeLocationMenu(false)}
                        >
                            <X className="w-[45px] h-[45px] hover:scale-110 active:border-2 active:border-white" />
                        </button>
                    </div>
                </div>
            )}

            {seeImageModal && (
                <div className="h-full w-full fixed z-100 flex justify-center items-center top-2 animate-fade-in-menu">
                    <div className="h-11/12 w-9/10 bg-ugbb-red-main rounded-4xl relative flex flex-col items-center justify-between">
                        <button
                            className="text-white absolute top-4 right-4 z-10"
                            onClick={() => setSeeImageModal(false)}
                        >
                            <X className="w-[45px] h-[45px] hover:scale-110 active:border-2 active:border-white" />
                        </button>

                        <div className="w-full h-full p-6 flex items-center justify-center">
                            <Image
                                src={allImagesOttumwa[selectedModalImageIndex].image}
                                alt={`Equipment image ${allImagesOttumwa[selectedModalImageIndex].id}`}
                                className="max-h-full w-auto rounded-2xl"
                            />
                        </div>

                        <div className="absolute bottom-6 w-full flex justify-between px-6">
                            <button
                                onClick={() =>
                                    setSelectedModalImageIndex((prev) => getWrappedIndex(prev - 1))
                                }
                                className="text-white bg-black rounded-4xl p-1 hover:scale-110"
                            >
                                <CircleArrowLeft className="w-10 h-10 md:w-[50px] md:h-[50px]" />
                            </button>

                            <button
                                onClick={() =>
                                    setSelectedModalImageIndex((prev) => getWrappedIndex(prev + 1))
                                }
                                className="text-white bg-black rounded-4xl p-1 hover:scale-110"
                            >
                                <CircleArrowRight className="w-10 h-10 md:w-[50px] md:h-[50px]" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}