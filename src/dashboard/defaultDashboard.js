import React, { Component } from 'react';
import Dashboard from './dashboard.js';

class DefaultDashboard extends Component {
    constructor() {
        super();
        this.state = {
            navbarItems:
            [
                {"name": "Widgets"}, {"name": "Options"}, {"name": "Settings"}, {"name": "User"}
            ]
        }
    }
    render() {
        return (
            <Dashboard navItems={this.state.navbarItems} />
        );
    }
}

export default DefaultDashboard;