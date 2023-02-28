export const formatCurrency = (amount: any) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    amount
  );

export const noop = () => {
  // Empty noop function
};
