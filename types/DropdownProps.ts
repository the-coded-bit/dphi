import React from "react"

export default interface DropdownProps {
    value: string,
    options?: Options[],
    onChange: React.ChangeEventHandler,
    style?: React.CSSProperties
}

export interface Options {
    label: string,
    value: string
}