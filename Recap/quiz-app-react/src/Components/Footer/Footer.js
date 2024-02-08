import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBookmark,
  faCirclePlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <menu>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>
              <FontAwesomeIcon icon={faHouse} />
            </li>
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>
              <FontAwesomeIcon icon={faBookmark} />
            </li>
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>
              <FontAwesomeIcon icon={faCirclePlus} />
            </li>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>
              <FontAwesomeIcon icon={faUser} />
            </li>
          </NavLink>
        </ul>
      </menu>
    </footer>
  );
}
