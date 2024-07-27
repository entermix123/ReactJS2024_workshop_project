import { useEffect, useReducer } from "react";
import commentAPI from "../api/comments-api";

export function useCreateComment() {
    const commentCreateHandler = (gameId, comment) =>
        commentAPI.create(gameId, comment);

    return commentCreateHandler;
}

function commentsReducer(state, action) {
    
    switch (action.type) {
        case "GET_ALL":                         // if type actions is specific (GET_ALL)
            return action.payload.slice();      // set shallow copy of the array if the state (result) edited
        case 'ADD_COMMENT':                     // if type actions is specific (ADD_COMMENT)
            return [...state, action.payload];  // add new comment to the state array

        default:                            
            return state;                       // default return the current state
    }       
}

export function useGetAllComments(gameId) {
    const [comments, dispatch] = useReducer(commentsReducer, []); // change to useReducer that receive a reducer function and initial state

    useEffect(() => {
        (async () => {
            const result = await commentAPI.getAll(gameId);

            dispatch({ type: "GET_ALL", payload: result });         // set dispatch function
        })();
    }, [gameId]);

    return [comments, dispatch];
}