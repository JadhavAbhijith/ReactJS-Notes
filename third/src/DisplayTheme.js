import React, {useContext} from "react";
import ThemeContext from "./ThemeContext";

function DisplayTheme()
{
    const currentTheme = useContext(ThemeContext); //Get theme value

    return <h3>The Theme inside component is: {currentTheme}</h3>
}

export default DisplayTheme;