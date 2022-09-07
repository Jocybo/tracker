import React, { useState } from "react";

const Table = ({tracker,open}) => {
  const [Edit,setEdit] = useState();
  const [del,setDel] = useState(tracker);

  const handleEdit = () =>{
    open();
    
  }
  const handleDel = (e) =>{
    let id = e.target.getAttribute(removeData);
    setDel(del.filter(items=>items.id!==id))
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
            <tr key={id}>
              <td>{item.category}</td>
              <td>{item.expensename}</td>
              <td>{item.amount}</td>
              <td>{item.dateoftransaction}</td>
              <td>{item.description}</td>
              <td>
                { 
                  <>
                    <button className="edit" onClick={handleEdit}>Edit</button>
                    <button className="del" onClick={handleDel} removeData={item.id}>Del</button>
                  </>
                }
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
