import React from "react";
import { Link } from "gatsby";

function SinglePizza({ pizza }) {
  return (
    <div>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
        <p>{pizza.toppings.map(topping=>topping.name).join(', ')}</p>
      </Link>
    </div>
  );
}

const PizzaList = ({ pizzas }) => {
  return (
    <div>
      {pizzas.map((pizza) => (
        <SinglePizza pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
};

export default PizzaList;