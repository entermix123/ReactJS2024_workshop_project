import requester from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/games';

const buldUrl = (gameId) => `${BASE_URL}/${gameId}/comments`;

const create = async (gameId, username, text) => await requester.post(buldUrl(gameId), { username, text });


const getAll = async (gameId) => { 
    const result = await requester.get(buldUrl(gameId));
    
    const comments = Object.values(result);

    return comments;
}

export default {        // export default to make import in other components more easaly
    create,
    getAll,
}