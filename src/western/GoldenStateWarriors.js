// Player
import StephenCurry from '../players/StephenCurry';

function GoldenStateWarriors() {
    const steph = {
        team: 'Golden State Warriors',
        number: 30,
        position: 'Point Guard'
    }
    return (
        <>
            <h2>Golden State Warriors</h2>
            <StephenCurry position={steph.position} number={steph.number} team={steph.team} />
        </>
    );
}

export default GoldenStateWarriors;
