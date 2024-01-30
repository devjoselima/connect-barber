import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";

import { Barbershop } from "@prisma/client";
import Image from "next/image";

interface BarbershopItemProps {
    barbershop: Barbershop;
}

export const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    return (
        <Card className="min-w-[177px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 pb-3">
                <div className="px-1 relative w-full h-[159px]">
                    <Image
                        src={barbershop.imageUrl}
                        alt={barbershop.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="h-[159px] w-full rounded-2xl"
                    />
                </div>

                <div className="px-2">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
                        {barbershop.name}
                    </h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
                        {barbershop.address}
                    </p>

                    <Button variant="secondary" className="w-full mt-3">
                        Reservar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
