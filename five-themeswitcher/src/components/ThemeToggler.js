import React, { useContext } from "react";
import ThemeContext from "../context/ThemContext";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)
    return (
        <div
            onClick={() => {
                setThemeMode(themeMode === "light" ? "dark" : "light");
            }}
        >
            <span >{themeMode === "light" ? "Turn Lights off" : "Turn Light on"}</span>

        </div>
    )
}

export default ThemeToggler;