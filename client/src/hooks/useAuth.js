/* eslint-disable no-unused-vars */
import { login, register, logout } from "../api/auth-api";
import { useAuthContext } from "../contexts/AuthContext";


export const useLogin = () => {

    // Ctrl + i show available props
    const {changeAuthState} = useAuthContext();

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);  // remove password from response data  

        changeAuthState(authData);                        // update the auth state in the context using result

        return authData;
    }

    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);   // remove password from response data       

        changeAuthState(authData);                          // update the auth state in the context using result

        return authData;
    };

    return registerHandler;
};

export const useLogout = () => {
    // rename the function in local scope to avoid naming conflict with the context logout function
    const { logout: localLogout } = useAuthContext();

    const logoutHandler = async () => {
        localLogout();                          // update the auth state in the context using result
        
        await logout();                         // remove password from response data       

    };

    return logoutHandler;
};