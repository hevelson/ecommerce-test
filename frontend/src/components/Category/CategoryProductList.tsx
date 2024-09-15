import React from "react";
import CategoryProducItem from "./CategoryProducItem";
import { Button } from "@headlessui/react";

interface CategoryProductListProps {
  categoryId: string;
}

const tempProducts = [
  {
    id: 1,
    title: 'Essencial Masculino 100 ml',
    price: 25990,
    promotional_price: null,
    rate: 5,
  },
  {
    id: 2,
    title: 'Essencial Feminino 100 ml',
    price: 25990,
    promotional_price: 17990,
    rate: 4,
  },
  {
    id: 3,
    title: 'Kaiak Masculino 100 ml com título muito maior que os outros',
    price: 17290,
    promotional_price: null,
    rate: 3,
  },
  {
    id: 4,
    title: 'Luna Ousadia 75 ml',
    price: 16990,
    promotional_price: 10990,
    rate: 4.5,
  },
];

const CategoryProductList: React.FC<CategoryProductListProps> = () => {
  return (
    <section className="w-full">
      <h2 className="w-full text-center text-xl sm:text-[46px] text-black font-medium py-8">
        Perfumaria
      </h2>
      <div className="flex flex-wrap gap-5 justify-center pb-4 sm:pb-8">
        {tempProducts.map((product) => (
          <CategoryProducItem {...product} key={product.id} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Button type="button" className="inline-flex items-center gap-2 rounded-full bg-white py-3.5 px-9 border border-solid border-[#E5E5E5] text-md font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-100 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Carregar outros
        </Button>
      </div>
    </section>
  );
}
 
export default CategoryProductList;
