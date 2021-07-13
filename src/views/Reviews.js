import { Component } from "react";
import axios from 'axios';

class Reviews extends Component {
    state = {
        id: this.props.movieId,
        reviewsArr: []
    }
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.state.id}/reviews?api_key=f0ba1c040c2231856cd6d94b7e782bec&language=en-US&page=1`).then(response => 
            this.setState({
            reviewsArr: response.data.results
            }))
        console.log('dfsdfds')
    }
    render() {
        const { reviewsArr } = this.state;
        
        if (reviewsArr.length === 0) return <p>We don`t have any reviews for this movie...</p>
        return (
                <ul>{reviewsArr.map(review => (
                    <li key = {review.id}>
                        <p>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>
                   ))}
                </ul>
        )
    }
}

export default Reviews;
