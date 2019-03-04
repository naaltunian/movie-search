import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Input from './Components/Input/Input';
import axios from 'axios';

class App extends Component {

  state = {
    movies: [],
    searchQuery: ""
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value })
  }

  search = async (e) => {
    e.preventDefault();
    if(e.target.elements.input.value === "") {
      alert("Enter a value")
    }
    // let { data } = await axios.get(``);
    this.setState({ searchQuery: "" })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Input searchQuery={this.state.searchQuery} handleChange={this.handleChange} search={this.search} />
      </div>
    );
  }
}

export default App;
