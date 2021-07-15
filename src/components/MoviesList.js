import { NavLink, withRouter } from "react-router-dom";
import routes from "../route";

const MoviesList = ({ movies, location }) => {
    return (
        <ul>
            {movies &&
                movies.map(({id, title, name}) => (
            <li key={id}>
                        <NavLink
                            to={{
                                 pathname: `${routes.movies}/${id}`,
                                 state: { from: location },
                }}>
                    {title}{name}
                </NavLink>
            </li>))}
        </ul>
    )
}

export default withRouter(MoviesList);