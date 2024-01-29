Number.prototype.toCurrency = function () {
  return this.toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
  });
};

export default {};
