import React from "react"
import ReactDOM from "react-dom"

const greetingStart = "Heyyo"
const greetingEnd = "World!"
const randomImg  = "https://picsum.photos/200"

const customStyle = {
  display: "inline-block",
  color: "blue",
  fontSize: "30px",
  border: "1px solid blue"
}
customStyle.color = "green"

ReactDOM.render(
  <div>
    <h1 className="bgcBlack" style={customStyle}>{`${greetingStart} ${greetingEnd}`}</h1>
    <p>This is fun ^~^</p>
    <img src={randomImg} />
  </div>,
  document.getElementById("root")
)

