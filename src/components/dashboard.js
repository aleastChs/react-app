import React, {Component} from 'react';
import Navbar from './navbar.js';
import Grid from './grid.js';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar items={this.props.navItems} />
                <Grid items={this.props.gridItems} />
            </div>
        );
    }
}

export default Dashboard;