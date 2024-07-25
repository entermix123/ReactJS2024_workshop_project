import { useContext } from "react";
import { login } from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContext";


export const useLogin = () => {

    // Ctrl + i show available props
    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        
        changeAuthState(result);                        // update the auth state in the context using result
    }

    return loginHandler;
}