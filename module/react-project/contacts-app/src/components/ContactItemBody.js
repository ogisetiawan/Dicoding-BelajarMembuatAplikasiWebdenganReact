import React from 'react';
 
function ContactItemBody({ name, tag }) {
    return (
     //? ___ class menggunakan metode BEM ( Block Element Modifier)
   <div className="contact-item__body">  
     <h3 className="contact-item__title">{name}</h3>
     <p className="contact-item__username">@{tag}</p>
   </div>
 );
}
 
export default ContactItemBody; //? agar bisa dikomposisikan oleh component lain di berkas JavaScript yang berbeda