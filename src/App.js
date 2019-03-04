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
    // let { data } = await axios.get(``);
    console.log(this.state.searchQuery);
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
