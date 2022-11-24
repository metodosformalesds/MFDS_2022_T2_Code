import React, { useState, useEffect, Component } from 'react'
import {GoogleLogin} from "react-google-login"
//Id generado por las credenciales de la api de google
const clientId="795948132843-dcfvnj4f58c0jisogn9qfqnsg20hat0f.apps.googleusercontent.com"

function Login({ }) {
    const onSuccess=(res)=>{
        console.log("Login succes",res.profileObj);
      }
      const onFailure=(res)=>{
        console.log("Login failed", res);
      }

      //Recabae los datos para el login se usa el componente de google

    return (
        <div id="signInButton"> 
        <GoogleLogin
            clientId={clientId}
            buttonText="INICIAR SESIÓN"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
        />
        </div>
    )
}

export default Login