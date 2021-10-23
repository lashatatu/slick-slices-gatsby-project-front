import React, { useContext, useState } from "react";
import OrderContext from "../components/OrderContext";
import calculateOrderTotal from "./calculateOrderTotal";
import formatMoney from "./formatMoney";
import attachNamesAndPrices from "./attachNamesAndPrices";
import fetch from "isomorphic-fetch";

const usePizza = ({ pizzas, values }) => {
  // const [order, setOrder] = useState([]);
  const [order, setOrder] = useContext(OrderContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }

  function removeFromOrder(index) {
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
  }

  async function submitOrder(e) {
    e.preventDefault();
    console.log(e);
    setLoading(true);
    setError('no way')
    setMessage(null)
    const body = {
      order: attachNamesAndPrices(order, pizzas),
      total: formatMoney(calculateOrderTotal(order, pizzas)),
      name: values.name,
      email: values.email,
    };
    console.log(body);
    const res = fetch(`${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = JSON.parse(await res.text());

    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage("Success! come on down for your pizza");
    }
  }

  return {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  };
};

export default usePizza;
