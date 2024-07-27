import requester from "./requester"

const BASE_URL = 'http://localhost:3030/data/comments';

const create = (gameId, text) => requester.post(BASE_URL, { gameId, text });

const getAll = (gameId) =>  {
 
    const params = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `author=_ownerId:users`,   // add realtion to fetch comment's author name
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);
}

export default {        // export default to make import in other components more easaly
    create,
    getAll,
}