import React from 'react';
import SearchForm from './SearchForm';

function NavbarApp({ onSearch }) {
 return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
    <div className="container">
      <h2 className="navbar-brand">Notes App</h2> 
      <SearchForm onSearch={onSearch} />
    </div>
  </nav>
 );
}
 
export default NavbarApp;