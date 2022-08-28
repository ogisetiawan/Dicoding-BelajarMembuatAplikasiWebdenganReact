import React from "react";
import ArchiveMoveButton from "./ArchiveMoveButton";
import DeleteButton from "./DeleteButton";
import NotesEmpty from "./NotesEmpty";

function NotesList({ notes, Delete, Archive }) {
  if(notes.length === 0){
    return (
      <NotesEmpty/>
    )
  }

    //? get param (notes) and show with arraymap
    return (
      notes.map((note) => (
        <div className="card mt-4" key={note.id}>
          <h5 className="card-header">{note.title}</h5>
          <div className="card-body">
            <p className="card-text">{note.body}</p>
            <DeleteButton id={note.id} Delete={Delete} val="Delete" />
            <ArchiveMoveButton id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} ArchiveMove={Archive} val="Archive" btnColor="warning" />
          </div>
          <div className="card-footer text-muted">{note.createdAt}</div>
        </div>
       ))
    );
}

export default NotesList;
