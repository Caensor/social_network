import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";




const Navbar = () => {
  return (
    <div>
      <div className={classes.sidebarButtons}>
        <div className={classes.sidebarButton}><NavLink to="./profile">Профиль </NavLink></div>
        <div  className={classes.sidebarButton}><NavLink to="./dialogs">Диалоги </NavLink></div>
        <div  className={classes.sidebarButton}><NavLink to="./friends">Друзья </NavLink></div>
        <div  className={classes.sidebarButton}><NavLink to="./news">Новости </NavLink></div>
        <div  className={classes.sidebarButton}><NavLink to="./music">Музыка </NavLink></div>
        <div  className={classes.sidebarButton}><NavLink to="./setings">Настройки </NavLink></div>
      </div>
    </div>

  );
}

export default Navbar;