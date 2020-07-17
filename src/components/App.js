import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

class App extends React.Component {
  onTermSubmit = (search) => {
    youtube.get("/search", {
      params: {
        q: search,
      },
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
      </div>
    );
  }
}

export default App;
