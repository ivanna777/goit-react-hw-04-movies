import { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

// f0ba1c040c2231856cd6d94b7e782bec

class HomePage extends Component {
    state = {
        moviesArr: []
    }

    async componentDidMount() {
        const response = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=f0ba1c040c2231856cd6d94b7e782bec').then(response => response.data.results);
        this.setState({moviesArr: response})
    }
    
    render() {
        return (
            <>
                <ul>
                    {this.state.moviesArr.map(movie => (
                        <li key={movie.id}><NavLink to={`/movies/${movie.id}`}>{movie.name}{ movie.title}</NavLink></li>
                    ))}
                </ul>
            </>
        )
    }
}

export default HomePage;