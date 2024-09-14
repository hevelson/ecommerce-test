export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const discountPercentage = (price: number, promotionalPrice: number) => {
  const discountPercent = (price - promotionalPrice) / price;
  return Math.floor(discountPercent * 100);
};
