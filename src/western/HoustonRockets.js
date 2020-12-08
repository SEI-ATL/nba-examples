// Player
import JamesHarden from '../players/JamesHarden';

function HoustonRockets() {
    const james = {
        team: 'Houston Rockets',
        number: 13,
        postiion: 'Point Guard'
    }
    return (
        <>
            <h2>Houston Rockets</h2>
            <JamesHarden position={james.postiion} number={james.number} team={james.team} />
        </>
    );
}

export default HoustonRockets;