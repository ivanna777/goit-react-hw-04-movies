import { NavLink, Switch, Route } from 'react-router-dom';
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
// import Reviews from "./views/Reviews";
// import Cast from "./views/Cast";
// import NotFoundWay from "./views/NotFoundWay"

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
      {/* <Route exact path="/movies/:movieId/cast" component={ Cast } />
      <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
      {/* <Route path="/" component={NotFoundWay} /> */}
    </Switch>
  </>
)

export default App;
