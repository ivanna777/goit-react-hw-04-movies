import { Component } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class MoviesPage extends Component {
    state = {
        movie: '',
        searchMoviesAr: []
    }
      inputChange = (e) => {
        const movieToSearch = e.target.value;
        this.setState({movie: movieToSearch})
    }
    fetchMovies = (movie) => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=f0ba1c040c2231856cd6d94b7e782bec`)
            .then((response) => this.setState({searchMoviesAr: response.data.results}))
           
    }

    onSearch = (e) => {
         e.preventDefault();
         if (!this.state.movie) return;
         this.fetchMovies(this.state.movie);
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSearch}>
                    <input type='text' onChange={this.inputChange}/>
                    <button type='submit' >Find movie</button>
                </form>
                <ul>
                    {this.state.searchMoviesAr.map(movie => (
                        <li key={movie.id}>
                            <NavLink to={`/movies/${movie.id}`}>
                                {movie.title}
                            </NavLink>
                        </li>))}
                </ul>
            </>
        )
    }
}