import React, { Component } from 'react';
//import './navbar.css';
import NavbarItem from './navbarItem.js';

class Navbar extends Component {
    render() {
        return (
            <div>
                {this.props.items.map((item, i) => <NavbarItem key={i} data={item} />)}
            </div>
        );
    }
}

export default Navbar;