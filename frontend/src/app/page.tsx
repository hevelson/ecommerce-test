import NavMenu from "@/components/NavMenu";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Cosméticos & Co - Home',
  description: 'Descubra as fragrâncias que combinam com você',
}

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] min-h-screen p-0 pb-8 sm:pb-8 mx-auto font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <div className="h-10 flex items-center justify-center px-8 bg-[#4E4E4E] text-white">
          <p className="text-center">
            Aproveite as nossas oportunidades!!!
          </p>
          <button className="justify-self-end">X</button>
        </div>
        <div className="flex h-[110px] items-center px-4 sm:px-[100px]">
          <Link href="/" className="text-4xl font-semibold">
            <h1>Cosméticos&CO</h1>
          </Link>
          <NavMenu />
          <form action="">
            <input type="text" name="search" placeholder="O que você está buscando hoje?" />
          </form>
          <div>
            <a href="/cart">Carrinho</a>
            <a href="/account">Minha conta</a>
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
          <a
            className="w-40 absolute top-[50%] left-[90px] rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/category/1"
            rel="noopener noreferrer"
          >
            Comprar agora
          </a>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
