import React from "react";
import ContactList from "./ContactList"; //? unidirectional data flow Contact lainya akan ikut
import ContactInput from "./ContactInput";
import { getData } from "../utils/data.js"; //? call with object {}

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    //? init state value
    this.state = {
      contacts: getData(), //? call data object
    };

    //? init event binding
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  //? set even handler and setState
  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }
  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: "/images/default.jpg",
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
