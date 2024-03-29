"use client";
import { Service } from "@prisma/client";
import { signIn } from "next-auth/react";

import Image from "next/image";

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";

interface ServiceItemProps {
    service: Service;
    isAuthenticated?: boolean;
}
const ServiceItem = ({ service, isAuthenticated }: ServiceItemProps) => {
    const handleBookingClick = () => {
        if (!isAuthenticated) {
            return signIn("google");
        }
    };
    return (
        <Card>
            <CardContent className="p-3">
                <div className="flex gap-4 items-center">
                    <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px] rounded-lg">
                        <Image
                            src={service.imageUrl}
                            alt={service.name}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <h2 className="font-bold">{service.name}</h2>
                        <p className="text-sm text-gray-400">
                            {service.description}
                        </p>

                        <div className="flex items-center justify-between mt-3">
                            <p className="text-sm font-bold text-primary">
                                {Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(Number(service.price))}
                            </p>
                            <Button
                                variant="secondary"
                                onClick={handleBookingClick}>
                                Reservar
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ServiceItem;
