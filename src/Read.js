import React from "react";

const Read = ({ item, handleDelete, handleEdit, uniqueId }) => {
  
  return (
    <tr key={uniqueId}>
      <td>{item.category}</td>
      <td>{item.expensename}</td>
      <td>{item.amount}</td>
      <td>{item.dateoftransaction}</td>
      <td>{item.description}</td>
      <td>
        {
          <>
            <button className="edit" onClick={() => handleEdit(uniqueId, item)}>
              Edit
            </button>
            <button className="del" onClick={() => handleDelete(uniqueId)}>
              Del
            </button>
          </>
        }
      </td>
    </tr>
  );
};

export default Read;
