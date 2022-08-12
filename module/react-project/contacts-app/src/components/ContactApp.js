import React from 'react';
import ContactList from './ContactList'; //? unidirectional data flow Contact lainya akan ikut
import { getData } from '../utils/data.js';  //? call with object {}
 
function ContactApp() {
 const contacts = getData(); //? call data object
 
 return (
   <div className="contact-app">
     <h1>Daftar Kontak</h1>
     <ContactList contacts={contacts} />
   </div>
 );
}
 
export default ContactApp;