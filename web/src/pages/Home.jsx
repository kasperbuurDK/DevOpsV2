import logo from '../logo.svg';
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import {Link, useNavigate} from "react-router-dom";

const Home = () => {

    let navigate = useNavigate();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <Link to={"about/"}>Go to about</Link>

                <Grid container spacing={2}>
                    <Grid xs={12} md={12}>
                        <Button variant="text" onClick={() => navigate('about')}>To About</Button>
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

export default Home;