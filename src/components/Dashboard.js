import React from 'react';
import '../App.css';
import videoBg from '../assets/videoBg.mp4'
import { useState } from 'react';
import {Navbar} from "./Navbar/Navbar";
import BarChart from './BarChart';
import { playlist_followers } from './Data'
import { shadows } from '@mui/system';
import { track_popularity } from "./Data";
import Grid from '@mui/material/Grid'; // Grid version 1
import { Container } from '@mui/system';
import { Box } from '@material-ui/system';

function Dashboard(){
  const [UserData] = useState({
    labels:playlist_followers.map((data)=> data.name),
    datasets: [{
      label: "Followers",
      data: playlist_followers.map((data) => data.followers),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "white",
      borderWidth: 1,
    },
  ],
  });
  return(
    
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={6} md = {5} m = {3} style={{  backgroundColor: '#ecf0f1' }} className = 'box-shadow-md'>
            <BarChart chartData={UserData} />
            </Grid>
        </Grid>
        
        


   
    
  )
}

export default Dashboard;