const formatter = Intl.NumberFormat("ka-GE", {
  style: "currency",
  currency: "GEL",
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
