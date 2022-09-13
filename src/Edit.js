import React from 'react'

const Edit = ({handleCancel}) => {
  return (
    <tr>
        <td>
            <input type="text" name="category"  className='editbox' />
        </td>
        <td>
            <input type="text" name="expensename"  className='editbox'/>
        </td>
        <td>
            <input type="number" name="amount"  className='editbox'/>
        </td>
        <td>
            <input type="date" name="dateoftransaction" className='editbox' />
        </td>
        <td>
            <input type="text" name="description" className='editbox' />
        </td>
        <td>
            <span>
                <button className='edit'>Save</button>
                <button className='del' onClick={handleCancel}>Cancel</button>
            </span>
        </td>
    </tr>
  )
}
    
export default Edit