import React from "react";
import calculatePizzaPrice from "./calculatePizzaPrice";

const CalculateOrderTotal = (order, pizzas) => {
  const total = order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find((singlePizza) => singlePizza.id === singleOrder.id);
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
};

export default CalculateOrderTotal;