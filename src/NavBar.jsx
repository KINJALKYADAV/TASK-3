
import React, {Component} from "react";
export default class NavBar extends Component
{
    render(){
        return(
        <div>  
        <nav className ="navbar navbar-expand-lg bg-dark navbar-style">
          <a className="navbar-brand" href="/#"><h4>E-Commerce</h4></a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
          </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             <a className="nav-link" href="/#">Home</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="/#">Profile</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="/#">Cart</a>
            </li>
            </ul>
            </div>
         </nav>
        </div>
        );
    }
}