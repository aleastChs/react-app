import React, { Component } from 'react';
import NavbarItem from './navbarItem.js'

class Navbar extends Component {
    render() {
        return (
            <div>
                {this.props.items.map((item) => <NavbarItem data={item} />)}
            </div>
        );
    }
}

export default Navbar;