import * as request from './requester'

const BASE_URL = 'http://localhost:3030/jsonstore/games'

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const games = Object.values(result);    // remove ID from the result and return only dames objects
    return games;
}

// add route for 'GET' specific game data
export const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`)

// make object and export it for mass use in other components
const gamesAPI = {
    getOne,
    getAll,
}

export default gamesAPI;