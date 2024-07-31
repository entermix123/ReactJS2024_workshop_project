import { useEffect, useState } from 'react';
import gamesAPI from '../api/games-api';

export function useGetAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        
        // // example 1 for syntax for useEffect with IIFE (Immediately Invoked Function Expression)
        (async () => {
            const result = await gamesAPI.getAll();

            setGames(result);
        })();

        // // example 2 for syntax for useEffect with internal asynchronous function that must be called
        // const neshto = async () => {
        //     const result = await gamesAPI.getAll()
        //     setGames(result)
        // }
        // neshto();

        // example 3 - use short promise syntax
        // gamesAPI.getAll().then(result => setGames(result));

    }, []);

    return [games, setGames];
}

export function useGetOneGames(gameId) {
    const [ game, setGame ] = useState({    // set state for current game as empty object
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });           

    useEffect(() => {                               // set useEffect to change current game content
        (async () => {                              // set async function to make GET request for specific game
            const result = await gamesAPI.getOne(gameId); // call getOne function from games-api.js
            setGame(result);                        // set game state as result game details
        })();
    }, [gameId]);

    return [
        game,
        setGame,
    ];
}

export function useCreateGame() {
    const gameCreateHandler = (gameData) => gamesAPI.create(gameData);

    return gameCreateHandler;
}
