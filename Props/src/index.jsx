import React from "react"
import ReactDOM from "react-dom"

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="lorem_picsum_img" />
      <p>{props.text}</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <Card
      name="Card 1"
      img="https://picsum.photos/200/300"
      text="Lorem picsum photo 1"
    />
    <Card
      name="Card 2"
      img="https://picsum.photos/200"
      text="Lorem picsum photo 2"
    />
    <Card
      name="Card 3"
      img="https://picsum.photos/300"
      text="Lorem picsum photo 3"
    />
  </div>,
  document.getElementById("root")
)

