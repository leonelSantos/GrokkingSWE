import React from "react";
import {createRoot} from "react-dom/client";
import Homepage from "./Homepage";
import LeetcodePage from "./LeetcodePage";
import { BrowserRouter as Router, Route, Link, Redirect, Routes} from "react-router-dom"; 

function App(){
    return(
    <Router>
        <nav>
            <Link to = ''> Home </Link>
            <Link to = '/Leetcode'> LeetCode </Link>
        </nav>
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