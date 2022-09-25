import React from "react"
import airbnb from "../image/airbnb 1.png"

export default function Navbar() {
    return (
       <nav className="nav">
            <img src={airbnb} className="airbnb" alt="airbnb" />
       </nav>
    )
}