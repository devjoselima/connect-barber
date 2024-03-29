"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

export const Search = () => {
    return (
        <div className="flex items-center gap-2">
            <Input
                placeholder="Busque por uma barbearia"
                className="outline-none"
            />
            <Button variant="default">
                <SearchIcon size={18} />
            </Button>
        </div>
    );
};
