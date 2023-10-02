import './style.css'
import loginIMG from './assets/login.jpg'
import { useState } from "react"

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container">
            <div className="wrap-login">
                <form className="login-form">

                    <span className="login-form-title">Welcome to Beer!</span>
                    <span className="login-form-title"><img src={loginIMG} alt='Imagem de storyset no Freepik'></img></span>

                    <div className="wrap-input">
                        <input 
                            className={email !== "" ? "has-val input" : "input"}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>
                    <div className="wrap-input">
                        <input 
                            className={password !== "" ? "has-val input" : "input"}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className="focus-input" data-placeholder="Password"></span>
                    </div>
                    <div className="btn">
                        <button className="btn">Login</button>
                    </div>
                    <div className="text-center">
                        <span className="text-center">Don't have an account? <a className="txt" href="#"> Sign up</a></span>
                    </div>

                </form>
            </div>
        </div>
    )

}

export default Login;