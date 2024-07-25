import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = { email: "", password: "", 'confirm-password': "" };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {

        // make simple validation for password match
        if (values.password !== values['confirm-password']) {  
            return setError('Passwords missmatch');     // if passwords do not match show error
        }
        try {
            await register(values.email, values.password); // try to register with provided email and password

            navigate("/"); // navigate after successful register
        } catch (err) {
            setError(err.message); // if error occurred show error messageError(err.message);          // if error occurred show error message
            console.error(err.message);
        }
    };

    // useForm hook to manage form state and handle
    const { values, changeHandler, submitHandler } = useForm( initialValues, registerHandler );

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email" // required
                        value={values.email} // required
                        onChange={changeHandler} // required
                        placeholder="maria@email.com"
                        autoComplete="email" // added for better security
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password} // required
                        onChange={changeHandler} // required
                        id="register-password"
                        autoComplete="new-password" // added for better security
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        value={values['confirm-password']} // required
                        onChange={changeHandler} // required
                        id="confirm-password"
                        autoComplete="new-password"
                    />

                    {/* show error if passwords do not match or other error*/}
                    {error && (
                    <p>
                    <span style={{fontSize:'18px', color: 'red'}}>{error}</span>
                    </p>
                    )};

                    <input
                        className="btn submit"
                        type="submit"
                        value="Register"
                    />

                    <p className="field">
                        <span>
                            If you already have profile click{" "}
                            <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
