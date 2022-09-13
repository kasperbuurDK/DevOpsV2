import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

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





      </header>
    </div>
  );
}

export default App;
