"use client";

import React from "react";
import ProductPreview from "../ProductPreview";

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
    title: 'Kaiak Masculino 100 ml',
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

const ProductsSection: React.FC = () => {
  return (
    <section className="w-full">
      <h2 className="w-full text-center text-xl sm:text-[46px] text-black font-medium py-8">
        descubra as fragrâncias que combinam com você
      </h2>
      <div className="flex gap-5 justify-center pb-4 sm:pb-8">
        {tempProducts.map((product) => (
          <ProductPreview {...product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
