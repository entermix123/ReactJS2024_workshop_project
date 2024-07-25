/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { login, register } from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContext";


export const useLogin = () => {

    // Ctrl + i show available props
    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        const { password: _, ...authData } = result;        // remove password from response data

        changeAuthState(authData);                          // update the auth state in the context using result

        return result;
    }

    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const result = await register(email, password);
        const { password: _, ...authData } = result;        // remove password from response data

        changeAuthState(authData);                          // update the auth state in the context using result

        return result;
    };

    return registerHandler;
};