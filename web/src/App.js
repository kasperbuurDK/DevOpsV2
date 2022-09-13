import './App.css';
import {HashRouter, Route, Routes, useParams} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import React from "react";


function App() {
    return (
        <HashRouter>
        <Routes>
            <Route path="/" element ={ <Home  />}/>
            <Route path='/about' element={<About /> } />
            <Route path='/login' element={<Login/>}/>
            <Route path="*" element={<h1>404!</h1>}/>
            <Route path={"/ComponentA/:text"} component={ComponentA} />
        </Routes>
        </HashRouter>


    );
}



const ComponentA = ()=>{
    let {text} = useParams();
    return <div><h1>About {text}</h1>
    </div>
}

export default App;
