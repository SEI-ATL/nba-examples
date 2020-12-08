// Player
import LebronJames from '../players/LebronJames';

function LosAngelesLakers() {
    const lebron = {
        team: 'Los Angeles Lakers',
        number: 23,
        postiion: 'Small Forward'
    }
    return (
        <>
            <h2>Los Angeles Lakers</h2>
            <LebronJames position={lebron.postiion} number={lebron.number} team={lebron.team} />
        </>
    );
}

export default LosAngelesLakers;