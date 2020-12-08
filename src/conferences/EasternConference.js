// Imports
import React, { Component } from 'react';

// Teams
import NewYorkKnicks from '../eastern/NewYorkKnicks';
import BostonCeltics from '../eastern/BostonCeltics';
import BrooklynNets from '../eastern/BrooklynNets';
import Philadelphia76ers from '../eastern/Philadelphia76ers';
import TorontoRaptors from '../eastern/TorontoRaptors';
import ChicagoBulls from '../eastern/ChicagoBulls';
import ClevelandCavaliers from '../eastern/ClevelandCavaliers';
import DetroitPistons from '../eastern/DetroitPistons';
import IndianaPacers from '../eastern/IndianaPacers';
import MilwaukeeBucks from '../eastern/MilwaukeeBucks';
import AtlantaHawks from '../eastern/AtlantaHawks';
import CharlotteBobcats from '../eastern/CharlotteBobcats';
import MiamiHeat from '../eastern/MiamiHeat';
import OrlandoMagic from '../eastern/OrlandoMagic';
import WashingtonWizards from '../eastern/WashingtonWizards';

// Class Component
class EasternConference extends Component {
    render() {
        return (
            <div>
                <BostonCeltics /> 
                <BrooklynNets />
                <NewYorkKnicks />
                <Philadelphia76ers />
                <TorontoRaptors />
                <ChicagoBulls />
                <ClevelandCavaliers />
                <DetroitPistons />
                <IndianaPacers />
                <MilwaukeeBucks />
                <AtlantaHawks />
                <CharlotteBobcats />
                <MiamiHeat />
                <OrlandoMagic />
                <WashingtonWizards />
            </div>
        )
    }
    
}

export default EasternConference;