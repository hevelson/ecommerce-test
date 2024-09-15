import React from "react";

const PageFooter: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex gap-6 flex-wrap items-center justify-center bg-zinc-50 p-4 mt-auto">
      <p>© {year} Cosméticos&CO. Todos os direitos reservados.</p>
    </footer>
  );
};

export default PageFooter;
