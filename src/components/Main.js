import React from 'react';
import '../App.css';
import videoBg from '../assets/videoBg.mp4'
import { useState } from 'react';
import {Navbar} from "./Navbar/Navbar";
import BarChart from './BarChart';
import { playlist_followers } from './Data'
import Dashboard  from './Dashboard';
import { shadows } from '@mui/system';
import { track_popularity } from "./Data";
import Grid from '@mui/material/Grid'; // Grid version 1
import { Container } from '@mui/system';
import { Box } from '@material-ui/system';
import {Link as Scroll} from 'react-scroll'
import {AppBar,IconButton} from "@material-ui/core";

function Main(){
  


  return(
    
    <div className='main'>
        <div className="overlay"></div>
        
        <video src={videoBg} autoPlay loop muted />
        <Navbar></Navbar>
        
        <Dashboard></Dashboard>
        <div className="content">
          <Scroll to = "place-to-visit" smooth={true}>
          <IconButton style={{ color: "green" }}>Welcome to Spotify Visualisation</IconButton>
          <h3 style={{ color: "white", fontFamily: "Nunito", textAlign:"center" }}>by Vivek Velivela</h3>
          </Scroll>

        </div>
    </div>
    
  )
}

export default Main;