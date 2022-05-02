import React from "react"
import Navbar from "../src/components/Nav"
import Main from "../src/components/Main"
import "../src/styles.css"

export default function App() {

    const [darkMode, setDarkMode] = React.useState("true")

    function toggleDarkMode()   {
    setDarkMode(prevDarkMode => !prevDarkMode)
}

    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}