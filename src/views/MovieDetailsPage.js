import { Component } from "react";
import axios from 'axios';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import Cast from "./Cast";
import Reviews from "./Reviews";

class MovieDetailsPage extends Component {
    state = {
        id: this.props.match.params.movieId,
        movieDetails: {},  
    }
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=f0ba1c040c2231856cd6d94b7e782bec&language=en-US`).then((response) => 
            this.setState({
           movieDetails: response.data
            }))
       console.dir(Cast) 
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

        return (
            <>
                <button type="button">Go back</button>
                <div>
                    <div>
                        <img src ={`https://themoviedb.org/t/p/w300${backdrop_path}`} alt={title}/>
                    </div>
                    <div>
                        <h1>{title } ({ release_date})</h1>
                        <p>User score: { vote_average }</p>
                        <h2>Overview</h2>
                        <p>{ overview}</p>
                        <h2>Genres</h2>
                        {genres && <p>{genres.map((genre) => (
                            <span key={genre.id}>
                                {genre.name}
                            </span>
                        ))}
                        </p>
                        }
                    </div> 
                </div>
                <div>
                     <ul>Additional information
                        <li>
                            <NavLink to ={`/movies/${this.state.id}/cast`}>
                                Cast
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/movies/${this.state.id}/reviews`}>
                                Review
                            </NavLink>
                        </li>                        
                    </ul>
                
                </div>
                <Route
                    path={`/movies/${this.state.id}/cast`}
                    render={(props) => {
                      return <Cast {...props} movieId={this.state.id} />;
                }}
            />
                <Route
                    path={`/movies/${this.state.id}/reviews`}
                    render={(props) => {
                        return <Reviews {...props} movieId={this.state.id} />;
                  }}
                />
                
            </>
        )
    }
}

export default withRouter(MovieDetailsPage);