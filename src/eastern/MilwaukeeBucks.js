// Imports
import React, { Component } from 'react';

// Player
import GiannisAntetokounmpo from '../players/GiannisAntetokounmpo';

// Class Based Component
class MilwaukeeBucks extends Component {
    render() {
        const giannis = {
            team: 'Milwaukee Bucks',
            number: 34,
            position: 'Small Forward'
        }
        return (
            <div>
                <h2>Milwaukee Bucks</h2>
                <GiannisAntetokounmpo position={giannis.position} number={giannis.number} team={giannis.team}/>
            </div>
        );
    }
} 

export default MilwaukeeBucks; 