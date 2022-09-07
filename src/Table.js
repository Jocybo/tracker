import React from "react";

const Table = ({tracker}) => {
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
                    <button className="edit">Edit</button>
                    <button className="del">Del</button>
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