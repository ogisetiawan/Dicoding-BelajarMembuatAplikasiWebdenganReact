import React from 'react';
import ContactItemBody from './ContactItemBody'; //? import in folder src
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';
 
function ContactItem({ imageUrl, name, tag, id, onDelete }) {
 return (
    //? call function ContactItem and pass/send imageUrl
   <div className="contact-item">
     <ContactItemImage imageUrl={imageUrl} /> 
     <ContactItemBody name={name} tag={tag} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default ContactItem;