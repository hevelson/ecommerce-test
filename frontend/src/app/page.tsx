import ProductsSection from "@/components/Home/ProductsSection";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Cosméticos & Co - Home',
  description: 'Descubra as fragrâncias que combinam com você',
}

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] min-h-screen flex flex-col p-0 mx-auto font-[family-name:var(--font-geist-sans)]">
      <PageHeader />
      <main className="w-full flex flex-col items-center sm:items-start">
        <div className="w-full bg-red-900 relative">
          <Image
            className="dark:invert"
            src="http://localhost:8080/media/images/banners/DESK_RIR_E_se_02_09_24.jpg"
            alt="Rock in Rio"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <Link
            className="w-40 absolute top-[50%] left-[90px] rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/category/1"
            rel="noopener noreferrer"
          >
            Comprar agora
          </Link>
        </div>
        <ProductsSection />
      </main>
      <PageFooter />
    </div>
  );
}
