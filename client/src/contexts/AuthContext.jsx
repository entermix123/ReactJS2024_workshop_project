/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

//  initial state and types of props are made for help when AuthContext is imported
export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: "",
    isAuthenticated: false,     // '!!' is used to convert falsy values to false and truthy values to true
    changeAuthState: (authState = {}) => null,  // placeholder function for updating auth state
});

export function AuthContextProvider(props) {
    // create a state to store the user's authentication state
    const [authState, setAuthState] = useState({});

    // create a function to change the authentication state
    const changeAuthState = (state) => {
        // TODO quick solution for token persist in local storage, fix by impelementing persisted outstate
        localStorage.setItem('accessToken', state.accessToken);

        // TODO validate state
        setAuthState(state);
    };

    // create a context object with the authentication state and the changeAuthState function
    const contextData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,     // '!!' is used to convert falsy values to false and truthy values to true
        changeAuthState,
    }

    return (
        <AuthContext.Provider value={contextData} >
            {props.children}
        </AuthContext.Provider>
    );
}


// small optimization for performance
// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
    const authData = useContext(AuthContext);

    return authData;
}