import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

/* eslint-disable react/prop-types */
export default function PrivateGuard() {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated
        ? <Outlet />                    // permission granted component
        : <Navigate to="/login" />;
}