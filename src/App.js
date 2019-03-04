import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Input from './Components/Input/Input';
import Movie from './Components/Movie/Movie';
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
        <div>
          {this.state.movies.length > 0 && this.state.movies.map(movie => {
            return <Movie movie={movie} key={movie.id} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
