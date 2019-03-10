import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


class Menu extends React.Component {

    render() {
      return (
        <nav>
          <ul className="nav">
            <li className="nav-item">
          <Link to="/skills">Skills <i class=" rounded fas fa-code" /></Link>
        </li>
        <li className="nav-item">
          <Link to="/projects">Projects <i class="rounded far fa-folder-open"/></Link>
        </li>
        <li className="nav-item">
          <Link to="/blog"> Blog  <i class=" rounded fas fa-laptop-code"/></Link>
          </li>
          </ul>
        </nav>
      );
    }
  }
  export default Menu;
