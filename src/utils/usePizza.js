import React, { useState } from "react";

const usePizza = ({ pizzas, inputs }) => {
  const [order, setOrder] = useState([]);

  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }

  function removeFromOrder(index) {
    setOrder([
      ...order.slice(0, index),
      ...order.slice(index + 1),
    ]);
  }

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
};

export default usePizza;