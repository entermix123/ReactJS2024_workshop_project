import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

/* eslint-disable react/prop-types */
export default function RouteGuard({ children }) {

    const {isAuthenticated} = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return (
        <>
        { children }
        </>
    );
}