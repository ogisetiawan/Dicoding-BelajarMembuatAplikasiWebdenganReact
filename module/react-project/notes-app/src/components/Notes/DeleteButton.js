import React from 'react';
 
function DeleteButton({ id, Delete, val }) {
  return <button className='btn btn-danger' onClick={() => Delete(id)}>{val}</button>
}
 
export default DeleteButton;