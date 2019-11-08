import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";




const Navbar = () => {
  return (
    <div>
      <div className={classes.sidebarButton}>
        <div className="div"><NavLink to="./profile">Профиль </NavLink></div>
        <div className="div"><NavLink to="./dialogs">Диалоги </NavLink></div>
        <div className="div"><NavLink to="./friends">Друзья </NavLink></div>
        <div className="div"><NavLink to="./news">Новости </NavLink></div>
        <div className="div"><NavLink to="./music">Музыка </NavLink></div>
        <div className="div"><NavLink to="./setings">Настройки </NavLink></div>
      </div>
    </div>

  );
}

export default Navbar;