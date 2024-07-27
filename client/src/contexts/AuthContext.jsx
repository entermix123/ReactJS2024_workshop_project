/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePersistedSate";

//  initial state and types of props are made for help when AuthContext is imported
export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,     // '!!' is used to convert falsy values to false and truthy values to true
    changeAuthState: (authState = {}) => null,  // placeholder function for updating auth state
    logout: () => null,
});

export function AuthContextProvider(props) {
    // create a state to store the user's authentication state
    const [authState, setAuthState] = usePersistedState('auth', {});    // key='auth' and initialValues={}

    // create a function to change the authentication state
    const changeAuthState = (state) => {
        // TODO validate state
        setAuthState(state);
    };

    // create logout function and clear the user's authentication state
    const logout = () => {
        setAuthState(null);
    }

    // create a context object with the authentication state and the changeAuthState function
    const contextData = {
        userId: authState?._id,
        email: authState?.email,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,     // '!!' is used to convert falsy values to false and truthy values to true
        changeAuthState,
        logout,
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
    // console.log(authData)
    return authData;
}