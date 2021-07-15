import { Component } from "react";
import axios from 'axios';
import MoviesList from "../components/MoviesList";
import apiRequest from "../apiRequest";

class MoviesPage extends Component {
    state = {
        movie: '',
        searchMoviesArr: [],
    }
      inputChange = (e) => {
        const movieToSearch = e.target.value;
        this.setState({movie: movieToSearch})
    }
    fetchMovies = (movie) => {
        axios
            .get(`${apiRequest.BASE_URL}/search/movie?query=${movie}&api_key=${apiRequest.API_KEY}`)
            .then((response) => this.setState({searchMoviesArr: response.data.results}))           
    }

    onSearch = (e) => {
         e.preventDefault();
         if (!this.state.movie) return;
        this.fetchMovies(this.state.movie);
        e.target.reset()
    }

    render() {
        const { searchMoviesArr } = this.state;
        return (
            <>
                <form onSubmit={this.onSearch}>
                    <input type='text' onChange={this.inputChange}/>
                    <button type='submit' >Find movie</button>
                </form>
                {searchMoviesArr && <MoviesList movies={searchMoviesArr} />
                    }
            </>
        )
    }
}

export default MoviesPage;