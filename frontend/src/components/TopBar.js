import React from "react";
import logo from '../assets/hoaxify-logo.png'

class TopBar extends React.Component{
    render(){
        return(
            <div className="bg-white shadow-sm mb-2">
                <div className="container">
            <nav className="navbar navbar-light navbar-expand">
                <a href="/">
                <img src={logo} width="60" alt="Hoaxify"/>
                </a>
              
            </nav>
            </div>
            </div>
        )
    }
}

export default TopBar;