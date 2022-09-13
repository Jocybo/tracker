import React, { useState } from "react";
import Edit from "./Edit";
import Read from "./Read";

const Table = ({ tracker, handleDelete }) => {
  
  const [edit, setEdit] = useState(null);

  const handleEdit = (item) => {
    setEdit(item);
    console.log("from Edit", item);
  };
  
  const handleCancel = () =>{
    setEdit(null);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Expense Name</th>
          <th>Amount</th>
          <th>Date of Transaction</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tracker.map((item, id) => {
          return (
            <>
              {edit === id ? (
                <Edit handleCancel={handleCancel}/>
              ) : (
                <Read
                  uniqueId={id}
                  item={item}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              )}
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
