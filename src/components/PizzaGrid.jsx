import React, { useEffect } from "react";
import Pizza from "./pizza";
// import pizzaData from "../utills/pizzadata";

function PizzaGrid() {

  const [pizzas, setPizzas] = React.useState([]);

  async function fetchPizza() {
    const res = await fetch("http://localhost:3000/api/products/get-all-products");
    const data = await res.json();
    console.log(data);
    setPizzas(data.data.products)
  }

  useEffect(function () {
    fetchPizza();
  }, []);

  return (
    <div className="pizzas">
      {pizzas.map((pizza) => (
        <Pizza
          img={pizza.image}
          title={pizza.text}
          text={pizza.ingredients}
          price={pizza.price}
        />
      ))}
    </div>
  );
}

export default PizzaGrid;
