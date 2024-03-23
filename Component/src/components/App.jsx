import React from "react"
import Heading from "./Heading"
import List from "./List"
import * as Pie from "./PiValues"

function App() {
  return (
    <div>
      <Heading />
      <List />
      <li>{Pie.default}</li>
      <li>{Pie.doublePi}</li>
      <li>{Pie.triplePi()}</li>
    </div>
  )
}

export default App
