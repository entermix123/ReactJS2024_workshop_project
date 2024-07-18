import * as requeste from './requester'

const BASE_URL = 'http://localhost:3030/jsonstore/games'

export const getAll = async () => {
    const result = await requeste.get(BASE_URL);

    const games = Object.values(result);    // remove ID from the result and return only dames objects
    return games;
}