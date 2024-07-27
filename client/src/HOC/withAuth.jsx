import { useAuthContext } from "../contexts/AuthContext";

export default function withAuth(Component) {
    const ComponentsWrapper = (props) => {
        // access context data from the AuthContext
        const authContext = useAuthContext();

        // return the modified component with the props and context passed down
        return  <Component {...props} auth={authContext}/>;
    };

    // return the modified component
    return ComponentsWrapper;
}