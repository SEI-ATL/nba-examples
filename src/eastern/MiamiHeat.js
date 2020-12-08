// Imports
import React, { Component } from 'react';

// Player 
import JimmyButler from '../players/JimmyButler';

// Class Based Component
class MiamiHeat extends Component {
    render() {
        const jimmy = {
            team: 'Miami Heat',
            number: 22,
            position: 'Small Forward'
        }
        return (
            <div>
                <h2>Miami Heat</h2>
                <JimmyButler position={jimmy.position} team={jimmy.team} number={jimmy.number}/>
            </div>
        );
    }
} 

export default MiamiHeat; 
