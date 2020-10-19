import React, { useContext } from "react"
import ThemContext from "../context/ThemContext"

import AppTheme from "../Colors";

const HeroSection = () => {
    const them = useContext(ThemContext)[0];
    const currentTheme = AppTheme[them]

    return (
        <div style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center"
        }}>
            <h1>Context api them toggler</h1>
            <p>Awesome Paragraph</p>
            <button style={{
                backgroundColor: "#26ae60", padding: "10px, 24px", fontSize: "20px", color: "#FFF",
                border: `${currentTheme.border}`
            }}> Just click me</button>
        </div>
    )
}

export default HeroSection;