"use client";

import Image from "next/image";
import Logo from "../../../public/Logo.png";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

export const Header = () => {
    const { data } = useSession();
    const handleLoginClick = async () => {
        await signIn();
    };
    return (
        <Card>
            <CardContent className="flex p-5 items-center justify-between">
                <Image src={Logo} alt="FSW Barber" height={22} width={140} />

                <Button variant="outline" size="icon" className="h-8 w-8">
                    <MenuIcon size={18} />
                </Button>
            </CardContent>
        </Card>
    );
};
