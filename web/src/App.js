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

        <Grid container spacing={2}>
          <Grid xs={12} md={12}>
            <Button variant="text">Text</Button>
          </Grid>
          <Grid xs={12} md={6}>
            <Button variant="contained">Contained</Button>
          </Grid>
          <Grid xs={12} md={6}>
            <Button variant="outlined"> Outlined </Button>
          </Grid>
          <Grid xs={12} md={3}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Grid>
          <Grid xs={12} md={3}>
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </Grid>
          <Grid xs={12} md={3}>
            <TextField id="standard-basic" label="Standard" variant="standard" />
          </Grid>
          <Grid xs={12} md={3}>
            <TextField id="standard-basic" label="Standard2" variant="standard" />
          </Grid>
        </Grid>

const ComponentA = ()=>{
    let {text} = useParams();
    return <div><h1>About {text}</h1>
    </div>
}

export default App;
