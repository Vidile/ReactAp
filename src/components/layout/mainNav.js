import { Link } from "react-router-dom";
import classes from "./mainNav.module.css";
import {useContext} from 'react';
import FavoritesContext from "../../store/favorites-context";


function MainNav() {
  const fav = useContext(FavoritesContext)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/Favorite">Favorite</Link>
            <span className={classes.badge}>{fav.totalfavorites}</span>
          </li>
          <li>
            <Link to="/NewMeetUp">New Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNav;
