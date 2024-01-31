"use client";

import { useRouter } from "next/navigation";
import { Barbershop } from "@prisma/client";

import { Button } from "@/app/_components/ui/button";

import MapIcon from "../../../../../public/Map.png";
import Image from "next/image";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";

interface BarberhopInfoProps {
    barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarberhopInfoProps) => {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    };
    return (
        <>
            <div className="h-[250px] w-full relative">
                <Button
                    size="icon"
                    variant="outline"
                    onClick={handleBackClick}
                    className="z-50 absolute top-4 left-4">
                    <ChevronLeftIcon />
                </Button>

                <Button
                    size="icon"
                    variant="outline"
                    className="z-50 absolute top-4 right-4">
                    <MenuIcon />
                </Button>

                <Image
                    src={barbershop.imageUrl}
                    alt={barbershop.name}
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                    className="opacity-75"
                />
            </div>

            <div className="px-5 py-3">
                <h1 className="text-xl font-bold">{barbershop.name}</h1>
                <div className="flex items-center gap-2">
                    <Image
                        src={MapIcon}
                        alt="icone de mapa"
                        className="w-3 h-4"
                    />
                    <p>{barbershop.address}</p>
                </div>
            </div>
        </>
    );
};

export default BarbershopInfo;