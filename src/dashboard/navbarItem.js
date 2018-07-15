import React, { Component } from 'react';

class NavbarItem extends Component {
    render() {
        return (
            <span>{this.props.data.name}</span>
        );
    }
}

export default NavbarItem;