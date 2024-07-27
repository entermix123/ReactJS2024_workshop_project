import requester from "./requester"

const BASE_URL = 'http://localhost:3030/data/comments';

const create = (gameId, text) => requester.post(BASE_URL, { gameId, text });

const getAll = (gameId) =>  {
 
    const params = new URLSearchParams({
        Where: `gameId=${gameId}`
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);
}

export default {        // export default to make import in other components more easaly
    create,
    getAll,
}