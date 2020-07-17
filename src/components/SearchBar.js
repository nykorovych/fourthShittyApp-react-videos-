import React from "react";

class SearchBar extends React.Component {
  state = { search: "" };
  onInputChange = (e) => {
    this.setState({ search: e.target.value });
  };
  onFormSubmit = (e) => {
      e.preventDefault()
      this.props.onFormSubmit(this.state.search)
      
  }
  render() {
    return (
      <div className=" search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search video</label>
            <input
              type="text"
              value={this.state.search}
              onChange={this.onInputChange}
              //   same as onChange={e => this.setState({search: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
