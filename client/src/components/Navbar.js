import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import "./style.css";

const book = <FontAwesomeIcon icon={faBook} />
const search = <FontAwesomeIcon icon={faSearch} />


function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        
        </button>
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              > {search}
                Seach
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/saved"
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
              >{book}
                Saved
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;