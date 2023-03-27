import React, { Fragment, useState } from "react";

import Form from "./Component/Form";
import AddToTable from "./Component/AddToTable";

function App() {
  const [addToList, setAddList] = useState([]);

  const addUser = (Id, price, dish, table) => {
    setAddList((addToList) => {
      return [
        ...addToList,
        { orderId: Id, price: price, dish: dish, table: table },
      ];
    });
  };
  

  return (
    <Fragment>
      <Form onForm={addUser} />
      <AddToTable onAdd={addToList}/>
    </Fragment>
  );
}

export default App;