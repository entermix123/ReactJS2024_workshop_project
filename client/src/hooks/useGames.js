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

