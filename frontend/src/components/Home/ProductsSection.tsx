"use client";

import React, { useEffect, useState } from "react";
import ProductPreview from "./ProductPreview";
import { IProduct } from "@/interfaces/products";
import { getProductsByCategory } from "@/services/products";
import { Button } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/16/solid";

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
  const [products, setProducs] = useState<IProduct[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const productsRequest = async (page: number) => {
    setLoading(true);
    try {
      const { responseObject: { items, totalPages } } = await getProductsByCategory('home', page);
      setTotalPages(totalPages);
      const newProducts = [
        ...products,
        ...items,
      ]
      setProducs(newProducts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page <= totalPages) productsRequest(page);
  }, [page]);

  const nextPage = () => {
    const nextPageNumber = page + 1;
    if (nextPageNumber > totalPages) return;

    setPage(nextPageNumber);
  };

  const loadingIcon = <ArrowPathIcon className="w-5 h-5 text-black animate-spin" />

  return (
    <section className="w-full">
      <h2 className="w-full text-center text-xl sm:text-[46px] text-black font-medium py-8">
        descubra as fragrâncias que combinam com você
      </h2>
      <div className="flex gap-5 justify-center flex-wrap pb-4 sm:pb-8">
        {products.map((product) => (
          <ProductPreview {...product} key={product.id} />
        ))}
      </div>
      <div className={`flex justify-center items-center mb-4 ${page === totalPages && 'invisible'}`}>
        <Button type="button" onClick={nextPage} className="inline-flex items-center gap-2 rounded-full bg-white py-3.5 px-9 border border-solid border-[#E5E5E5] text-md font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-100 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          {loading ? loadingIcon : `Carregar outros`}
        </Button>
      </div>
    </section>
  );
};

export default ProductsSection;
