import { Component } from "react";
import axios from 'axios';
import queryString from "query-string";
import MoviesList from "../components/MoviesList";
import apiRequest from "../apiRequest";

class MoviesPage extends Component {
    state = {
        movie: '',
        searchMoviesArr: [],
    }

    componentDidMount() {
    const prevQuery = queryString.parse(this.props.location.search).query;
    if (prevQuery) this.fetchMovies(prevQuery);
  }
      inputChange = (e) => {
        const movieToSearch = e.target.value;
        this.setState({movie: movieToSearch})
    }
    fetchMovies = (movie) => {
        axios
            .get(`${apiRequest.BASE_URL}/search/movie?query=${movie}&api_key=${apiRequest.API_KEY}`)
            .then((response) => this.setState({searchMoviesArr: response.data.results}))
            .finally(() => {
        this.props.history.push({
          pathname: this.props.location.pathname,
          search: `query=${movie}`,
        });
      });         
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