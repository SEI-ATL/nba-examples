// Imports
import React, { Component } from 'react';

// Class Based Component
class KevinDurant extends Component {
    render() {
        return (
            <div>
                <h2>Kevin Durant</h2>
                <p>Team: {this.props.team}</p>
                <p>Number: {this.props.number}</p>
                <p>Position: {this.props.position}</p>
            </div>
        );
    }
} 

export default KevinDurant; 