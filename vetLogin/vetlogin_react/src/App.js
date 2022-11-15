import React from 'react'
/*import "./App.scss"*/
import { ClientLayout } from './layouts'
import {Navigation} from "./routes"
import {LoginAdmin} from "./pages/Admin"

export default function App() {
  return (
   <div className="App">
    <Navigation/>
      <h1> Hola soy vianey</h1>
    
   </div>
  );
}
