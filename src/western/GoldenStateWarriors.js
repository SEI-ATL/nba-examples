// Player
import StephenCurry from '../players/StephenCurry';

function GoldenStateWarriors() {
    const steph = {
        team: 'Golden State Warriors',
        number: 30,
        postiion: 'Point Guard'
    }
    return (
        <>
            <h2>Golden State Warriors</h2>
            <StephenCurry position={steph.postiion} number={steph.number} team={steph.team} />
        </>
    );
}

export default GoldenStateWarriors;