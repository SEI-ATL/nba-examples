// Player
import JamesHarden from '../players/JamesHarden';

function HoustonRockets() {
    const james = {
        team: 'Houston Rockets',
        number: 13,
        position: 'Point Guard'
    }
    return (
        <>
            <h2>Houston Rockets</h2>
            <JamesHarden position={james.position} number={james.number} team={james.team} />
        </>
    );
}

export default HoustonRockets;
