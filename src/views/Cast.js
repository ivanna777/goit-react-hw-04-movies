import { Component } from "react";
import axios from 'axios';
import defaultImgCast from "../images/defaultImgCast.jpg"
import apiRequest from "../apiRequest";

class Cast extends Component {
    
    state = {
        id: this.props.movieId,
        castArr: [],
        error: false
    }
    componentDidMount() {
        axios
            .get(`${apiRequest.BASE_URL}/movie/${this.state.id}/credits?api_key=${apiRequest.API_KEY}&language=en-US`)
            .then((response) => this.setState({ castArr: response.data.cast }))
            .catch(()=> this.setState({error: true}))
    }
    
    render() {
        const { castArr, error } = this.state;
        if (error) return <p>Something wrong...</p>;
        if (castArr.length === 0) return <p>There is no information about tnis movie...</p>
        return (
                <ul className="movie-cast">
                    {castArr.map(({id, profile_path, name, character }) => {
                        let imgCast = defaultImgCast;
                        if (profile_path) imgCast = `https://themoviedb.org/t/p/w300${profile_path}`;
                        return (
                        <li key={id}>
                            <img src={imgCast} alt={name} width='300px' />
                            <h2>{name}</h2>
                            <p>Character: {character}</p>
                            </li>
                        )
                    })}
                </ul>
        )
    }
}

export default Cast;
