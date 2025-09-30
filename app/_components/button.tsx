import React from "react"

interface ButtonProps{
    children? : React.ReactNode
}

export default function Button(props: ButtonProps){
    return (
        <button className="bg-blue-600 text-white hover:bg-blue-700 border-trasparent px-4 py-2 text-base h-10">{props.children}</button>
    )
}