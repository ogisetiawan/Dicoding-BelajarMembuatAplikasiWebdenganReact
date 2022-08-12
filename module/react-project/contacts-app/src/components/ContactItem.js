import React from 'react';
import ContactItemBody from './ContactItemBody'; //? import in folder src
import ContactItemImage from './ContactItemImage';
 
function ContactItem({ imageUrl, name, tag }) {
 return (
    //? call function ContactItem and pass/send imageUrl
   <div className="contact-item">
     <ContactItemImage imageUrl={imageUrl} /> 
     <ContactItemBody name={name} tag={tag} />
   </div>
 );
}
 
export default ContactItem;