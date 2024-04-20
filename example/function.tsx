import React, { useState } from "react"

type CarProps = {
  branch: string;
}

type CarState = {
  color: string
}

export const Car = (props: CarProps) => {
  const [state, setState] = useState<CarState>({ color: 'red' });
  return <h2>I'am a {props.branch} car and have {state.color} color</h2>
}

export const App = () => {
  return <Car branch="Ford" />
}
