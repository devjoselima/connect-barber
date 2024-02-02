"use client";

import Image from "next/image";
import Logo from "../../../public/Logo.png";

import SideMenu from "./side-menu";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import { MenuIcon } from "lucide-react";

export const Header = () => {
    return (
        <Card>
            <CardContent className="flex p-5 items-center justify-between">
                <Image src={Logo} alt="FSW Barber" height={22} width={140} />

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <MenuIcon size={18} />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
    );
};
