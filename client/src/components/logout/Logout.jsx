import { Navigate } from 'react-router-dom'
import { useLogout } from '../../hooks/useAuth'

export default function Logout() {
    const logout = useLogout();
    logout();                  // call the logout function

    return <Navigate to="/" />              // redirect to home page
}