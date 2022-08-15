import ContactItem from './ContactItem';
 
function ContactList({ contacts, onDelete }) {
 return (
   <div className="contact-list">
     {
        //? array map
       contacts.map((contact) => ( //? set as contact
         <ContactItem key={contact.id} id={contact.id} onDelete={onDelete} {...contact} /> //? contact.id is uniqe key and conctact are as from values
       ))
     }
   </div>
 );
}
 
export default ContactList;