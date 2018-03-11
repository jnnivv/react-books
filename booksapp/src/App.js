import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInput from './SearchInput.js';
import axios from 'axios';
import querystring from 'querystring';
import autocomplete from 'react-autocomplete'


class App extends Component {

  constructor () {
    super()
    this.state = {
      inputValue: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // handle add to wishlist button click function
  handleClick (e) {
    e.preventDefault();
    const params = {title: this.state.inputValue}
    axios.get('http://localhost:3000/add?' + querystring.stringify(params))
      .then(response => console.log(response.data))
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
    console.log(this.state.inputValue)
  }

  render() {
    return (
      <main>
        <form id="search_book">
          <SearchInput />
          <input type="text" name="title" placeholder="Search for a book..." value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} /><br/>
          <input type="submit" value="Add to wishlist" id="add" onClick={this.handleClick}/>
        </form>
      </main>
    );
  }

}

export default App;
