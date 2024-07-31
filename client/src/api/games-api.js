import requester from './requester'

const BASE_URL = 'http://localhost:3030/data/games'

export const getAll = async () => {
    const result = await requester.get(BASE_URL);

    const games = Object.values(result);   
    return games;
}

export const getLatest = async () => {
    const result = await requester.get(`${BASE_URL}?sortBy=_createdOn%20desc&pageSize=3`)

    const games = Object.values(result);   
    return games;
}

// add route for 'GET' specific game data
export const getOne = (gameId) => requester.get(`${BASE_URL}/${gameId}`);

export const create = (gameData) => requester.post(`${BASE_URL}`, gameData);

export const remove = (gameId) => requester.del(`${BASE_URL}/${gameId}`);

export const update = (gameId, gameData) => requester.put(`${BASE_URL}/${gameId}`, gameData);

// make object and export it for mass use in other components
const gamesAPI = {
    getOne,
    getAll,
    getLatest,
    create,
    update,
    remove,
}

export default gamesAPI;