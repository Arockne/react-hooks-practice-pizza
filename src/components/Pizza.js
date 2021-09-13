import React from "react";

function Pizza({ pizza, setPizzaForm }) {
  const {topping, size, vegetarian} = pizza

  function handleClickEdit() {
    setPizzaForm(pizza)
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'no' : 'yes'}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleClickEdit}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
