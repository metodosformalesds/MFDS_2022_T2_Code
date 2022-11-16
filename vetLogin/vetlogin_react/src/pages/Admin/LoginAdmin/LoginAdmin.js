import React from "react";
import{LoginForm} from "../../../components/Admin"
import "./LoginAdmin.scss";

export  function LoginAdmin() {
  return (
    <div className="login-admin"  >
      <div className="login-admin__content">
        <h1>Iniciar sesion</h1>
        <h2>Ingresa tu correo y contraseña</h2>
        <h3>.</h3>
        <LoginForm/>
        <h4>¿No tienes cuenta?  Registrate!</h4>
        <div className="circle">
        </div>
        <div className="circle2">
        </div>
        <div className="circle3">
        </div>
      </div>
    </div>
  );
}
