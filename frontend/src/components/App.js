import React from "react";
import {createRoot} from "react-dom/client";
import Homepage from "./Homepage";
import LeetcodePage from "./LeetcodePage";
import { BrowserRouter as Router, Route, Link, Redirect, Routes} from "react-router-dom"; 

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };

function App(){
    return(
    <Router>
        <ul>
            <li><Link to = '' style={linkStyle}> Home </Link></li>
            <li><Link to = '/Leetcode'  style={linkStyle}> LeetCode </Link></li>
        </ul>
        <Routes>
            <Route path='' element = {<Homepage/>}/>
            <Route path='/Leetcode' element={<LeetcodePage/>}/>
        </Routes>
    </Router>
        
    );
}

export default App;
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);