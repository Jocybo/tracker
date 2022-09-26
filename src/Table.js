import React, { useState } from "react";
import Edit from "./Edit";
import Read from "./Read";
import { deleteExpense, editExpense } from "./expense/ExpenseSlicer";
import { useDispatch } from "react-redux";
const Table = ({ tracker, handleDelete, setuserData }) => {

  const dispatch = useDispatch()

  const [edit, setEdit] = useState(null);
  const [editForm, seteditForm] = useState({
    category: "",
    expensename: "",
    amount: "",
    dateoftransaction: "",
    description: "",
  });

  const handleCancel = () => {
    setEdit(null);
  };

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newData = { ...editForm };
    newData[fieldName] = fieldValue;

    seteditForm(newData);
  };

  const handleEdit = (item, datas) => {

    setEdit(item);

    const newValues = {
      category: datas.category,
      expensename: datas.expensename,
      amount: datas.amount,
      dateoftransaction: datas.dateoftransaction,
      description: datas.description,
    };

    seteditForm(newValues);
  };

  const handleEditSubmit = (id) => {
    
    dispatch(deleteExpense(id));

    const editedValues = {
      category: editForm.category,
      expensename: editForm.expensename,
      amount: editForm.amount,
      dateoftransaction: editForm.dateoftransaction,
      description: editForm.description,
    };

    const editedData = [...tracker];
    const index = tracker.findIndex((c, index) => index === id);
    editedData[index] = editedValues;

    setuserData(editedData);
    alert("Updated");
    setEdit(null);
  };

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
                <Edit
                  handleCancel={handleCancel}
                  editForm={editForm}
                  handleChange={handleChange}
                  handleEditSubmit={handleEditSubmit}
                  uniqueId={id}
                />
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
