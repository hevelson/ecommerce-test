import ProductsSection from "@/components/Home/ProductsSection";
import NavMenu from "@/components/NavMenu";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Cosméticos & Co - Home',
  description: 'Descubra as fragrâncias que combinam com você',
}

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] min-h-screen flex flex-col p-0 mx-auto font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <div className="h-10 flex items-center justify-center px-8 bg-[#4E4E4E] text-white">
          <p className="text-center">
            Aproveite as nossas oportunidades!!!
          </p>
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
              <input type="text" name="search" placeholder="O que você está buscando hoje?" className="w-full h-50 px-2 py-2 sm:py-3.5 sm:px-[54px] bg-[#F0F0F0] rounded-full" />
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
      <footer className="flex gap-6 flex-wrap items-center justify-center bg-zinc-50 p-4 mt-auto">
        <p>© 2024 Cosméticos&CO. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
