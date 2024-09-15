"use client";

import React from "react";
import { Button } from "@headlessui/react";
import CartProducItem from "./CartProducItem";
import { TagIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

const tempProducts = [
  {
    id: 1,
    title: "Essencial Masculino 100 ml",
    price: 25990,
    promotional_price: null,
    rate: 5,
  },
  {
    id: 2,
    title: "Essencial Feminino 100 ml com título muito maior que os outros",
    price: 25990,
    promotional_price: 17990,
    rate: 4,
  },
  {
    id: 3,
    title: "Kaiak Masculino 100 ml com título muito maior que os outros",
    price: 17290,
    promotional_price: null,
    rate: 3,
  },
  {
    id: 4,
    title: "Luna Ousadia 75 ml",
    price: 16990,
    promotional_price: 10990,
    rate: 4.5,
  },
];

const CartPurchaseSummary: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-start sm:flex-row sm:justify-between gap-6">
      <div className="w-full sm:w-2/3 flex flex-col gap-5 justify-center px-4 sm:px-6 py-3 sm:py-4 sm:pb-8 border border-solid border-[#E5E5E5] rounded-[20px]">
        {tempProducts.map((product) => (
          <CartProducItem {...product} key={product.id} />
        ))}
      </div>
      <div className="flex flex-col justify-center px-4 sm:px-6 py-3 sm:py-4 sm:pb-8 border border-solid border-[#E5E5E5] rounded-[20px]">
        <h2 className="text-2xl font-medium mb-5">Sumário</h2>
        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex justify-between text-[22px]">
            <div className="text-[#666666]">Subtotal</div>
            <div className="font-semibold">R$ 805,00</div>
          </div>
          <div className="w-full flex justify-between text-[22px]">
            <div className="text-[#666666]">Desconto</div>
            <div className="font-semibold">R$ 161,00</div>
          </div>
          <div className="w-full flex justify-between text-[22px]">
            <div className="text-[#666666]">Frete</div>
            <div className="font-semibold">R$ 15,00</div>
          </div>
          <hr className="my-2" />
          <div className="w-full flex justify-between text-[22px] text-black">
            <div>Total</div>
            <div className="font-semibold">R$ 644,00</div>
          </div>
        </div>
        <div className="w-full mt-5">
          <form action="" className="w-full ">
            <div className="w-full relative flex gap-4">
              <TagIcon className="w-5 h-5 text-[#909090] absolute top-[15px] left-[17px]" />
              <input
                type="text"
                name="cupom"
                placeholder="Cupom"
                className="w-full h-50 px-2 py-2 sm:py-3.5 sm:px-[54px] bg-[#F0F0F0] rounded-full"
              />
              <Button
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black mt-auto py-3.5 px-9 border border-solid border-black  text-md font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-900 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                Aplicar
              </Button>
            </div>
          </form>
          <form action="" className="w-full mt-5">
            <Button className="w-full flex items-center justify-center gap-2 rounded-full bg-[#F48646] mt-auto py-3.5 px-9 border border-solid border-[#F48646]  text-md font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-[#F96C1A] data-[focus]:outline-1 data-[focus]:outline-white">
              Finalizar compra <ArrowRightIcon className="w-5 h-5 text-white" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CartPurchaseSummary;
