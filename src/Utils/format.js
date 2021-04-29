export const formatPrice = (price) => {
  let tempPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return tempPrice;
};
