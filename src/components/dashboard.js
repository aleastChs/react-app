import React, {Component} from 'react';
import Navbar from './navbar.js';

class Dashboard extends Component {
    render() {
        return (
            <Navbar items={this.props.navItems} />

        );
    }
}

export default Dashboard;