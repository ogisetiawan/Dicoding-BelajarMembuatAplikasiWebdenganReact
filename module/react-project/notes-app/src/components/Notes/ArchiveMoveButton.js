import React from 'react';
 
function ArchiveMoveButton({ id, title, body, createdAt, ArchiveMove, val, btnColor }) {
  return <button className={`btn btn-${btnColor}`} onClick={() => ArchiveMove(id, title, body, createdAt)}>{val}</button>
}
 
export default ArchiveMoveButton;