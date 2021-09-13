import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

/*
Each row in the table should be a pizza component and when you click the "Edit" button, it should send the pizza associated with that component into the Pizza form.

The pizza form will then render the information about the pizza in the form, which will be editable.

When the form is submitted, the information should be reflected in your table and persist in the backend.
*/

function App() {
  const [pizzas, setPizzas] = useState([])
  const [pizzaForm, setPizzaForm] = useState({
    topping: '',
    size: 'Small',
    vegetarian: false
  })

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(r => r.json())
    .then(setPizzas)
  }, [])

  function handleEdit(pizzaObj) {
    const {id} = pizzaObj
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pizzaObj)
    })
    .then(r => r.json())
    .then(data => {
      setPizzas(pizzas.map(pizza => {
        if (pizza.id === id) {
          return { ...pizzaObj }
        } 
        return pizza
      }))
    })
  }

  function handleAddPizza(pizzaObj) {
    fetch('http://localhost:3001/pizzas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pizzaObj)
    })
    .then(r => r.json())
    .then(data => setPizzas([ ...pizzas, data]))
  }

  return (
    <>
      <Header />
      <PizzaForm pizzaForm={pizzaForm} setPizzaForm={setPizzaForm} onEdit={handleEdit} onAddPizza={handleAddPizza}/>
      <PizzaList pizzas={pizzas} setPizzaForm={setPizzaForm}/>
    </>
  );
}

export default App;
