import React, { Component } from 'react';
import GridItem from './gridItem.js';

class Grid extends Component {
    render() {
        return (
            <div>
                {this.props.items.map((gridItem, i) => <GridItem key={i} data={gridItem} /> ) }
            </div>
        );
    }
}

export default Grid;