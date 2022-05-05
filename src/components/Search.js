import React from "react";

function Search({ filter, handleSearch}) {

  const handleChange = (e) => {
    handleSearch(e.target.value)
  }

  

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={filter} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
