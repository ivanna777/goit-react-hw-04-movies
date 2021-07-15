import { Component } from 'react';
import axios from 'axios';
import MoviesList from "../components/MoviesList";
import apiRequest from '../apiRequest';

class HomePage extends Component {
    state = {
        moviesArr: [],
        error: false
    }

    async componentDidMount() {
        const response = await axios.get(`${apiRequest.BASE_URL}/trending/all/day?api_key=${apiRequest.API_KEY}`)
            .then(response => response.data.results)
            .catch(() => ({error: true}))
        this.setState({moviesArr: response})
    }
    
    render() {
        const { moviesArr, error } = this.state;
        if(error) return (<p>Oops, something wrong...</p>)
        return <MoviesList movies={ moviesArr}/>
    }
}

export default HomePage;