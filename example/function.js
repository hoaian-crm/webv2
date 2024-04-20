import React, { useState } from "react"

export const Car = (props) => {
  const [state, setState] = useState();
  return <h2>I'am a {props.branch} car and have {state.color} color</h2>
}

export const App = () => {
  return <Car branch="Ford" />
}
