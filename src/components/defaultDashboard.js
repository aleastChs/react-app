import React, { Component } from 'react';
import Dashboard from './dashboard.js';

class DefaultDashboard extends Component {
    constructor() {
        super();
        this.state = {
            navbarItems:
            [
                {"name": "Widgets"}, {"name": "Options"}, {"name": "Settings"}, {"name": "User"}
            ],
            gridItems:
            [
                {"name": "Header"}, {"name": "paragraph"}, {"name": "side"}
            ]
        }
    }
    render() {
        return (
            <Dashboard navItems={this.state.navbarItems} gridItems={this.state.gridItems} />
        );
    }
}

export default DefaultDashboard;