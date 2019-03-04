import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Input from './Components/Input/Input';
import axios from 'axios';
import apiKey from './config';

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
    let { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchQuery}&page=1`);
    this.setState({ searchQuery: "", movies: data.results });
    console.log(this.state.movies)
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
