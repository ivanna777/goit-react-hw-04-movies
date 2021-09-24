import { Component } from "react";
import axios from 'axios';
import { NavLink, Route, withRouter } from 'react-router-dom';
import routes from "../route";
import Cast from "./Cast";
import Reviews from "./Reviews";
import apiRequest from "../apiRequest";

class MovieDetailsPage extends Component {
    state = {
        id: this.props.match.params.movieId,
        movieDetails: {},
        error: false,
        backPath: this.props.location?.state?.from || "/",
    }
    componentDidMount() {
        axios.get(`${apiRequest.BASE_URL}/movie/${this.state.id}?api_key=${apiRequest.API_KEY}&language=en-US`)
            .then((response) => this.setState({ movieDetails: response.data }))
            .catch(() => this.setState({ error: true }));
    }

    render() {
        const {
            backdrop_path,
            title,
            release_date,
            vote_average,
            overview,
            genres
        } = this.state.movieDetails;
        const { error, id, backPath } = this.state;

         if (error) return <p>Something wrong!</p>

        return (
            <>
                <button className="back-button" type="button" onClick={() => this.props.history.push(backPath)}>Go back</button>
                <div className="movie-details">
                    <div className="movie-poster">
                        <img src ={`https://themoviedb.org/t/p/w300${backdrop_path}`} alt={title}/>
                    </div>
                    <div className="movie-details-text">
                        <h1>{title } ({ release_date})</h1>
                        <p>User score: { vote_average }</p>
                        <h2>Overview</h2>
                        <p>{ overview}</p>
                        <h2>Genres</h2>
                        {genres && <p>{genres.map(({id, name}) => (
                            <span key={id} className="movie-genre">
                                {name}
                            </span>
                        ))}
                        </p>
                        }
                    </div> 
                </div>
                <div className="additional-movie-info">
                     <ul>Additional information
                        <li>
                            <NavLink to ={`${routes.movies}/${id}/${routes.cast}`}>
                                Cast
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${routes.movies}/${id}/${routes.reviews}`}>
                                Review
                            </NavLink>
                        </li>                        
                    </ul>
                
                </div>
                <Route
                    path={`${routes.movies}/${id}/${routes.cast}`}
                    render={(props) => {
                      return <Cast {...props} movieId={id} />;
                }}
            />
                <Route
                    path={`${routes.movies}/${id}/${routes.reviews}`}
                    render={(props) => {
                        return <Reviews {...props} movieId={id} />;
                  }}
                />
                
            </>
        )
    }
}

export default withRouter(MovieDetailsPage);