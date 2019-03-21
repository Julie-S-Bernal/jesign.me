import React from 'react';
import { Link } from "react-router-dom";


class Menu extends React.Component {


    render() {
      return (
        <nav>
          <ul className="nav">
          { window.location.pathname !== '/skills' &&
            <li className="nav-item">
            <Link to="/skills">Skills <i class=" rounded fas fa-code" /></Link>
            </li>
         }
          { window.location.pathname !== '/projects' &&
          <li className="nav-item">
            <Link to="/projects">Projects <i class="rounded far fa-folder-open"/></Link>
          </li>
          }
          { window.location.pathname !== '/blog' &&
          <li className="nav-item">
            <Link to="/blog"> Blog  <i class=" rounded fas fa-laptop-code"/></Link>
          </li>
           }
          { window.location.pathname !== '/' &&
          <li className="nav-item">
            <Link to="/">About me  <i class=" rounded fas fa-cat"></i></Link>
          </li>
          }
            <li className="nav-item ml-auto">
            <p className="name"> Julie Bernal</p>
            </li>
          </ul>
        </nav>
      );
    }
  }
  export default Menu;
