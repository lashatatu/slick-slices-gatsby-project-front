const formatter = Intl.NumberFormat("ka-GE", {
  style: "currency",
  currency: "GEL",
});

const formatMoney = (cents) => {
  return formatter.format(cents/100);
};

export default formatMoney;
