import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export function Singup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const navegite = useNavigate();

    const handlesing = () => {
        navegite("/");
    };

    useEffect(() => {
        document.title = "Sing Up";
    }, []);

    const handlesingup = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        if (password !== repassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const userData = {
            email,
            password,
        };

        try {
            const response = await fetch("http://localhost:9090/api/v1//customers/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                navegite("/");
            } else {
                console.error("Error al registrar", response.status);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    return (
        <div className="container">
            <div className="heading">Sing Up</div>
            <div action= "" className="form">
                <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}></input> 
                <input required="" className="input" type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input required="" className="input" type="password" name="re-password" id="re-password" placeholder="Confirm Password" value={repassword} onChange={(e) => setRepassword(e.target.value)}></input>
                        <input className="login-button" type="submit" value="Sing Up" onClick={handlesingup}></input>
                    <span className="forgot-password" onClick={handlesing}><a href="" onClick={ (e) => e.preventDefault()}>Already have an account? Sing In</a></span>
            </div>
        </div>
    );
}

export default Singup;