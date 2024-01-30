import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Header } from "../_components/header";
import { Search } from "./_components/search";

export default function Home() {
    return (
        <div>
            <Header />

            <div className="p-5 py-6">
                <h2 className="text-xl">
                    Olá, <span className="font-bold">José!</span>
                </h2>
                <p className="capitalize text-sm">
                    {format(new Date(), "EEEE',' dd 'de' MMMM", {
                        locale: ptBR,
                    })}
                </p>
            </div>

            <div className="px-5">
                <Search />
            </div>
        </div>
    );
}
