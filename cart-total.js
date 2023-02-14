function calculate(totalAmount, amountProducts, promocode) {
  if (promocode === "ДАРИМ300" && totalAmount >= 300) {
    totalAmount -= 300;
  } else if (promocode === "ДАРИМ300" && totalAmount < 300) {
    totalAmount = 0;
  }
  if (amountProducts >= 10) {
    totalAmount *= 0.95;
  }
  if (totalAmount > 50000) {
    let diff = totalAmount - 50000;
    totalAmount = diff * 0.8 + 50000;
  }
  if (promocode === "СКИДКА15" && totalAmount >= 20000) {
    totalAmount *= 0.85;
  }
  return totalAmount
}
calculate(1000, 1, "ДАРИМ300");

export default calculate;
