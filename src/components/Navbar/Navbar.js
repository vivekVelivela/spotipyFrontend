import React  from 'react';
import {  Toolbar, Typography } from "@material-ui/core";
import {AppBar,IconButton} from "@material-ui/core";


export const Navbar = () => {
    return (
        
        <AppBar position = 'dynamic' color='transparent' elevation={0} >
            <Toolbar>
                <Typography  style={{fontFamily: 'Nunito', display: 'inline-block', textAlign:'center'}}>
                    SPOTIFY VISUALISATION
                </Typography>
            </Toolbar>
        </AppBar>
        
    )
}