import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Login";
    }, []);

    const handlelogin = () => {
        navigate("/singup");
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        const userData = {
            email,
            password,
        };

        try {
            const response = await fetch("http://localhost:9090/api/v1/customers/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                // Maneja la respuesta si es exitosa, por ejemplo, redirigiendo a otra página
                navigate("/home");
            } else {
                // Maneja errores, como mostrar un mensaje
                console.error("Error al iniciar sesión", response.status);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    return (
        <div className="container">
            <div className="heading">Sing In</div>
            <div action= "" className="form">
                <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}></input> 
                <input required="" className="input" type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}>
                </input>
                        <span className="forgot-password"><a href="">Forgot Password ?</a></span>
                        <input className="login-button" type="submit" value="Sing In" onClick={handleSubmit}></input>
                        <span className="forgot-password" onClick={handlelogin}><a href="" onClick={ (e) => e.preventDefault()}>{"You don't have an account? Sing Up"}</a></span>
            </div>
        </div>
    );
}

export default Login;
