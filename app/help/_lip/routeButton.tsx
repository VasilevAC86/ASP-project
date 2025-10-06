'use client'

import { useRouter } from "next/navigation"

interface RouteButtonProps {
    children? : React.ReactNode
}

export default function RouteButton(props: RouteButtonProps) {
    const router = useRouter();
    const handClick = () => {
        router.push("/help/1")
    }
    return (
        <button className="bg-blue-600 text-white hover:bg-blue-700 border-trasparent px-4 py-2 text-base h-10" onClick={handClick}>
        {props.children}
        </button>
    )
}