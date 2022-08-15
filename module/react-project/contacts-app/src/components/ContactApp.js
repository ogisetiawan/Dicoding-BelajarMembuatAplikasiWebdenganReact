import React from "react";
import ContactList from "./ContactList"; //? unidirectional data flow Contact lainya akan ikut
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
  }

  //? set even handler and setState
  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
