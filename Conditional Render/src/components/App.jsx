import React from "react"
import Login from "./Login"
import Register from "./Register"

// Check if user is registered
let userIsRegistered = true

function App() {
  return (
    <div className="container">

      {/* Ternary operator usage */}
      {userIsRegistered ? <Login /> : <Register />}
      
      {/* AND $$ operator usage */}
      {!userIsRegistered && <Login />}
      {userIsRegistered && <Register />}
      
    </div>
  )
}

export default App
