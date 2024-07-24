import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";

export default function Login() {
    // import the useLogin hook from the auth hook file
    const login = useLogin();

    const navigate = useNavigate();

    // set default values of email and password and use them with useLogin as a function
    const { values, changeHandler, submitHandler } = useForm(
        { email: "", password: "" },
        async ({ email, password }) => {
            try {
                await login(email, password);
                navigate("/");
            } catch (err) {
                console.log(err.message);
            }
        }
    );

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
                        name="email" // required
                        value={values.email} // required
                        onChange={changeHandler} // required
                        placeholder="Sokka@gmail.com"
                        autoComplete="email"
                    />

                    <label htmlFor="login-password">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password" // required
                        value={values.password} // required
                        onChange={changeHandler} // required
                        autoComplete="current-password"
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
