import React from "react";

function NotesEmpty() {
  return (
    <div className="alert alert-warning alert-dismissible fade show mt-4">
      <span>Oops, <strong>Notes</strong> not found!</span>
    </div>
  );
}

export default NotesEmpty;
