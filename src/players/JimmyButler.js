// Imports
import React, { Component } from 'react';

// Class Based Component
class JimmyButler extends Component {
    render() {
        return (
            <div>
                <h2>Jimmy Butler</h2>
                <p>Team: {this.props.team}</p>
                <p>Number: {this.props.number}</p>
                <p>Position: {this.props.position}</p>
            </div>
        );
    }
} 

export default JimmyButler; 