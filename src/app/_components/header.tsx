import Image from "next/image";
import Logo from "../../../public/Logo.png";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export const Header = () => {
    return (
        <Card>
            <CardContent className="flex p-5 items-center justify-between">
                <Image src={Logo} alt="FSW Barber" height={22} width={120} />

                <Button variant="outline" size="icon" className="h-8 w-8">
                    <MenuIcon size={18} />
                </Button>
            </CardContent>
        </Card>
    );
};
