import React, {useState} from 'react';
import ThemeContext from './ThemeContext';
import DisplayTheme from './DisplayTheme';
import './App.css';
import CustomCounter from './CustomCounter';
import useWindowWidth from './useWindowWidth';
import SimpleForm from './SimpleForm';
import GreetComp from './GreetComp';


function App() {

  //const [theme, setTheme] = useState("light");

  const width = useWindowWidth();

  return (
    //Provide 'theme' value to all child component

    // <ThemeContext.Provider value = {theme}>

    // <div style={{
    //   backgroundColor: theme === "light" ? "#fff" : "#333",
    //   color: theme === "light" ? "#000" : "#fff",
    //   height: "100vh",
    //   textAlign: "center",
    //   paddingTop: "50px"
    // }}>

    //   <h2>Current Theme: {theme}</h2>
    //   <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
    

    // <DisplayTheme/>

    // </div>

    // </ThemeContext.Provider>

    
    
    //<CustomCounter/>



    <div>
      {/* <h1>
        Current Window Width: {width}px
      </h1>
      {width > 768 ? <p>You're on a large screen</p> : <p>You are on a small screen</p>} */}
    

    <SimpleForm/>

    <GreetComp/>

  </div>
  );
}

export default App;
