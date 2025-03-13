import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const getActiveClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };
  return (
    <nav className={css.navigation}>
      <li>
        <NavLink className={getActiveClass} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={getActiveClass} to="/movies">
          Movies
        </NavLink>
      </li>
    </nav>
  );
};

export default Navigation;
