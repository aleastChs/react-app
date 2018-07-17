import React, { Component } from 'react';

class GridItem extends Component {
    render() {
        return (
            <span>{this.props.data.name}</span>
        );
    }
}

export default GridItem;