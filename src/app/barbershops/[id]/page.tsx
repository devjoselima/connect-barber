import { db } from "@/app/_lib/prisma";

import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

interface BarberShopDetailsPageProps {
    params: {
        id?: string;
    };
}

const BarberShopDetailsPage = async ({
    params,
}: BarberShopDetailsPageProps) => {
    if (!params.id) {
        return null;
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true,
        },
    });

    if (!barbershop) {
        return null;
    }

    return (
        <>
            <BarbershopInfo barbershop={barbershop} />
            <div className="px-5 py-6 flex flex-col gap-3">
                {barbershop.services.map((service) => (
                    <ServiceItem service={service} key={service.id} />
                ))}
            </div>
        </>
    );
};

export default BarberShopDetailsPage;
