import React  from 'react';
import {  Toolbar, Typography } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
import {AppBar,IconButton} from "@material-ui/core";
// import App from "../../App";
// import { mergeClasses } from '@material-ui/styles';

export const Navbar = () => {
    return (
        <React.Fragment>
        <AppBar position = 'static' style={{ background: '#063970'}}>
            <Toolbar>
                <IconButton size = 'large' edge = 'start' color="inherit" aria-label='logo' >
                    {/* <CatchingPokemonIcon/> */}
                </IconButton>
                <Typography variant='h6' component='div' sx = {{flexGrow: 1}}>
                    SPOTIPY VISUALISATION
                </Typography>
            </Toolbar>
        </AppBar>
        </React.Fragment>
    )
}