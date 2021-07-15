import { Component } from "react";
import axios from 'axios';
import routes from "../route";
import apiRequest from "../apiRequest";

class Reviews extends Component {
    state = {
        id: this.props.movieId,
        reviewsArr: [],
        error: false
    }
    componentDidMount() {
        axios.get(`${apiRequest.BASE_URL}/movie/${this.state.id}${routes.reviews}?api_key=${apiRequest.API_KEY}&language=en-US&page=1`)
            .then(response => this.setState({ reviewsArr: response.data.results }))
            .catch(() => this.setState({ error: true }));
    }

    render() {
        const { reviewsArr, error } = this.state;
        if (error) return <p>Something wrong...</p>;
        
        if (reviewsArr.length === 0) return <p>We don`t have any reviews for this movie...</p>
        return (
            <ul className="movie-reviews">
                {reviewsArr.map(({ id, author, content }) => (
                    <li key = {id}>
                        <p>Author: {author}</p>
                        <p>{content}</p>
                    </li>
                   ))}
                </ul>
        )
    }
}

export default Reviews;
