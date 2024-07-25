import { createContext } from "react";

// Create a context for authentication state with initial state and types of props
export const AuthContext = createContext({
    email: '',
    accessToken: '',
    isAuthenticated: false,     // '!!' is used to convert falsy values to false and truthy values to true
    changeAuthState: (authState = {}) => null,  // placeholder function for updating auth state
});