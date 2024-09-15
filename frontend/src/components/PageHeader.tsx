import React from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import NavMenu from "./NavMenu";

const PageHeader: React.FC = () => {
  return (
    <header className="w-full">
      <div className="h-10 flex items-center justify-center px-8 bg-[#4E4E4E] text-white">
        <p className="text-center">Aproveite as nossas oportunidades!!!</p>
        <button className="justify-self-end">X</button>
      </div>
      <div className="flex h-[110px] items-center gap-2 sm:gap-8 px-4 sm:px-[100px]">
        <Link href="/" className="text-4xl font-semibold">
          <h1>Cosméticos&CO</h1>
        </Link>
        <NavMenu />
        <form action="" className="w-full ">
          <div className="w-full relative">
            <MagnifyingGlassIcon className="w-5 h-5 fill-[#909090] absolute top-[15px] left-[17px]" />
            <input
              type="text"
              name="search"
              placeholder="O que você está buscando hoje?"
              className="w-full h-50 px-2 py-2 sm:py-3.5 sm:px-[54px] bg-[#F0F0F0] rounded-full"
            />
          </div>
        </form>
        <div className="flex gap-3">
          <Link href="/cart" title="Carrinho">
            <ShoppingCartIcon className="w-6 h-6 text-[#909090]" />
          </Link>
          <Link href="/account" title="Minha conta">
            <UserCircleIcon className="w-6 h-6 text-[#909090]" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
