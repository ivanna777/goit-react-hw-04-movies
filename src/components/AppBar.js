import { NavLink } from "react-router-dom";
import routes from "../route";
const AppBar = () => {
    return (
        <header>
    <ul className="nav-list">
      <li>
        <NavLink
          exact
              className="nav-link"
              activeClassName="nav-link-active"
          to={routes.home}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
          to={routes.movies}>
          Movies
        </NavLink>
      </li>
      </ul>
      </header>        
    )
}

export default AppBar;