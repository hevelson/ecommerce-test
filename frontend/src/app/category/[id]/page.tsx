import CategoryProductList from "@/components/Category/CategoryProductList";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "Cosméticos & Co - Categoria",
  description: "Descubra as fragrâncias que combinam com você",
};

type TCategoryPageProps = {
  params: {
    id: string;
  };
};

export default function categoryPage({ params } : TCategoryPageProps) {
  console.log(params);

  return (
    <div className="w-full max-w-[1440px] min-h-screen flex flex-col p-0 mx-auto font-[family-name:var(--font-geist-sans)]">
      <PageHeader />
      <main className="w-full flex flex-col items-center sm:items-start">
        <CategoryProductList categoryId={params.id} />
      </main>
      <PageFooter />
    </div>
  );
}
