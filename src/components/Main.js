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

function Main(){
  // const [UserData] = useState({
  //   labels:playlist_followers.map((data)=> data.name),
  //   datasets: [{
  //     label: "Followers",
  //     data: playlist_followers.map((data) => data.followers),
  //     backgroundColor: [
  //       "rgba(75,192,192,1)",
  //       "#ecf0f1",
  //       "#50AF95",
  //       "#f3ba2f",
  //       "#2a71d0",
  //     ],
  //     borderColor: "white",
  //     borderWidth: 1,
  //   },
  // ],
  // }
  // );


  return(
    
    <div className='main'>
        <div className="overlay"></div>
        
        <video src={videoBg} autoPlay loop muted />
        <Navbar></Navbar>
        <Dashboard></Dashboard>
        <div className="content">
          <h1 style={{ color: "green" }}>Welcome to Spotify Visualisation</h1>
          <h3 style={{ color: "white" }}>by Vivek Velivela</h3>
          <h4 style={{ color: "green" }}>Please scroll down</h4>
        

        </div>
    </div>
    
  )
}

export default Main;