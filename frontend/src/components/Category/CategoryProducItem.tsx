import { currencyFormatter, discountPercentage } from "@/libs/utils";
import { Button } from "@headlessui/react";
import { Chip, Rating } from "@mui/material";
import Image from "next/image";
import React from "react";

interface CategoryProducItemProps {
  id: number;
  title: string;
  price: number;
  promotional_price: number | null;
  rate: number;
}
 
const CategoryProducItem: React.FC<CategoryProducItemProps> = ({
  title,
  price,
  promotional_price,
  rate
}) => {
  const hasPromotion = promotional_price && promotional_price > 0;

  const formatedPrice = currencyFormatter.format(price/100);
  const formatedPromotionalPrice = hasPromotion ? currencyFormatter.format(promotional_price/100) : 0;
  const discountPercent = hasPromotion ? discountPercentage(price, promotional_price) : 0;

  return (
    <div className="w-full max-w-[630px] flex">
      <Image
        className="rounded-[20px]"
        src="http://localhost:8080/media/images/perfumaria/NATBRA-76420_2.jpg"
        alt={title}
        width={296}
        height={296}
      />
      <div className="w-full flex flex-col ml-6 pb-4">
        <h3 className="text-2xl font-bold mt-5">{title}</h3>
        <div className="flex items-center text-base">
          <Rating name="read-only" value={rate} precision={0.5} readOnly />
          <span className="ml-2">
            {rate}/5
          </span>
        </div>
        <div>
          <span className={`${hasPromotion ? 'text-2xl line-through text-gray-400' : 'text-3xl font-semibold'}`}>{formatedPrice}</span>
          { hasPromotion ? 
            <div className="flex gap-1 text-3xl font-semibold">
              <span>{formatedPromotionalPrice}</span>
              <Chip label={`-${discountPercent}%`} color="error" />
            </div> : <></>}
        </div>
        <Button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F48646] mt-auto py-3.5 px-9 border border-solid border-[#F48646]  text-md font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-[#F96C1A] data-[focus]:outline-1 data-[focus]:outline-white">
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  );
}
 
export default CategoryProducItem;
