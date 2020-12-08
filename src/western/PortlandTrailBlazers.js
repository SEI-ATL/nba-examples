import DamianLillard from '../players/DamianLillard';

function PortlandTrailBlazers() {
    let dame = {
        team: 'Portland Trail Blazers',
        number: 0,
        position: 'Point Guard'
    }
    return (
        <>
            <h2>Portland Trail Blazers</h2>
            <DamianLillard position={dame.position} number={dame.number} team={dame.team}/>
        </>
    );
}

export default PortlandTrailBlazers;