function calculateOriginalPrice(priceAfterDiscount, discountPercentage) {
  const decimalDiscount = discountPercentage / 100;
  const originalPrice = priceAfterDiscount / (1 - decimalDiscount);
  return originalPrice;
}

const priceAfterDiscount = 1000;
const discountPercentage = 20;

const originalPrice = calculateOriginalPrice(
  priceAfterDiscount,
  discountPercentage
);
console.log("Original Price: $" + originalPrice);
