import { Component } from "react";
import axios from 'axios';
import defaultImgCast from "../images/defaultImgCast.jpg"

class Cast extends Component {
    
    state = {
        id: this.props.match.params.movieId,
        castArr: [],
    }
    componentDidMount() {
        console.log(this.state.id)
        axios
            .get(`https://api.themoviedb.org/3/movie/${this.state.id}/credits?api_key=f0ba1c040c2231856cd6d94b7e782bec&language=en-US`).then((response) => 
                this.setState({
                    castArr: response.data.cast
                }))
        
    }
    
    render() {
        console.log('cast')
        return (
            <>
                <ul>
                    {this.state.castArr.map(cast => {
                        let imgCast = defaultImgCast;
                        if (cast.profile_path) imgCast = `https://themoviedb.org/t/p/w300${cast.profile_path}`;
                        return (
                        <li key={cast.id}>
                            <img src={imgCast} alt={cast.name} width='300px' />
                            <h2>{cast.name}</h2>
                            <p>Character: {cast.character}</p>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default Cast;
