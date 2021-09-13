import React from "react";

function PizzaForm({ pizzaForm, setPizzaForm, onEdit, onAddPizza }) {
  const {topping, size, vegetarian} = pizzaForm;

  function handleFormChange(event) {
    const name = event.target.name
    let value = event.target.value
    
    if (name === 'vegetarian') {
      value = value === 'Vegetarian' ? true : false;
    }

    setPizzaForm({ ...pizzaForm, [name]: value})
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    if (pizzaForm.id) {
      onEdit(pizzaForm)
    } else {
      onAddPizza(pizzaForm)
    }
    setPizzaForm({
      topping: '',
      size: 'Small',
      vegetarian: false
    })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleFormChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={handleFormChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleFormChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleFormChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
