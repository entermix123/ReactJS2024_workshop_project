import { useGetAllGames } from '../../hooks/useGames';
import GameListItem from './game-list-item/GameListItem';

export default function GameList() {
    const [ games ] = useGetAllGames();     // imported from useGames.js
    
    return (
        <section id="catalog-page">
        <h1>All Games</h1>
    
        {/* iterate and visualize all games with theyr keys and game props - spread game props: {...game} */}
        {/* add terrar condition when no games are available */}
        {games.length > 0
            ? games.map(game => <GameListItem key={game._id} {...game} /> )
            : <h3 className="no-articles">No games yet</h3>
        }                 
    </section>
    );
}