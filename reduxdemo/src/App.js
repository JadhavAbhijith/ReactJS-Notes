import './App.css';
import { useSelector, useDispatch} from "react-redux";
import React from 'react';
import { toggleTheme } from './store';

function App() {
  // const count = useSelector((state) => state.count);
  // const dispatch = useDispatch();


  // return (
  //   <div style = {{textAlign: "center", marginTop: "50px"}}>
  //     <h2>Redux Counter Example</h2>
  //     <h3>Count: {count}</h3>
  //     <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
  //     <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
  //   </div>
  // );








  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const style = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#000"
  };


  return(
    <div style={style}>
      <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );



}

export default App;
