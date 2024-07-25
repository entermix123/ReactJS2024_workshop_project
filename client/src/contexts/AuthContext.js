import { createContext } from "react";

//  initial state and types of props are made for help when AuthContext is imported
export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,     // '!!' is used to convert falsy values to false and truthy values to true
    changeAuthState: (authState = {}) => null,  // placeholder function for updating auth state
});