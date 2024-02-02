"use client";

import Image from "next/image";
import Logo from "../../../public/Logo.png";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
    CalendarIcon,
    HomeIcon,
    LogInIcon,
    LogOutIcon,
    MenuIcon,
    UserIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

export const Header = () => {
    const { data, status } = useSession();
    const handleLoginClick = async () => {
        await signIn("google");
    };

    const handleLogOutClick = async () => {
        await signOut();
    };

    return (
        <Card>
            <CardContent className="flex p-5 items-center justify-between">
                <Image src={Logo} alt="FSW Barber" height={22} width={140} />

                <Sheet>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                        <SheetTrigger asChild>
                            <MenuIcon size={18} />
                        </SheetTrigger>

                        <SheetContent className="p-0">
                            <SheetHeader className="text-left border-b border-solid border-secondary p-5">
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>

                            {data?.user ? (
                                <div className="flex justify-between items-center px-5 py-6">
                                    <div className="flex items-center gap-3 ">
                                        <Avatar>
                                            <AvatarImage
                                                src={data.user?.image ?? ""}
                                            />
                                        </Avatar>

                                        <h2 className="font-bold">
                                            {data.user.name}
                                        </h2>
                                    </div>

                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        onClick={handleLogOutClick}>
                                        <LogOutIcon />
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <div className="flex flex-col px-5 py-6 gap-4">
                                        <div className="flex items-center gap-2">
                                            <UserIcon size={32} />
                                            <h2 className="font-bold">
                                                Olá! faça seu login!
                                            </h2>
                                        </div>

                                        <Button
                                            variant="secondary"
                                            className="w-full justify-start"
                                            onClick={handleLoginClick}>
                                            <LogInIcon
                                                className="mr-2"
                                                size={18}
                                            />
                                            Fazer Login
                                        </Button>
                                    </div>
                                </>
                            )}

                            <div className="flex flex-col gap-3 px-5">
                                <Button
                                    variant="outline"
                                    className="justify-start"
                                    asChild>
                                    <Link href="/">
                                        <HomeIcon size={18} className="mr-2" />
                                        Inicio
                                    </Link>
                                </Button>

                                {data?.user && (
                                    <Button
                                        variant="outline"
                                        className="justify-start"
                                        asChild>
                                        <Link href="/bookings">
                                            <CalendarIcon
                                                className="mr-2"
                                                size={18}
                                            />
                                            Agendamentos
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </SheetContent>
                    </Button>
                </Sheet>
            </CardContent>
        </Card>
    );
};
