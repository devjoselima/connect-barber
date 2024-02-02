import { db } from "@/app/_lib/prisma";

import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarberShopDetailsPageProps {
    params: {
        id?: string;
    };
}

const BarberShopDetailsPage = async ({
    params,
}: BarberShopDetailsPageProps) => {
    const session = await getServerSession(authOptions);

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
            <div className="px-5 py-7 flex flex-col gap-4">
                {barbershop.services.map((service) => (
                    <ServiceItem
                        service={service}
                        key={service.id}
                        isAuthenticated={!!session?.user}
                    />
                ))}
            </div>
        </>
    );
};

export default BarberShopDetailsPage;
