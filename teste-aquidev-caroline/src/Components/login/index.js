import './style.css';
import loginIMG from './assets/login.jpg';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault();

        

        try {

            const response = await authenticateUser(email, password);

            if (response.success) {
                
                navigate("/dashboard");
            } else {
                
                console.error("Login failed: " + response.error);
            }
        } catch (error) {
            console.error("Error during login: " + error);
        }
    };

   
    const authenticateUser = async (email, password) => {
        
        if (email === "user@example.com" && password === "password") {
            return { success: true };
        } else {
            return { success: false, error: "Invalid credentials" };
        }
    };

    return (
        <div className="container">
            <div className="wrap-login">
                <form className="login-form" onSubmit={handleLogin}>
                    <span className="login-form-title">Welcome to Beer!</span>
                    <span className="login-form-title"><img src={loginIMG} alt='Imagem de storyset no Freepik' /></span>
                    <div className="wrap-input">
                        <input
                            className={email !== "" ? "has-val input" : "input"}
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <span className="focus-input" data-placeholder="Email" />
                    </div>
                    <div className="wrap-input">
                        <input
                            className={password !== "" ? "has-val input" : "input"}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className="focus-input" data-placeholder="Password" />
                    </div>
                    <div className="btn">
                        <button className="btn" type="submit">Login</button>
                    </div>
                    <div className="text-center">
                        <span className="text-center">Don't have an account? <a className="txt" href="#"> Sign up</a></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
