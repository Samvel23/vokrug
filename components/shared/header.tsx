import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import logo from "../../app/favicon.ico";
interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between padding py-8">
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="rounded-full border-2 "
          />
          <div>
            <h1 className="text-2xl uppercase font-bold">Междугороднее Такси Вокруг Света</h1>
          </div>
        </div>

        {/* <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <User size={16} />
            Войти
          </Button>
        </div> */}
      </Container>
    </header>
  );
};
