
import React, { Fragment, useState } from "react";

const Form = (props) => {
  const [orderId, setOrderId] = useState([]);
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onForm(orderId, price, dish, table);
  };

  const onOrder = (e) => {
    setOrderId(e.target.value);
  };
  const onPrice = (e) => {
    setPrice(e.target.value);
  };
  const onDish = (e) => {
    setDish(e.target.value);
  };
  const onTable = (e) => {
    setTable(e.target.value);
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <label htmlFor="Order id:">Order id:</label>
        <input type="number" onChange={onOrder} />
        <label htmlFor="Choose Price:">Choose Price:</label>
        <input type="Number" onChange={onPrice} />
        <label htmlFor="Choose Dish:">Choose Dish:</label>
        <input type="text" onChange={onDish} />
        Choose a Table:
        <select onChange={onTable}>
          <option></option>
          <option value="table-1">table-1</option>
          <option value="table-2">table-2</option>
          <option value="table-3">table-3</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};
export default Form;