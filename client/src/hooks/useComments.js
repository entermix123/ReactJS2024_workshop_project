import { useEffect, useState } from 'react';
import commentAPI from '../api/comments-api';

export function useCreateComment() {
    const commentCreateHandler = (gameId, comment) => commentAPI.create(gameId, comment);

    return commentCreateHandler;
}

export function useGetAllComments(gameId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentAPI.getAll(gameId)
            
            setComments(result);
        })();
    }, [gameId]);

    return [comments, setComments];
}