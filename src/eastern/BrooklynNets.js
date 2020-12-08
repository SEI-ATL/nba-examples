// Imports
import React, { Component } from 'react';

// Player
import KevinDurant from '../players/KevinDurant';

// Class Based Component
class BrooklynNets extends Component {
    render() {
        const kevin = {
            team: 'Brooklyn Nets',
            number:7,
            postiion: 'Small Forward'
        }
        return (
            <div>
                <h2>Brooklyn Nets</h2>
                <KevinDurant position={kevin.postiion} number={kevin.number} team={kevin.team} />
            </div>
        );
    }
} 

export default BrooklynNets; 