import React, { useState } from "react";

const SearchBar = ({onFormSubmit}) => {
  const [search, setTerm] = useState('')

  
  const onSubmit = (e) => {
      e.preventDefault()
      onFormSubmit(search)
      
  }
  return (
    <div className=" search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search video</label>
          <input
            type="text"
            value={search}
            onChange={e => setTerm(e.target.value)}
            //   same as onChange={e => this.setState({search: e.target.value})}
          />
        </div>
      </form>
    </div>
  );

}


export default SearchBar;
