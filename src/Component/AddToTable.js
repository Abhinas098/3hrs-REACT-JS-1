
import React from "react";

const AddToTable = (props) => {
  return (
    <div>
      <ul>
        Table-1
        <br />
        {props.onAdd.map((add) =>
          add.table === "table-1" ? (
            <li key={add.orderId}>
              {add.price} {add.dish} {add.table}
            </li>
          ) : (
            ""
          )
        )}
      </ul>
      <ul>
        Table-2
        <br />
        {props.onAdd.map((add) =>
          add.table === "table-2" ? (
            <li key={add.orderId}>
              {add.price} {add.dish} {add.table}
            </li>
          ) : (
            ""
          )
        )}
      </ul>
      <ul>
        Table-3 <br />
        {props.onAdd.map((add) =>
          add.table === "table-3" ? (
            <li key={add.orderId}>
              {add.price} {add.dish} {add.table}
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};

export default AddToTable;