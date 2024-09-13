import Image from "next/image";

export const metadata = {
  title: 'Cosméticos & Co - Carrinho',
  description: 'Sua sacola de produtos',
}

export default function Category() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <nav>
          <li>Início</li>
          <li>Carrinho</li>
        </nav>

        <h1>Seu carrinho</h1>
        
        <section>
          <img src="" alt="" />
          <h2>Product title</h2>
          <div>
            R$ 145,00
          </div>
          <div>
            <button>remover</button>
            <div>
              <button type="button">
                <span>-</span>
              </button>
              <div>
                <input type="number" value="1" />
              </div>
              <button type="button">
                <span>+</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Continuar comprando
        </a>
      </footer>
    </div>
  );
}
