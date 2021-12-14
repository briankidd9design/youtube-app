import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const[term, setTerm] = useState("");
  //the term is first entered from the user and then...
  // const onInputChange = (event) => {
  //   // this.setState({term: event.target.value})
  //   setTerm(event.target.value);
  // };
  //That term is passed to the onFormSubmit method
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
    //TODO: Make sure we call
    // callback from parent component
  };
  //then the data is passed from the child to parent (which in this case is the App component) by using a callback method this data is then placed into the onTermSubmit method which then executes an axios api call to return the api data

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          {/* turn the SearchBar from an uncontrolled input to a controlled input
        we are going to hook it up to the state of our SearchBar class */}
          {/* This is to make sure that we are storing our data inside of the component and not inside the DOM */}
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
