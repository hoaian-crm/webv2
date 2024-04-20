import React, { ReactElement } from "react"

export type EditableProps = {
  children: ReactElement | ReactElement[],
  input: ReactElement | ReactElement[],
  editing: boolean
}

export const Editable: React.FC<EditableProps> = (props) => {
  if (props.editing) return <>
    {props.input}
  </>;
  return <>
    {props.children}
  </>;
}
