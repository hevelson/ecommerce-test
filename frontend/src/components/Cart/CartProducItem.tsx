import { currencyFormatter, discountPercentage } from "@/libs/utils";
import { Button } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Chip } from "@mui/material";
import Image from "next/image";
import React from "react";

interface CartProducItemProps {
  id: number;
  title: string;
  price: number;
  promotional_price: number | null;
  rate: number;
}

const CartProducItem: React.FC<CartProducItemProps> = ({
  title,
  price,
  promotional_price,
  rate,
}) => {
  const hasPromotion = promotional_price && promotional_price > 0;

  const formatedPrice = currencyFormatter.format(price / 100);
  const formatedPromotionalPrice = hasPromotion
    ? currencyFormatter.format(promotional_price / 100)
    : 0;
  const discountPercent = hasPromotion
    ? discountPercentage(price, promotional_price)
    : 0;

  return (
    <div className="w-full flex justify-start [&:not(:last-child)]:border-b border-solid border-[#E5E5E5] pb-6">
      <div className="min-w-[125px]">
        <Image
          className="rounded-[20px]"
          src="http://localhost:8080/media/images/perfumaria/NATBRA-76420_2.jpg"
          alt={title}
          width={125}
          height={125}
        />
      </div>
      <div className="w-full flex flex-col justify-between ml-6 pb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div>
          <span
            className={`${
              hasPromotion
                ? "text-2xl line-through text-gray-400"
                : "text-3xl font-semibold"
            }`}
          >
            {formatedPrice}
          </span>
          {hasPromotion ? (
            <div className="flex gap-1 text-3xl font-semibold">
              <span>{formatedPromotionalPrice}</span>
              <Chip label={`-${discountPercent}%`} color="error" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex flex-col ml-auto">
        <Button type="button" onClick={() => console.log('remover')} title="Remover" className="ml-auto">
          <TrashIcon className="w-5 h-5 text-[#FF3333]" />
          <span className="hidden">Remover</span>
        </Button>
        <div className="w-[130px] h-[46px] flex items-center justify-center bg-[#F0F0F0] rounded-full mt-auto">
          <Button type="button" className="w-[46px] h-[46px] flex items-center justify-center rounded-full data-[hover]:bg-[#D6D6D6] data-[focus]:outline-1">
            <MinusIcon className="text-black w-6 h-6" />
          </Button>
          <div className="flex items-center justify-center w-[46px] h-[46px] text-black text-center font-semibold">
            1
          </div>
          <Button type="button" className="w-[46px] h-[46px] flex items-center justify-center rounded-full data-[hover]:bg-[#D6D6D6] data-[focus]:outline-1">
            <PlusIcon className="text-black w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartProducItem;
