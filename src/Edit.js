import { Layout } from "antd";
import React from "react";

const Edit = ({ handleCancel, editForm, handleChange, handleEditSubmit, uniqueId,}) => {

    return (
       
            <tr key={uniqueId}>
                <td>
                    <input
                        type="text"
                        name="category"
                        className="editbox"
                        onChange={handleChange}
                        value={editForm.category}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="expensename"
                        className="editbox"
                        onChange={handleChange}
                        value={editForm.expensename}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="amount"
                        className="editbox"
                        onChange={handleChange}
                        value={editForm.amount}
                    />
                </td>
                <td>
                    <input
                        type="date"
                        name="dateoftransaction"
                        className="editbox"
                        onChange={handleChange}
                        value={editForm.dateoftransaction}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="description"
                        className="editbox"
                        onChange={handleChange}
                        value={editForm.description}
                    />
                </td>
                <td>
                    <span>
                        <button
                            className="edit"
                            type="submit"
                            onClick={() => handleEditSubmit(uniqueId)}
                        >
                            Save
                        </button>
                        <button className="del" onClick={handleCancel}>
                            Cancel
                        </button>
                    </span>
                </td>
            </tr>
        
    );
};

export default Edit;
