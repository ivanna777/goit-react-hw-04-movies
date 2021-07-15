import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import AppBar from './components/AppBar';
import routes from './route';
 
// const HomePage = lazy(() => import('./views/HomePage.js' /* webpackChunkName: "HomePage" */));
// const MoviesPage = lazy(() => import('./views/MoviesPage.js' /* webpackChunkName: "MoviesPage" */));
// const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage.js' /* webpackChunkName: "MovieDetailsPage" */));

class App extends Component{
  render() {
    return (
      <>
    <AppBar />
    {/* <Suspense fullback={<h1>Loading...</h1>}> */}
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetail} component={MovieDetailsPage} />
          <Route component={HomePage} />
        </Switch>
      {/* </Suspense> */}
  </>
    )
  }
}
  

export default App;
