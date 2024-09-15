import CartPurchaseSummary from "@/components/Cart/CartPurchaseSummary";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";

export const metadata = {
  title: "Cosméticos & Co - Carrinho",
  description: "Sua sacola de produtos",
};

export default function Category() {
  return (
    <div className="w-full max-w-[1440px] min-h-screen flex flex-col p-0 mx-auto font-[family-name:var(--font-geist-sans)]">
      <PageHeader />
      <main className="w-full flex flex-col items-center sm:items-start">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Início
          </Link>
          <Typography sx={{ color: "text.primary" }}>Carrinho</Typography>
        </Breadcrumbs>
        <h1 className="text-5xl my-6">Seu carrinho</h1>
        <CartPurchaseSummary />
        <Link
          className="w-fit flex items-center justify-center gap-2 rounded-full bg-[#F48646] my-5 py-3.5 px-9 border border-solid border-[#F48646]  text-md font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-[#F96C1A] data-[focus]:outline-1 data-[focus]:outline-white"
          href="/"
        >
          <ArrowLeftIcon className="w-5 h-5 text-white" /> Continuar comprando
        </Link>
      </main>
      <PageFooter />
    </div>
  );
}
