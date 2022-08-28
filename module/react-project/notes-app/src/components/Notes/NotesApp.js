import React from "react";
import Navbar from "../Navbar/NavbarApp";
import Footer from "../Footer/FooterApp";
import Title from "./NotesTitle";
import Form from "./NotesForm";
import List from "./NotesList";
import Archive from "./NotesArchives";
import { getInitialData } from "../../utils/data.js"; //? import data {object}

const authors = `OgiSetiawan`;

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    //? init state
    this.state = {
      notes: getInitialData(), //?set and call data {object}
      searchNotes: getInitialData(), //?set and call data {object} for dummy state
    };

    //? init event binding
    this.onAddNotes = this.onAddNotes.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onAddNotes({ title, body, archived, createdAt }) {
    //? setState from param
    this.setState((prevState) => {
      //? might create a new object (notes) see property name notes
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived,
            createdAt,
          },
        ],
        searchNotes: [
          ...prevState.searchNotes,
          {
            id: +new Date(),
            title,
            body,
            archived,
            createdAt,
          },
        ],
      };
    });
  }

  onDelete(id) {
    console.log(id);
    //? get one prop (id)
    const notes = this.state.notes.filter((note) => note.id !== id);
    const searchNotes = this.state.searchNotes.filter((note) => note.id !== id);
    this.setState({ notes, searchNotes });
  }

  onArchive(id, title, body, createdAt) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const searchNotes = this.state.searchNotes.filter((note) => note.id !== id);
    this.setState({
      notes: [
        ...notes,
        {
          id,
          title,
          body,
          createdAt,
          archived: true,
        },
      ],
      searchNotes: [
        ...searchNotes,
        {
          id,
          title,
          body,
          createdAt,
          archived: true,
        },
      ],
    });
  }

  onMove(id, title, body, createdAt) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const searchNotes = this.state.searchNotes.filter((note) => note.id !== id);
    this.setState({
      notes: [
        ...notes,
        {
          id,
          title,
          body,
          createdAt,
          archived: false,
        },
      ],
      searchNotes: [
        ...searchNotes,
        {
          id,
          title,
          body,
          createdAt,
          archived: false,
        },
      ],
    });
  }

  onSearch(e) {
    const textSearch = e.target.value;
    console.log(textSearch);
    this.setState((prevState) => {
      return {
        searchNotes: prevState.notes.filter((note) =>
          note.title.toLowerCase().includes(textSearch.toLowerCase())
        ),
      };
    });
  }

  render() {
    return (
      <>
        <Navbar onSearch={this.onSearch} />
        <main className="container">
          <div className="row">
            <div className="col-md-4">
              <Title title="Create a Note" />
              <Form addNotes={this.onAddNotes} />
            </div>
            <div className="col-md-4">
              <Title title="List Notes" />
              {/* //? Passing data {object} from this.state to List (notes) as param */}
              <List
                notes={this.state.searchNotes.filter(
                  (note) => note.archived === false
                )}
                Delete={this.onDelete}
                Archive={this.onArchive}
              />
            </div>
            <div className="col-md-4">
              <Title title="Archives Notes" />
              <Archive
                notes={this.state.searchNotes.filter(
                  (note) => note.archived === true
                )}
                Delete={this.onDelete}
                Move={this.onMove}
              />
            </div>
          </div>
        </main>
        <Footer name={authors} />
      </>
    );
  }
}

export default NotesApp;
