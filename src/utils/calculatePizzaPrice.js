const sizes = {
  s: 0.75,
  m: 1,
  l: 1.25,
};

const calculatePizzaPrice = (cents, size) => {
 return cents*sizes[size]
};

export default calculatePizzaPrice;