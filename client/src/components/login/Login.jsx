import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";

// define initial values for form fields
const initialValues = { email: "", password: "" }

export default function Login() {
    // import the useLogin hook from the auth hook file
    const login = useLogin();

    // import the useNavigate hook from react-router-dom to navigate to the home page
    const navigate = useNavigate(); 

    // create a login handler function
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);   // try to login with provided email and password
            navigate("/");                  // navigate after successful login
        } catch (err) {
            console.error(err.message);
        }
    }
    // use the useForm hook to manage form state and handle form submission
    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"                    // required
                        value={values.email}            // required
                        onChange={changeHandler}        // required
                        placeholder="Sokka@gmail.com"
                        autoComplete="email"            // added for better security
                    />

                    <label htmlFor="login-password">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"                 // required
                        value={values.password}         // required
                        onChange={changeHandler}        // required
                        autoComplete="current-password" // added for better security
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>
                            If you dont have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
