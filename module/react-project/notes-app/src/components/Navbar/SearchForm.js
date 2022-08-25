import React from "react";

function SearchForm( {onSearch} ) {
  return (
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" onChange={(e) => onSearch(e)} />
    </form>
  );
}

export default SearchForm;
